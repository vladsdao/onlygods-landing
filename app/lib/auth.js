import { getClient } from './supabase.js';

const AUTH_KEY = 'og-profile-auth';

class OGAuth {
    constructor() {
        this.member = null;
        this.listeners = [];
    }

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

        return this.restoreSession();
    }

    async consumeToken(token) {
        const sb = getClient();

        const { data: tokenRow, error } = await sb
            .from('link_tokens')
            .select('*')
            .eq('token', token)
            .eq('used', false)
            .single();

        if (error || !tokenRow) {
            console.error('Invalid or expired token');
            return false;
        }

        // Check expiry
        if (tokenRow.expires_at && new Date(tokenRow.expires_at) < new Date()) {
            console.error('Token expired');
            return false;
        }

        // Mark token as used
        await sb.from('link_tokens').update({ used: true }).eq('id', tokenRow.id);

        // Fetch member
        const { data: member } = await sb
            .from('members')
            .select('*')
            .eq('id', tokenRow.member_id)
            .single();

        if (!member) {
            console.error('Member not found');
            return false;
        }

        this.member = member;
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            member_id: member.id,
            name: member.name,
            role: member.role,
            avatar_url: member.avatar_url,
            membership_status: member.membership_status || 'pending'
        }));

        this._notify();
        return true;
    }

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
                // Update cache with fresh data
                localStorage.setItem(AUTH_KEY, JSON.stringify({
                    member_id: member.id,
                    name: member.name,
                    role: member.role,
                    avatar_url: member.avatar_url,
                    membership_status: member.membership_status || 'pending'
                }));
                this._notify();
                return true;
            }

            // If Supabase query failed (network/table issue), use cached data
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
            // Fallback to cached data on any error
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
            console.error('Session restore failed:', e);
        }

        localStorage.removeItem(AUTH_KEY);
        return false;
    }

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

    async registerWithInvite(name, email, telegram) {
        const sb = getClient();
        const invite = this._pendingInvite;
        if (!invite) return false;

        const { data: member, error } = await sb
            .from('members')
            .insert({
                name,
                email: email || null,
                contact: telegram || null,
                role: 'member',
                status: 'active',
            })
            .select()
            .single();

        if (error) {
            console.error('Registration failed:', error);
            return false;
        }

        // Increment invite used_count
        await sb.from('invite_links')
            .update({ used_count: invite.used_count + 1 })
            .eq('id', invite.id);

        this.member = member;
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            member_id: member.id,
            name: member.name,
            role: member.role,
            avatar_url: member.avatar_url,
            status: member.status,
        }));

        this._pendingInvite = null;
        this._notify();
        return true;
    }

    isAuthenticated() {
        return !!this.member;
    }

    isApproved() {
        if (!this.member) return false;
        // Admin/architect always approved
        if (this.member.role === 'admin' || this.member.role === 'architect') return true;
        // Check membership_status
        const status = this.member.membership_status;
        return status === 'approved' || status === 'active';
    }

    getMembershipStatus() {
        return this.member?.membership_status || 'pending';
    }

    isAdmin() {
        return this.member?.role === 'admin' || this.member?.role === 'architect';
    }

    getMember() {
        return this.member;
    }

    getMemberId() {
        return this.member?.id;
    }

    logout() {
        this.member = null;
        localStorage.removeItem(AUTH_KEY);
        this._notify();
    }

    onChange(fn) {
        this.listeners.push(fn);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== fn);
        };
    }

    _notify() {
        this.listeners.forEach((fn) => fn(this.member));
    }

    // Future: NFT/Web3 auth extension point
    async connectWallet(provider) {
        throw new Error('Web3 auth not implemented yet');
    }
}

export const auth = new OGAuth();
