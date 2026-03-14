import { getClient } from './supabase.js';

const AUTH_KEY = 'og-profile-auth';

class OGAuth {
    constructor() {
        this.member = null;
        this.listeners = [];
        this._pendingInvite = null;
        this._inviteError = null;
    }

    // ── INIT ──────────────────────────────────────────
    async init() {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const invite = params.get('invite');

        if (token) {
            history.replaceState(null, '', location.pathname + location.hash);
            return this.consumeToken(token);
        }

        if (invite) {
            history.replaceState(null, '', location.pathname + location.hash);
            return this.handleInvite(invite);
        }

        // Check Supabase Auth session (OAuth callback or existing session)
        const sb = getClient();
        try {
            const { data: { session } } = await sb.auth.getSession();
            if (session) {
                const resolved = await this._resolveAuthUser(session.user);
                if (resolved) return true;
            }
        } catch (_) {}

        return this.restoreSession();
    }

    // ── SUPABASE AUTH: EMAIL + PASSWORD ───────────────

    async signInWithEmail(email, password) {
        const sb = getClient();
        const { data, error } = await sb.auth.signInWithPassword({ email, password });
        if (error) return { error: error.message };

        const member = await this._findMemberByAuthId(data.user.id);
        if (!member) return { error: 'No member profile found. Contact admin.' };

        this.member = member;
        this._saveSession(member);
        this._notify();
        return { success: true };
    }

    async signUpWithEmail(name, email, password, telegram) {
        if (!name || !email || !password || !telegram) {
            return { error: 'All fields are required.' };
        }

        const sb = getClient();

        // Create Supabase Auth user
        const { data: authData, error: authError } = await sb.auth.signUp({
            email,
            password,
            options: {
                data: { name, telegram },
                emailRedirectTo: `${location.origin}/playground.html`
            }
        });

        if (authError) return { error: authError.message };

        // Create linked member row
        const { data: member, error: memberError } = await sb
            .from('members')
            .insert({
                name,
                email,
                contact: telegram,
                auth_user_id: authData.user?.id || null,
                role: 'member',
                status: 'active',
                membership_status: 'pending',
            })
            .select()
            .single();

        if (memberError) return { error: memberError.message };

        return { needsConfirmation: true, email };
    }

    // ── SUPABASE AUTH: GOOGLE OAUTH ──────────────────

