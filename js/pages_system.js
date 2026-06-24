// Auto-generated from pages.js
Object.assign(pageFunctions, {
platformOverview: () => `
<div class="page-title">
    <span>平台数据概览</span>
</div>

<div class="stat-cards" style="grid-template-columns:repeat(4,1fr);">
    <div class="stat-card">
        <span class="stat-value">32,944</span>
        <span class="stat-label">激活总设备数</span>
    </div>
    <div class="stat-card">
        <span class="stat-value">39,844</span>
        <span class="stat-label">使用中的学生数</span>
    </div>
    <div class="stat-card">
        <span class="stat-value">29,414</span>
        <span class="stat-label">绑定家长数</span>
    </div>
    <div class="stat-card">
        <span class="stat-value">329</span>
        <span class="stat-label">使用教师数</span>
    </div>
    <div class="stat-card">
        <span class="stat-value">8,453</span>
        <span class="stat-label">书籍总数</span>
    </div>
    <div class="stat-card">
        <span class="stat-value">8,062</span>
        <span class="stat-label">学生阅读书籍总量</span>
    </div>
    <div class="stat-card">
        <span class="stat-value">183,429</span>
        <span class="stat-label">学生总阅读时长(小时)</span>
    </div>
    <div class="stat-card">
        <span class="stat-value">1,053</span>
        <span class="stat-label">阅读任务总数</span>
    </div>
</div>

<div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
    <div class="card">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
            <span class="card-title">📈 设备数增长趋势</span>
            <div style="display:flex;gap:4px;">
                <button class="btn btn-sm btn-primary device-btn-month" style="padding:2px 8px;font-size:12px;">按月</button>
                <button class="btn btn-sm btn-secondary device-btn-day" style="padding:2px 8px;font-size:12px;">按日</button>
            </div>
        </div>
        <div class="card-body" style="padding:0;height:260px;">
            <div id="device-chart-container" style="width:100%;height:100%;"></div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
            <span class="card-title">👨‍🎓 使用学生增长趋势</span>
            <div style="display:flex;gap:4px;">
                <button class="btn btn-sm btn-primary student-btn-month" style="padding:2px 8px;font-size:12px;">按月</button>
                <button class="btn btn-sm btn-secondary student-btn-day" style="padding:2px 8px;font-size:12px;">按日</button>
            </div>
        </div>
        <div class="card-body" style="padding:0;height:260px;">
            <div id="student-chart-container" style="width:100%;height:100%;"></div>
        </div>
    </div>
</div>

<div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
    <div class="card">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
            <span class="card-title">📊 每日活跃设备数</span>
            <div style="display:flex;gap:8px;align-items:center;">
                <input type="date" class="form-input" style="width:130px;padding:4px 8px;font-size:12px;" value="2024-05-26">
                <span style="color:var(--text-muted);font-size:12px;">至</span>
                <input type="date" class="form-input" style="width:130px;padding:4px 8px;font-size:12px;" value="2024-06-24">
                <button class="btn btn-sm btn-primary" style="padding:4px 12px;font-size:12px;">查询</button>
            </div>
        </div>
        <div class="card-body" style="padding:0;height:400px;display:flex;align-items:flex-end;">
            <div id="active-device-chart-container" style="width:100%;height:340px;"></div>
        </div>
    </div>
    <div class="card">
        <div class="card-header"><span class="card-title">🔥 最近30天热门书籍Top10</span></div>
        <div class="card-body" style="overflow-x:auto;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="width:50px;">排名</th>
                        <th>书籍ID</th>
                        <th>书籍名称</th>
                        <th style="width:80px;">阅读次数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span style="color:var(--danger);font-weight:700;">1</span></td>
                        <td>B001</td>
                        <td>小王子</td>
                        <td>3,256</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--danger);font-weight:700;">2</span></td>
                        <td>B003</td>
                        <td>西游记</td>
                        <td>2,891</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--warning);font-weight:700;">3</span></td>
                        <td>B007</td>
                        <td>The Little Prince</td>
                        <td>2,543</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--text-muted);font-weight:700;">4</span></td>
                        <td>B002</td>
                        <td>夏洛的网</td>
                        <td>2,108</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--text-muted);font-weight:700;">5</span></td>
                        <td>B004</td>
                        <td>哈利·波特与魔法石</td>
                        <td>1,876</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--text-muted);font-weight:700;">6</span></td>
                        <td>B005</td>
                        <td>草房子</td>
                        <td>1,654</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--text-muted);font-weight:700;">7</span></td>
                        <td>B008</td>
                        <td>Charlotte's Web</td>
                        <td>1,432</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--text-muted);font-weight:700;">8</span></td>
                        <td>B006</td>
                        <td>狼王梦</td>
                        <td>1,215</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--text-muted);font-weight:700;">9</span></td>
                        <td>B009</td>
                        <td>宝葫芦的秘密</td>
                        <td>987</td>
                    </tr>
                    <tr>
                        <td><span style="color:var(--text-muted);font-weight:700;">10</span></td>
                        <td>B010</td>
                        <td>哈利·波特与密室</td>
                        <td>856</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`,


version: () => `
<div class="page-title">
    <span>版本管理</span>
    <button class="btn btn-primary" onclick="openModal('modal-add-version')"><i class="ri-add-line"></i> 发布版本</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>版本号</label>
        <input type="text" class="form-input" placeholder="如 2.3.1">
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>版本号</th>
                    <th>更新说明</th>
                    <th>发布时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>V001</td>
                    <td>v2.3.1</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">优化阅读体验，修复已知问题</td>
                    <td>2024-03-10</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V002</td>
                    <td>v2.3.0</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">新增AI导读功能，优化听力播放</td>
                    <td>2024-02-28</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V003</td>
                    <td>v1.8.2</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">修复系统稳定性问题</td>
                    <td>2024-02-15</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V004</td>
                    <td>v2.2.0</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">适配平板横屏模式，优化书架布局</td>
                    <td>2024-01-30</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V005</td>
                    <td>v2.1.3</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">修复部分设备闪退问题，提升稳定性</td>
                    <td>2024-01-15</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V006</td>
                    <td>v2.1.2</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">优化离线下载功能，修复下载失败问题</td>
                    <td>2024-01-02</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V007</td>
                    <td>v2.1.1</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">新增夜间模式，优化护眼体验</td>
                    <td>2023-12-20</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V008</td>
                    <td>v2.1.0</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">版本大更新，全新UI界面</td>
                    <td>2023-12-10</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V009</td>
                    <td>v2.0.0</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">全面升级，新增班级阅读管理功能</td>
                    <td>2023-11-25</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>V010</td>
                    <td>v1.9.2</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">修复若干Bug，提升系统性能</td>
                    <td>2023-11-10</td>
                    <td><span class="tag tag-green">已发布</span></td>
                    <td>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-version')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 24 条记录</span>
    <div class="pagination">
        <button class="btn btn-sm btn-secondary" disabled><i class="ri-arrow-left-s-line"></i></button>
        <button class="btn btn-sm btn-primary">1</button>
        <button class="btn btn-sm btn-secondary">2</button>
        <button class="btn btn-sm btn-secondary">3</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>

<div class="modal-overlay" id="modal-add-version">
    <div class="modal" style="max-width:520px;">
        <div class="modal-header">
            <span class="modal-title">发布新版本</span>
            <button class="modal-close" onclick="closeModal('modal-add-version')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">版本号</label>
                <input type="text" class="form-input" placeholder="如 2.3.2">
            </div>
            <div class="form-group">
                <label class="form-label">分发范围</label>
                <div style="display:flex;gap:16px;">
                    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                        <input type="radio" name="distribute-range" value="all" checked onchange="toggleDistributeRange(this)">
                        <span>所有设备</span>
                    </label>
                    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                        <input type="radio" name="distribute-range" value="specific" onchange="toggleDistributeRange(this)">
                        <span>指定设备</span>
                    </label>
                </div>
            </div>
            <div class="form-group" id="sn-input-group" style="display:none;">
                <label class="form-label">设备SN码</label>
                <textarea class="form-textarea" rows="4" placeholder="请输入设备SN码，回车隔开"></textarea>
                <p style="margin-top:4px;font-size:12px;color:var(--text-muted);">提示：回车隔开设备SN码</p>
            </div>
            <div class="form-group">
                <label class="form-label">更新说明</label>
                <textarea class="form-textarea" rows="4" placeholder="请输入更新说明..."></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">安装包</label>
                <div style="border:2px dashed var(--border);border-radius:8px;padding:24px;text-align:center;color:var(--text-muted);">
                    <i class="ri-upload-cloud-2-line" style="font-size:32px;"></i>
                    <p style="margin:4px 0;font-size:13px;">上传安装包文件</p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-version')">取消</button>
            <button class="btn btn-primary">确认发布</button>
        </div>
    </div>
</div>

<div class="modal-overlay" id="modal-view-version">
    <div class="modal" style="max-width:520px;">
        <div class="modal-header">
            <span class="modal-title">版本信息</span>
            <button class="modal-close" onclick="closeModal('modal-view-version')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">版本号</label>
                <input type="text" class="form-input" value="v2.3.1" readonly>
            </div>
            <div class="form-group">
                <label class="form-label">分发范围</label>
                <input type="text" class="form-input" value="所有设备" readonly>
            </div>
            <div class="form-group">
                <label class="form-label">更新说明</label>
                <textarea class="form-textarea" rows="4" readonly>优化阅读体验，修复已知问题</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">安装包</label>
                <div style="display:flex;align-items:center;gap:8px;padding:12px;border:1px solid var(--border);border-radius:8px;background:var(--bg);">
                    <i class="ri-file-zip-line" style="font-size:24px;color:var(--primary);"></i>
                    <div style="flex:1;">
                        <div style="font-size:14px;font-weight:500;">iReader_v2.3.1.apk</div>
                        <div style="font-size:12px;color:var(--text-muted);">48.5 MB</div>
                    </div>
                    <a href="#" class="btn btn-link btn-sm" style="color:var(--primary);"><i class="ri-download-line"></i> 下载</a>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-view-version')">关闭</button>
        </div>
    </div>
</div>
`,


permissions: () => `
<div class="page-title">
    <span>权限管理</span>
</div>

<div class="card">
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>角色名称</th>
                    <th>角色描述</th>
                    <th>用户数量</th>
                    <th>创建时间</th>
                    <th>状态</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>R001</td>
                    <td><span class="tag tag-red">超级管理员</span></td>
                    <td>拥有平台所有权限，可进行系统配置和管理</td>
                    <td>2</td>
                    <td>2023-01-01 08:00:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                </tr>
                <tr>
                    <td>R002</td>
                    <td><span class="tag tag-blue">管理员</span></td>
                    <td>无法新增超管账号，其他页面和功能均可操作</td>
                    <td>5</td>
                    <td>2023-01-15 09:30:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                </tr>
                <tr>
                    <td>R003</td>
                    <td><span class="tag tag-yellow">内容管理员</span></td>
                    <td>可以进行内容管理中的操作</td>
                    <td>8</td>
                    <td>2023-02-01 14:15:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 3 条记录</span>
    <div class="pagination">
        <button class="btn btn-sm btn-secondary" disabled><i class="ri-arrow-left-s-line"></i></button>
        <button class="btn btn-sm btn-primary">1</button>
        <button class="btn btn-sm btn-secondary" disabled><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>
`,


accounts: () => `
<div class="page-title">
    <span>后台账号</span>
    <button class="btn btn-primary" onclick="openModal('modal-add-account')"><i class="ri-add-line"></i> 新增账户</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>账户名称</label>
        <input type="text" class="form-input" placeholder="搜索账户">
    </div>
    <div class="filter-group">
        <label>角色</label>
        <select class="form-select">
            <option>全部</option>
            <option>超级管理员</option>
            <option>管理员</option>
            <option>内容管理员</option>
        </select>
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>正常</option>
            <option>停用</option>
        </select>
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
    </div>
</div>

<div class="card">
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>用户名</th>
                    <th>姓名</th>
                    <th>角色</th>
                    <th>注册时间</th>
                    <th>最后登录</th>
                    <th>状态</th>
                    <th style="width:200px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>24031501</td>
                    <td>admin</td>
                    <td>系统管理员</td>
                    <td><span class="tag tag-red">超级管理员</span></td>
                    <td>2024-03-15 08:30:15</td>
                    <td>2024-03-15 10:00</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
                <tr>
                    <td>24031401</td>
                    <td>operator1</td>
                    <td>运营小张</td>
                    <td><span class="tag tag-blue">管理员</span></td>
                    <td>2024-03-14 09:30:22</td>
                    <td>2024-03-14 16:30</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
                <tr>
                    <td>24031301</td>
                    <td>content1</td>
                    <td>内容小李</td>
                    <td><span class="tag tag-yellow">内容管理员</span></td>
                    <td>2024-03-13 10:15:08</td>
                    <td>2024-03-13 09:15</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
                <tr>
                    <td>24031201</td>
                    <td>operator2</td>
                    <td>运营小王</td>
                    <td><span class="tag tag-blue">管理员</span></td>
                    <td>2024-03-12 14:20:35</td>
                    <td>2024-03-12 14:20</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
                <tr>
                    <td>24031101</td>
                    <td>content2</td>
                    <td>内容小陈</td>
                    <td><span class="tag tag-yellow">内容管理员</span></td>
                    <td>2024-03-11 11:45:25</td>
                    <td>2024-03-11 11:45</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
                <tr>
                    <td>24031001</td>
                    <td>admin2</td>
                    <td>系统管理员2</td>
                    <td><span class="tag tag-red">超级管理员</span></td>
                    <td>2024-03-10 08:30:15</td>
                    <td>2024-03-10 08:30</td>
                    <td><span class="tag tag-red">停用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="toggleAccountStatus(this)"><i class="ri-check-line"></i> 启用</button>
                    </td>
                </tr>
                <tr>
                    <td>24030901</td>
                    <td>operator3</td>
                    <td>运营小刘</td>
                    <td><span class="tag tag-blue">管理员</span></td>
                    <td>2024-03-09 17:00:22</td>
                    <td>2024-03-09 17:00</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
                <tr>
                    <td>24030801</td>
                    <td>content3</td>
                    <td>内容小林</td>
                    <td><span class="tag tag-yellow">内容管理员</span></td>
                    <td>2024-03-08 10:15:08</td>
                    <td>2024-03-08 10:15</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
                <tr>
                    <td>24030701</td>
                    <td>operator4</td>
                    <td>运营小赵</td>
                    <td><span class="tag tag-blue">管理员</span></td>
                    <td>2024-03-07 09:20:15</td>
                    <td>2024-03-07 09:20</td>
                    <td><span class="tag tag-red">停用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="toggleAccountStatus(this)"><i class="ri-check-line"></i> 启用</button>
                    </td>
                </tr>
                <tr>
                    <td>24030601</td>
                    <td>content4</td>
                    <td>内容小黄</td>
                    <td><span class="tag tag-yellow">内容管理员</span></td>
                    <td>2024-03-06 14:30:42</td>
                    <td>2024-03-06 14:30</td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-edit-account')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-reset-password')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="toggleAccountStatus(this)"><i class="ri-forbid-line"></i> 停用</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 128 条记录</span>
    <div class="pagination">
        <button class="btn btn-sm btn-secondary" disabled><i class="ri-arrow-left-s-line"></i></button>
        <button class="btn btn-sm btn-primary">1</button>
        <button class="btn btn-sm btn-secondary">2</button>
        <button class="btn btn-sm btn-secondary">3</button>
        <button class="btn btn-sm btn-secondary">4</button>
        <button class="btn btn-sm btn-secondary">5</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>

<!-- 新增账号模态框 -->
<div class="modal-overlay" id="modal-add-account">
    <div class="modal" style="max-width:560px;">
        <div class="modal-header">
            <span class="modal-title">新增账户</span>
            <button class="modal-close" onclick="closeModal('modal-add-account')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">用户名 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" placeholder="请输入用户名">
            </div>
            <div class="form-group">
                <label class="form-label">姓名 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" placeholder="请输入姓名">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div class="form-group">
                    <label class="form-label">角色 <span style="color:var(--danger);">*</span></label>
                    <select class="form-select">
                        <option>超级管理员</option>
                        <option>管理员</option>
                        <option>内容管理员</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">初始密码 <span style="color:var(--danger);">*</span></label>
                    <input type="password" class="form-input" placeholder="请输入初始密码">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-account')">取消</button>
            <button class="btn btn-primary">确认创建</button>
        </div>
    </div>
</div>

<!-- 编辑账号模态框 -->
<div class="modal-overlay" id="modal-edit-account">
    <div class="modal" style="max-width:560px;">
        <div class="modal-header">
            <span class="modal-title">编辑账户</span>
            <button class="modal-close" onclick="closeModal('modal-edit-account')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">用户名 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" value="admin">
            </div>
            <div class="form-group">
                <label class="form-label">姓名 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" value="系统管理员">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div class="form-group">
                    <label class="form-label">角色 <span style="color:var(--danger);">*</span></label>
                    <select class="form-select">
                        <option selected>超级管理员</option>
                        <option>管理员</option>
                        <option>内容管理员</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">状态</label>
                <select class="form-select">
                    <option selected>正常</option>
                    <option>停用</option>
                </select>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-edit-account')">取消</button>
            <button class="btn btn-primary">保存修改</button>
        </div>
    </div>
</div>

<!-- 重置密码模态框 -->
<div class="modal-overlay" id="modal-reset-password">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">重置密码</span>
            <button class="modal-close" onclick="closeModal('modal-reset-password')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">ID</label>
                <input type="text" class="form-input" value="24031501" readonly style="background:var(--bg);color:var(--text-muted);">
            </div>
            <div class="form-group">
                <label class="form-label">用户名</label>
                <input type="text" class="form-input" value="admin" readonly style="background:var(--bg);color:var(--text-muted);">
            </div>
            <div class="form-group">
                <label class="form-label">姓名</label>
                <input type="text" class="form-input" value="系统管理员" readonly style="background:var(--bg);color:var(--text-muted);">
            </div>
            <div class="form-group">
                <label class="form-label">当前密码</label>
                <div style="position:relative;">
                    <input type="password" id="current-password" class="form-input" value="Admin@123" readonly style="background:var(--bg);color:var(--text-muted);padding-right:36px;">
                    <button type="button" onclick="togglePasswordVisibility('current-password', this)" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-muted);padding:4px;">
                        <i class="ri-eye-line"></i>
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">新密码 <span style="color:var(--danger);">*</span></label>
                <div style="position:relative;">
                    <input type="text" id="new-password" class="form-input" placeholder="请输入新密码">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-reset-password')">取消</button>
            <button class="btn btn-primary" onclick="showResetSuccess()">保存</button>
        </div>
    </div>
</div>

<!-- 重置密码成功提示 -->
<div class="modal-overlay" id="modal-reset-success">
    <div class="modal" style="max-width:360px;text-align:center;">
        <div class="modal-body" style="padding:40px 24px;">
            <i class="ri-check-circle-line" style="font-size:48px;color:var(--success);"></i>
            <p style="margin:16px 0 0 0;font-size:16px;font-weight:500;">重置密码成功</p>
        </div>
        <div class="modal-footer" style="justify-content:center;">
            <button class="btn btn-primary" onclick="closeModal('modal-reset-success')">确定</button>
        </div>
    </div>
</div>
`


});
