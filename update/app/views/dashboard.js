import { getClient } from '../lib/supabase.js';

export default class DashboardView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.channel = null;
        this.chart = null;
    }

    async render() {
        this.container.innerHTML = `
            <div class="view-dashboard">
                <section class="dash-hero">
                    <div class="dash-subtitle"><span class="live-dot"></span> <span data-i18n="dashboard.hero.subtitle">Consciousness Field</span></div>
                    <div class="dash-score" id="coherence-score">&mdash;</div>
                    <div class="dash-score-label" data-i18n="dashboard.hero.label">Coherence</div>
                    <p class="dash-tagline" id="synthesis-tagline" data-i18n="dashboard.hero.tagline">Loading field data...</p>
                </section>

                <div class="dash-divider"></div>

                <section class="dash-section">
                    <div class="dash-section-label" data-i18n="dashboard.metrics.label">Field Metrics</div>
                    <div class="dash-metrics">
                        <div class="dash-metric">
                            <div class="dash-metric-value" id="energy-avg">&mdash;</div>
                            <div class="dash-metric-label" data-i18n="dashboard.metrics.energy">Energy</div>
                        </div>
                        <div class="dash-metric">
                            <div class="dash-metric-value" id="participation">&mdash;</div>
                            <div class="dash-metric-label" data-i18n="dashboard.metrics.participation">Participation</div>
                        </div>
                        <div class="dash-metric">
                            <div class="dash-metric-value" id="active-members">&mdash;</div>
                            <div class="dash-metric-label" data-i18n="dashboard.metrics.synced">Synced</div>
                        </div>
                        <div class="dash-metric">
                            <div class="dash-metric-value" id="streak-field">&mdash;</div>
                            <div class="dash-metric-label" data-i18n="dashboard.metrics.streak">Field Streak</div>
                        </div>
                    </div>
                </section>

                <div class="dash-divider"></div>

                <section class="dash-section">
                    <div class="dash-section-label" data-i18n="dashboard.chart.label">7-Day Energy</div>
                    <div class="dash-chart-wrap">
                        <canvas id="energy-chart" height="200"></canvas>
                    </div>
                </section>

                <div class="dash-divider"></div>

                <section class="dash-section">
                    <div class="dash-section-label" data-i18n="dashboard.themes.label">Field Themes</div>
                    <div class="dash-themes" id="themes-cloud"></div>
                </section>

                <section class="dash-section">
                    <div class="dash-section-label" data-i18n="dashboard.synthesis.label">AI Synthesis</div>
                    <div class="dash-synthesis">
                        <div class="dash-synthesis-text" id="synthesis-text">&mdash;</div>
                        <div class="dash-synthesis-time" id="synthesis-time"></div>
                    </div>
                </section>

                <div class="dash-divider"></div>

                <section class="dash-section">
                    <div class="dash-section-label" data-i18n="dashboard.digest.label">Latest Digest</div>
                    <div class="dash-digest">
                        <div class="dash-digest-period" id="digest-period"></div>
                        <div class="dash-digest-text" id="digest-text" data-i18n="dashboard.digest.empty">No digest yet</div>
                    </div>
                </section>
            </div>
        `;

        if (typeof OGLang !== 'undefined') OGLang.applyLang(OGLang.getLang());
        await this._loadData();
        this._subscribe();
    }

    async _loadData() {
        // Latest snapshot
        const { data: snap } = await this.sb
            .from('field_snapshots')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

        if (snap) this._updateSnapshot(snap);

        // 7-day chart
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const { data: history } = await this.sb
            .from('field_snapshots')
            .select('energy_avg, coherence_score, created_at, period')
            .gte('created_at', weekAgo.toISOString())
            .neq('period', 'weekly')
            .order('created_at', { ascending: true });

        if (history?.length > 0) this._renderChart(history);

        // Latest digest
        const { data: digest } = await this.sb
            .from('chat_digests')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

        if (digest) this._updateDigest(digest);
    }

    _updateSnapshot(snap) {
        const scoreEl = document.getElementById('coherence-score');
        if (snap.coherence_score != null && scoreEl) {
            this._animateNumber(scoreEl, snap.coherence_score);
        }

        const energyEl = document.getElementById('energy-avg');
        if (snap.energy_avg != null && energyEl) {
            energyEl.textContent = snap.energy_avg.toFixed(1);
        }

        const partEl = document.getElementById('participation');
        if (snap.participation_pct != null && partEl) {
            partEl.textContent = Math.round(snap.participation_pct * 100) + '%';
        }

        const activeEl = document.getElementById('active-members');
        if (snap.active_members != null && activeEl) {
            activeEl.textContent = snap.active_members;
        }

        // Themes
        const themesEl = document.getElementById('themes-cloud');
        if (snap.dominant_themes?.length && themesEl) {
            themesEl.innerHTML = snap.dominant_themes
                .map((t) => `<span class="dash-theme-tag">${t}</span>`)
                .join('');
        }

        // Synthesis
        const synthEl = document.getElementById('synthesis-text');
        if (snap.ai_synthesis && synthEl) {
            synthEl.textContent = snap.ai_synthesis;
            const taglineEl = document.getElementById('synthesis-tagline');
            if (taglineEl) taglineEl.textContent = snap.ai_synthesis.substring(0, 80) + '...';
        }

        const timeEl = document.getElementById('synthesis-time');
        if (snap.created_at && timeEl) {
            const d = new Date(snap.created_at);
            const period = snap.period === 'morning' ? 'morning' : snap.period === 'evening' ? 'evening' : snap.period || '';
            timeEl.textContent = d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }) + ' · ' + period;
        }
    }

    _updateDigest(digest) {
        const textEl = document.getElementById('digest-text');
        if (digest.digest_text && textEl) textEl.textContent = digest.digest_text;

        const periodEl = document.getElementById('digest-period');
        if (digest.period && periodEl) {
            const label = digest.period === 'morning' ? 'Morning digest' : 'Evening digest';
            periodEl.textContent = label;
            if (digest.created_at) {
                const d = new Date(digest.created_at);
                periodEl.textContent += ' · ' + d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
            }
        }
    }

    _animateNumber(el, target) {
        const start = parseInt(el.textContent) || 0;
        const duration = 1200;
        const startTime = performance.now();
        function step(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(start + (target - start) * ease);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    _renderChart(history) {
        if (typeof Chart === 'undefined') return;
        const canvas = document.getElementById('energy-chart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const labels = history.map((h) => {
            const d = new Date(h.created_at);
            return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
        });

        if (this.chart) this.chart.destroy();

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Energy',
                    data: history.map((h) => h.energy_avg),
                    borderColor: 'rgba(29, 29, 31, 0.6)',
                    backgroundColor: 'rgba(29, 29, 31, 0.05)',
                    fill: true, tension: 0.4, borderWidth: 2,
                    pointRadius: 3, pointBackgroundColor: '#1d1d1f',
                }, {
                    label: 'Coherence /10',
                    data: history.map((h) => h.coherence_score ? h.coherence_score / 10 : null),
                    borderColor: 'rgba(134, 134, 139, 0.5)',
                    borderDash: [5, 5], fill: false, tension: 0.4,
                    borderWidth: 1.5, pointRadius: 2, pointBackgroundColor: '#86868b',
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#86868b', font: { family: 'DM Sans', size: 11 } } } },
                scales: {
                    x: { ticks: { color: '#86868b', font: { size: 10 } }, grid: { color: 'rgba(0,0,0,0.04)' } },
                    y: { min: 0, max: 10, ticks: { color: '#86868b', font: { size: 10 }, stepSize: 2 }, grid: { color: 'rgba(0,0,0,0.04)' } }
                }
            }
        });
    }

    _subscribe() {
        this.channel = this.sb.channel('field-live')
            .on('postgres_changes', {
                event: 'INSERT', schema: 'public', table: 'field_snapshots'
            }, (payload) => this._updateSnapshot(payload.new))
            .on('postgres_changes', {
                event: 'INSERT', schema: 'public', table: 'chat_digests'
            }, (payload) => this._updateDigest(payload.new))
            .subscribe();
    }

    destroy() {
        if (this.channel) {
            this.sb.removeChannel(this.channel);
            this.channel = null;
        }
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}