    async signInWithGoogle() {
        const sb = getClient();
        const { error } = await sb.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/playground.html`
            }
        });
        if (error) return { error: error.message };
        // Browser redirects to Google — no return
    }

    // ── RESOLVE AUTH USER → MEMBER ───────────────────

    async _resolveAuthUser(user) {
        if (!user) return false;

        let member = await this._findMemberByAuthId(user.id);

        if (!member) {
            // First-time OAuth user — auto-create member with pending status
            const sb = getClient();
            const { data: newMember, error } = await sb
                .from('members')
                .insert({
                    name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
                    email: user.email,
                    auth_user_id: user.id,
                    avatar_url: user.user_metadata?.avatar_url || null,
                    role: 'member',
                    status: 'active',
                    membership_status: 'pending',
                })
                .select()
                .single();

            if (error) return false;
            member = newMember;
        }

        this.member = member;
        this._saveSession(member);
        this._notify();
        return true;
    }

    async _findMemberByAuthId(authUserId) {
        const sb = getClient();
        const { data } = await sb
            .from('members')
            .select('*')
            .eq('auth_user_id', authUserId)
            .single();
        return data || null;
    }

    // ── LEGACY: TOKEN LINK (Telegram bot) ────────────

    async consumeToken(token) {
        const sb = getClient();

        const { data: tokenRow, error } = await sb
            .from('link_tokens')
            .select('*')
            .eq('token', token)
            .eq('used', false)
            .single();

        if (error || !tokenRow) return false;

        if (tokenRow.expires_at && new Date(tokenRow.expires_at) < new Date()) return false;

        await sb.from('link_tokens').update({ used: true }).eq('id', tokenRow.id);

        const { data: member } = await sb
            .from('members')
            .select('*')
            .eq('id', tokenRow.member_id)
            .single();

        if (!member) return false;

        this.member = member;
        this._saveSession(member);
        this._notify();
        return true;
    }

    // ── LEGACY: INVITE CODES ─────────────────────────

    async handleInvite(code) {
        const sb = getClient();
        const { data: invite, error } = await sb
            .from('invite_links')
            .select('*')
            .eq('code', code)
            .eq('is_active', true)
            .single();

        if (error || !invite) {
            this._inviteError = 'Invalid invite link.';
            return false;
        }
        if (new Date(invite.expires_at) < new Date()) {
            this._inviteError = 'This invite link has expired.';
            return false;
        }
        if (invite.used_count >= invite.max_uses) {
            this._inviteError = 'This invite link has reached its maximum uses.';
            return false;
        }

        this._pendingInvite = invite;
        return false;
    }

    async registerWithInvite(name, email, password, telegram) {
        if (!name || !email || !password || !telegram) {
            return { error: 'All fields are required.' };
        }

        const sb = getClient();
        const invite = this._pendingInvite;
        if (!invite) return { error: 'No invite.' };

        // Create Supabase Auth user
        const { data: authData, error: authError } = await sb.auth.signUp({
            email,
            password,
            options: {
                data: { name, telegram },
                emailRedirectTo: `${location.origin}/playground.html`
            }
        });

        if (authError) return { error: authError.message };

        // Create member
        const { data: member, error: memberError } = await sb
            .from('members')
            .insert({
                name,
                email,
                contact: telegram,
                auth_user_id: authData.user?.id || null,
                role: 'member',
                status: 'active',
                membership_status: 'pending',
            })
            .select()
            .single();

        if (memberError) return { error: memberError.message };

        // Increment invite used_count
        await sb.from('invite_links')
            .update({ used_count: invite.used_count + 1 })
            .eq('id', invite.id);

        this.member = member;
        this._saveSession(member);
        this._pendingInvite = null;
        this._notify();
        return { success: true, needsConfirmation: true, email };
    }

    // ── SESSION ──────────────────────────────────────

    async restoreSession() {
        const stored = localStorage.getItem(AUTH_KEY);
        if (!stored) return false;

        try {
            const cached = JSON.parse(stored);
            const sb = getClient();
            const { data: member, error } = await sb
                .from('members')
                .select('*')
                .eq('id', cached.member_id)
                .single();

            if (member) {
                this.member = member;
                this._saveSession(member);
                this._notify();
                return true;
            }

            if (error && cached.member_id) {
                this.member = {
                    id: cached.member_id,
                    name: cached.name || 'User',
                    role: cached.role || 'member',
                    avatar_url: cached.avatar_url || null,
                    membership_status: cached.membership_status || 'pending',
                };
                this._notify();
                return true;
            }
        } catch (e) {
            try {
                const cached = JSON.parse(stored);
                if (cached.member_id) {
                    this.member = {
                        id: cached.member_id,
                        name: cached.name || 'User',
                        role: cached.role || 'member',
                        avatar_url: cached.avatar_url || null,
                        membership_status: cached.membership_status || 'pending',
                    };
                    this._notify();
                    return true;
                }
            } catch (_) {}
        }

        localStorage.removeItem(AUTH_KEY);
        return false;
    }

    _saveSession(member) {
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            member_id: member.id,
            auth_user_id: member.auth_user_id || null,
            name: member.name,
            role: member.role,
            avatar_url: member.avatar_url,
            membership_status: member.membership_status || member.status || 'pending',
        }));
    }

    // ── ACCESSORS ────────────────────────────────────

    isAuthenticated() { return !!this.member; }

    isApproved() {
        if (!this.member) return false;
        if (this.member.role === 'admin' || this.member.role === 'architect') return true;
        const s = this.member.membership_status || this.member.status;
        return s === 'approved' || s === 'active';
    }

    getMembershipStatus() {
        return this.member?.membership_status || this.member?.status || 'pending';
    }

    isAdmin() {
        return this.member?.role === 'admin' || this.member?.role === 'architect';
    }

    getMember() { return this.member; }
    getMemberId() { return this.member?.id; }

    // ── LOGOUT ───────────────────────────────────────

    async logout() {
        const sb = getClient();
        try { await sb.auth.signOut(); } catch (_) {}
        this.member = null;
        localStorage.removeItem(AUTH_KEY);
        this._notify();
    }

    // ── LISTENERS ────────────────────────────────────

    onChange(fn) {
        this.listeners.push(fn);
        return () => { this.listeners = this.listeners.filter(l => l !== fn); };
    }

    _notify() {
        this.listeners.forEach(fn => fn(this.member));
    }
}

export const auth = new OGAuth();
