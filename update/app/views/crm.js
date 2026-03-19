import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

const PIPELINE_STAGES = ['new', 'contacted', 'interested', 'enrolled', 'rejected', 'lost'];

export default class CrmView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.leads = [];
        this.members = [];
        this.activeTab = 'pipeline';
        this.activeStage = 'all';
    }

    async render() {
        if (!auth.isAdmin()) {
            this.container.innerHTML = '<div class="view-auth-required">Admin access required</div>';
            return;
        }

        this.container.innerHTML = `
            <div class="view-crm">
                <div class="crm-header">
                    <div class="crm-title">CRM</div>
                    <div class="crm-tabs">
                        <button class="crm-tab active" data-tab="pipeline">Pipeline</button>
                        <button class="crm-tab" data-tab="members">Members</button>
                        <button class="crm-tab" data-tab="payments">Payments</button>
                        <button class="crm-tab" data-tab="bot">Bot</button>
                    </div>
                </div>

                <div class="crm-stats" id="crm-stats"></div>

                <div class="crm-actions">
                    <button class="crm-action-btn" id="btn-add-lead">+ New Lead</button>
                </div>

                <div class="crm-content" id="crm-content">
                    <div class="crm-loading">Loading...</div>
                </div>

                <div class="crm-detail-panel hidden" id="crm-detail">
                    <div class="crm-detail-header">
                        <button class="crm-detail-close" id="btn-close-detail">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                        <span class="crm-detail-title" id="detail-title"></span>
                    </div>
                    <div class="crm-detail-body" id="detail-body"></div>
                </div>
            </div>
        `;

        await this._loadData();
        this._setupListeners();
    }

    async _loadData() {
        const [{ data: leads }, { data: members }, { data: payments }] = await Promise.all([
            this.sb.from('crm_leads').select('*').order('created_at', { ascending: false }),
            this.sb.from('members').select('*').order('created_at', { ascending: false }),
            this.sb.from('crm_payments').select('*').order('created_at', { ascending: false }).limit(50),
        ]);

        this.leads = leads || [];
        this.members = members || [];
        this.payments = payments || [];

        this._renderStats();
        this._renderContent();
    }

    _renderStats() {
        const el = document.getElementById('crm-stats');
        if (!el) return;

        const totalLeads = this.leads.length;
        const activeMembers = this.members.filter((m) => m.status === 'active').length;
        const monthlyRevenue = (this.payments || [])
            .filter((p) => {
                const d = new Date(p.created_at);
                const now = new Date();
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear() && p.status === 'completed';
            })
            .reduce((sum, p) => sum + parseFloat(p.amount || 0), 0);

        el.innerHTML = `
            <div class="crm-stat-card">
                <div class="crm-stat-value">${totalLeads}</div>
                <div class="crm-stat-label">Leads</div>
            </div>
            <div class="crm-stat-card">
                <div class="crm-stat-value">${activeMembers}</div>
                <div class="crm-stat-label">Active Members</div>
            </div>
            <div class="crm-stat-card">
                <div class="crm-stat-value">${monthlyRevenue.toFixed(0)}&euro;</div>
                <div class="crm-stat-label">This Month</div>
            </div>
        `;
    }

    _renderContent() {
        const el = document.getElementById('crm-content');
        if (!el) return;

        if (this.activeTab === 'pipeline') {
            this._renderPipeline(el);
        } else if (this.activeTab === 'members') {
            this._renderMembers(el);
        } else if (this.activeTab === 'payments') {
            this._renderPayments(el);
        } else if (this.activeTab === 'bot') {
            this._renderBotControls(el);
        }
    }

    _renderPipeline(el) {
        const stages = ['all', ...PIPELINE_STAGES];

        const filtered = this.activeStage === 'all'
            ? this.leads
            : this.leads.filter((l) => l.status === this.activeStage);

        el.innerHTML = `
            <div class="crm-stage-filters">
                ${stages.map((s) => `<button class="crm-stage-btn ${this.activeStage === s ? 'active' : ''}" data-stage="${s}">
                    ${s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
                    <span class="crm-stage-count">${s === 'all' ? this.leads.length : this.leads.filter((l) => l.status === s).length}</span>
                </button>`).join('')}
            </div>
            <div class="crm-lead-list">
                ${filtered.length === 0 ? '<div class="crm-empty">No leads</div>' :
                    filtered.map((lead) => `
                        <div class="crm-lead-card" data-lead-id="${lead.id}">
                            <div class="crm-lead-name">${this._esc(lead.name)}</div>
                            <div class="crm-lead-contact">${this._esc(lead.contact || '')}</div>
                            <div class="crm-lead-meta">
                                <span class="crm-lead-status status-${lead.status}">${lead.status}</span>
                                ${lead.source ? `<span class="crm-lead-source">${lead.source}</span>` : ''}
                                <span class="crm-lead-date">${new Date(lead.created_at).toLocaleDateString('ru-RU')}</span>
                            </div>
                            ${lead.tags?.length ? `<div class="crm-lead-tags">${lead.tags.map((t) => `<span class="crm-tag">${this._esc(t)}</span>`).join('')}</div>` : ''}
                        </div>
                    `).join('')
                }
            </div>
        `;

        // Stage filter clicks
        el.querySelectorAll('.crm-stage-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                this.activeStage = btn.dataset.stage;
                this._renderContent();
            });
        });

        // Lead card clicks
        el.querySelectorAll('.crm-lead-card').forEach((card) => {
            card.addEventListener('click', () => {
                const lead = this.leads.find((l) => l.id === card.dataset.leadId);
                if (lead) this._showDetail('lead', lead);
            });
        });
    }

    _renderMembers(el) {
        const pending = this.members.filter(m => m.membership_status === 'pending');
        const approved = this.members.filter(m => m.membership_status !== 'pending' && m.membership_status !== 'suspended');
        const suspended = this.members.filter(m => m.membership_status === 'suspended');

        el.innerHTML = `
            ${pending.length > 0 ? `
                <div class="crm-section-label">Pending Approval (${pending.length})</div>
                <div class="crm-member-list">
                    ${pending.map(m => this._renderMemberCard(m, true)).join('')}
                </div>
            ` : ''}
            <div class="crm-section-label">Active Members (${approved.length})</div>
            <div class="crm-member-list">
                ${approved.map(m => this._renderMemberCard(m, false)).join('')}
            </div>
            ${suspended.length > 0 ? `
                <div class="crm-section-label">Suspended (${suspended.length})</div>
                <div class="crm-member-list">
                    ${suspended.map(m => this._renderMemberCard(m, false)).join('')}
                </div>
            ` : ''}
        `;

        // Approve/Suspend buttons
        el.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const memberId = btn.dataset.memberId;
                const action = btn.dataset.action;
                const newStatus = action === 'approve' ? 'approved' : action === 'suspend' ? 'suspended' : 'pending';
                await this.sb.from('members').update({ membership_status: newStatus }).eq('id', memberId);
                await this._loadData();
            });
        });
    }

    _renderMemberCard(m, showApproval) {
        const statusBadge = m.membership_status === 'pending'
            ? '<span class="crm-member-badge pending">pending</span>'
            : m.membership_status === 'suspended'
                ? '<span class="crm-member-badge suspended">suspended</span>'
                : `<span class="crm-member-badge approved">${m.membership_status || 'active'}</span>`;

        return `
            <div class="crm-member-card" data-member-id="${m.id}">
                <div class="crm-member-avatar">${m.avatar_url ? `<img src="${m.avatar_url}" alt="">` : (m.name || '?').charAt(0).toUpperCase()}</div>
                <div class="crm-member-info">
                    <div class="crm-member-name">${this._esc(m.name)}</div>
                    <div class="crm-member-role">${m.role || 'member'}</div>
                </div>
                ${statusBadge}
                ${showApproval ? `
                    <button class="crm-approve-btn" data-action="approve" data-member-id="${m.id}">Approve</button>
                    <button class="crm-reject-btn" data-action="suspend" data-member-id="${m.id}">Reject</button>
                ` : `
                    ${m.membership_status !== 'suspended'
                        ? `<button class="crm-suspend-btn" data-action="suspend" data-member-id="${m.id}">Suspend</button>`
                        : `<button class="crm-approve-btn" data-action="approve" data-member-id="${m.id}">Restore</button>`
                    }
                `}
            </div>
        `;
    }

    _renderPayments(el) {
        const payments = this.payments || [];
        el.innerHTML = `
            <div class="crm-payment-list">
                ${payments.length === 0 ? '<div class="crm-empty">No payments recorded</div>' :
                    payments.map((p) => `
                        <div class="crm-payment-card">
                            <div class="crm-payment-amount">${parseFloat(p.amount).toFixed(0)} ${p.currency || 'EUR'}</div>
                            <div class="crm-payment-info">
                                <span class="crm-payment-type">${p.type || ''}</span>
                                <span class="crm-payment-product">${p.product || ''}</span>
                            </div>
                            <div class="crm-payment-status status-${p.status}">${p.status}</div>
                            <div class="crm-payment-date">${new Date(p.created_at).toLocaleDateString('ru-RU')}</div>
                        </div>
                    `).join('')
                }
            </div>
        `;
    }

    _renderBotControls(el) {
        el.innerHTML = `
            <div class="bot-controls">
                <div class="bot-section">
                    <div class="bot-section-title">Send to All Members</div>
                    <div class="bot-section-desc">Commands are sent via @OnlyVlad_bot to all active members in Telegram</div>

                    <div class="bot-actions-grid">
                        <button class="bot-action-card" data-cmd="check_in">
                            <div class="bot-action-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                            </div>
                            <div class="bot-action-name">Check-in</div>
                            <div class="bot-action-desc">Ask mood 1-10</div>
                        </button>

                        <button class="bot-action-card" data-cmd="question">
                            <div class="bot-action-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                            </div>
                            <div class="bot-action-name">Question</div>
                            <div class="bot-action-desc">Ask community</div>
                        </button>

                        <button class="bot-action-card" data-cmd="insight">
                            <div class="bot-action-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            </div>
                            <div class="bot-action-name">Insight</div>
                            <div class="bot-action-desc">Share wisdom</div>
                        </button>

                        <button class="bot-action-card" data-cmd="update">
                            <div class="bot-action-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                            </div>
                            <div class="bot-action-name">Update</div>
                            <div class="bot-action-desc">Important news</div>
                        </button>
                    </div>
                </div>

                <div class="bot-section">
                    <div class="bot-section-title">Recent Commands</div>
                    <div class="bot-commands-list" id="bot-commands-list">
                        <div class="crm-loading">Loading...</div>
                    </div>
                </div>
            </div>
        `;

        // Load recent commands
        this._loadBotCommands();

        // Command buttons
        el.querySelectorAll('[data-cmd]').forEach(btn => {
            btn.addEventListener('click', () => this._sendBotCommand(btn.dataset.cmd));
        });
    }

    async _sendBotCommand(type) {
        let content = '';
        if (type === 'check_in') {
            content = prompt('Check-in message (or leave empty for default):') || 'How are you feeling today? Rate your state 1-10';
        } else if (type === 'question') {
            content = prompt('Your question to the community:');
            if (!content) return;
        } else if (type === 'insight') {
            content = prompt('Insight to share:');
            if (!content) return;
        } else if (type === 'update') {
            content = prompt('Important update:');
            if (!content) return;
        }

        const { error } = await this.sb.from('bot_commands').insert({
            type,
            content,
            created_by: auth.getMemberId(),
            status: 'pending',
        });

        if (error) {
            alert('Failed: ' + error.message);
            return;
        }

        alert('Command sent to bot queue');
        this._loadBotCommands();
    }

    async _loadBotCommands() {
        const { data } = await this.sb
            .from('bot_commands')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10);

        const listEl = document.getElementById('bot-commands-list');
        if (!listEl) return;

        if (!data || data.length === 0) {
            listEl.innerHTML = '<div class="crm-empty">No commands sent yet</div>';
            return;
        }

        listEl.innerHTML = data.map(cmd => `
            <div class="bot-command-item">
                <div class="bot-command-type">${cmd.type}</div>
                <div class="bot-command-content">${this._esc(cmd.content || '').substring(0, 60)}${(cmd.content || '').length > 60 ? '...' : ''}</div>
                <div class="bot-command-meta">
                    <span class="bot-command-status status-${cmd.status}">${cmd.status}</span>
                    <span class="bot-command-date">${new Date(cmd.created_at).toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>
        `).join('');
    }

    _showDetail(type, item) {
        const panel = document.getElementById('crm-detail');
        const titleEl = document.getElementById('detail-title');
        const bodyEl = document.getElementById('detail-body');
        if (!panel || !bodyEl) return;

        titleEl.textContent = item.name;
        panel.classList.remove('hidden');

        if (type === 'lead') {
            bodyEl.innerHTML = `
                <div class="detail-section">
                    <label>Status</label>
                    <select class="form-select" id="detail-status">
                        ${PIPELINE_STAGES.map((s) => `<option value="${s}" ${item.status === s ? 'selected' : ''}>${s}</option>`).join('')}
                    </select>
                </div>
                <div class="detail-section">
                    <label>Contact</label>
                    <div>${this._esc(item.contact || 'N/A')}</div>
                </div>
                <div class="detail-section">
                    <label>Notes</label>
                    <textarea class="form-textarea" id="detail-notes" rows="3">${this._esc(item.notes || '')}</textarea>
                </div>
                <div class="detail-section">
                    <label>Tags</label>
                    <input type="text" class="form-input" id="detail-tags" value="${(item.tags || []).join(', ')}">
                </div>
                <button class="form-btn form-btn-primary" id="btn-save-detail">Save</button>
            `;

            document.getElementById('btn-save-detail')?.addEventListener('click', async () => {
                const status = document.getElementById('detail-status')?.value;
                const notes = document.getElementById('detail-notes')?.value;
                const tags = (document.getElementById('detail-tags')?.value || '').split(',').map((s) => s.trim()).filter(Boolean);

                await this.sb.from('crm_leads').update({ status, notes, tags, updated_at: new Date().toISOString() }).eq('id', item.id);
                panel.classList.add('hidden');
                await this._loadData();
            });
        }
    }

    _setupListeners() {
        // Tab switching
        document.querySelectorAll('.crm-tab').forEach((tab) => {
            tab.addEventListener('click', () => {
                this.activeTab = tab.dataset.tab;
                document.querySelectorAll('.crm-tab').forEach((t) => t.classList.remove('active'));
                tab.classList.add('active');
                this._renderContent();
            });
        });

        // Close detail
        document.getElementById('btn-close-detail')?.addEventListener('click', () => {
            document.getElementById('crm-detail')?.classList.add('hidden');
        });

        // Add lead
        document.getElementById('btn-add-lead')?.addEventListener('click', () => {
            const name = prompt('Lead name:');
            if (!name) return;
            const contact = prompt('Contact (telegram/email/phone):');
            const source = prompt('Source (instagram/telegram/referral/website):', 'telegram');

            this.sb.from('crm_leads').insert({
                name,
                contact: contact || null,
                source: source || null,
                assigned_to: auth.getMemberId(),
            }).then(({ error }) => {
                if (error) { alert('Failed: ' + error.message); return; }
                this._loadData();
            });
        });
    }

    _esc(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {}
}
