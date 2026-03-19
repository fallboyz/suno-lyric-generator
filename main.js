document.addEventListener('DOMContentLoaded', () => {
    // === DOM References ===
    const lyricEditor = document.getElementById('lyric-editor');
    const styleInput = document.getElementById('style-input');
    const excludeInput = document.getElementById('exclude-input');
    const quickStylesContainer = document.getElementById('style-tags');
    const toastContainer = document.getElementById('toast-container');
    const refContent = document.getElementById('ref-content');
    const tagSearch = document.getElementById('tag-search');
    const searchClearBtn = document.getElementById('search-clear');
    const categoryChipsContainer = document.getElementById('category-chips');

    // === State ===
    let searchIndex = [];
    let activeCategory = 'all';
    let activeTab = 'tags';
    let renderedAccordions = new Set();
    let currentMobilePanel = 'editor';

    // === Mobile Detection ===
    const isMobile = () => {
        return window.innerWidth <= 768 ||
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0);
    };

    // === Tooltip (Desktop) ===
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    document.body.appendChild(tooltip);

    // === Bottom Sheet Modal (Mobile) ===
    const infoModal = document.createElement('div');
    infoModal.className = 'info-modal-overlay';
    infoModal.innerHTML = `
        <div class="info-modal-content">
            <div class="drag-handle"></div>
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

    infoModal.querySelector('.info-modal-close').addEventListener('click', closeInfoModal);
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) closeInfoModal();
    });

    function closeInfoModal() {
        infoModal.classList.remove('active');
    }

    // === Build Search Index ===
    function buildSearchIndex() {
        searchIndex = [];
        SUNO_DATA.tags.forEach(cat => {
            const target = cat.defaultTarget || 'lyric';
            if (cat.subcategories) {
                cat.subcategories.forEach(sub => {
                    sub.items.forEach(item => {
                        searchIndex.push({
                            ...item,
                            category: cat.category,
                            categoryId: cat.id,
                            subcategory: sub.name,
                            target
                        });
                    });
                });
            } else if (cat.items) {
                cat.items.forEach(item => {
                    searchIndex.push({
                        ...item,
                        category: cat.category,
                        categoryId: cat.id,
                        target
                    });
                });
            }
        });
    }

    // === Initialize ===
    buildSearchIndex();
    renderQuickStyles();
    renderCategoryChips();
    renderReference('tags');
    initStyleToggle();
    initMobileNav();
    initAdSense();

    // === Tab Switching ===
    document.querySelectorAll('.ref-tabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.ref-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeTab = btn.getAttribute('data-tab');

            const isTagsTab = activeTab === 'tags';
            document.querySelector('.search-bar-wrapper').style.display = isTagsTab ? '' : 'none';
            categoryChipsContainer.style.display = isTagsTab ? '' : 'none';

            renderReference(activeTab);
        });
    });

    // === Copy Buttons ===
    document.getElementById('copy-lyric-btn').addEventListener('click', () => {
        copyToClipboard(lyricEditor.value, '가사가 클립보드에 복사되었습니다.');
    });
    document.getElementById('copy-style-btn').addEventListener('click', () => {
        copyToClipboard(styleInput.value, '스타일 프롬프트가 복사되었습니다.');
    });
    document.getElementById('copy-exclude-btn').addEventListener('click', () => {
        copyToClipboard(excludeInput.value, '제외 필터가 복사되었습니다.');
    });

    // === Search ===
    let searchTimeout;
    tagSearch.addEventListener('input', () => {
        const q = tagSearch.value.trim();
        searchClearBtn.style.display = q ? '' : 'none';
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (q) {
                filterTags(q);
            } else {
                renderReference('tags');
            }
        }, 200);
    });

    searchClearBtn.addEventListener('click', () => {
        tagSearch.value = '';
        searchClearBtn.style.display = 'none';
        renderReference('tags');
        tagSearch.focus();
    });

    // === Category Chips ===
    function renderCategoryChips() {
        const fragment = document.createDocumentFragment();

        const allChip = createChip('all', '전체');
        allChip.classList.add('active');
        fragment.appendChild(allChip);

        SUNO_DATA.tags.forEach(cat => {
            fragment.appendChild(createChip(cat.id, cat.category.split('(')[0].trim()));
        });

        categoryChipsContainer.innerHTML = '';
        categoryChipsContainer.appendChild(fragment);
    }

    function createChip(id, label) {
        const chip = document.createElement('button');
        chip.className = 'chip';
        chip.dataset.catId = id;
        chip.textContent = label;
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeCategory = id;
            renderReference('tags');
        });
        return chip;
    }

    // === Quick Styles Render ===
    function renderQuickStyles() {
        const fragment = document.createDocumentFragment();
        SUNO_DATA.quickStyles.forEach(style => {
            const card = document.createElement('div');
            card.className = 'style-card';
            card.innerHTML = `
                <span class="style-card-name">${style.name}</span>
                <span class="style-card-desc">${style.desc}</span>
            `;

            if (isMobile()) {
                card.addEventListener('click', () => {
                    showInfoModal(style.name, style.detail, style.tags, () => {
                        styleInput.value = style.tags;
                        if (style.exclude) excludeInput.value = style.exclude;
                    }, '스타일 적용');
                });
            } else {
                card.addEventListener('mouseenter', (e) => showTooltip(e, style.name, style.detail, style.tags));
                card.addEventListener('mousemove', moveTooltip);
                card.addEventListener('mouseleave', hideTooltip);
                card.addEventListener('click', () => {
                    styleInput.value = style.tags;
                    if (style.exclude) excludeInput.value = style.exclude;
                    showToast('스타일이 적용되었습니다.');
                });
            }
            fragment.appendChild(card);
        });
        quickStylesContainer.innerHTML = '';
        quickStylesContainer.appendChild(fragment);
    }

    // === Reference Render ===
    function renderReference(tab) {
        refContent.innerHTML = '';
        renderedAccordions = new Set();

        if (tab === 'tags') {
            renderTagsAccordion();
        } else if (tab === 'tips') {
            renderTips();
        } else if (tab === 'templates') {
            renderTemplates();
        }
    }

    function renderTagsAccordion() {
        const fragment = document.createDocumentFragment();
        const categories = activeCategory === 'all'
            ? SUNO_DATA.tags
            : SUNO_DATA.tags.filter(c => c.id === activeCategory);

        categories.forEach(cat => {
            const totalCount = countItems(cat);
            const details = document.createElement('details');
            details.className = 'tag-accordion';
            details.dataset.catId = cat.id;

            const summary = document.createElement('summary');
            summary.innerHTML = `
                <span class="accordion-title">${cat.category}</span>
                <span class="accordion-count">${totalCount}</span>
                <span class="accordion-chevron"></span>
            `;
            details.appendChild(summary);

            const body = document.createElement('div');
            body.className = 'accordion-body';
            details.appendChild(body);

            // Lazy render on first open
            details.addEventListener('toggle', () => {
                if (details.open && !renderedAccordions.has(cat.id)) {
                    renderAccordionContent(cat, body);
                    renderedAccordions.add(cat.id);
                }
            });

            fragment.appendChild(details);
        });

        refContent.appendChild(fragment);
    }

    function renderAccordionContent(cat, container) {
        if (cat.subcategories) {
            cat.subcategories.forEach(sub => {
                const subDetails = document.createElement('details');
                subDetails.className = 'tag-accordion sub-accordion';

                const subSummary = document.createElement('summary');
                subSummary.innerHTML = `
                    <span class="accordion-title">${sub.name}</span>
                    <span class="accordion-count">${sub.items.length}</span>
                    <span class="accordion-chevron"></span>
                `;
                subDetails.appendChild(subSummary);

                const subBody = document.createElement('div');
                subBody.className = 'accordion-body';
                subBody.appendChild(createTagGrid(sub.items, cat.defaultTarget));
                subDetails.appendChild(subBody);

                container.appendChild(subDetails);
            });
        } else if (cat.items) {
            container.appendChild(createTagGrid(cat.items, cat.defaultTarget));
        }
    }

    function createTagGrid(items, target) {
        const grid = document.createElement('div');
        grid.className = 'tag-grid';

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'style-card';
            card.dataset.tag = item.tag;
            card.dataset.detail = item.detail || '';
            card.dataset.target = target || 'lyric';
            card.innerHTML = `
                <span class="style-card-name">${item.tag}</span>
                <span class="style-card-desc">${item.desc}</span>
            `;
            grid.appendChild(card);
        });

        return grid;
    }

    // === Event Delegation for ALL cards in refContent ===
    // Click handler (tags, tips, templates 모두 처리)
    refContent.addEventListener('click', (e) => {
        const card = e.target.closest('.style-card');
        if (!card) return;
        // tag cards (dataset.tag 존재) vs tips/templates (dataset.tag 없음)는
        // 각 render 함수에서 개별 click 리스너로 처리하므로 여기선 tag cards만
        if (!card.dataset.tag) return;

        const tag = card.dataset.tag;
        const detail = card.dataset.detail;
        const target = card.dataset.target;

        if (isMobile()) {
            const actionLabel = target === 'style' ? '스타일에 추가' : '가사창에 추가';
            showInfoModal(tag, detail, null, () => {
                applyTag(tag, target);
            }, actionLabel);
        } else {
            applyTag(tag, target);
        }
    });

    // Desktop: tooltip on hover
    let currentHoverCard = null;

    refContent.addEventListener('mouseover', (e) => {
        if (isMobile()) return;
        const card = e.target.closest('.style-card');
        if (!card) {
            // 카드 밖으로 나감
            if (currentHoverCard) {
                currentHoverCard = null;
                hideTooltip();
            }
            return;
        }
        if (card === currentHoverCard) return;

        // 새 카드 진입
        currentHoverCard = card;
        const title = card.dataset.tag || card.querySelector('.style-card-name')?.textContent || '';
        const detail = card.dataset.detail || card.dataset.tipDetail || '';
        const tags = card.dataset.tags || '';
        showTooltip(e, title, detail, tags || null);
    });

    refContent.addEventListener('mousemove', (e) => {
        if (isMobile() || !currentHoverCard) return;
        moveTooltip(e);
    });

    // refContent를 완전히 벗어날 때만 숨김
    refContent.addEventListener('mouseleave', () => {
        if (isMobile()) return;
        currentHoverCard = null;
        hideTooltip();
    });

    // === Tag Apply Logic ===
    function applyTag(tag, target) {
        if (target === 'style') {
            const current = styleInput.value.trim();
            styleInput.value = current ? current + ', ' + tag : tag;
            showToast(`"${tag}" -> Style Prompt`);
            if (isMobile()) switchPanel('style');
        } else {
            insertAtCursor(lyricEditor, tag + '\n');
            showToast(`"${tag}" -> 가사창`);
            if (isMobile()) switchPanel('editor');
        }
    }

    // === Search / Filter ===
    function filterTags(query) {
        const q = query.toLowerCase();
        const results = searchIndex.filter(item =>
            item.tag.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            (item.detail && item.detail.toLowerCase().includes(q))
        );

        refContent.innerHTML = '';

        if (results.length === 0) {
            refContent.innerHTML = '<div class="no-results">검색 결과가 없습니다.</div>';
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'tag-grid';

        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'style-card';
            card.dataset.tag = item.tag;
            card.dataset.detail = item.detail || '';
            card.dataset.target = item.target || 'lyric';

            const highlightedTag = highlightText(item.tag, q);
            const highlightedDesc = highlightText(item.desc, q);

            card.innerHTML = `
                <span class="style-card-name">${highlightedTag}</span>
                <span class="style-card-desc">${highlightedDesc}</span>
            `;
            grid.appendChild(card);
        });

        refContent.appendChild(grid);
    }

    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // === Tips Render ===
    function renderTips() {
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
        grid.style.gap = '0.6rem';

        SUNO_DATA.tips.forEach(tip => {
            const el = document.createElement('div');
            el.className = 'style-card';
            el.style.cursor = 'help';
            el.dataset.tipDetail = tip.detail || '';
            el.innerHTML = `
                <span class="style-card-name" style="color: var(--primary-accent);">${tip.title}</span>
                <span class="style-card-desc">${tip.content}</span>
            `;

            if (isMobile()) {
                el.addEventListener('click', () => showInfoModal(tip.title, tip.detail));
            }
            // Desktop 툴팁은 refContent의 mouseover/mouseout 위임으로 처리
            grid.appendChild(el);
        });
        refContent.appendChild(grid);
    }

    // === Templates Render ===
    function renderTemplates() {
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
        grid.style.gap = '0.6rem';

        SUNO_DATA.templates.forEach(tpl => {
            const el = document.createElement('div');
            el.className = 'style-card';
            el.dataset.tipDetail = tpl.detail || '';
            el.innerHTML = `
                <span class="style-card-name">${tpl.name}</span>
                <span class="style-card-desc">클릭하여 적용</span>
            `;

            if (isMobile()) {
                el.addEventListener('click', () => {
                    showInfoModal(tpl.name, tpl.detail, null, () => {
                        lyricEditor.value = tpl.content;
                        if (tpl.exclude) excludeInput.value = tpl.exclude;
                        switchPanel('editor');
                    }, '템플릿 적용');
                });
            } else {
                // Desktop 툴팁은 refContent의 mouseover/mouseout 위임으로 처리
                el.addEventListener('click', () => {
                    lyricEditor.value = tpl.content;
                    if (tpl.exclude) excludeInput.value = tpl.exclude;
                    showToast('템플릿이 적용되었습니다.');
                });
            }
            grid.appendChild(el);
        });
        refContent.appendChild(grid);
    }

    // === Style Builder Toggle (Desktop) ===
    function initStyleToggle() {
        const toggle = document.getElementById('style-toggle');
        const section = toggle.closest('.style-section');

        toggle.addEventListener('click', () => {
            section.classList.toggle('collapsed');
        });
    }

    // === Mobile Bottom Nav ===
    function initMobileNav() {
        const nav = document.getElementById('mobile-nav');
        if (!nav) return;

        // Force mobile layout constraints
        if (isMobile()) {
            const sidebar = document.querySelector('.sidebar-content');
            if (sidebar) {
                sidebar.style.position = 'fixed';
                sidebar.style.top = '0';
                sidebar.style.left = '0';
                sidebar.style.right = '0';
                sidebar.style.bottom = '56px';
                sidebar.style.width = '100%';
                sidebar.style.overflow = 'hidden';
                sidebar.style.zIndex = '500';
                sidebar.style.pointerEvents = 'none';
            }
            // Let children receive events
            document.querySelectorAll('.sidebar-content > *').forEach(el => {
                el.style.pointerEvents = 'auto';
            });
            switchPanel('editor');
        }

        nav.addEventListener('click', (e) => {
            const btn = e.target.closest('.mobile-nav-btn');
            if (!btn) return;

            const panel = btn.dataset.panel;
            switchPanel(panel);
        });

        // Re-evaluate on resize
        window.addEventListener('resize', () => {
            if (!isMobile()) {
                // Desktop: show all panels
                document.querySelectorAll('[data-panel]').forEach(el => {
                    el.classList.remove('mobile-active');
                    el.style.display = '';
                });
            } else if (!document.querySelector('.mobile-active')) {
                switchPanel('editor');
            }
        });
    }

    function switchPanel(panel) {
        currentMobilePanel = panel;

        // Update nav buttons
        document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.panel === panel);
        });

        // Hide all panels and reset width
        document.querySelectorAll('.editor-section, .style-section, .reference-section').forEach(el => {
            el.classList.remove('mobile-active');
            el.style.width = '';
        });

        // Force width constraint for mobile panels
        const mobileWidth = window.innerWidth + 'px';

        // Show selected panel
        if (panel === 'editor') {
            document.querySelector('.editor-section').classList.add('mobile-active');
        } else if (panel === 'style') {
            document.querySelector('.style-section').classList.add('mobile-active');
        } else if (panel === 'tags') {
            const refSection = document.querySelector('.reference-section');
            refSection.classList.add('mobile-active');
            refSection.style.width = mobileWidth;
            // Ensure tags tab is active
            document.querySelectorAll('.ref-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.ref-tabs .tab-btn[data-tab="tags"]').classList.add('active');
            document.querySelector('.search-bar-wrapper').style.display = '';
            categoryChipsContainer.style.display = '';
            if (activeTab !== 'tags') {
                activeTab = 'tags';
                renderReference('tags');
            }
        } else if (panel === 'tools') {
            const refSection = document.querySelector('.reference-section');
            refSection.classList.add('mobile-active');
            refSection.style.width = mobileWidth;
            // Switch to tips tab
            document.querySelectorAll('.ref-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.ref-tabs .tab-btn[data-tab="tips"]').classList.add('active');
            document.querySelector('.search-bar-wrapper').style.display = 'none';
            categoryChipsContainer.style.display = 'none';
            if (activeTab !== 'tips') {
                activeTab = 'tips';
                renderReference('tips');
            }
        }
    }

    // === Helpers ===
    function countItems(cat) {
        if (cat.subcategories) {
            return cat.subcategories.reduce((sum, sub) => sum + sub.items.length, 0);
        }
        return cat.items ? cat.items.length : 0;
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
        navigator.clipboard.writeText(text).then(() => showToast(message));
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // === Tooltip ===
    let tooltipTimer;

    function showTooltip(e, title, body, tags) {
        clearTimeout(tooltipTimer);
        tooltip.innerHTML = `
            <div class="tooltip-title">${title}</div>
            <div class="tooltip-body">${body || '설명이 준비 중입니다.'}</div>
            ${tags ? `<div class="tooltip-tags">${tags}</div>` : ''}
        `;
        tooltip.style.display = 'block';
        requestAnimationFrame(() => tooltip.style.opacity = '1');
        moveTooltip(e);
    }

    function moveTooltip(e) {
        const pad = 16;
        let x = e.clientX + pad;
        let y = e.clientY + pad;
        const tw = 300;
        const th = tooltip.offsetHeight || 120;
        if (x + tw > window.innerWidth) x = e.clientX - tw - pad;
        if (y + th > window.innerHeight) y = e.clientY - th - pad;
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }

    function hideTooltip() {
        tooltip.style.opacity = '0';
        tooltipTimer = setTimeout(() => tooltip.style.display = 'none', 150);
    }

    // === Info Modal (Mobile Bottom Sheet) ===
    function showInfoModal(title, body, tags, actionCallback, actionLabel) {
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
            const btn = document.createElement('button');
            btn.className = 'info-modal-action-btn';
            btn.textContent = actionLabel || '적용하기';
            btn.addEventListener('click', () => {
                actionCallback();
                closeInfoModal();
            });
            actionsEl.appendChild(btn);
        }

        infoModal.classList.add('active');
    }

    // === AdSense ===
    function initAdSense() {
        if (typeof ADSENSE_CONFIG !== 'undefined') {
            const container = document.getElementById('main-ad-container');
            if (!container) return;

            setTimeout(() => {
                container.style.display = 'block';

                const ins = document.createElement('ins');
                ins.className = 'adsbygoogle';
                ins.style.display = 'block';
                ins.style.width = '100%';
                ins.setAttribute('data-ad-client', ADSENSE_CONFIG.client);
                ins.setAttribute('data-ad-slot', ADSENSE_CONFIG.slot);
                ins.setAttribute('data-ad-format', 'auto');
                ins.setAttribute('data-full-width-responsive', 'true');

                container.appendChild(ins);

                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});

                    let checkCount = 0;
                    const checkInterval = setInterval(() => {
                        if (ins.clientHeight > 0) clearInterval(checkInterval);
                        checkCount++;
                        if (checkCount > 20) clearInterval(checkInterval);
                    }, 100);
                } catch (e) {
                    console.error('AdSense push error:', e);
                    container.style.display = 'none';
                }
            }, 500);
        }
    }
});
