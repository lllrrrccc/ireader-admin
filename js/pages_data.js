Object.assign(pageFunctions, {
readingData: () => `
<div class="page-title">
    <span>学生阅读数据</span>
    <button class="btn btn-primary"><i class="ri-download-line"></i> 导出数据</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>学生ID</label>
        <input type="text" class="form-input" placeholder="输入学生ID">
    </div>
    <div class="filter-group">
        <label>书籍</label>
        <input type="text" class="form-input" placeholder="书籍名称">
    </div>
    <div class="filter-group">
        <label>阅读状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>未开始</option>
            <option>阅读中</option>
            <option>已读完</option>
        </select>
    </div>
    <div class="filter-group">
        <label>加入书架</label>
        <select class="form-select">
            <option>全部</option>
            <option>已加入</option>
            <option>未加入</option>
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
                    <th>学生阅读ID</th>
                    <th>学生ID</th>
                    <th>昵称</th>
                    <th>书籍ID</th>
                    <th>书名</th>
                    <th>首次阅读时间</th>
                    <th>最近阅读时间</th>
                    <th>加入书架</th>
                    <th>阅读状态</th>
                    <th>最近阅读进度</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>26AA0001RA123</td>
                    <td>26AA0001</td>
                    <td>小明</td>
                    <td>B001</td>
                    <td>小王子</td>
                    <td>2024-03-15 10:23:15</td>
                    <td>2024-03-20 14:30:22</td>
                    <td><span class="tag tag-green">已加入</span></td>
                    <td><span class="tag tag-green">已读完</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:85%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">85%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AA0001RB456</td>
                    <td>26AA0001</td>
                    <td>小明</td>
                    <td>B002</td>
                    <td>夏洛的网</td>
                    <td>2024-03-14 09:15:30</td>
                    <td>2024-03-19 16:45:10</td>
                    <td><span class="tag tag-green">已加入</span></td>
                    <td><span class="tag tag-blue">阅读中</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:65%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">65%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AA0002RC789</td>
                    <td>26AA0002</td>
                    <td>小红</td>
                    <td>B001</td>
                    <td>小王子</td>
                    <td>2024-03-13 11:20:45</td>
                    <td>2024-03-18 13:10:05</td>
                    <td><span class="tag tag-gray">未加入</span></td>
                    <td><span class="tag tag-blue">阅读中</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:45%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">45%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AB0001RD012</td>
                    <td>26AB0001</td>
                    <td>小刚</td>
                    <td>B003</td>
                    <td>西游记</td>
                    <td>2024-03-12 08:30:00</td>
                    <td>2024-03-17 15:20:30</td>
                    <td><span class="tag tag-green">已加入</span></td>
                    <td><span class="tag tag-blue">阅读中</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:12%;height:100%;background:var(--warning);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">12%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AB0002RE345</td>
                    <td>26AB0002</td>
                    <td>小丽</td>
                    <td>B004</td>
                    <td>哈利·波特与魔法石</td>
                    <td>2024-03-11 14:00:00</td>
                    <td>2024-03-16 10:15:45</td>
                    <td><span class="tag tag-green">已加入</span></td>
                    <td><span class="tag tag-blue">阅读中</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:30%;height:100%;background:var(--warning);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">30%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AC0001RF678</td>
                    <td>26AC0001</td>
                    <td>小华</td>
                    <td>B005</td>
                    <td>草房子</td>
                    <td>2024-03-10 16:45:00</td>
                    <td>2024-03-15 09:30:15</td>
                    <td><span class="tag tag-green">已加入</span></td>
                    <td><span class="tag tag-green">已读完</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AC0002RG901</td>
                    <td>26AC0002</td>
                    <td>小芳</td>
                    <td>B006</td>
                    <td>狼王梦</td>
                    <td>2024-03-09 10:00:00</td>
                    <td>—</td>
                    <td><span class="tag tag-gray">未加入</span></td>
                    <td><span class="tag tag-gray">未开始</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:0%;height:100%;background:var(--text-muted);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">0%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AD0001RH234</td>
                    <td>26AD0001</td>
                    <td>小军</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td>2024-03-08 13:20:00</td>
                    <td>2024-03-13 11:45:30</td>
                    <td><span class="tag tag-green">已加入</span></td>
                    <td><span class="tag tag-green">已读完</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:90%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">90%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AD0002RI567</td>
                    <td>26AD0002</td>
                    <td>小吴</td>
                    <td>B005</td>
                    <td>草房子</td>
                    <td>2024-03-05 10:15:22</td>
                    <td>2024-03-12 09:30:18</td>
                    <td><span class="tag tag-green">已加入</span></td>
                    <td><span class="tag tag-blue">阅读中</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:55%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">55%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
                    </td>
                </tr>
                <tr>
                    <td>26AE0001RJ890</td>
                    <td>26AE0001</td>
                    <td>小陈</td>
                    <td>B003</td>
                    <td>西游记</td>
                    <td>2024-03-02 08:30:10</td>
                    <td>2024-03-10 16:20:45</td>
                    <td><span class="tag tag-gray">未加入</span></td>
                    <td><span class="tag tag-green">已读完</span></td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="navigateTo('studentReadingDetail')"><i class="ri-eye-line"></i> 查看详情</button>
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
        <button class="btn btn-sm btn-secondary">4</button>
        <button class="btn btn-sm btn-secondary">5</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>
`,


readingTasks: () => `
<div class="page-title">
    <span>阅读任务</span>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>老师ID</label>
        <input type="text" class="form-input" placeholder="输入老师ID">
    </div>
    <div class="filter-group">
        <label>任务名称</label>
        <input type="text" class="form-input" placeholder="搜索任务">
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>进行中</option>
            <option>已结束</option>
            <option>未开始</option>
        </select>
    </div>
    <div class="filter-group">
        <label>时间范围</label>
        <input type="date" class="form-input" style="margin-bottom:4px;">
        <input type="date" class="form-input">
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
        <button class="btn btn-primary"><i class="ri-download-line"></i> 导出</button>
    </div>
</div>

<div class="card">
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>任务ID</th>
                    <th>任务名称</th>
                    <th>创建老师ID</th>
                    <th>老师姓名</th>
                    <th>目标班级</th>
                    <th>发布时间</th>
                    <th>截止日</th>
                    <th>完成率</th>
                    <th>状态</th>
                    <th style="width:100px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="font-size:12px;">230820T01TA123</td>
                    <td>寒假阅读挑战</td>
                    <td>230820T01</td>
                    <td>王老师</td>
                    <td>三(1)班, 三(2)班</td>
                    <td>2024-01-20</td>
                    <td>2024-02-20</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:85%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">85%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">进行中</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">230820T01TB456</td>
                    <td>每日阅读30分钟</td>
                    <td>230820T01</td>
                    <td>王老师</td>
                    <td>三(1)班</td>
                    <td>2024-03-01</td>
                    <td>2024-03-31</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:62%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">62%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">进行中</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">230901T01TC789</td>
                    <td>春季阅读马拉松</td>
                    <td>230901T01</td>
                    <td>李老师</td>
                    <td>五(3)班</td>
                    <td>2024-04-01</td>
                    <td>2024-04-30</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:0%;height:100%;background:var(--text-muted);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">0%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-yellow">未开始</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">230901T01TD012</td>
                    <td>英语原版阅读周</td>
                    <td>230901T01</td>
                    <td>李老师</td>
                    <td>五(3)班</td>
                    <td>2024-02-15</td>
                    <td>2024-02-22</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-green">已结束</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">230820T01TE345</td>
                    <td>国学经典诵读</td>
                    <td>230820T01</td>
                    <td>王老师</td>
                    <td>三(2)班</td>
                    <td>2024-03-10</td>
                    <td>2024-05-10</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:25%;height:100%;background:var(--warning);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">25%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">进行中</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">231005T01TF678</td>
                    <td>暑假阅读计划</td>
                    <td>231005T01</td>
                    <td>刘老师</td>
                    <td>四(2)班</td>
                    <td>2024-07-01</td>
                    <td>2024-08-31</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:0%;height:100%;background:var(--text-muted);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">0%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-yellow">未开始</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">231005T01TG901</td>
                    <td>童话故事分享会</td>
                    <td>231005T01</td>
                    <td>刘老师</td>
                    <td>四(2)班</td>
                    <td>2024-05-01</td>
                    <td>2024-05-15</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:50%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">50%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">进行中</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">231006T01TH234</td>
                    <td>科普阅读月</td>
                    <td>231006T01</td>
                    <td>陈老师</td>
                    <td>四(3)班</td>
                    <td>2024-04-15</td>
                    <td>2024-05-15</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:10%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">10%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">进行中</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">231006T01TI567</td>
                    <td>亲子阅读打卡</td>
                    <td>231006T01</td>
                    <td>陈老师</td>
                    <td>五(1)班, 五(2)班</td>
                    <td>2024-06-01</td>
                    <td>2024-06-30</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:0%;height:100%;background:var(--text-muted);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">0%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-yellow">未开始</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
                    </td>
                </tr>
                <tr>
                    <td style="font-size:12px;">230820T01TJ890</td>
                    <td>古诗词背诵赛</td>
                    <td>230820T01</td>
                    <td>王老师</td>
                    <td>三(2)班</td>
                    <td>2024-02-01</td>
                    <td>2024-02-28</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:60px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td><span class="tag tag-green">已结束</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="navigateTo('taskDetail')"><i class="ri-eye-line"></i> 查看</button>
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
`,

// 任务详情
taskDetail: () => `
<div class="page-title" style="margin-bottom:16px;">
    <button class="btn btn-link" onclick="navigateTo('readingTasks')"><i class="ri-arrow-left-line"></i> 返回阅读任务</button>
</div>

<div class="card" style="margin-bottom:16px;">
    <div class="card-header">
        <span class="card-title">📋 任务概况</span>
    </div>
    <div class="card-body">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;">
            <div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">任务ID</div>
                <div style="font-weight:600;font-size:15px;">230820T01A001</div>
            </div>
            <div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">任务名称</div>
                <div style="font-weight:600;font-size:15px;">寒假阅读挑战</div>
            </div>
            <div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">目标班级</div>
                <div style="font-weight:600;font-size:15px;">三(1)班, 三(2)班</div>
            </div>
            <div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">截止日</div>
                <div style="font-weight:600;font-size:15px;">2024-02-20</div>
            </div>
            <div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">整体完成率</div>
                <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;"><div style="width:85%;height:100%;background:var(--success);border-radius:4px;"></div></div>
                    <span style="font-weight:600;color:var(--success);">85%</span>
                </div>
            </div>
            <div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">创建老师</div>
                <div style="font-weight:600;font-size:15px;">王老师 (230820T01)</div>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
        <span class="card-title">👥 学生完成情况</span>
        <span style="font-size:13px;color:var(--text-secondary);">共 120 人</span>
    </div>
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>学生ID</th>
                    <th>学生姓名</th>
                    <th>班级</th>
                    <th>完成进度</th>
                    <th>最后阅读时间</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>26AA0001</td>
                    <td>张小明</td>
                    <td>三(1)班</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td>2024-02-18 15:30</td>
                </tr>
                <tr>
                    <td>26AA0002</td>
                    <td>李小红</td>
                    <td>三(1)班</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:85%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">85%</span>
                        </div>
                    </td>
                    <td>2024-02-17 10:20</td>
                </tr>
                <tr>
                    <td>26AB0001</td>
                    <td>王小刚</td>
                    <td>三(2)班</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:60%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">60%</span>
                        </div>
                    </td>
                    <td>2024-02-16 08:45</td>
                </tr>
                <tr>
                    <td>26AB0002</td>
                    <td>赵丽丽</td>
                    <td>三(2)班</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:30%;height:100%;background:var(--warning);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">30%</span>
                        </div>
                    </td>
                    <td>2024-02-14 19:10</td>
                </tr>
                <tr>
                    <td>26AC0001</td>
                    <td>陈浩浩</td>
                    <td>三(1)班</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:0%;height:100%;background:var(--text-muted);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">0%</span>
                        </div>
                    </td>
                    <td>—</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 120 条记录</span>
    <div class="pagination">
        <button class="btn btn-sm btn-secondary" disabled><i class="ri-arrow-left-s-line"></i></button>
        <button class="btn btn-sm btn-primary">1</button>
        <button class="btn btn-sm btn-secondary">2</button>
        <button class="btn btn-sm btn-secondary">3</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>
`,

wordLearning: () => `
<div class="page-title">
    <span>学生背单词</span>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>学生ID</label>
        <input type="text" class="form-input" placeholder="输入学生ID">
    </div>
    <div class="filter-group">
        <label>词库ID</label>
        <input type="text" class="form-input" placeholder="输入词库ID">
    </div>
    <div class="filter-group">
        <label>词库名称</label>
        <input type="text" class="form-input" placeholder="词库名称">
    </div>
    <div class="filter-group">
        <label>掌握状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>未学习</option>
            <option>学习中</option>
            <option>已掌握</option>
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
                    <th>背单词ID</th>
                    <th>学生ID</th>
                    <th>学生姓名</th>
                    <th>词库ID</th>
                    <th>词库名称</th>
                    <th>最近背单词时间</th>
                    <th>进度（已学/总数）</th>
                    <th>掌握状态</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>26AA0001WA123</td>
                    <td>26AA0001</td>
                    <td>张三</td>
                    <td>WB001</td>
                    <td>小学3年级核心词库</td>
                    <td>2024-03-15 14:23:15</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:67%;height:100%;background:var(--success);"></div>
                            </div>
                            <span style="font-size:12px;">86/128</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AA0002WB456</td>
                    <td>26AA0002</td>
                    <td>李四</td>
                    <td>WB002</td>
                    <td>小学3年级核心词库</td>
                    <td>2024-03-14 09:15:30</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:47%;height:100%;background:var(--warning);"></div>
                            </div>
                            <span style="font-size:12px;">45/95</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AB0001WC789</td>
                    <td>26AB0001</td>
                    <td>王五</td>
                    <td>WB003</td>
                    <td>小学4年级核心词库</td>
                    <td>2024-03-15 16:45:08</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:94%;height:100%;background:var(--success);"></div>
                            </div>
                            <span style="font-size:12px;">120/128</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AB0002WD012</td>
                    <td>26AB0002</td>
                    <td>赵六</td>
                    <td>WB004</td>
                    <td>小学5年级核心词库</td>
                    <td>2024-03-13 11:20:45</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:60%;height:100%;background:var(--primary);"></div>
                            </div>
                            <span style="font-size:12px;">120/200</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AC0001WE345</td>
                    <td>26AC0001</td>
                    <td>钱七</td>
                    <td>WB005</td>
                    <td>小学6年级核心词库</td>
                    <td>2024-03-12 08:30:15</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:70%;height:100%;background:var(--success);"></div>
                            </div>
                            <span style="font-size:12px;">350/500</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AC0002WF678</td>
                    <td>26AC0002</td>
                    <td>孙八</td>
                    <td>WB001</td>
                    <td>小学2年级核心词库</td>
                    <td>2024-03-11 10:05:22</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:50%;height:100%;background:var(--primary);"></div>
                            </div>
                            <span style="font-size:12px;">40/80</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AD0001WG901</td>
                    <td>26AD0001</td>
                    <td>周九</td>
                    <td>WB003</td>
                    <td>小学4年级核心词库</td>
                    <td>2024-03-15 13:10:05</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:50%;height:100%;background:var(--primary);"></div>
                            </div>
                            <span style="font-size:12px;">90/180</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AD0002WH234</td>
                    <td>26AD0002</td>
                    <td>吴十</td>
                    <td>WB004</td>
                    <td>小学5年级核心词库</td>
                    <td>2024-03-10 15:20:30</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:50%;height:100%;background:var(--primary);"></div>
                            </div>
                            <span style="font-size:12px;">128/256</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AE0001WI567</td>
                    <td>26AE0001</td>
                    <td>郑宇</td>
                    <td>WB002</td>
                    <td>小学3年级核心词库</td>
                    <td>2024-03-09 09:30:00</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:32%;height:100%;background:var(--warning);"></div>
                            </div>
                            <span style="font-size:12px;">30/95</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
                </tr>
                <tr>
                    <td>26AE0002WJ890</td>
                    <td>26AE0002</td>
                    <td>冯婷</td>
                    <td>WB005</td>
                    <td>小学6年级核心词库</td>
                    <td>2024-03-08 14:15:30</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:120px;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                                <div style="width:40%;height:100%;background:var(--primary);"></div>
                            </div>
                            <span style="font-size:12px;">200/500</span>
                        </div>
                    </td>
                    <td><span class="tag tag-blue">学习中</span></td>
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
        <button class="btn btn-sm btn-secondary">4</button>
        <button class="btn btn-sm btn-secondary">5</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>
`,


listeningData: () => `
<div class="page-title">
    <span>学生听力数据</span>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>学生ID</label>
        <input type="text" class="form-input" placeholder="输入学生ID">
    </div>
    <div class="filter-group">
        <label>听力内容ID</label>
        <input type="text" class="form-input" placeholder="输入听力ID">
    </div>
    <div class="filter-group">
        <label>听力标题</label>
        <input type="text" class="form-input" placeholder="搜索听力">
    </div>
    <div class="filter-group">
        <label>完成状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>未开始</option>
            <option>进行中</option>
            <option>已完成</option>
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
                    <th>学生听力ID</th>
                    <th>学生ID</th>
                    <th>学生姓名</th>
                    <th>听力ID</th>
                    <th>听力名称</th>
                    <th>最近播放进度</th>
                    <th>完播次数</th>
                    <th>最近播放时间</th>
                    <th>状态</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>26AA0001LA123</td>
                    <td>26AA0001</td>
                    <td>张三</td>
                    <td>L001</td>
                    <td>小王子 - 第一章</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td>3</td>
                    <td>20240315142315</td>
                    <td><span class="tag tag-green">已完成</span></td>
                </tr>
                <tr>
                    <td>26AA0002LB456</td>
                    <td>26AA0002</td>
                    <td>李四</td>
                    <td>L002</td>
                    <td>夏洛的网 - 第一章</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:57%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">57%</span>
                        </div>
                    </td>
                    <td>2</td>
                    <td>20240314091530</td>
                    <td><span class="tag tag-blue">进行中</span></td>
                </tr>
                <tr>
                    <td>26AB0001LC789</td>
                    <td>26AB0001</td>
                    <td>王五</td>
                    <td>L003</td>
                    <td>The Little Prince - Ch.1</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:0%;height:100%;background:var(--text-muted);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">0%</span>
                        </div>
                    </td>
                    <td>0</td>
                    <td>—</td>
                    <td><span class="tag tag-gray">未开始</span></td>
                </tr>
                <tr>
                    <td>26AB0002LD012</td>
                    <td>26AB0002</td>
                    <td>赵六</td>
                    <td>L004</td>
                    <td>哈利波特 - 第一章</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:29%;height:100%;background:var(--warning);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">29%</span>
                        </div>
                    </td>
                    <td>1</td>
                    <td>20240313112045</td>
                    <td><span class="tag tag-blue">进行中</span></td>
                </tr>
                <tr>
                    <td>26AC0001LE345</td>
                    <td>26AC0001</td>
                    <td>钱七</td>
                    <td>L005</td>
                    <td>草房子 - 第一章</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td>2</td>
                    <td>20240312083015</td>
                    <td><span class="tag tag-green">已完成</span></td>
                </tr>
                <tr>
                    <td>26AC0002LF678</td>
                    <td>26AC0002</td>
                    <td>孙八</td>
                    <td>L006</td>
                    <td>狼王梦 - 第一章</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:0%;height:100%;background:var(--text-muted);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">0%</span>
                        </div>
                    </td>
                    <td>0</td>
                    <td>—</td>
                    <td><span class="tag tag-gray">未开始</span></td>
                </tr>
                <tr>
                    <td>26AD0001LG901</td>
                    <td>26AD0001</td>
                    <td>周九</td>
                    <td>L007</td>
                    <td>小王子 - 第二章</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td>4</td>
                    <td>20240315131005</td>
                    <td><span class="tag tag-green">已完成</span></td>
                </tr>
                <tr>
                    <td>26AD0002LH234</td>
                    <td>26AD0002</td>
                    <td>吴十</td>
                    <td>L008</td>
                    <td>宝葫芦的秘密 - 第一章</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:30%;height:100%;background:var(--warning);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">30%</span>
                        </div>
                    </td>
                    <td>1</td>
                    <td>20240311100522</td>
                    <td><span class="tag tag-blue">进行中</span></td>
                </tr>
                <tr>
                    <td>26AE0001LI567</td>
                    <td>26AE0001</td>
                    <td>郑宇</td>
                    <td>L009</td>
                    <td>成语故事 - 守株待兔</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:100%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">100%</span>
                        </div>
                    </td>
                    <td>2</td>
                    <td>20240309103045</td>
                    <td><span class="tag tag-green">已完成</span></td>
                </tr>
                <tr>
                    <td>26AE0002LJ890</td>
                    <td>26AE0002</td>
                    <td>冯婷</td>
                    <td>L010</td>
                    <td>寓言故事 - 狐狸和葡萄</td>
                    <td>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:60%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                            <span style="font-size:12px;">60%</span>
                        </div>
                    </td>
                    <td>1</td>
                    <td>20240308164520</td>
                    <td><span class="tag tag-blue">进行中</span></td>
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
        <button class="btn btn-sm btn-secondary">4</button>
        <button class="btn btn-sm btn-secondary">5</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>
`,


studentReadingDetail: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('readingData')"><i class="ri-arrow-left-line"></i> 返回学生阅读数据</button>
    <span>学生阅读详情</span>
</div>

<div class="card" style="margin-bottom:16px;">
    <div class="card-body" style="display:flex;gap:24px;align-items:center;">
        <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:48px;height:48px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:600;">明</div>
            <div>
                <div style="font-size:16px;font-weight:600;">小明</div>
                <div style="font-size:13px;color:var(--text-secondary);">26AA0001 · 小学三年级</div>
            </div>
        </div>
        <div style="width:1px;height:40px;background:var(--border);"></div>
        <div>
            <div style="font-size:13px;color:var(--text-secondary);">阅读书籍</div>
            <div style="font-size:15px;font-weight:600;">B001 小王子</div>
        </div>
        <div style="width:1px;height:40px;background:var(--border);"></div>
        <div>
            <div style="font-size:13px;color:var(--text-secondary);">首次阅读时间</div>
            <div style="font-size:15px;font-weight:600;">2024-03-15 10:23:15</div>
        </div>
        <div style="width:1px;height:40px;background:var(--border);"></div>
        <div>
            <div style="font-size:13px;color:var(--text-secondary);">最近阅读时间</div>
            <div style="font-size:15px;font-weight:600;">2024-03-20 14:30:22</div>
        </div>
        <div style="width:1px;height:40px;background:var(--border);"></div>
        <div>
            <div style="font-size:13px;color:var(--text-secondary);">最近阅读进度</div>
            <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:80px;height:6px;background:var(--bg);border-radius:3px;"><div style="width:85%;height:100%;background:var(--primary);border-radius:3px;"></div></div>
                <span style="font-size:14px;font-weight:600;">85%</span>
            </div>
        </div>
    </div>
</div>

<div style="display:flex;gap:8px;margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:8px;">
    <button class="btn btn-sm btn-primary" id="tab-btn-bookmark" onclick="switchReadingDetailTab('bookmark')" style="border-radius:20px;"><i class="ri-bookmark-line"></i> 书签 (2)</button>
    <button class="btn btn-sm btn-secondary" id="tab-btn-note" onclick="switchReadingDetailTab('note')" style="border-radius:20px;"><i class="ri-file-text-line"></i> 笔记 (3)</button>
    <button class="btn btn-sm btn-secondary" id="tab-btn-review" onclick="switchReadingDetailTab('review')" style="border-radius:20px;"><i class="ri-article-line"></i> 读后感 (2)</button>
</div>

<div id="tab-bookmark" style="display:block;">
    <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;color:var(--text-secondary);">第 3 章 · 2024-03-16 14:20:15</span>
                <span style="font-size:12px;color:var(--primary);background:var(--primary-light);padding:2px 8px;border-radius:4px;">书签</span>
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--primary);">
                正是你为你的玫瑰花费的时光，才使你的玫瑰变得如此重要。
            </div>
            <div style="margin-top:8px;font-size:13px;color:var(--text-secondary);">
                <i class="ri-map-pin-line"></i> 位置：第 3 章 第 2 段
            </div>
        </div>
    </div>
    <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;color:var(--text-secondary);">第 7 章 · 2024-03-18 09:15:30</span>
                <span style="font-size:12px;color:var(--primary);background:var(--primary-light);padding:2px 8px;border-radius:4px;">书签</span>
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--primary);">
                只有用心才能看清事物的本质，真正重要的东西是肉眼无法看见的。
            </div>
            <div style="margin-top:8px;font-size:13px;color:var(--text-secondary);">
                <i class="ri-map-pin-line"></i> 位置：第 7 章 第 5 段
            </div>
        </div>
    </div>
