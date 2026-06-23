// Auto-generated from pages.js
Object.assign(pageFunctions, {
categories: () => `
<div class="page-title">
    <span>分类管理</span>
</div>

<div class="two-col">
    <div class="card">
        <div class="card-header">
            <span class="card-title">📚 用户年级</span>
            <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-grade-category')"><i class="ri-add-line"></i> 新建用户年级</button>
        </div>
        <div class="card-body">
            <div style="display:flex;flex-direction:column;gap:4px;">
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学1年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学2年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学3年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学4年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学5年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学6年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">初中1年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">初中2年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">初中3年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">高中一年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">高中二年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">高中三年级</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">大学生</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-folder-3-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">在职人员</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-grade-category')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-grade-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <span class="card-title">🏷️ 基础分类</span>
            <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-base-category')"><i class="ri-add-line"></i> 新建分类</button>
        </div>
        <div class="card-body">
            <div style="display:flex;flex-direction:column;gap:4px;">
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-marked-fill" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">中文</span>
                    <span class="tag tag-gray" style="margin-left:auto;">4</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-add-sub-category')" title="添加二级分类"><i class="ri-add-line"></i></button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-base-category', '中文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-base-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:36px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-mark-line" style="color:var(--text-muted);"></i>
                    <span>文学</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-sub-category', '文学', '中文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-sub-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:36px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-mark-line" style="color:var(--text-muted);"></i>
                    <span>艺术</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-sub-category', '艺术', '中文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-sub-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:36px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-mark-line" style="color:var(--text-muted);"></i>
                    <span>人文社科</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-sub-category', '人文社科', '中文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-sub-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:36px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-mark-line" style="color:var(--text-muted);"></i>
                    <span>自然科学</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-sub-category', '自然科学', '中文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-sub-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:12px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-marked-fill" style="color:var(--success);"></i>
                    <span style="font-weight:500;">英文</span>
                    <span class="tag tag-gray" style="margin-left:auto;">3</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-add-sub-category')" title="添加二级分类"><i class="ri-add-line"></i></button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-base-category', '英文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-base-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:36px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-mark-line" style="color:var(--text-muted);"></i>
                    <span>英语周报时文</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-sub-category', '英语周报时文', '英文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-sub-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:36px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-mark-line" style="color:var(--text-muted);"></i>
                    <span>外研社分级阅读</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-sub-category', '外研社分级阅读', '英文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-sub-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
                <div class="tree-item" style="padding-left:36px;">
                    <i class="ri-drag-move-fill" style="color:var(--text-muted);"></i>
                    <i class="ri-book-mark-line" style="color:var(--text-muted);"></i>
                    <span>原版名著</span>
                    <span class="tag tag-green" style="margin-left:auto;font-size:11px;">筛选可见</span>
                    <span class="actions" style="margin-left:8px;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-sub-category', '原版名著', '英文')" title="编辑"><i class="ri-edit-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-sub-category')" title="删除"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="toggleGradeVisibility(this)" title="切换可见"><i class="ri-eye-off-line"></i></button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 新建用户年级模态框 -->
<div class="modal-overlay" id="modal-add-grade-category">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">新建用户年级</span>
            <button class="modal-close" onclick="closeModal('modal-add-grade-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">用户年级</label>
                <input type="text" class="form-input" placeholder="如：小学1年级">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-grade-category')">取消</button>
            <button class="btn btn-primary">确认创建</button>
        </div>
    </div>
</div>

<!-- 编辑用户年级模态框 -->
<div class="modal-overlay" id="modal-edit-grade-category">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">编辑用户年级</span>
            <button class="modal-close" onclick="closeModal('modal-edit-grade-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">用户年级</label>
                <input type="text" class="form-input" value="小学1年级">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-edit-grade-category')">取消</button>
            <button class="btn btn-primary">保存修改</button>
        </div>
    </div>
</div>

<!-- 删除确认模态框 -->
<div class="modal-overlay" id="modal-delete-grade-category">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认删除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-grade-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:32px 20px;">
            <i class="ri-error-warning-line" style="font-size:48px;color:var(--danger);margin-bottom:16px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确定要删除该分类吗？</div>
            <div style="font-size:13px;color:var(--text-secondary);">删除后无法恢复，该分类下的书籍将变为未分类状态</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-grade-category')">取消</button>
            <button class="btn btn-danger">确认删除</button>
        </div>
    </div>
</div>

<!-- 新建基础一级分类模态框 -->
<div class="modal-overlay" id="modal-add-base-category">
    <div class="modal" style="max-width:520px;">
        <div class="modal-header">
            <span class="modal-title">新建基础分类</span>
            <button class="modal-close" onclick="closeModal('modal-add-base-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">分类名称</label>
                <input type="text" class="form-input" placeholder="如：中文、英文">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-base-category')">取消</button>
            <button class="btn btn-primary">确认创建</button>
        </div>
    </div>
</div>

<!-- 添加二级分类模态框 -->
<div class="modal-overlay" id="modal-add-sub-category">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">添加二级分类</span>
            <button class="modal-close" onclick="closeModal('modal-add-sub-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">父分类</label>
                <input type="text" class="form-input" value="小学1-2年级" readonly style="background:var(--bg);">
            </div>
            <div class="form-group">
                <label class="form-label">二级分类名称</label>
                <input type="text" class="form-input" placeholder="请输入二级分类名称">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-sub-category')">取消</button>
            <button class="btn btn-primary">确认添加</button>
        </div>
    </div>
</div>

<!-- 编辑基础一级分类模态框 -->
<div class="modal-overlay" id="modal-edit-base-category">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">编辑基础分类</span>
            <button class="modal-close" onclick="closeModal('modal-edit-base-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">分类名称</label>
                <input type="text" class="form-input" id="base-edit-name" placeholder="如：中文、英文">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-edit-base-category')">取消</button>
            <button class="btn btn-primary">保存修改</button>
        </div>
    </div>
</div>

<!-- 编辑基础二级分类模态框 -->
<div class="modal-overlay" id="modal-edit-sub-category">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">编辑二级分类</span>
            <button class="modal-close" onclick="closeModal('modal-edit-sub-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">父分类</label>
                <input type="text" class="form-input" id="sub-edit-parent" value="" readonly style="background:var(--bg);">
            </div>
            <div class="form-group">
                <label class="form-label">分类名称</label>
                <input type="text" class="form-input" id="sub-edit-name" placeholder="请输入分类名称">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-edit-sub-category')">取消</button>
            <button class="btn btn-primary">保存修改</button>
        </div>
    </div>
</div>

<!-- 删除基础一级分类确认模态框 -->
<div class="modal-overlay" id="modal-delete-base-category">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认删除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-base-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:32px 20px;">
            <i class="ri-error-warning-line" style="font-size:48px;color:var(--danger);margin-bottom:16px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确定要删除该一级分类吗？</div>
            <div style="font-size:13px;color:var(--text-secondary);">删除后该分类下的所有二级分类将变为未分类状态</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-base-category')">取消</button>
            <button class="btn btn-danger">确认删除</button>
        </div>
    </div>
</div>

<!-- 删除基础二级分类确认模态框 -->
<div class="modal-overlay" id="modal-delete-sub-category">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认删除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-sub-category')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:32px 20px;">
            <i class="ri-error-warning-line" style="font-size:48px;color:var(--danger);margin-bottom:16px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确定要删除该二级分类吗？</div>
            <div style="font-size:13px;color:var(--text-secondary);">删除后该分类下的书籍将变为未分类状态</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-sub-category')">取消</button>
            <button class="btn btn-danger">确认删除</button>
        </div>
    </div>
</div>

<!-- 标签管理卡片 -->
<div class="card">
    <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
        <span class="card-title">🏷️ 标签管理</span>
        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-tag')"><i class="ri-add-line"></i> 新增标签</button>
    </div>
    <div class="card-body">
        <table class="data-table">
            <thead>
                <tr>
                    <th>标签名称</th>
                    <th>关联书籍</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="tag" style="background:#FF6B35;color:#fff;">中小学指导书目</span></td>
                    <td>156</td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-tag')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-toggle-tag-hide')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td><span class="tag" style="background:#4A90D9;color:#fff;">教师推荐书目</span></td>
                    <td>89</td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-tag')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-toggle-tag-hide')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td><span class="tag" style="background:#9B59B6;color:#fff;">新课标必读</span></td>
                    <td>42</td>
                    <td><span class="tag tag-gray">隐藏</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-tag')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="openModal('modal-toggle-tag-show')"><i class="ri-eye-line"></i> 显示</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- 新增标签模态框 -->
<div class="modal-overlay" id="modal-add-tag">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">新增标签</span>
            <button class="modal-close" onclick="closeModal('modal-add-tag')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">标签名称</label>
                <input type="text" class="form-input" placeholder="如：新课标必读">
            </div>
            <div class="form-group">
                <label class="form-label">初始状态</label>
                <select class="form-select">
                    <option selected>可见</option>
                    <option>隐藏</option>
                </select>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-tag')">取消</button>
            <button class="btn btn-primary">确认创建</button>
        </div>
    </div>
</div>

<!-- 编辑标签模态框 -->
<div class="modal-overlay" id="modal-edit-tag">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">编辑标签</span>
            <button class="modal-close" onclick="closeModal('modal-edit-tag')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">标签名称</label>
                <input type="text" class="form-input" value="中小学指导书目">
            </div>
            <div class="form-group">
                <label class="form-label">当前状态</label>
                <select class="form-select">
                    <option selected>可见</option>
                    <option>隐藏</option>
                </select>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-edit-tag')">取消</button>
            <button class="btn btn-primary">保存修改</button>
        </div>
    </div>
</div>

<!-- 隐藏标签确认模态框 -->
<div class="modal-overlay" id="modal-toggle-tag-hide">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认隐藏</span>
            <button class="modal-close" onclick="closeModal('modal-toggle-tag-hide')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-off-line" style="font-size:48px;color:var(--warning);margin-bottom:16px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确定要隐藏该标签吗？</div>
            <div style="font-size:13px;color:var(--text-secondary);">隐藏后标签将不在前端展示，但已关联的书籍不受影响</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-toggle-tag-hide')">取消</button>
            <button class="btn btn-primary">确认隐藏</button>
        </div>
    </div>
</div>

<!-- 显示标签确认模态框 -->
<div class="modal-overlay" id="modal-toggle-tag-show">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认显示</span>
            <button class="modal-close" onclick="closeModal('modal-toggle-tag-show')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-line" style="font-size:48px;color:var(--success);margin-bottom:16px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确定要显示该标签吗？</div>
            <div style="font-size:13px;color:var(--text-secondary);">显示后标签将在前端正常展示给用户</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-toggle-tag-show')">取消</button>
            <button class="btn btn-primary">确认显示</button>
        </div>
    </div>
</div>

`
,




});
