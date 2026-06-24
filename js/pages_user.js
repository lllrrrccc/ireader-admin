Object.assign(pageFunctions, {
students: () => `
<div class="page-title">
    <span>学生管理</span>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>学生ID</label>
        <input type="text" class="form-input" placeholder="输入学生ID">
    </div>
    <div class="filter-group">
        <label>设备SN码</label>
        <input type="text" class="form-input" placeholder="输入设备SN码">
    </div>
    <div class="filter-group">
        <label>年级</label>
        <select class="form-select">
            <option>全部</option>
            <option>小学1-2年级</option>
            <option>小学3-4年级</option>
            <option>小学5-6年级</option>
            <option>初中</option>
            <option>高中</option>
        </select>
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>使用中</option>
            <option>已终止</option>
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
                    <th>学生ID</th>
                    <th>用户ID</th>
                    <th>SN码</th>
                    <th>昵称</th>
                    <th>年级</th>
                    <th>状态</th>
                    <th>开始使用时间</th>
                    <th>终止使用时间</th>
                    <th style="width:220px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>26AA0001</td>
                    <td>IRP20240001-01</td>
                    <td>IRP20240001</td>
                    <td>张三</td>
                    <td>小学三年级</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>2023-09-01 08:30:15</td>
                    <td>—</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
                <tr>
                    <td>26AA0002</td>
                    <td>IRP20240001-02</td>
                    <td>IRP20240001</td>
                    <td>李四</td>
                    <td>小学三年级</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>2023-09-05 09:15:22</td>
                    <td>—</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
                <tr>
                    <td>26AB0001</td>
                    <td>IRP20240002-01</td>
                    <td>IRP20240002</td>
                    <td>王五</td>
                    <td>小学四年级</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>2023-09-10 10:05:08</td>
                    <td>—</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
                <tr>
                    <td>26AB0002</td>
                    <td>IRP20240001-01</td>
                    <td>IRP20240003</td>
                    <td>赵六</td>
                    <td>小学五年级</td>
                    <td><span class="tag tag-red">已终止</span></td>
                    <td>2023-09-12 14:20:35</td>
                    <td>2024-01-15 16:45:00</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
                <tr>
                    <td>26AC0001</td>
                    <td>IRP20240004-01</td>
                    <td>IRP20240004</td>
                    <td>钱七</td>
                    <td>小学六年级</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>2023-09-15 11:30:45</td>
                    <td>—</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
                <tr>
                    <td>26AC0002</td>
                    <td>IRP20240005-01</td>
                    <td>IRP20240005</td>
                    <td>孙八</td>
                    <td>小学二年级</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>2023-09-20 08:15:10</td>
                    <td>—</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
                <tr>
                    <td>26AD0001</td>
                    <td>IRP20240006-01</td>
                    <td>IRP20240006</td>
                    <td>周九</td>
                    <td>小学四年级</td>
                    <td><span class="tag tag-red">已终止</span></td>
                    <td>2023-10-01 09:00:00</td>
                    <td>2024-02-20 15:30:00</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
                <tr>
                    <td>26AD0002</td>
                    <td>IRP20240007-01</td>
                    <td>IRP20240007</td>
                    <td>吴十</td>
                    <td>小学五年级</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>2023-10-05 13:45:25</td>
                    <td>—</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-stop-student')"><i class="ri-forbid-line"></i> 终止使用</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 1,256 条记录</span>
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

<!-- 编辑学生模态框 -->
<div class="modal-overlay" id="modal-edit-student">
    <div class="modal" style="max-width:560px;">
        <div class="modal-header">
            <span class="modal-title">编辑学生</span>
            <button class="modal-close" onclick="closeModal('modal-edit-student')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div class="form-group">
                    <label class="form-label">昵称 <span style="color:var(--danger);">*</span></label>
                    <input type="text" class="form-input" value="张三">
                </div>
                <div class="form-group">
                    <label class="form-label">年级 <span style="color:var(--danger);">*</span></label>
                    <select class="form-select">
                        <option>小学1-2年级</option>
                        <option>小学3-4年级</option>
                        <option selected>小学5-6年级</option>
                        <option>初中</option>
                        <option>高中</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">设备SN码 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" value="IRP20240001">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-edit-student')">取消</button>
            <button class="btn btn-primary">保存修改</button>
        </div>
    </div>
</div>

<!-- 终止使用确认模态框 -->
<div class="modal-overlay" id="modal-stop-student">
    <div class="modal" style="max-width:420px;">
        <div class="modal-header">
            <span class="modal-title">终止使用确认</span>
            <button class="modal-close" onclick="closeModal('modal-stop-student')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <p style="margin:0;color:var(--text);">终止使用后，该学生将从阅读端删除。此操作不可逆，是否确认？</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-stop-student')">取消</button>
            <button class="btn btn-danger">确认终止</button>
        </div>
    </div>
</div>
`,


studentDetail: () => `
<button class="btn btn-secondary" style="margin-bottom:16px;" onclick="navigateTo('students')"><i class="ri-arrow-left-line"></i> 返回学生列表</button>

<div class="card">
    <div class="card-header"><span class="card-title">👤 基本信息</span></div>
    <div class="card-body">
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:16px;font-size:13px;">
            <div><span style="color:var(--text-muted);">学生ID：</span>26AA0001</div>
            <div><span style="color:var(--text-muted);">用户ID：</span>IRP20240001-01</div>
            <div><span style="color:var(--text-muted);">昵称：</span>张三</div>
            <div><span style="color:var(--text-muted);">年级：</span>小学三年级</div>
            <div><span style="color:var(--text-muted);">状态：</span><span class="tag tag-green">使用中</span></div>
            <div><span style="color:var(--text-muted);">设备SN：</span>IRP20240001</div>
            <div><span style="color:var(--text-muted);">开始使用时间：</span>2023-09-01</div>
            <div><span style="color:var(--text-muted);">最近启动：</span>2024-03-15</div>
        </div>
    </div>
</div>

<div style="display:flex;gap:8px;margin-bottom:16px;">
    <button class="btn btn-sm btn-primary" id="tab-btn-reading" onclick="switchStudentTab('reading')">阅读数据</button>
    <button class="btn btn-sm btn-secondary" id="tab-btn-english" onclick="switchStudentTab('english')">英语学习</button>
    <button class="btn btn-sm btn-secondary" id="tab-btn-tasks" onclick="switchStudentTab('tasks')">任务</button>
    <button class="btn btn-sm btn-secondary" id="tab-btn-logs" onclick="switchStudentTab('logs')">操作记录</button>
</div>

<div class="card" id="tab-reading">
    <div class="card-header"><span class="card-title">📊 阅读数据</span></div>
    <div class="card-body">
        <div class="stat-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-bottom:20px;">
            <div class="stat-card">
                <div class="stat-value">36.5h</div>
                <div class="stat-label">累计阅读时长</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">12</div>
                <div class="stat-label">读完本数</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">86</div>
                <div class="stat-label">累计天数</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">8</div>
                <div class="stat-label">笔记数量</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">3</div>
                <div class="stat-label">读后感</div>
            </div>
        </div>
        <div style="overflow-x:auto;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>书名</th>
                        <th>阅读状态</th>
                        <th>进度</th>
                        <th>已读页数</th>
                        <th>总页数</th>
                        <th>加入书架</th>
                        <th>最后阅读</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>小王子</td>
                        <td><span class="tag tag-green">已读完</span></td>
                        <td>100%</td>
                        <td>120</td>
                        <td>120</td>
                        <td><span class="tag tag-green">已加入</span></td>
                        <td>2024-03-15</td>
                    </tr>
                    <tr>
                        <td>夏洛的网</td>
                        <td><span class="tag tag-blue">阅读中</span></td>
                        <td>65%</td>
                        <td>130</td>
                        <td>200</td>
                        <td><span class="tag tag-green">已加入</span></td>
                        <td>2024-03-14</td>
                    </tr>
                    <tr>
                        <td>西游记</td>
                        <td><span class="tag tag-blue">阅读中</span></td>
                        <td>12%</td>
                        <td>96</td>
                        <td>800</td>
                        <td><span class="tag tag-gray">未加入</span></td>
                        <td>2024-03-15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<div class="card" id="tab-english" style="display:none;">
    <div class="card-header"><span class="card-title">📝 英语学习数据</span></div>
    <div class="card-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
            <div class="stat-card" style="padding:12px;">
                <div class="stat-value">128</div>
                <div class="stat-label">累计背词</div>
                <div style="font-size:12px;line-height:1.6;margin-top:8px;color:var(--text-muted);">
                    <div>当前词库：小学3年级词库</div>
                    <div>掌握进度：86 / 128（67%）</div>
                    <div>最近学习：2024-03-15 13:30:23</div>
                </div>
            </div>
            <div class="stat-card" style="padding:12px;">
                <div class="stat-value">24.5h</div>
                <div class="stat-label">听力总时长</div>
                <div style="font-size:12px;line-height:1.6;margin-top:8px;color:var(--text-muted);">
                    <div>最近听力：The Little Prince - Chapter 1</div>
                    <div>最近听力时间：2024-03-15 14:25:18</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card" id="tab-tasks" style="display:none;">
    <div class="card-header"><span class="card-title">📋 任务</span></div>
    <div class="card-body">
        <table class="data-table">
            <thead>
                <tr>
                    <th>任务名称</th>
                    <th>关联书籍</th>
                    <th>截止时间</th>
                    <th>完成状态</th>
                    <th>完成时间</th>
                    <th>阅读进度</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>三年级第二学期课外阅读</td>
                    <td>《小王子》《草房子》</td>
                    <td>2024-06-15</td>
                    <td><span class="tag tag-green">已完成</span></td>
                    <td>2024-06-10</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>暑期必读书目</td>
                    <td>《城南旧事》</td>
                    <td>2024-08-20</td>
                    <td><span class="tag tag-blue">进行中</span></td>
                    <td>—</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>寒假阅读挑战</td>
                    <td>《西游记》《夏洛的网》</td>
                    <td>2024-02-28</td>
                    <td><span class="tag tag-red">已逾期</span></td>
                    <td>—</td>
                    <td>30%</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card" id="tab-logs" style="display:none;">
    <div class="card-header"><span class="card-title">🎯 操作记录</span></div>
    <div class="card-body" style="font-size:13px;line-height:1.8;">
        <div><span style="color:var(--text-muted);">2024-03-15 14:30:25</span> 阅读《小王子》第3章</div>
        <div><span style="color:var(--text-muted);">2024-03-15 14:28:10</span> AI 导读《小王子》第3章</div>
        <div><span style="color:var(--text-muted);">2024-03-15 14:25:18</span> 播放听力 The Little Prince - Chapter 1</div>
        <div><span style="color:var(--text-muted);">2024-03-15 13:30:23</span> 学习 20 个单词</div>
        <div><span style="color:var(--text-muted);">2024-03-15 13:15:07</span> 复习 15 个单词</div>
        <div><span style="color:var(--text-muted);">2024-03-15 12:45:33</span> 添加笔记《夏洛的网》第5章</div>
        <div><span style="color:var(--text-muted);">2024-03-15 11:20:18</span> AI 讲解《夏洛的网》第5章</div>
        <div><span style="color:var(--text-muted);">2024-03-15 10:55:42</span> AI 翻译《夏洛的网》第5章</div>
        <div><span style="color:var(--text-muted);">2024-03-15 10:12:00</span> 添加读后感《小王子》</div>
        <div><span style="color:var(--text-muted);">2024-03-14 16:45:22</span> 进入听力学习</div>
        <div><span style="color:var(--text-muted);">2024-03-14 16:30:15</span> 进入单词学习/复习</div>
        <div><span style="color:var(--text-muted);">2024-03-14 09:20:05</span> 添加笔记《西游记》第12章</div>
        <div><span style="color:var(--text-muted);">2024-03-13 08:15:30</span> 启动机器</div>
        <div><span style="color:var(--text-muted);">2024-03-13 08:00:00</span> 用户激活</div>
    </div>
</div>

<script>
function switchStudentTab(tabName) {
    const tabs = ['reading', 'english', 'tasks', 'logs'];
    tabs.forEach(t => {
        const content = document.getElementById('tab-' + t);
        const btn = document.getElementById('tab-btn-' + t);
        if (content) {
            content.style.display = (t === tabName) ? 'block' : 'none';
        }
        if (btn) {
            btn.className = (t === tabName) ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-secondary';
        }
    });
}

`,


teachers: () => `
<div class="page-title">
    <span>教师管理</span>
    <button class="btn btn-primary" onclick="openModal('modal-add-teacher')"><i class="ri-add-line"></i> 新增教师</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>姓名</label>
        <input type="text" class="form-input" placeholder="输入教师姓名">
    </div>
    <div class="filter-group">
        <label>手机号</label>
        <input type="text" class="form-input" placeholder="输入手机号">
    </div>
    <div class="filter-group">
        <label>年级</label>
        <select class="form-select">
            <option>全部</option>
            <option>小学1-2年级</option>
            <option>小学3-4年级</option>
            <option>小学5-6年级</option>
            <option>初中</option>
            <option>高中</option>
        </select>
    </div>
    <div class="filter-group">
        <label>学科</label>
        <select class="form-select">
            <option>全部</option>
            <option>语文</option>
            <option>英语</option>
            <option>数学</option>
            <option>其他</option>
        </select>
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>启用</option>
            <option>禁用</option>
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
                    <th>教师ID</th>
                    <th>手机号(账号)</th>
                    <th>姓名</th>
                    <th>学校</th>
                    <th>年级</th>
                    <th>学科</th>
                    <th>注册时间</th>
                    <th>状态</th>
                    <th style="width:280px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>230820T01</td>
                    <td>138****1234</td>
                    <td>王老师</td>
                    <td>北京市第一实验小学</td>
                    <td>小学三年级</td>
                    <td>英语</td>
                    <td>2023-08-20 10:15:30</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="copyTeacherLink()"><i class="ri-links-line"></i> 复制登录信息</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('teacherDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-reset-teacher-pwd')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-teacher')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>230901T01</td>
                    <td>139****5678</td>
                    <td>李老师</td>
                    <td>北京市第一实验小学</td>
                    <td>小学五年级</td>
                    <td>语文</td>
                    <td>2023-09-01 09:00:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="copyTeacherLink()"><i class="ri-links-line"></i> 复制登录信息</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('teacherDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-reset-teacher-pwd')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-teacher')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>230915T01</td>
                    <td>137****9012</td>
                    <td>张老师</td>
                    <td>北京市第二实验中学</td>
                    <td>初中</td>
                    <td>英语</td>
                    <td>2023-09-15 14:30:45</td>
                    <td><span class="tag tag-red">禁用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="copyTeacherLink()"><i class="ri-links-line"></i> 复制登录信息</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('teacherDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-reset-teacher-pwd')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="openModal('modal-enable-teacher')"><i class="ri-check-line"></i> 启用</button>
                    </td>
                </tr>
                <tr>
                    <td>231005T01</td>
                    <td>136****3456</td>
                    <td>刘老师</td>
                    <td>北京市第一实验小学</td>
                    <td>小学四年级</td>
                    <td>数学</td>
                    <td>2023-10-05 11:20:10</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="copyTeacherLink()"><i class="ri-links-line"></i> 复制登录信息</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('teacherDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-reset-teacher-pwd')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-teacher')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>231020T01</td>
                    <td>135****7890</td>
                    <td>陈老师</td>
                    <td>北京市第二实验中学</td>
                    <td>高中</td>
                    <td>英语</td>
                    <td>2023-10-20 08:45:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="copyTeacherLink()"><i class="ri-links-line"></i> 复制登录信息</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('teacherDetail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-reset-teacher-pwd')"><i class="ri-lock-password-line"></i> 重置密码</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-teacher')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 86 条记录</span>
    <div class="pagination">
        <button class="btn btn-sm btn-secondary" disabled><i class="ri-arrow-left-s-line"></i></button>
        <button class="btn btn-sm btn-primary">1</button>
        <button class="btn btn-sm btn-secondary">2</button>
        <button class="btn btn-sm btn-secondary">3</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>

<!-- 新增教师模态框 -->
<div class="modal-overlay" id="modal-add-teacher">
    <div class="modal" style="max-width:560px;">
        <div class="modal-header">
            <span class="modal-title">新增教师</span>
            <button class="modal-close" onclick="closeModal('modal-add-teacher')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">手机号(账号) <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" placeholder="请输入手机号">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div class="form-group">
                    <label class="form-label">姓名 <span style="color:var(--danger);">*</span></label>
                    <input type="text" class="form-input" placeholder="请输入姓名">
                </div>
                <div class="form-group">
                    <label class="form-label">学科</label>
                    <select class="form-select">
                        <option>请选择</option>
                        <option>语文</option>
                        <option selected>英语</option>
                        <option>数学</option>
                        <option>其他</option>
                    </select>
                </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div class="form-group">
                    <label class="form-label">年级</label>
                    <select class="form-select">
                        <option>请选择</option>
                        <option>小学1-2年级</option>
                        <option>小学3-4年级</option>
                        <option selected>小学5-6年级</option>
                        <option>初中</option>
                        <option>高中</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">学校</label>
                    <input type="text" class="form-input" placeholder="请输入学校">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">初始密码 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" value="EWidear1983">
            </div>
            <div style="padding:8px;background:var(--bg);border-radius:4px;font-size:12px;color:var(--text-muted);">
                <i class="ri-information-line"></i> 支持批量导入：可先下载模板，填写后上传
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-teacher')">取消</button>
            <button class="btn btn-primary">确认创建</button>
        </div>
    </div>
</div>

<!-- 重置密码模态框 -->
<div class="modal-overlay" id="modal-reset-teacher-pwd">
    <div class="modal" style="max-width:420px;">
        <div class="modal-header">
            <span class="modal-title">重置教师密码</span>
            <button class="modal-close" onclick="closeModal('modal-reset-teacher-pwd')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">新密码 <span style="color:var(--danger);">*</span></label>
                <input type="password" class="form-input" placeholder="请输入新密码">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-reset-teacher-pwd')">取消</button>
            <button class="btn btn-primary">确认重置</button>
        </div>
    </div>
</div>

<!-- 禁用教师确认模态框 -->
<div class="modal-overlay" id="modal-disable-teacher">
    <div class="modal" style="max-width:420px;">
        <div class="modal-header">
            <span class="modal-title">禁用账号确认</span>
            <button class="modal-close" onclick="closeModal('modal-disable-teacher')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <p style="margin:0;color:var(--text);">禁用后教师将无法登录，是否确认？</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-disable-teacher')">取消</button>
            <button class="btn btn-danger">确认禁用</button>
        </div>
    </div>
</div>

<!-- 启用教师确认模态框 -->
<div class="modal-overlay" id="modal-enable-teacher">
    <div class="modal" style="max-width:420px;">
        <div class="modal-header">
            <span class="modal-title">启用账号确认</span>
            <button class="modal-close" onclick="closeModal('modal-enable-teacher')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <p style="margin:0;color:var(--text);">启用后教师可正常登录，是否确认？</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-enable-teacher')">取消</button>
            <button class="btn btn-primary">确认启用</button>
        </div>
    </div>
</div>
`,


teacherDetail: () => `
<button class="btn btn-secondary" style="margin-bottom:16px;" onclick="navigateTo('teachers')"><i class="ri-arrow-left-line"></i> 返回教师列表</button>

<div class="card">
    <div class="card-header"><span class="card-title">👤 基本信息</span></div>
    <div class="card-body">
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:16px;font-size:13px;">
            <div><span style="color:var(--text-muted);">教师ID：</span>T001</div>
            <div><span style="color:var(--text-muted);">手机号：</span>138****1234</div>
            <div><span style="color:var(--text-muted);">姓名：</span>王老师</div>
            <div><span style="color:var(--text-muted);">学校：</span>北京市第一实验小学</div>
            <div><span style="color:var(--text-muted);">年级：</span>小学三年级</div>
            <div><span style="color:var(--text-muted);">学科：</span>英语</div>
            <div><span style="color:var(--text-muted);">注册时间：</span>2023-08-20 10:15:30</div>
            <div><span style="color:var(--text-muted);">状态：</span><span class="tag tag-green">启用</span></div>
        </div>
    </div>
</div>

<div style="display:flex;gap:8px;margin-bottom:16px;">
    <button class="btn btn-sm btn-primary" id="tab-btn-classes" onclick="switchTeacherTab('classes')">班级列表</button>
    <button class="btn btn-sm btn-secondary" id="tab-btn-tasks" onclick="switchTeacherTab('tasks')">任务列表</button>
</div>

<div class="card" id="tab-classes">
    <div class="card-header"><span class="card-title">🏫 管理班级</span></div>
    <div class="card-body">
        <table class="data-table">
            <thead>
                <tr>
                    <th>班级名称</th>
                    <th>学生人数</th>
                    <th>创建时间</th>
                    <th>状态</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>三(1)班</td>
                    <td>42</td>
                    <td>2023-09-01 08:00:00</td>
                    <td><span class="tag tag-green">正常</span></td>
                </tr>
                <tr>
                    <td>三(2)班</td>
                    <td>38</td>
                    <td>2023-09-01 08:00:00</td>
                    <td><span class="tag tag-green">正常</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card" id="tab-tasks" style="display:none;">
    <div class="card-header"><span class="card-title">📋 任务列表</span></div>
    <div class="card-body">
        <table class="data-table">
            <thead>
                <tr>
                    <th>任务名称</th>
                    <th>关联书籍</th>
                    <th>截止时间</th>
                    <th>覆盖班级</th>
                    <th>完成状态</th>
                    <th>完成率</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>三年级第二学期课外阅读</td>
                    <td>《小王子》《草房子》</td>
                    <td>2024-06-15</td>
                    <td>三(1)班, 三(2)班</td>
                    <td><span class="tag tag-green">进行中</span></td>
                    <td>78%</td>
                </tr>
                <tr>
                    <td>暑期必读书目</td>
                    <td>《城南旧事》</td>
                    <td>2024-08-20</td>
                    <td>三(1)班, 三(2)班</td>
                    <td><span class="tag tag-gray">未开始</span></td>
                    <td>0%</td>
                </tr>
                <tr>
                    <td>寒假阅读挑战</td>
                    <td>《西游记》《夏洛的网》</td>
                    <td>2024-02-28</td>
                    <td>三(1)班</td>
                    <td><span class="tag tag-green">已完成</span></td>
                    <td>100%</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`, 


parents: () => `
<div class="page-title" style="display:flex;justify-content:space-between;align-items:center;">
    <span>家长管理</span>
    <button class="btn btn-primary" onclick="navigateTo('bindRecords')"><i class="ri-file-list-line"></i> 绑定记录</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>家长ID</label>
        <input type="text" class="form-input" placeholder="输入家长ID">
    </div>
    <div class="filter-group">
        <label>手机号</label>
        <input type="text" class="form-input" placeholder="输入家长手机号">
    </div>
    <div class="filter-group">
        <label>绑定SN码</label>
        <input type="text" class="form-input" placeholder="输入设备SN码">
    </div>
    <div class="filter-group">
        <label>绑定时间</label>
        <input type="date" class="form-input">
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>正常</option>
            <option>已解绑</option>
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
                    <th>家长ID</th>
                    <th>手机号</th>
                    <th>注册时间</th>
                    <th>绑定学员数</th>
                    <th>绑定设备数</th>
                    <th>状态</th>
                    <th style="width:200px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>230901P001</td>
                    <td>
                        <span class="phone-text" data-masked="138****0001" data-full="13812340001">138****0001</span>
                        <button class="btn btn-link btn-sm" style="padding:0 4px;margin-left:4px;" onclick="toggleParentPhone(this)"><i class="ri-eye-line"></i></button>
                    </td>
                    <td>2023-09-01 10:15:30</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>2 位学员</span>
                            <div style="font-size:12px;color:var(--text-muted);">
                                <div>26AA0001 / IRP20240001-01 / 张三</div>
                                <div>26AA0002 / IRP20240001-02 / 李四</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 台设备</span>
                            <div style="font-size:12px;color:var(--text-muted);">IRP20240001</div>
                        </div>
                    </td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-parent-detail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-unbind-parent')"><i class="ri-link-unlink-m-line"></i> 解绑</button>
                    </td>
                </tr>
                <tr>
                    <td>230905P002</td>
                    <td>
                        <span class="phone-text" data-masked="139****0002" data-full="13912340002">139****0002</span>
                        <button class="btn btn-link btn-sm" style="padding:0 4px;margin-left:4px;" onclick="toggleParentPhone(this)"><i class="ri-eye-line"></i></button>
                    </td>
                    <td>2023-09-05 14:20:18</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 位学员</span>
                            <div style="font-size:12px;color:var(--text-muted);">26AB0001 / IRP20240002-01 / 王五</div>
                        </div>
                    </td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 台设备</span>
                            <div style="font-size:12px;color:var(--text-muted);">IRP20240002</div>
                        </div>
                    </td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-parent-detail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-unbind-parent')"><i class="ri-link-unlink-m-line"></i> 解绑</button>
                    </td>
                </tr>
                <tr>
                    <td>230910P003</td>
                    <td>
                        <span class="phone-text" data-masked="137****0003" data-full="13712340003">137****0003</span>
                        <button class="btn btn-link btn-sm" style="padding:0 4px;margin-left:4px;" onclick="toggleParentPhone(this)"><i class="ri-eye-line"></i></button>
                    </td>
                    <td>2023-09-10 09:05:42</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 位学员</span>
                            <div style="font-size:12px;color:var(--text-muted);">26AC0001 / IRP20240004-01 / 钱七</div>
                        </div>
                    </td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 台设备</span>
                            <div style="font-size:12px;color:var(--text-muted);">IRP20240004</div>
                        </div>
                    </td>
                    <td><span class="tag tag-green">正常</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-parent-detail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-unbind-parent')"><i class="ri-link-unlink-m-line"></i> 解绑</button>
                    </td>
                </tr>
                <tr>
                    <td>230912P004</td>
                    <td>
                        <span class="phone-text" data-masked="136****0004" data-full="13612340004">136****0004</span>
                        <button class="btn btn-link btn-sm" style="padding:0 4px;margin-left:4px;" onclick="toggleParentPhone(this)"><i class="ri-eye-line"></i></button>
                    </td>
                    <td>2023-09-12 16:30:00</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>0 位学员</span>
                        </div>
                    </td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>0 台设备</span>
                        </div>
                    </td>
                    <td><span class="tag tag-red">已解绑</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-parent-detail')"><i class="ri-eye-line"></i> 详情</button>
                        <button class="btn btn-link btn-sm" disabled style="color:var(--text-muted);"><i class="ri-link-unlink-m-line"></i> 解绑</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 256 条记录</span>
    <div class="pagination">
        <button class="btn btn-sm btn-secondary" disabled><i class="ri-arrow-left-s-line"></i></button>
        <button class="btn btn-sm btn-primary">1</button>
        <button class="btn btn-sm btn-secondary">2</button>
        <button class="btn btn-sm btn-secondary">3</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>

<!-- 家长详情模态框 -->
<div class="modal-overlay" id="modal-parent-detail">
    <div class="modal" style="max-width:560px;">
        <div class="modal-header">
            <span class="modal-title">家长详情</span>
            <button class="modal-close" onclick="closeModal('modal-parent-detail')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="font-size:13px;line-height:1.8;">
            <div><span style="color:var(--text-muted);">家长ID：</span>230901P001</div>
            <div><span style="color:var(--text-muted);">手机号：</span>13812340001</div>
            <div><span style="color:var(--text-muted);">注册时间：</span>2023-09-01</div>
            <div><span style="color:var(--text-muted);">状态：</span><span class="tag tag-green">正常</span></div>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
                <div style="font-weight:600;margin-bottom:8px;">绑定学员</div>
                <div>26AA0001 / IRP20240001-01 / 张三</div>
                <div>26AA0002 / IRP20240001-02 / 李四</div>
            </div>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
                <div style="font-weight:600;margin-bottom:8px;">绑定设备</div>
                <div>IRP20240001</div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-parent-detail')">关闭</button>
        </div>
    </div>
</div>

<!-- 解绑确认模态框 -->
<div class="modal-overlay" id="modal-unbind-parent">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">解绑家长</span>
            <button class="modal-close" onclick="closeModal('modal-unbind-parent')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <p style="margin:0 0 12px 0;color:var(--text);">请选择要解绑的学员：</p>
            <div style="display:flex;flex-direction:column;gap:8px;">
                <label style="display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--border);border-radius:6px;cursor:pointer;">
                    <input type="checkbox" name="unbind-student" value="26AA0001">
                    <span style="font-size:13px;">26AA0001 / IRP20240001-01 / 张三</span>
                </label>
                <label style="display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--border);border-radius:6px;cursor:pointer;">
                    <input type="checkbox" name="unbind-student" value="26AA0002">
                    <span style="font-size:13px;">26AA0002 / IRP20240001-02 / 李四</span>
                </label>
            </div>
            <p style="margin:12px 0 0 0;color:var(--danger);font-size:12px;"><i class="ri-alert-line"></i> 解绑后家长将无法查看已选学员的数据</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-unbind-parent')">取消</button>
            <button class="btn btn-danger">确认解绑</button>
        </div>
    </div>
</div>
`,


bindRecords: () => `
<button class="btn btn-secondary" style="margin-bottom:16px;" onclick="navigateTo('parents')"><i class="ri-arrow-left-line"></i> 返回家长列表</button>

<div class="page-title">
    <span>绑定记录</span>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>家长ID</label>
        <input type="text" class="form-input" placeholder="输入家长ID">
    </div>
    <div class="filter-group">
        <label>家长手机号</label>
        <input type="text" class="form-input" placeholder="输入家长手机号">
    </div>
    <div class="filter-group">
        <label>用户ID</label>
        <input type="text" class="form-input" placeholder="输入用户ID">
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
                    <th>时间</th>
                    <th>家长ID</th>
                    <th>家长手机号</th>
                    <th>学员ID</th>
                    <th>用户ID</th>
                    <th>学员姓名</th>
                    <th>操作类型</th>
                    <th>操作人</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2024-03-15 10:30</td>
                    <td>230901P001</td>
                    <td>138****0001</td>
                    <td>26AA0001</td>
                    <td>IRP20240001-01</td>
                    <td>张三</td>
                    <td><span class="tag tag-green">绑定</span></td>
                    <td>家长扫码</td>
                </tr>
                <tr>
                    <td>2024-03-14 16:20</td>
                    <td>230905P002</td>
                    <td>139****0002</td>
                    <td>26AB0001</td>
                    <td>IRP20240002-01</td>
                    <td>王五</td>
                    <td><span class="tag tag-green">绑定</span></td>
                    <td>家长扫码</td>
                </tr>
                <tr>
                    <td>2024-03-13 09:15</td>
                    <td>230901P001</td>
                    <td>138****0001</td>
                    <td>26AA0002</td>
                    <td>IRP20240001-02</td>
                    <td>李四</td>
                    <td><span class="tag tag-green">绑定</span></td>
                    <td>后台操作</td>
                </tr>
                <tr>
                    <td>2024-03-10 14:00</td>
                    <td>230912P004</td>
                    <td>136****0004</td>
                    <td>26AB0002</td>
                    <td>IRP20240001-01</td>
                    <td>赵六</td>
                    <td><span class="tag tag-red">解绑</span></td>
                    <td>后台操作</td>
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
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>
`,


});
