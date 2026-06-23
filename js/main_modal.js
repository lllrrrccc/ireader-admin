// Modal system & dropdown utilities
function openModal(modalId, name, parent) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    
    // 自动填充父级分类名称（添加二级分类）
    if (modalId === 'modal-add-sub-category' && name) {
        const parentInput = document.getElementById('sub-category-parent');
        if (parentInput) {
            parentInput.value = name;
        }
    }
    
    // 自动填充编辑基础分类名称（一级分类）
    if (modalId === 'modal-edit-base-category' && name) {
        const nameInput = document.getElementById('base-edit-name');
        if (nameInput) {
            nameInput.value = name;
        }
    }
    
    // 自动填充编辑二级分类名称和父分类
    if (modalId === 'modal-edit-sub-category') {
        if (name) {
            const nameInput = document.getElementById('sub-edit-name');
            if (nameInput) {
                nameInput.value = name;
            }
        }
        if (parent) {
            const parentInput = document.getElementById('sub-edit-parent');
            if (parentInput) {
                parentInput.value = parent;
            }
        }
    }
}


function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// 多选下拉框 — 切换显示并定位到触发器下方

function toggleDropdown(trigger, optsId) {
    const opts = document.getElementById(optsId);
    const rect = trigger.getBoundingClientRect();
    if (opts.style.display === 'block') {
        opts.style.display = 'none';
        // 移回原始容器
        if (opts._originalContainer && opts.parentElement !== opts._originalContainer) {
            opts._originalContainer.appendChild(opts);
        }
    } else {
        // 关闭其他已打开的下拉框
        document.querySelectorAll('.multiselect-options').forEach(d => {
            if (d.id !== optsId && d.style.display === 'block') {
                d.style.display = 'none';
                if (d._originalContainer && d.parentElement !== d._originalContainer) {
                    d._originalContainer.appendChild(d);
                }
            }
        });
        // 记录原始容器和触发器，并移出到 body 以突破 modal 限制
        if (!opts._originalContainer) {
            opts._originalContainer = opts.parentElement;
        }
        opts._originalTrigger = trigger;
        document.body.appendChild(opts);
        opts.style.width = rect.width + 'px';
        opts.style.left = rect.left + 'px';
        opts.style.top = (rect.bottom + 4) + 'px';
        opts.style.display = 'block';
    }
}

// 多选下拉框 — 根据选中项更新触发器文本

function updateGradeText(prefix) {
    const textEl = document.getElementById(prefix + '-text');
    const opts = document.getElementById(prefix + '-opts');
    const checked = opts.querySelectorAll('input[type="checkbox"]:checked');
    const values = Array.from(checked).map(cb => cb.parentElement.textContent.trim());
    textEl.textContent = values.length > 0 ? values.join('、') : '请选择匹配年级（可多选）';
    textEl.style.color = values.length > 0 ? 'var(--text-primary)' : 'var(--text-secondary)';
}

function updateTagText(prefix) {
    const textEl = document.getElementById(prefix + '-text');
    const opts = document.getElementById(prefix + '-opts');
    const checked = opts.querySelectorAll('input[type="checkbox"]:checked');
    const values = Array.from(checked).map(cb => cb.parentElement.textContent.trim());
    textEl.textContent = values.length > 0 ? values.join('、') : '选填';
    textEl.style.color = values.length > 0 ? 'var(--text-primary)' : 'var(--text-secondary)';
}

// 点击页面其他地方关闭下拉框并移回原始容器
document.addEventListener('click', function(e) {
    document.querySelectorAll('.multiselect-options').forEach(d => {
        if (d.style.display === 'block') {
            const trigger = d._originalTrigger;
            if (!trigger || (!trigger.contains(e.target) && !d.contains(e.target))) {
                d.style.display = 'none';
                if (d._originalContainer && d.parentElement !== d._originalContainer) {
                    d._originalContainer.appendChild(d);
                }
            }
        }
    });
});

// 初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function updateRadioText(prefix, value) {
    const textEl = document.getElementById(prefix + '-text');
    if (textEl) {
        textEl.textContent = value;
        textEl.style.color = 'var(--text-primary)';
    }
}

// ========== 批量新增书籍交互函数 ==========


