document.addEventListener('DOMContentLoaded', () => {
    const lyricEditor = document.getElementById('lyric-editor');
    const styleInput = document.getElementById('style-input');
    const excludeInput = document.getElementById('exclude-input');
    const quickStylesContainer = document.getElementById('style-tags');
    const toastContainer = document.getElementById('toast-container');

    // Modal Elements
    const confirmModal = document.getElementById('custom-confirm-modal');
    const modalTemplateName = document.getElementById('modal-template-name');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');

    let pendingTemplate = null;

    // Mobile detection
    const isMobile = () => {
        return window.innerWidth <= 768 ||
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0);
    };

    // Create Tooltip Element
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    document.body.appendChild(tooltip);

    // Create Info Modal for mobile
    const infoModal = document.createElement('div');
    infoModal.className = 'info-modal-overlay';
    infoModal.innerHTML = `
        <div class="info-modal-content">
            <div class="info-modal-header">
                <h3 id="info-modal-title"></h3>
                <button class="info-modal-close">&times;</button>
            </div>
            <div class="info-modal-body" id="info-modal-body"></div>
            <div class="info-modal-tags" id="info-modal-tags"></div>
            <div class="info-modal-actions" id="info-modal-actions"></div>
        </div>
    `;
    document.body.appendChild(infoModal);

    // Close modal handlers
    infoModal.querySelector('.info-modal-close').addEventListener('click', () => {
        infoModal.classList.remove('active');
    });
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.classList.remove('active');
        }
    });

    // 1. Initial Render
    renderQuickStyles();
    renderReference('tags');

    // 2. Tag Shortcut Buttons
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.getAttribute('data-tag');
            insertAtCursor(lyricEditor, tag + '\n');
        });
    });

    // 3. Tab Switching
    document.querySelectorAll('.ref-tabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.ref-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderReference(btn.getAttribute('data-tab'));
        });
    });

    // 4. Action Buttons
    document.getElementById('copy-lyric-btn').addEventListener('click', () => {
        copyToClipboard(lyricEditor.value, '가사가 클립보드에 복사되었습니다. 🎸');
    });

    document.getElementById('copy-style-btn').addEventListener('click', () => {
        copyToClipboard(styleInput.value, '스타일 프롬프트가 복사되었습니다. 🎹');
    });

    document.getElementById('copy-exclude-btn').addEventListener('click', () => {
        copyToClipboard(excludeInput.value, '제외 필터가 복사되었습니다. 🚫');
    });

    // --- Modal Logic ---
    // Removed as per user request to directly apply templates

    // --- Helper Functions ---

    function renderQuickStyles() {
        quickStylesContainer.innerHTML = '';
        SUNO_DATA.quickStyles.forEach(style => {
            const card = document.createElement('div');
            card.className = 'style-card';
            card.innerHTML = `
                <span class="style-card-name">${style.name}</span>
                <span class="style-card-desc">${style.desc}</span>
            `;

            if (isMobile()) {
                // Mobile: Show info modal with action button
                card.addEventListener('click', () => {
                    showInfoModal(
                        style.name,
                        style.detail,
                        style.tags,
                        () => {
                            styleInput.value = style.tags;
                            if (style.exclude) {
                                excludeInput.value = style.exclude;
                            }
                        },
                        '스타일 적용'
                    );
                });
            } else {
                // Desktop: Tooltip on hover, apply on click
                card.addEventListener('mouseenter', (e) => showTooltip(e, style.name, style.detail, style.tags));
                card.addEventListener('mousemove', moveTooltip);
                card.addEventListener('mouseleave', hideTooltip);

                card.addEventListener('click', () => {
                    styleInput.value = style.tags;
                    if (style.exclude) {
                        excludeInput.value = style.exclude;
                    }
                });
            }
            quickStylesContainer.appendChild(card);
        });
    }

    function renderReference(tab) {
        const panel = document.getElementById('ref-content');
        panel.innerHTML = '';

        if (tab === 'tags') {
            SUNO_DATA.tags.forEach(cat => {
                const group = document.createElement('div');
                group.className = 'ref-group';
                group.innerHTML = `<h3 style="margin: 1.5rem 0 1rem; color: var(--primary-accent);">${cat.category}</h3>`;

                const grid = document.createElement('div');
                grid.style.display = 'grid';
                grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(180px, 1fr))';
                grid.style.gap = '0.6rem';

                cat.items.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'style-card';
                    itemEl.innerHTML = `
                        <span class="style-card-name">${item.tag}</span>
                        <span class="style-card-desc">${item.desc}</span>
                    `;

                    if (isMobile()) {
                        itemEl.addEventListener('click', () => {
                            showInfoModal(
                                item.tag,
                                item.detail,
                                null,
                                () => {
                                    insertAtCursor(lyricEditor, item.tag + '\n');
                                },
                                '가사창에 추가'
                            );
                        });
                    } else {
                        itemEl.addEventListener('mouseenter', (e) => showTooltip(e, item.tag, item.detail));
                        itemEl.addEventListener('mousemove', moveTooltip);
                        itemEl.addEventListener('mouseleave', hideTooltip);

                        itemEl.addEventListener('click', () => {
                            insertAtCursor(lyricEditor, item.tag + '\n');
                        });
                    }
                    grid.appendChild(itemEl);
                });
                group.appendChild(grid);
                panel.appendChild(group);
            });
        } else if (tab === 'tips') {
            const grid = document.createElement('div');
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
            grid.style.gap = '1.2rem';
            grid.style.paddingTop = '1rem';

            SUNO_DATA.tips.forEach(tip => {
                const tipEl = document.createElement('div');
                tipEl.className = 'style-card';
                tipEl.style.cursor = 'help';
                tipEl.innerHTML = `
                    <span class="style-card-name" style="color: var(--primary-accent);">${tip.title}</span>
                    <span class="style-card-desc">${tip.content}</span>
                `;

                if (isMobile()) {
                    tipEl.addEventListener('click', () => {
                        showInfoModal(tip.title, tip.detail);
                    });
                } else {
                    tipEl.addEventListener('mouseenter', (e) => showTooltip(e, tip.title, tip.detail));
                    tipEl.addEventListener('mousemove', moveTooltip);
                    tipEl.addEventListener('mouseleave', hideTooltip);
                }

                grid.appendChild(tipEl);
            });
            panel.appendChild(grid);
        } else if (tab === 'templates') {
            const grid = document.createElement('div');
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
            grid.style.gap = '1.2rem';
            grid.style.paddingTop = '1rem';

            SUNO_DATA.templates.forEach(tpl => {
                const tplEl = document.createElement('div');
                tplEl.className = 'style-card';
                tplEl.innerHTML = `
                    <span class="style-card-name">${tpl.name}</span>
                    <span class="style-card-desc">클릭하여 적용</span>
                `;

                if (isMobile()) {
                    tplEl.addEventListener('click', () => {
                        showInfoModal(
                            tpl.name,
                            tpl.detail,
                            null,
                            () => {
                                lyricEditor.value = tpl.content;
                                if (tpl.exclude) excludeInput.value = tpl.exclude;
                            },
                            '템플릿 적용'
                        );
                    });
                } else {
                    tplEl.addEventListener('mouseenter', (e) => showTooltip(e, tpl.name, tpl.detail));
                    tplEl.addEventListener('mousemove', moveTooltip);
                    tplEl.addEventListener('mouseleave', hideTooltip);

                    tplEl.addEventListener('click', () => {
                        lyricEditor.value = tpl.content;
                        if (tpl.exclude) excludeInput.value = tpl.exclude;
                    });
                }
                grid.appendChild(tplEl);
            });
            panel.appendChild(grid);
        }
    }

    function insertAtCursor(textarea, text) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + text.length;
        textarea.focus();
    }

    function copyToClipboard(text, message) {
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
            showToast(message);
        });
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>✨</span> ${message}`;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // --- Tooltip Logic ---
    let tooltipTimer;

    // Show info modal (for mobile)
    function showInfoModal(title, body, tags = null, actionCallback = null, actionLabel = '적용하기') {
        document.getElementById('info-modal-title').textContent = title;
        document.getElementById('info-modal-body').textContent = body || '설명이 준비 중입니다.';

        const tagsEl = document.getElementById('info-modal-tags');
        if (tags) {
            tagsEl.textContent = tags;
            tagsEl.style.display = 'block';
        } else {
            tagsEl.style.display = 'none';
        }

        const actionsEl = document.getElementById('info-modal-actions');
        actionsEl.innerHTML = '';

        if (actionCallback) {
            const actionBtn = document.createElement('button');
            actionBtn.className = 'info-modal-action-btn';
            actionBtn.textContent = actionLabel;
            actionBtn.addEventListener('click', () => {
                actionCallback();
                infoModal.classList.remove('active');
            });
            actionsEl.appendChild(actionBtn);
        }

        infoModal.classList.add('active');
    }

    function showTooltip(e, title, body, tags = null) {
        clearTimeout(tooltipTimer);
        tooltip.innerHTML = `
            <div class="tooltip-title">💡 ${title}</div>
            <div class="tooltip-body">${body || '설명이 준비 중입니다.'}</div>
            ${tags ? `<div class="tooltip-tags">${tags}</div>` : ''}
        `;
        tooltip.style.display = 'block';
        requestAnimationFrame(() => tooltip.style.opacity = '1');
        moveTooltip(e);
    }

    function moveTooltip(e) {
        const padding = 20;
        let x = e.clientX + padding;
        let y = e.clientY + padding;
        const tooltipWidth = 320;
        const tooltipHeight = tooltip.offsetHeight || 150;
        if (x + tooltipWidth > window.innerWidth) x = e.clientX - tooltipWidth - padding;
        if (y + tooltipHeight > window.innerHeight) y = e.clientY - tooltipHeight - padding;
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }

    function hideTooltip() {
        tooltip.style.opacity = '0';
        tooltipTimer = setTimeout(() => tooltip.style.display = 'none', 200);
    }

    // --- AdSense Logic ---
    function initAdSense() {
        if (typeof ADSENSE_CONFIG !== 'undefined') {
            const container = document.getElementById('main-ad-container');
            if (!container) return;

            // 앱 렌더링이 끝난 후 약간의 지연을 두어 자연스럽게 표시
            setTimeout(() => {
                // 중요: 광고를 요청하기 전에 컨테이너를 먼저 보여야 공간(width)이 잡혀서 에러가 안 남
                container.style.display = 'block';

                const ins = document.createElement('ins');
                ins.className = "adsbygoogle";
                ins.style.display = "block";
                ins.style.width = "100%";
                ins.setAttribute('data-ad-client', ADSENSE_CONFIG.client);
                ins.setAttribute('data-ad-slot', ADSENSE_CONFIG.slot);
                ins.setAttribute('data-ad-format', 'auto');
                ins.setAttribute('data-full-width-responsive', 'true');

                container.appendChild(ins);

                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});

                    // 광고 로드 완료 후 실제로 내용이 채워졌는지 확인 (15초 대기)
                    let checkCount = 0;
                    const checkInterval = setInterval(() => {
                        if (ins.clientHeight > 0) {
                            // container.style.display = 'flex'; // 이미 위에서 보이게 했으므로 주석 처리
                            clearInterval(checkInterval);
                        }
                        checkCount++;

                        if (checkCount > 20) { // 2초 경과 (원래대로 2초 체크로 복구)
                            clearInterval(checkInterval);
                            // 타임아웃 되어도 광고 영역을 숨기지 않음 (구글이 늦게 보낼 수도 있으므로)
                        }
                    }, 100);
                } catch (e) {
                    console.error("AdSense push error:", e);
                    container.style.display = 'none';
                }
            }, 500);
        }
    }

    // Initialize AdSense
    initAdSense();
});
