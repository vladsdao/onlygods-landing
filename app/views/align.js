import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';
import TasksView from './tasks.js';

export default class AlignView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.activeTab = 'tasks';
        this.tasksView = null;
    }

    async render() {
        this.container.innerHTML = `
            <div class="view-align">
                <div class="align-header">
                    <div class="align-subtitle">Resonance Network</div>
                    <div class="align-title">Align</div>
                </div>
                <div class="align-tabs">
                    <button class="align-tab active" data-tab="tasks">Daily Tasks</button>
                    <button class="align-tab" data-tab="education">Education</button>
                </div>
                <div class="align-content" id="align-content"></div>
            </div>
        `;

        this.container.querySelectorAll('.align-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                this.container.querySelectorAll('.align-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeTab = btn.dataset.tab;
                this._renderTab();
            });
        });

        await this._renderTab();
    }

    async _renderTab() {
        const content = document.getElementById('align-content');
        if (!content) return;

        // Destroy previous tasks view if switching away
        if (this.tasksView?.destroy) {
            this.tasksView.destroy();
            this.tasksView = null;
        }

        if (this.activeTab === 'tasks') {
            this.tasksView = new TasksView(content);
            await this.tasksView.render();
        } else {
            content.innerHTML = `
                <div class="align-education">
                    <div class="align-edu-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                    </div>
                    <div class="align-edu-title">Education</div>
                    <div class="align-edu-text">Coming soon — video lessons, reflections, and guided progress tracking.</div>
                    <div class="align-edu-sub">Content will be delivered step by step, synced with your personal rhythm.</div>
                </div>
            `;
        }
    }

    destroy() {
        if (this.tasksView?.destroy) {
            this.tasksView.destroy();
            this.tasksView = null;
        }
    }
}
