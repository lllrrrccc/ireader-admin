Object.assign(pageFunctions, {
devices: () => `
<div class="page-title">
    <span>设备管理</span>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>SN码</label>
        <input type="text" class="form-input" placeholder="输入设备SN码">
    </div>
    <div class="filter-group">
        <label>设备型号</label>
        <select class="form-select">
            <option>全部</option>
            <option>iReader Pro</option>
            <option>iReader Lite</option>
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
                    <th>SN码</th>
                    <th>设备型号</th>
                    <th>激活时间</th>
                    <th>使用中学生数</th>
                    <th>最近禁用时间</th>
                    <th>最近启用时间</th>
                    <th>状态</th>
                    <th style="width:200px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>IRP20240001</td>
                    <td>iReader Pro</td>
                    <td>2023-09-01 08:30</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>2 名学生</span>
                            <div style="font-size:12px;color:var(--text-muted);">
                                <div>S0000001 / IRP20240001-01 / 张三</div>
                                <div>S0000002 / IRP20240001-02 / 李四</div>
                            </div>
                        </div>
                    </td>
                    <td>—</td>
                    <td>2023-09-01 08:30</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-device')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>IRP20240002</td>
                    <td>iReader Pro</td>
                    <td>2023-09-05 09:15</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 名学生</span>
                            <div style="font-size:12px;color:var(--text-muted);">S0000003 / IRP20240002-01 / 王五</div>
                        </div>
                    </td>
                    <td>—</td>
                    <td>2023-09-05 09:15</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-device')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>IRL20240003</td>
                    <td>iReader Lite</td>
                    <td>2023-09-10 10:00</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 名学生</span>
                            <div style="font-size:12px;color:var(--text-muted);">S0000004 / IRL20240003-01 / 赵六</div>
                        </div>
                    </td>
                    <td>2024-01-10 14:20</td>
                    <td>2024-02-01 08:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-device')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>IRP20240004</td>
                    <td>iReader Pro</td>
                    <td>2023-09-15 11:30</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 名学生</span>
                            <div style="font-size:12px;color:var(--text-muted);">S0000005 / IRP20240004-01 / 钱七</div>
                        </div>
                    </td>
                    <td>—</td>
                    <td>2023-09-15 11:30</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-device')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>IRP20240005</td>
                    <td>iReader Pro</td>
                    <td>2023-09-20 14:00</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 名学生</span>
                            <div style="font-size:12px;color:var(--text-muted);">S0000006 / IRP20240005-01 / 孙八</div>
                        </div>
                    </td>
                    <td>2024-02-15 16:30</td>
                    <td>—</td>
                    <td><span class="tag tag-red">禁用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="openModal('modal-enable-device')"><i class="ri-check-line"></i> 启用</button>
                    </td>
                </tr>
                <tr>
                    <td>IRL20240006</td>
                    <td>iReader Lite</td>
                    <td>2023-10-01 08:00</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>0 名学生</span>
                        </div>
                    </td>
                    <td>—</td>
                    <td>2023-10-01 08:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-device')"><i class="ri-forbid-line"></i> 禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>IRP20240007</td>
                    <td>iReader Pro</td>
                    <td>2023-10-05 09:30</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 名学生</span>
                            <div style="font-size:12px;color:var(--text-muted);">S0000007 / IRP20240007-01 / 周九</div>
                        </div>
                    </td>
                    <td>2024-03-01 10:00</td>
                    <td>—</td>
                    <td><span class="tag tag-red">禁用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="openModal('modal-enable-device')"><i class="ri-check-line"></i> 启用</button>
                    </td>
                </tr>
                <tr>
                    <td>IRP20240008</td>
                    <td>iReader Pro</td>
                    <td>2023-10-10 13:00</td>
                    <td>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <span>1 名学生</span>
                            <div style="font-size:12px;color:var(--text-muted);">S0000008 / IRP20240008-01 / 吴十</div>
                        </div>
                    </td>
                    <td>—</td>
                    <td>2023-10-10 13:00</td>
                    <td><span class="tag tag-green">启用</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('deviceStudents')"><i class="ri-eye-line"></i> 查看学生</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-disable-device')"><i class="ri-forbid-line"></i> 禁用</button>
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

<!-- 禁用设备确认模态框 -->
<div class="modal-overlay" id="modal-disable-device">
    <div class="modal" style="max-width:420px;">
        <div class="modal-header">
            <span class="modal-title">禁用设备</span>
            <button class="modal-close" onclick="closeModal('modal-disable-device')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <p style="margin:0;color:var(--text);">禁用后该设备将无法登录阅读系统，是否确认？</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-disable-device')">取消</button>
            <button class="btn btn-danger">确认禁用</button>
        </div>
    </div>
</div>

<!-- 启用设备确认模态框 -->
<div class="modal-overlay" id="modal-enable-device">
    <div class="modal" style="max-width:420px;">
        <div class="modal-header">
            <span class="modal-title">启用设备</span>
            <button class="modal-close" onclick="closeModal('modal-enable-device')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <p style="margin:0;color:var(--text);">启用后该设备可恢复正常使用，是否确认？</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-enable-device')">取消</button>
            <button class="btn btn-primary">确认启用</button>
        </div>
    </div>
</div>
`,


deviceStudents: () => `
<div class="page-title">
    <span>设备学生列表</span>
    <button class="btn btn-secondary" onclick="navigateTo('devices')"><i class="ri-arrow-left-line"></i> 返回设备</button>
</div>

<div class="card">
    <div class="card-header">
        <span class="card-title">📱 设备信息</span>
    </div>
    <div class="card-body">
        <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;font-size:13px;">
            <div><span style="color:var(--text-muted);">设备SN：</span>IRP20240001</div>
            <div><span style="color:var(--text-muted);">型号：</span>iReader Pro</div>
            <div><span style="color:var(--text-muted);">激活时间：</span>2023-09-01 08:30</div>
            <div><span style="color:var(--text-muted);">最近启用：</span>2023-09-01 08:30</div>
            <div><span style="color:var(--text-muted);">最近禁用：</span>—</div>
            <div><span style="color:var(--text-muted);">状态：</span><span class="tag tag-green">启用</span></div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-header"><span class="card-title">👨‍🎓 绑定学生</span></div>
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>学员ID</th>
                    <th>用户ID</th>
                    <th>姓名</th>
                    <th>年级</th>
                    <th>学校</th>
                    <th>开始使用时间</th>
                    <th>状态</th>
                    <th>累计阅读</th>
                    <th style="width:150px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>S0000002</td>
                    <td>26AA0002</td>
                    <td>李四</td>
                    <td>小学三年级</td>
                    <td>北京市第一实验小学</td>
                    <td>2023-09-05 09:15</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>52.3小时</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>S0000001</td>
                    <td>26AA0001</td>
                    <td>张三</td>
                    <td>小学三年级</td>
                    <td>北京市第一实验小学</td>
                    <td>2023-09-01 08:30</td>
                    <td><span class="tag tag-green">使用中</span></td>
                    <td>86.5小时</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td>S0000009</td>
                    <td>26AA0009</td>
                    <td>郑十一</td>
                    <td>小学四年级</td>
                    <td>北京市第一实验小学</td>
                    <td>2023-08-15 10:00</td>
                    <td><span class="tag tag-red">已终止</span></td>
                    <td>32.1小时</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('studentDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
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


});