</div>

<div id="tab-note" style="display:none;">
    <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;color:var(--text-secondary);">第 2 章 · 2024-03-16 10:30:00</span>
                <span style="font-size:12px;color:var(--warning);background:rgba(245,158,11,0.1);padding:2px 8px;border-radius:4px;">笔记</span>
            </div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;">
                <i class="ri-map-pin-line"></i> 位置：第 2 章 第 3 段
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--primary);margin-bottom:8px;">
                原文引用："小王子因为和他的玫瑰闹了别扭，决定离开他的星球，去探索其他的世界。"
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--warning);">
                小王子为什么要离开他的星球？我觉得他是因为和玫瑰吵架了，但又很想念她。这让我想到有时候我们也会因为小事和朋友闹别扭。
            </div>
        </div>
    </div>
    <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;color:var(--text-secondary);">第 5 章 · 2024-03-17 16:45:20</span>
                <span style="font-size:12px;color:var(--warning);background:rgba(245,158,11,0.1);padding:2px 8px;border-radius:4px;">笔记</span>
            </div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;">
                <i class="ri-map-pin-line"></i> 位置：第 5 章 第 1 段
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--primary);margin-bottom:8px;">
                原文引用："国王、虚荣的人、酒鬼、商人...这些大人真的好奇怪。他们只关心数字和权力，忘记了生活中真正重要的东西。"
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--warning);">
                国王、虚荣的人、酒鬼、商人...这些大人真的好奇怪。他们只关心数字和权力，忘记了生活中真正重要的东西。
            </div>
        </div>
    </div>
    <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;color:var(--text-secondary);">第 8 章 · 2024-03-19 11:20:00</span>
                <span style="font-size:12px;color:var(--warning);background:rgba(245,158,11,0.1);padding:2px 8px;border-radius:4px;">笔记</span>
            </div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;">
                <i class="ri-map-pin-line"></i> 位置：第 8 章 第 4 段
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--primary);margin-bottom:8px;">
                原文引用："狐狸说：'对我来说，你还只是一个小男孩，就像其他千万个小男孩一样。我不需要你，你也不需要我。但是，如果你驯养了我，我们就互相不可缺少了。'"
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--warning);">
                狐狸说的"驯养"是什么意思？我觉得是建立联系，让彼此变得特别。就像我和我最好的朋友，我们认识很久，所以彼此都很重要。
            </div>
        </div>
    </div>
