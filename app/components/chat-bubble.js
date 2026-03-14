export function renderMessage(msg, currentMemberId, memberCache) {
    const isOwn = msg.member_id === currentMemberId;
    const member = memberCache?.[msg.member_id];
    const name = member?.name || 'Unknown';
    const avatar = member?.avatar_url;
    const time = formatTime(msg.created_at);

    const avatarHtml = avatar
        ? `<img class="msg-avatar" src="${avatar}" alt="">`
        : `<div class="msg-avatar msg-avatar-placeholder">${name.charAt(0).toUpperCase()}</div>`;

    const replyHtml = msg.reply_to ? `<div class="msg-reply-ref">Reply</div>` : '';

    return `
        <div class="msg ${isOwn ? 'msg-own' : ''}" data-id="${msg.id}">
            ${isOwn ? '' : avatarHtml}
            <div class="msg-body">
                ${isOwn ? '' : `<div class="msg-name">${escapeHtml(name)}</div>`}
                ${replyHtml}
                <div class="msg-content">${escapeHtml(msg.content)}</div>
                <div class="msg-time">${time}</div>
            </div>
        </div>
    `;
}

export function renderSystemMessage(text) {
    return `<div class="msg-system">${escapeHtml(text)}</div>`;
}

function formatTime(isoString) {
    const d = new Date(isoString);
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();

    const time = d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

    if (isToday) return time;

    const date = d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    return `${date} ${time}`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