</div>

<div id="tab-review" style="display:none;">
    <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;color:var(--text-secondary);">2024-03-18 20:00:00</span>
                <span style="font-size:12px;color:var(--success);background:rgba(16,185,129,0.1);padding:2px 8px;border-radius:4px;">读后感</span>
            </div>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">《小王子》读后感</div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;">
                读完《小王子》，我最大的感受是：真正重要的东西是看不见的。小王子和他的玫瑰，虽然玫瑰很骄傲，但小王子还是为她付出了很多时间和感情。这让我明白了，家人和朋友之所以重要，是因为我们彼此陪伴、彼此关心。狐狸说的"驯养"也让我印象深刻，我们要珍惜身边的人，因为他们对我们来说才是独一无二的。
            </div>
            <div style="margin-top:12px;padding:12px;background:rgba(16,185,129,0.05);border-radius:8px;border-left:3px solid var(--success);">
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;"><i class="ri-user-line"></i> 教师评语</div>
                <div style="font-size:14px;color:var(--text-primary);">写得很好！能够结合故事内容谈自己的感受，特别是对"驯养"的理解很有深度。建议可以多举一些生活中的例子。</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">— 王老师 · 2024-03-19 09:30:00</div>
            </div>
        </div>
    </div>
    <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;color:var(--text-secondary);">2024-03-20 15:10:00</span>
                <span style="font-size:12px;color:var(--success);background:rgba(16,185,129,0.1);padding:2px 8px;border-radius:4px;">读后感</span>
            </div>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">关于友谊的思考</div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;padding:12px;background:var(--bg);border-radius:8px;">
                小王子和狐狸的友谊让我想到了我的好朋友。我们虽然不是每天见面，但一见面就很开心。狐狸说"你要永远为你驯养的东西负责"，我觉得这句话很有道理，朋友之间就是要互相关心、互相帮助。
            </div>
            <div style="margin-top:12px;padding:12px;background:rgba(16,185,129,0.05);border-radius:8px;border-left:3px solid var(--success);">
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;"><i class="ri-user-line"></i> 教师评语</div>
                <div style="font-size:14px;color:var(--text-primary);">对友谊的理解很到位！能够引用原文并结合自身经历，这是很好的阅读习惯。</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">— 王老师 · 2024-03-21 10:00:00</div>
            </div>
        </div>
    </div>
</div>

`,

});
