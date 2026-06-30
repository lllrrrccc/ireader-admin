// AI 管理模块 — 重写版（对齐 PRD v1.0）
// 页面：aiGuide, aiGuideConfig, aiTranslate, aiTranslateConfig, aiExplain, aiExplainConfig, knowledge, wordbank, manageWords, listening, listeningAddStep1, listeningAddStep2, listeningAddStep3, listeningEdit, listeningTranslation, listeningAlignment

Object.assign(pageFunctions, {

// ========== 1. AI导读管理 ==========

aiGuide: () => `
<div class="page-title">
    <span>AI导读管理</span>
    <button class="btn btn-primary" onclick="navigateTo('aiGuideConfig')"><i class="ri-settings-3-line"></i> AI导读配置</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>用户ID</label>
        <input type="text" class="form-input" placeholder="输入用户ID">
    </div>
    <div class="filter-group">
        <label>学生姓名</label>
        <input type="text" class="form-input" placeholder="输入姓名">
    </div>
    <div class="filter-group">
        <label>书籍名称</label>
        <input type="text" class="form-input" placeholder="输入书名">
    </div>
    <div class="filter-group">
        <label>时间范围</label>
        <input type="date" class="form-input"> ~ <input type="date" class="form-input">
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>成功</option>
            <option>生成中</option>
            <option>失败</option>
        </select>
    </div>
    <div class="filter-group">
        <label>可见性</label>
        <select class="form-select">
            <option>全部</option>
            <option>可见</option>
            <option>已隐藏</option>
        </select>
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
    </div>
</div>

<div class="card">
    <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
        <span class="card-title">📋 导读记录表</span>
        <button class="btn btn-secondary btn-sm"><i class="ri-download-line"></i> 批量导出</button>
    </div>
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>用户ID</th>
                    <th style="min-width:120px;">学生姓名</th>
                    <th style="min-width:120px;">年级</th>
                    <th>书籍ID</th>
                    <th>书籍名称</th>
                    <th>导读内容摘要</th>
                    <th>获取时间</th>
                    <th>耗时</th>
                    <th>状态</th>
                    <th>可见性</th>
                    <th style="width:140px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GD001</td>
                    <td>S0000001</td>
                    <td>张三</td>
                    <td>小学三年级</td>
                    <td>B001</td>
                    <td>小王子</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">这是一本关于成长与友谊的经典童话，讲述了小王子在各个星球...</td>
                    <td>2024-03-15 10:23:15</td>
                    <td>1.8s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD001')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD001')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD002</td>
                    <td>S0000002</td>
                    <td>李四</td>
                    <td>小学四年级</td>
                    <td>B002</td>
                    <td>夏洛的网</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">关于一只蜘蛛和一头猪的友谊故事，展现了生命的珍贵...</td>
                    <td>2024-03-15 11:05:42</td>
                    <td>2.3s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD002')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD002')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD003</td>
                    <td>S0000003</td>
                    <td>王五</td>
                    <td>小学五年级</td>
                    <td>B003</td>
                    <td>西游记</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">中国古代四大名著之一，讲述唐僧师徒西天取经的故事...</td>
                    <td>2024-03-15 14:12:08</td>
                    <td>3.1s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-red">已隐藏</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD003')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="openModal('modal-unhide-guide-GD003')"><i class="ri-eye-line"></i> 显示</button>
                    </td>
                </tr>
                <tr>
                    <td>GD004</td>
                    <td>S0000004</td>
                    <td>赵六</td>
                    <td>小学六年级</td>
                    <td>B004</td>
                    <td>哈利·波特与魔法石</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">男孩哈利·波特进入霍格沃茨魔法学校的冒险故事...</td>
                    <td>2024-03-15 15:30:22</td>
                    <td>2.5s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD004')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD004')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD005</td>
                    <td>S0000005</td>
                    <td>钱七</td>
                    <td>初中一年级</td>
                    <td>B005</td>
                    <td>草房子</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">桑桑在油麻地小学度过的六年小学生活，充满童真...</td>
                    <td>2024-03-15 16:45:10</td>
                    <td>1.9s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD005')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD005')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD006</td>
                    <td>S0000006</td>
                    <td>孙八</td>
                    <td>初中二年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">A timeless tale about a little prince from a distant planet...</td>
                    <td>2024-03-15 17:20:33</td>
                    <td>2.2s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD006')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD006')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD007</td>
                    <td>S0000007</td>
                    <td>周九</td>
                    <td>小学三年级</td>
                    <td>B002</td>
                    <td>夏洛的网</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">夏洛和威尔伯的友谊超越了物种的界限，温暖感人...</td>
                    <td>2024-03-15 18:00:55</td>
                    <td>2.7s</td>
                    <td><span class="tag tag-yellow">生成中</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD007')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD007')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD008</td>
                    <td>S0000008</td>
                    <td>吴十</td>
                    <td>小学四年级</td>
                    <td>B001</td>
                    <td>小王子</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">通过小王子的旅程，探讨了爱、责任和人生的真谛...</td>
                    <td>2024-03-15 19:15:18</td>
                    <td>1.6s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD008')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD008')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD009</td>
                    <td>S0000009</td>
                    <td>郑十一</td>
                    <td>小学五年级</td>
                    <td>B003</td>
                    <td>西游记</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">从石猴出世到孙悟空大闹天宫的传奇故事，充满想象力和冒险精神...</td>
                    <td>2024-03-16 09:30:12</td>
                    <td>2.4s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD009')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD009')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>GD010</td>
                    <td>S0000010</td>
                    <td>冯十二</td>
                    <td>初中三年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">An allegorical tale about love, responsibility, and the meaning of life...</td>
                    <td>2024-03-16 10:15:45</td>
                    <td>1.7s</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-guide-GD010')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-guide-GD010')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 56 条记录</span>
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

<!-- 隐藏确认弹窗 -->
<div class="modal-overlay" id="modal-hide-guide-GD003">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">隐藏记录</span>
            <button class="modal-close" onclick="closeModal('modal-hide-guide-GD003')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-off-line" style="font-size:40px;color:var(--warning);margin-bottom:12px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确认隐藏此导读记录？</div>
            <div style="font-size:13px;color:var(--text-secondary);">隐藏后用户将无法在设备端查看此导读内容，但记录仍保留在后台。</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-hide-guide-GD003')">取消</button>
            <button class="btn btn-warning">确认隐藏</button>
        </div>
    </div>
</div>

<!-- 取消隐藏弹窗 -->
<div class="modal-overlay" id="modal-unhide-guide-GD003">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">恢复显示</span>
            <button class="modal-close" onclick="closeModal('modal-unhide-guide-GD003')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-line" style="font-size:40px;color:var(--success);margin-bottom:12px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确认恢复显示此导读记录？</div>
            <div style="font-size:13px;color:var(--text-secondary);">恢复后用户将可以重新查看此导读内容。</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-unhide-guide-GD003')">取消</button>
            <button class="btn btn-success">确认显示</button>
        </div>
    </div>
</div>

<!-- 查看导读详情弹窗 -->
<div class="modal-overlay" id="modal-view-guide-GD001">
    <div class="modal" style="max-width:600px;">
        <div class="modal-header">
            <span class="modal-title">导读详情 — GD001</span>
            <button class="modal-close" onclick="closeModal('modal-view-guide-GD001')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div style="display:flex;gap:16px;margin-bottom:16px;flex-wrap:wrap;">
                <div><span style="color:var(--text-muted);font-size:12px;">用户ID</span><div style="font-size:14px;font-weight:500;">S0000001</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">学生</span><div style="font-size:14px;font-weight:500;">张三</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">年级</span><div style="font-size:14px;font-weight:500;">小学三年级</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">书籍</span><div style="font-size:14px;font-weight:500;">小王子</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">时间</span><div style="font-size:14px;font-weight:500;">2024-03-15 10:23:15</div></div>
            </div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">导读全文</div>
            <div style="padding:16px;background:var(--bg);border-radius:var(--radius);font-size:13px;line-height:1.8;color:var(--text-secondary);max-height:300px;overflow-y:auto;">
                <p>《小王子》是法国作家安托万·德·圣埃克苏佩里创作的一部经典童话。故事讲述了一位来自B-612小行星的小王子，因为和心爱的玫瑰闹了矛盾，决定离开自己的星球去宇宙旅行。</p>
                <p>在旅途中，小王子先后访问了六个星球，遇到了各种各样的大人：有权力欲极强的国王、爱慕虚荣的人、酗酒的酒鬼、忙于计算星星的商人、循规蹈矩的点灯人，以及从不离开书桌的地理学家。这些大人让小王子感到困惑，因为他们都过于关注"重要的事"，却忽略了生活中真正重要的东西。</p>
                <p>最后，小王子来到地球，在撒哈拉沙漠遇到了故事的叙述者——一位因飞机故障而迫降的飞行员。小王子向飞行员讲述了自己的故事，并分享了狐狸教给他的秘密："真正重要的东西，用眼睛是看不见的。"</p>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-view-guide-GD001')">关闭</button>
        </div>
    </div>
</div>
`,

// ========== 1.2 AI导读配置（二级页面） ==========

aiGuideConfig: () => `
<div class="page-title">
    <button class="btn btn-secondary" onclick="navigateTo('aiGuide')"><i class="ri-arrow-left-line"></i> 返回AI导读管理</button>
    <span>AI导读配置</span>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;">
    <div class="card" style="flex:2;">
        <div class="card-header"><span class="card-title">⚙️ 提示词配置</span></div>
        <div class="card-body">
            <div class="form-group">
                <label class="form-label">系统角色设定</label>
                <textarea class="form-textarea" rows="4" placeholder="设定AI导读助手的角色和语气...">你是一位亲切的阅读导师，擅长用生动有趣的方式为学生介绍书籍内容。请根据学生的年级和阅读水平，调整语言的难易程度。</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">导读生成模板</label>
                <textarea class="form-textarea" rows="6" placeholder="输入导读生成的模板提示词...">请为《{{书名}}》生成一段简短的导读，适合{{年级}}学生阅读。

学生信息：
- 昵称：{{昵称}}
- 年级：{{年级}}
- 阅读级别：{{阅读级别}}

书籍信息：
- 书名：{{书名}}
- 作者：{{作者}}
- 当前章节：{{章节标题}}

要求：
1. 介绍故事背景和主要人物
2. 语言生动有趣，适合该年龄段学生
3. 控制在300字以内</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">模型选择</label>
                <select class="form-select">
                    <option selected>GPT-4</option>
                    <option>GPT-3.5</option>
                    <option>Claude 3</option>
                </select>
            </div>
            <div class="form-group" style="text-align:right;">
                <button class="btn btn-primary">保存配置</button>
            </div>
        </div>
    </div>

    <div class="card" style="flex:1;min-width:320px;">
        <div class="card-header"><span class="card-title">🔧 变量库</span></div>
        <div class="card-body">
            <!-- 来源分类 Tab -->
            <div style="display:flex;gap:4px;margin-bottom:12px;">
                <button class="btn btn-sm btn-primary" id="var-tab-guide-user" onclick="switchVarTab('guide','user')">用户字段</button>
                <button class="btn btn-sm btn-secondary" id="var-tab-guide-book" onclick="switchVarTab('guide','book')">书籍字段</button>
                <button class="btn btn-sm btn-secondary" id="var-tab-guide-kb" onclick="switchVarTab('guide','kb')">知识库</button>
            </div>

            <!-- 用户字段面板 -->
            <div id="var-panel-guide-user">
                <div style="margin-bottom:12px;">
                    <input type="text" class="form-input" id="var-search-guide-user" placeholder="搜索变量..." oninput="filterVarList('guide','user')">
                </div>
                <div style="max-height:360px;overflow-y:auto;" id="var-list-guide-user">
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{昵称}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{昵称}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{年级}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{年级}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{阅读级别}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{阅读级别}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{设备SN}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{设备SN}}')">复制</button>
                    </div>
                </div>
            </div>

            <!-- 书籍字段面板 -->
            <div id="var-panel-guide-book" style="display:none;">
                <div style="margin-bottom:12px;">
                    <input type="text" class="form-input" id="var-search-guide-book" placeholder="搜索变量..." oninput="filterVarList('guide','book')">
                </div>
                <div style="max-height:360px;overflow-y:auto;" id="var-list-guide-book">
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{书名}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{书名}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{作者}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{作者}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{章节标题}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{章节标题}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{当前段落译文}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{当前段落译文}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{本章译文}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{本章译文}}')">复制</button>
                    </div>
                </div>
            </div>

            <!-- 知识库面板（含子Tab） -->
            <div id="var-panel-guide-kb" style="display:none;">
                <!-- 知识库调用方式子Tab -->
                <div style="display:flex;gap:4px;margin-bottom:12px;">
                    <button class="btn btn-sm btn-primary" id="var-kbtab-guide-file" onclick="switchKbVarTab('guide','file')">指定文件</button>
                    <button class="btn btn-sm btn-secondary" id="var-kbtab-guide-tag" onclick="switchKbVarTab('guide','tag')">按标签</button>
                </div>

                <!-- 指定文件子面板 -->
                <div id="var-kb-panel-guide-file">
                    <div style="margin-bottom:12px;">
                        <input type="text" class="form-input" id="var-search-guide-kbfile" placeholder="搜索文档..." oninput="filterKbVarList('guide','file')">
                    </div>
                    <div style="max-height:300px;overflow-y:auto;" id="var-list-guide-kbfile">
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:作者生平简介.pdf}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:作者生平简介.pdf}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:小王子创作背景.md}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:小王子创作背景.md}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:法国文学简史.docx}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:法国文学简史.docx}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:名著导读资料.md}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:名著导读资料.md}}')">复制</button>
                        </div>
                    </div>
                </div>

                <!-- 按标签子面板 -->
                <div id="var-kb-panel-guide-tag" style="display:none;">
                    <div style="margin-bottom:12px;">
                        <input type="text" class="form-input" id="var-search-guide-kbtag" placeholder="搜索标签..." oninput="filterKbVarList('guide','tag')">
                    </div>
                    <div style="max-height:300px;overflow-y:auto;" id="var-list-guide-kbtag">
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:作者简介}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 3 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:作者简介}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:作品背景}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 2 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:作品背景}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:文学赏析}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 1 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:文学赏析}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:词汇表}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 2 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:词汇表}}')">复制</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ========== 2. AI翻译管理 ==========

aiTranslate: () => `
<div class="page-title">
    <span>AI翻译管理</span>
    <button class="btn btn-primary" onclick="navigateTo('aiTranslateConfig')"><i class="ri-settings-3-line"></i> AI翻译配置</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>用户ID</label>
        <input type="text" class="form-input" placeholder="输入用户ID">
    </div>
    <div class="filter-group">
        <label>学生姓名</label>
        <input type="text" class="form-input" placeholder="输入姓名">
    </div>
    <div class="filter-group">
        <label>书籍名称</label>
        <input type="text" class="form-input" placeholder="输入书名">
    </div>
    <div class="filter-group">
        <label>章节</label>
        <input type="text" class="form-input" placeholder="输入章节">
    </div>
    <div class="filter-group">
        <label>时间范围</label>
        <input type="date" class="form-input"> ~ <input type="date" class="form-input">
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>成功</option>
            <option>生成中</option>
            <option>失败</option>
        </select>
    </div>
    <div class="filter-group">
        <label>可见性</label>
        <select class="form-select">
            <option>全部</option>
            <option>可见</option>
            <option>已隐藏</option>
        </select>
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
    </div>
</div>

<div class="card">
    <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
        <span class="card-title">📋 翻译记录表</span>
        <button class="btn btn-secondary btn-sm"><i class="ri-download-line"></i> 批量导出</button>
    </div>
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>用户ID</th>
                    <th style="min-width:120px;">学生姓名</th>
                    <th style="min-width:120px;">年级</th>
                    <th>书籍ID</th>
                    <th>书籍名称</th>
                    <th>章节</th>
                    <th>原文</th>
                    <th>译文</th>
                    <th>获取时间</th>
                    <th>状态</th>
                    <th>可见性</th>
                    <th style="width:140px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>TR001</td>
                    <td>S0000001</td>
                    <td>张三</td>
                    <td>小学三年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td>Chapter 1</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">It is the time you have wasted for your rose...</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">正是你为你的玫瑰花费的时光，才使你的玫瑰变得如此重要...</td>
                    <td>2024-03-15 10:25:18</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR001')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR001')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR002</td>
                    <td>S0000002</td>
                    <td>李四</td>
                    <td>小学四年级</td>
                    <td>B002</td>
                    <td>Charlotte's Web</td>
                    <td>Chapter 3</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Where there is life, there is hope.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">哪里有生命，哪里就有希望。</td>
                    <td>2024-03-15 11:10:42</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR002')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR002')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR003</td>
                    <td>S0000003</td>
                    <td>王五</td>
                    <td>小学五年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td>Chapter 7</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">The stars are beautiful, because of a flower that cannot be seen.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">星星真美，因为有一朵看不见的花。</td>
                    <td>2024-03-15 12:30:55</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-red">已隐藏</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR003')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="openModal('modal-unhide-translate-TR003')"><i class="ri-eye-line"></i> 显示</button>
                    </td>
                </tr>
                <tr>
                    <td>TR004</td>
                    <td>S0000004</td>
                    <td>赵六</td>
                    <td>小学六年级</td>
                    <td>B004</td>
                    <td>Harry Potter</td>
                    <td>Chapter 2</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">You have been my friend. That in itself is a tremendous thing.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">你一直是我的朋友。这本身就是一件了不起的事。</td>
                    <td>2024-03-15 15:20:33</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR004')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR004')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR005</td>
                    <td>S0000005</td>
                    <td>钱七</td>
                    <td>初中一年级</td>
                    <td>B002</td>
                    <td>Charlotte's Web</td>
                    <td>Chapter 5</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">What is essential is invisible to the eye.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">真正重要的东西，用眼睛是看不见的。</td>
                    <td>2024-03-15 17:30:10</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR005')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR005')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR006</td>
                    <td>S0000006</td>
                    <td>孙八</td>
                    <td>初中二年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td>Chapter 21</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">One sees clearly only with the heart.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">一个人只有用心去看，才能看到真实。</td>
                    <td>2024-03-15 18:45:22</td>
                    <td><span class="tag tag-yellow">生成中</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR006')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR006')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR007</td>
                    <td>S0000007</td>
                    <td>周九</td>
                    <td>小学三年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td>Chapter 27</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">All grown-ups were once children, but only few of them remember it.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">所有大人都曾经是小孩，可惜只有少数人记得这一点。</td>
                    <td>2024-03-16 10:30:18</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR007')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR007')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR008</td>
                    <td>S0000008</td>
                    <td>吴十</td>
                    <td>小学四年级</td>
                    <td>B002</td>
                    <td>Charlotte's Web</td>
                    <td>Chapter 8</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">It is not often that someone comes along who is a true friend and a good writer.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">真正的朋友和好作家都不常遇到。</td>
                    <td>2024-03-16 11:05:33</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR008')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR008')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR009</td>
                    <td>S0000009</td>
                    <td>郑十一</td>
                    <td>小学五年级</td>
                    <td>B004</td>
                    <td>Harry Potter</td>
                    <td>Chapter 5</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">It does not do to dwell on dreams and forget to live.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">不要沉溺于幻想而忘了生活。</td>
                    <td>2024-03-16 14:20:10</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR009')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR009')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>TR010</td>
                    <td>S0000010</td>
                    <td>冯十二</td>
                    <td>初中三年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td>Chapter 6</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">You know, one loves the sunset, when one is so sad.</td>
                    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">你知道，当一个人感到忧伤的时候，他就喜欢看日落。</td>
                    <td>2024-03-16 15:45:22</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-translate-TR010')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-translate-TR010')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 156 条记录</span>
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

<!-- 隐藏确认弹窗 -->
<div class="modal-overlay" id="modal-hide-translate-TR001">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">隐藏记录</span>
            <button class="modal-close" onclick="closeModal('modal-hide-translate-TR001')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-off-line" style="font-size:40px;color:var(--warning);margin-bottom:12px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确认隐藏此翻译记录？</div>
            <div style="font-size:13px;color:var(--text-secondary);">隐藏后用户将无法在设备端查看此翻译内容，但记录仍保留在后台。</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-hide-translate-TR001')">取消</button>
            <button class="btn btn-warning">确认隐藏</button>
        </div>
    </div>
</div>

<!-- 取消隐藏弹窗 -->
<div class="modal-overlay" id="modal-unhide-translate-TR003">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">恢复显示</span>
            <button class="modal-close" onclick="closeModal('modal-unhide-translate-TR003')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-line" style="font-size:40px;color:var(--success);margin-bottom:12px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确认恢复显示此翻译记录？</div>
            <div style="font-size:13px;color:var(--text-secondary);">恢复后用户将可以重新查看此翻译内容。</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-unhide-translate-TR003')">取消</button>
            <button class="btn btn-success">确认显示</button>
        </div>
    </div>
</div>

<!-- 查看翻译详情弹窗 -->
<div class="modal-overlay" id="modal-view-translate-TR001">
    <div class="modal" style="max-width:600px;">
        <div class="modal-header">
            <span class="modal-title">翻译详情 — TR001</span>
            <button class="modal-close" onclick="closeModal('modal-view-translate-TR001')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div style="display:flex;gap:16px;margin-bottom:16px;flex-wrap:wrap;">
                <div><span style="color:var(--text-muted);font-size:12px;">用户ID</span><div style="font-size:14px;font-weight:500;">S0000001</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">学生</span><div style="font-size:14px;font-weight:500;">张三</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">年级</span><div style="font-size:14px;font-weight:500;">小学三年级</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">书籍</span><div style="font-size:14px;font-weight:500;">The Little Prince</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">章节</span><div style="font-size:14px;font-weight:500;">Chapter 1</div></div>
            </div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">原文</div>
            <div style="padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;line-height:1.6;color:var(--text-secondary);margin-bottom:16px;">
                It is the time you have wasted for your rose that makes your rose so important.
            </div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">译文</div>
            <div style="padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;line-height:1.6;color:var(--text-secondary);">
                正是你为你的玫瑰花费的时光，才使你的玫瑰变得如此重要。
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-view-translate-TR001')">关闭</button>
        </div>
    </div>
</div>
`,

// ========== 2.2 AI翻译配置（二级页面） ==========

aiTranslateConfig: () => `
<div class="page-title">
    <button class="btn btn-secondary" onclick="navigateTo('aiTranslate')"><i class="ri-arrow-left-line"></i> 返回AI翻译管理</button>
    <span>AI翻译配置</span>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;">
    <div class="card" style="flex:2;">
        <div class="card-header"><span class="card-title">⚙️ 翻译提示词配置</span></div>
        <div class="card-body">
            <div style="padding:12px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:var(--radius);margin-bottom:16px;">
                <div style="font-size:13px;color:#0369a1;"><i class="ri-information-line" style="margin-right:4px;"></i>当前配置仅用于英文书籍下的英译中场景</div>
            </div>
            <div class="form-group">
                <label class="form-label">翻译风格</label>
                <select class="form-select">
                    <option>直译（忠实原文）</option>
                    <option selected>意译（流畅自然）</option>
                    <option>学术翻译</option>
                    <option>儿童友好翻译</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">系统提示词</label>
                <textarea class="form-textarea" rows="6" placeholder="设定AI翻译的风格和要求...">你是一位专业的英语翻译助手，擅长将英文内容翻译成适合{{年级}}学生理解的中文。

翻译要求：
1. 保持原文的意思准确
2. 使用{{年级}}学生能理解的词汇和句式
3. 如果原文涉及文化背景，适当添加解释
4. 参考{{当前段落译文}}保持翻译风格一致

当前段落：{{当前段落译文}}
本章上下文：{{本章译文}}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">模型选择</label>
                <select class="form-select">
                    <option selected>GPT-4</option>
                    <option>GPT-3.5</option>
                    <option>Claude 3</option>
                </select>
            </div>
            <div class="form-group" style="text-align:right;">
                <button class="btn btn-primary">保存配置</button>
            </div>
        </div>
    </div>

    <div class="card" style="flex:1;min-width:320px;">
        <div class="card-header"><span class="card-title">🔧 变量库</span></div>
        <div class="card-body">
            <!-- 来源分类 Tab -->
            <div style="display:flex;gap:4px;margin-bottom:12px;">
                <button class="btn btn-sm btn-primary" id="var-tab-translate-user" onclick="switchVarTab('translate','user')">用户字段</button>
                <button class="btn btn-sm btn-secondary" id="var-tab-translate-book" onclick="switchVarTab('translate','book')">书籍字段</button>
                <button class="btn btn-sm btn-secondary" id="var-tab-translate-kb" onclick="switchVarTab('translate','kb')">知识库</button>
            </div>

            <!-- 用户字段面板 -->
            <div id="var-panel-translate-user">
                <div style="margin-bottom:12px;">
                    <input type="text" class="form-input" id="var-search-translate-user" placeholder="搜索变量..." oninput="filterVarList('translate','user')">
                </div>
                <div style="max-height:360px;overflow-y:auto;" id="var-list-translate-user">
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{昵称}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{昵称}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{年级}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{年级}}')">复制</button>
                    </div>
                </div>
            </div>

            <!-- 书籍字段面板 -->
            <div id="var-panel-translate-book" style="display:none;">
                <div style="margin-bottom:12px;">
                    <input type="text" class="form-input" id="var-search-translate-book" placeholder="搜索变量..." oninput="filterVarList('translate','book')">
                </div>
                <div style="max-height:360px;overflow-y:auto;" id="var-list-translate-book">
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{书名}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{书名}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{章节}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{章节}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{当前段落译文}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{当前段落译文}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{本章译文}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{本章译文}}')">复制</button>
                    </div>
                </div>
            </div>

            <!-- 知识库面板（含子Tab） -->
            <div id="var-panel-translate-kb" style="display:none;">
                <!-- 知识库调用方式子Tab -->
                <div style="display:flex;gap:4px;margin-bottom:12px;">
                    <button class="btn btn-sm btn-primary" id="var-kbtab-translate-file" onclick="switchKbVarTab('translate','file')">指定文件</button>
                    <button class="btn btn-sm btn-secondary" id="var-kbtab-translate-tag" onclick="switchKbVarTab('translate','tag')">按标签</button>
                </div>

                <!-- 指定文件子面板 -->
                <div id="var-kb-panel-translate-file">
                    <div style="margin-bottom:12px;">
                        <input type="text" class="form-input" id="var-search-translate-kbfile" placeholder="搜索文档..." oninput="filterKbVarList('translate','file')">
                    </div>
                    <div style="max-height:300px;overflow-y:auto;" id="var-list-translate-kbfile">
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:学术术语表.pdf}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:学术术语表.pdf}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:英语分级词汇.md}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:英语分级词汇.md}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:儿童文学常用词.txt}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:儿童文学常用词.txt}}')">复制</button>
                        </div>
                    </div>
                </div>

                <!-- 按标签子面板 -->
                <div id="var-kb-panel-translate-tag" style="display:none;">
                    <div style="margin-bottom:12px;">
                        <input type="text" class="form-input" id="var-search-translate-kbtag" placeholder="搜索标签..." oninput="filterKbVarList('translate','tag')">
                    </div>
                    <div style="max-height:300px;overflow-y:auto;" id="var-list-translate-kbtag">
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:词汇表}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 3 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:词汇表}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:术语库}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 2 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:术语库}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:分级标准}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 1 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:分级标准}}')">复制</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ========== 3. AI讲解管理 ==========

aiExplain: () => `
<div class="page-title">
    <span>AI讲解管理</span>
    <button class="btn btn-primary" onclick="navigateTo('aiExplainConfig')"><i class="ri-settings-3-line"></i> AI讲解配置</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>用户ID</label>
        <input type="text" class="form-input" placeholder="输入用户ID">
    </div>
    <div class="filter-group">
        <label>学生姓名</label>
        <input type="text" class="form-input" placeholder="输入姓名">
    </div>
    <div class="filter-group">
        <label>书籍名称</label>
        <input type="text" class="form-input" placeholder="输入书名">
    </div>
    <div class="filter-group">
        <label>对话轮数</label>
        <select class="form-select">
            <option>全部</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
    <div class="filter-group">
        <label>时间范围</label>
        <input type="date" class="form-input"> ~ <input type="date" class="form-input">
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>成功</option>
            <option>生成中</option>
            <option>失败</option>
        </select>
    </div>
    <div class="filter-group">
        <label>可见性</label>
        <select class="form-select">
            <option>全部</option>
            <option>可见</option>
            <option>已隐藏</option>
        </select>
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
    </div>
</div>

<div class="card">
    <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
        <span class="card-title">📋 对话记录表</span>
        <button class="btn btn-secondary btn-sm"><i class="ri-download-line"></i> 批量导出</button>
    </div>
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>用户ID</th>
                    <th style="min-width:120px;">学生姓名</th>
                    <th style="min-width:120px;">年级</th>
                    <th>书籍ID</th>
                    <th>书籍名称</th>
                    <th>首轮问题</th>
                    <th>AI首轮回复摘要</th>
                    <th>对话轮数</th>
                    <th>获取时间</th>
                    <th>状态</th>
                    <th>可见性</th>
                    <th style="width:160px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>EX001</td>
                    <td>S0000001</td>
                    <td style="min-width:100px;">张三</td>
                    <td style="min-width:100px;">小学三年级</td>
                    <td>B001</td>
                    <td>小王子</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">请讲解"正是你为你的玫瑰花费了时间，才使你的玫瑰变得如此重要"</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">这句话是狐狸对小王子说的，意思是...</td>
                    <td>3</td>
                    <td>2024-03-15 10:30:15</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX001')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX001')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX002</td>
                    <td>S0000002</td>
                    <td style="min-width:100px;">李四</td>
                    <td style="min-width:100px;">小学四年级</td>
                    <td>B002</td>
                    <td>夏洛的网</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">夏洛为什么要帮助威尔伯？</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">夏洛帮助威尔伯是因为它们之间建立了深厚的友谊...</td>
                    <td>2</td>
                    <td>2024-03-15 11:15:42</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX002')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX002')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX003</td>
                    <td>S0000003</td>
                    <td style="min-width:100px;">王五</td>
                    <td style="min-width:100px;">小学五年级</td>
                    <td>B003</td>
                    <td>西游记</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">孙悟空为什么要保护唐僧？</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">孙悟空被观音菩萨点化，答应保护唐僧西天取经...</td>
                    <td>1</td>
                    <td>2024-03-15 12:00:08</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-red">已隐藏</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX003')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="openModal('modal-unhide-explain-EX003')"><i class="ri-eye-line"></i> 显示</button>
                    </td>
                </tr>
                <tr>
                    <td>EX004</td>
                    <td>S0000004</td>
                    <td style="min-width:100px;">赵六</td>
                    <td style="min-width:100px;">小学六年级</td>
                    <td>B004</td>
                    <td>哈利·波特与魔法石</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">哈利·波特为什么能进入霍格沃茨？</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">哈利·波特是巫师，收到了霍格沃茨魔法学校的录取通知书...</td>
                    <td>3</td>
                    <td>2024-03-15 13:45:22</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX004')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX004')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX005</td>
                    <td>S0000005</td>
                    <td style="min-width:100px;">钱七</td>
                    <td style="min-width:100px;">初中一年级</td>
                    <td>B005</td>
                    <td>草房子</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">草房子为什么叫草房子？</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">草房子指的是故事中用油麻搭建的房子...</td>
                    <td>2</td>
                    <td>2024-03-15 14:30:55</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX005')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX005')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX006</td>
                    <td>S0000006</td>
                    <td style="min-width:100px;">孙八</td>
                    <td style="min-width:100px;">初中二年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">What does the fox mean by "tame"?</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">The fox explains that "taming" means creating ties...</td>
                    <td>3</td>
                    <td>2024-03-15 15:20:33</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX006')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX006')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX007</td>
                    <td>S0000007</td>
                    <td style="min-width:100px;">周九</td>
                    <td style="min-width:100px;">小学三年级</td>
                    <td>B002</td>
                    <td>夏洛的网</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Why did the spider write words on the web?</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Charlotte wrote words on her web to save Wilbur...</td>
                    <td>1</td>
                    <td>2024-03-15 16:00:10</td>
                    <td><span class="tag tag-yellow">生成中</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX007')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX007')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX008</td>
                    <td>S0000008</td>
                    <td style="min-width:100px;">吴十</td>
                    <td style="min-width:100px;">小学四年级</td>
                    <td>B004</td>
                    <td>哈利·波特与魔法石</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">How does the Sorting Hat work?</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">The Sorting Hat is a magical hat that reads the wearer's mind...</td>
                    <td>2</td>
                    <td>2024-03-15 17:10:18</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX008')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX008')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX009</td>
                    <td>S0000009</td>
                    <td style="min-width:100px;">郑十一</td>
                    <td style="min-width:100px;">小学五年级</td>
                    <td>B003</td>
                    <td>西游记</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">唐僧为什么相信孙悟空？</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">唐僧在五行山救出孙悟空后，相信菩萨的指引，愿用紧箍咒约束顽猴...</td>
                    <td>2</td>
                    <td>2024-03-16 09:45:10</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX009')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX009')"><i class="ri-eye-off-line"></i> 隐藏</button>
                    </td>
                </tr>
                <tr>
                    <td>EX010</td>
                    <td>S0000010</td>
                    <td style="min-width:100px;">冯十二</td>
                    <td style="min-width:100px;">初中三年级</td>
                    <td>B007</td>
                    <td>The Little Prince</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Why does the little prince leave his planet?</td>
                    <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">The little prince leaves because he feels misunderstood by his rose...</td>
                    <td>3</td>
                    <td>2024-03-16 10:30:55</td>
                    <td><span class="tag tag-green">成功</span></td>
                    <td><span class="tag tag-green">可见</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-dialog-EX010')"><i class="ri-chat-1-line"></i> 查看对话</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="openModal('modal-hide-explain-EX010')"><i class="ri-eye-off-line"></i> 隐藏</button>
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

<!-- 对话详情弹窗（3轮完整对话） -->
<div class="modal-overlay" id="modal-dialog-EX001">
    <div class="modal" style="max-width:640px;">
        <div class="modal-header">
            <span class="modal-title">对话详情 — EX001</span>
            <button class="modal-close" onclick="closeModal('modal-dialog-EX001')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div style="display:flex;gap:16px;margin-bottom:16px;flex-wrap:wrap;padding:12px;background:var(--bg);border-radius:var(--radius);">
                <div><span style="color:var(--text-muted);font-size:12px;">用户ID</span><div style="font-size:14px;font-weight:500;">S0000001</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">学生</span><div style="font-size:14px;font-weight:500;">张三</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">年级</span><div style="font-size:14px;font-weight:500;">小学三年级</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">书籍</span><div style="font-size:14px;font-weight:500;">小王子</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">触发时间</span><div style="font-size:14px;font-weight:500;">2024-03-15 10:30:15</div></div>
            </div>

            <!-- 第1轮 -->
            <div style="margin-bottom:16px;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;">
                <div style="padding:8px 12px;background:rgba(37,99,235,0.06);font-size:13px;font-weight:600;color:var(--primary);border-bottom:1px solid var(--border);">第1轮</div>
                <div style="padding:12px;">
                    <div style="margin-bottom:12px;">
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                            <span style="width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">🙋</span>
                            <span style="font-size:13px;font-weight:500;">用户</span>
                        </div>
                        <div style="padding:10px 12px;background:#f8fafc;border-radius:0 12px 12px 12px;margin-left:30px;font-size:13px;line-height:1.6;">
                            请讲解"正是你为你的玫瑰花费了时间，才使你的玫瑰变得如此重要"
                        </div>
                    </div>
                    <div>
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                            <span style="width:24px;height:24px;background:var(--success);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">🤖</span>
                            <span style="font-size:13px;font-weight:500;">AI</span>
                        </div>
                        <div style="padding:10px 12px;background:#f0fdf4;border-radius:12px 0 12px 12px;margin-left:30px;font-size:13px;line-height:1.6;">
                            <p>这句话是狐狸对小王子说的，意思是：</p>
                            <p>当你为某个人或某样东西付出了时间和精力，你们之间就建立了特殊的联系。这种联系让这个东西对你来说变得独一无二、非常重要。</p>
                            <p>就像小王子为他的玫瑰浇水、盖玻璃罩、捉毛毛虫，虽然玫瑰有时很任性，但正因为小王子付出了时间，这朵玫瑰就成为了世界上独一无二的玫瑰。</p>
                            <div style="margin-top:8px;display:flex;align-items:center;gap:4px;font-size:12px;color:var(--success);">
                                <i class="ri-bookmark-line"></i> 已收藏
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 第2轮 -->
            <div style="margin-bottom:16px;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;">
                <div style="padding:8px 12px;background:rgba(37,99,235,0.06);font-size:13px;font-weight:600;color:var(--primary);border-bottom:1px solid var(--border);">第2轮</div>
                <div style="padding:12px;">
                    <div style="margin-bottom:12px;">
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                            <span style="width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">🙋</span>
                            <span style="font-size:13px;font-weight:500;">用户</span>
                        </div>
                        <div style="padding:10px 12px;background:#f8fafc;border-radius:0 12px 12px 12px;margin-left:30px;font-size:13px;line-height:1.6;">
                            那小王子最后回到玫瑰身边了吗？
                        </div>
                    </div>
                    <div>
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                            <span style="width:24px;height:24px;background:var(--success);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">🤖</span>
                            <span style="font-size:13px;font-weight:500;">AI</span>
                        </div>
                        <div style="padding:10px 12px;background:#f0fdf4;border-radius:12px 0 12px 12px;margin-left:30px;font-size:13px;line-height:1.6;">
                            <p>这是一个开放式结局。在故事的最后，小王子让蛇咬了他，他的身体变得轻飘飘的，像一片羽毛一样飞走了。</p>
                            <p>作者没有明确告诉我们小王子是否回到了B-612星球。但我们可以相信，小王子一定回到了他的玫瑰身边，因为他曾经说过："我要对我的玫瑰负责。"</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 第3轮 -->
            <div style="margin-bottom:16px;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;">
                <div style="padding:8px 12px;background:rgba(37,99,235,0.06);font-size:13px;font-weight:600;color:var(--primary);border-bottom:1px solid var(--border);">第3轮</div>
                <div style="padding:12px;">
                    <div style="margin-bottom:12px;">
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                            <span style="width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">🙋</span>
                            <span style="font-size:13px;font-weight:500;">用户</span>
                        </div>
                        <div style="padding:10px 12px;background:#f8fafc;border-radius:0 12px 12px 12px;margin-left:30px;font-size:13px;line-height:1.6;">
                            这本书的作者是谁？
                        </div>
                    </div>
                    <div>
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                            <span style="width:24px;height:24px;background:var(--success);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">🤖</span>
                            <span style="font-size:13px;font-weight:500;">AI</span>
                        </div>
                        <div style="padding:10px 12px;background:#f0fdf4;border-radius:12px 0 12px 12px;margin-left:30px;font-size:13px;line-height:1.6;">
                            <p>《小王子》的作者是安托万·德·圣埃克苏佩里（Antoine de Saint-Exupéry），他是一位法国作家和飞行员。</p>
                            <p>圣埃克苏佩里出生于1900年，除了写作，他还是一名勇敢的飞行员。他在1944年执行飞行任务时失踪，再也没有回来。</p>
                            <div style="margin-top:8px;display:flex;align-items:center;gap:4px;font-size:12px;color:var(--info);">
                                <i class="ri-database-2-line"></i> 来源：知识库 — 作者简介
                            </div>
                            <div style="margin-top:4px;display:flex;align-items:center;gap:4px;font-size:12px;color:var(--success);">
                                <i class="ri-bookmark-line"></i> 已收藏
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="text-align:center;padding:8px;background:#fef2f2;border-radius:var(--radius);font-size:12px;color:var(--danger);">
                <i class="ri-error-warning-line" style="margin-right:4px;"></i>已达到最大对话轮数限制（3轮），本次对话已结束
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-warning" onclick="closeModal('modal-dialog-EX001');openModal('modal-hide-explain-EX001')">隐藏此对话</button>
            <button class="btn btn-secondary" onclick="closeModal('modal-dialog-EX001')">关闭</button>
        </div>
    </div>
</div>

<!-- 隐藏确认弹窗 -->
<div class="modal-overlay" id="modal-hide-explain-EX001">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">隐藏记录</span>
            <button class="modal-close" onclick="closeModal('modal-hide-explain-EX001')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-off-line" style="font-size:40px;color:var(--warning);margin-bottom:12px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确认隐藏此对话记录？</div>
            <div style="font-size:13px;color:var(--text-secondary);">隐藏后用户将无法在设备端查看此对话内容，但记录仍保留在后台。</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-hide-explain-EX001')">取消</button>
            <button class="btn btn-warning">确认隐藏</button>
        </div>
    </div>
</div>

<!-- 取消隐藏弹窗 -->
<div class="modal-overlay" id="modal-unhide-explain-EX003">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">恢复显示</span>
            <button class="modal-close" onclick="closeModal('modal-unhide-explain-EX003')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-eye-line" style="font-size:40px;color:var(--success);margin-bottom:12px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确认恢复显示此对话记录？</div>
            <div style="font-size:13px;color:var(--text-secondary);">恢复后用户将可以重新查看此对话内容。</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-unhide-explain-EX003')">取消</button>
            <button class="btn btn-success">确认显示</button>
        </div>
    </div>
</div>
`,

// ========== 3.2 AI讲解配置（二级页面） ==========

aiExplainConfig: () => `
<div class="page-title">
    <button class="btn btn-secondary" onclick="navigateTo('aiExplain')"><i class="ri-arrow-left-line"></i> 返回AI讲解管理</button>
    <span>AI讲解配置</span>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;">
    <div class="card" style="flex:2;">
        <div class="card-header"><span class="card-title">⚙️ 讲解提示词配置</span></div>
        <div class="card-body">
            <div style="padding:12px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:var(--radius);margin-bottom:16px;">
                <div style="font-size:13px;color:#0369a1;"><i class="ri-information-line" style="margin-right:4px;"></i>AI讲解支持最多3轮对话，超过后将提示用户对话结束</div>
            </div>
            <div class="form-group">
                <label class="form-label">解释风格</label>
                <select class="form-select">
                    <option>简洁明了</option>
                    <option selected>详细展开</option>
                    <option>适合儿童</option>
                    <option>学术深度</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">首轮对话提示词</label>
                <textarea class="form-textarea" rows="6" placeholder="定义用户划取内容后首次发送给AI的模板...">你是一位耐心的阅读讲解助手，正在为{{年级}}的学生讲解《{{书名}}》中的内容。

学生划取了以下内容："{{划选原文}}"

当前章节：{{当前章节}}
当前段落译文：{{当前段落译文}}
本章译文：{{本章译文}}

请根据学生的年级和理解能力，用{{年级}}学生能听懂的语言，讲解这段内容的含义。如果涉及文化背景或作者信息，可以适当补充。

学生的问题："请讲解'{{划选原文}}'"</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">多轮对话规则</label>
                <textarea class="form-textarea" rows="4" placeholder="定义后续追问的上下文保留规则...">在多轮对话中，请保持以下上下文：
1. 始终记住当前讨论的书籍《{{书名}}》和章节{{当前章节}}
2. 保持与学生的年级{{年级}}相匹配的语言难度
3. 如果学生追问作者或背景信息，可以参考知识库内容
4. 每轮回答控制在200字以内，便于学生阅读
5. 最多进行3轮对话，超过后提示用户对话结束</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">模型选择</label>
                <select class="form-select">
                    <option selected>GPT-4</option>
                    <option>GPT-3.5</option>
                    <option>Claude 3</option>
                </select>
            </div>
            <div class="form-group" style="text-align:right;">
                <button class="btn btn-primary">保存配置</button>
            </div>
        </div>
    </div>

    <div class="card" style="flex:1;min-width:320px;">
        <div class="card-header"><span class="card-title">🔧 变量库</span></div>
        <div class="card-body">
            <!-- 来源分类 Tab -->
            <div style="display:flex;gap:4px;margin-bottom:12px;">
                <button class="btn btn-sm btn-primary" id="var-tab-explain-user" onclick="switchVarTab('explain','user')">用户字段</button>
                <button class="btn btn-sm btn-secondary" id="var-tab-explain-book" onclick="switchVarTab('explain','book')">书籍字段</button>
                <button class="btn btn-sm btn-secondary" id="var-tab-explain-kb" onclick="switchVarTab('explain','kb')">知识库</button>
            </div>

            <!-- 用户字段面板 -->
            <div id="var-panel-explain-user">
                <div style="margin-bottom:12px;">
                    <input type="text" class="form-input" id="var-search-explain-user" placeholder="搜索变量..." oninput="filterVarList('explain','user')">
                </div>
                <div style="max-height:360px;overflow-y:auto;" id="var-list-explain-user">
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{昵称}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{昵称}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{年级}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{年级}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{阅读级别}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{阅读级别}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{设备SN}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{设备SN}}')">复制</button>
                    </div>
                </div>
            </div>

            <!-- 书籍字段面板 -->
            <div id="var-panel-explain-book" style="display:none;">
                <div style="margin-bottom:12px;">
                    <input type="text" class="form-input" id="var-search-explain-book" placeholder="搜索变量..." oninput="filterVarList('explain','book')">
                </div>
                <div style="max-height:360px;overflow-y:auto;" id="var-list-explain-book">
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{书名}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{书名}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{作者}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{作者}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{划选原文}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{划选原文}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{当前章节}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{当前章节}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{当前段落译文}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{当前段落译文}}')">复制</button>
                    </div>
                    <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                        <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{本章译文}}</code>
                        <button class="btn btn-link btn-sm" onclick="copyVar('{{本章译文}}')">复制</button>
                    </div>
                </div>
            </div>

            <!-- 知识库面板（含子Tab） -->
            <div id="var-panel-explain-kb" style="display:none;">
                <!-- 知识库调用方式子Tab -->
                <div style="display:flex;gap:4px;margin-bottom:12px;">
                    <button class="btn btn-sm btn-primary" id="var-kbtab-explain-file" onclick="switchKbVarTab('explain','file')">指定文件</button>
                    <button class="btn btn-sm btn-secondary" id="var-kbtab-explain-tag" onclick="switchKbVarTab('explain','tag')">按标签</button>
                </div>

                <!-- 指定文件子面板 -->
                <div id="var-kb-panel-explain-file">
                    <div style="margin-bottom:12px;">
                        <input type="text" class="form-input" id="var-search-explain-kbfile" placeholder="搜索文档..." oninput="filterKbVarList('explain','file')">
                    </div>
                    <div style="max-height:300px;overflow-y:auto;" id="var-list-explain-kbfile">
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:作者生平简介.pdf}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:作者生平简介.pdf}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:小王子创作背景.md}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:小王子创作背景.md}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:法国文学简史.docx}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:法国文学简史.docx}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <code style="font-size:11px;background:var(--bg);padding:2px 6px;border-radius:4px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{知识库文件:名著导读资料.md}}</code>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库文件:名著导读资料.md}}')">复制</button>
                        </div>
                    </div>
                </div>

                <!-- 按标签子面板 -->
                <div id="var-kb-panel-explain-tag" style="display:none;">
                    <div style="margin-bottom:12px;">
                        <input type="text" class="form-input" id="var-search-explain-kbtag" placeholder="搜索标签..." oninput="filterKbVarList('explain','tag')">
                    </div>
                    <div style="max-height:300px;overflow-y:auto;" id="var-list-explain-kbtag">
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:作者简介}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 3 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:作者简介}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:作品背景}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 2 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:作品背景}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:文学赏析}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 1 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:文学赏析}}')">复制</button>
                        </div>
                        <div class="var-item" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
                            <div>
                                <code style="font-size:12px;background:var(--bg);padding:2px 6px;border-radius:4px;">{{知识库标签:词汇表}}</code>
                                <span style="font-size:11px;color:var(--text-muted);margin-left:4px;">覆盖 2 篇</span>
                            </div>
                            <button class="btn btn-link btn-sm" onclick="copyVar('{{知识库标签:词汇表}}')">复制</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,

// ========== 4. 知识库管理 ==========

knowledge: () => `
<div class="page-title">
    <span>知识库管理</span>
    <button class="btn btn-primary" onclick="openModal('modal-add-knowledge')"><i class="ri-add-line"></i> 新增文档</button>
</div>

<div class="filter-bar">
    <div class="filter-group">
        <label>文档名称</label>
        <input type="text" class="form-input" placeholder="搜索文档">
    </div>
    <div class="filter-group">
        <label>文档类型</label>
        <select class="form-select">
            <option>全部</option>
            <option>PDF</option>
            <option>Word</option>
            <option>Markdown</option>
            <option>TXT</option>
            <option>图片</option>
        </select>
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>已解析</option>
            <option>解析中</option>
            <option>解析失败</option>
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
                    <th>文档名称</th>
                    <th>类型</th>
                    <th>大小</th>
                    <th>段落数</th>
                    <th>状态</th>
                    <th>可调用标签</th>
                    <th>上传时间</th>
                    <th style="width:160px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>KB001</td>
                    <td><i class="ri-file-pdf-line" style="color:var(--danger);"></i> 阅读教育白皮书2024.pdf</td>
                    <td>PDF</td>
                    <td>2.5 MB</td>
                    <td>128</td>
                    <td><span class="tag tag-green">已解析</span></td>
                    <td><span class="tag">阅读教育</span><span class="tag">政策</span></td>
                    <td>2024-01-10</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB002</td>
                    <td><i class="ri-file-word-line" style="color:var(--primary);"></i> 中小学阅读书目指南.docx</td>
                    <td>Word</td>
                    <td>1.2 MB</td>
                    <td>86</td>
                    <td><span class="tag tag-green">已解析</span></td>
                    <td><span class="tag">书目推荐</span><span class="tag">分级阅读</span></td>
                    <td>2024-01-15</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB003</td>
                    <td><i class="ri-markdown-line" style="color:var(--success);"></i> 儿童文学知识库.md</td>
                    <td>Markdown</td>
                    <td>856 KB</td>
                    <td>256</td>
                    <td><span class="tag tag-yellow">解析中</span></td>
                    <td><span class="tag">儿童文学</span><span class="tag">名著</span></td>
                    <td>2024-02-20</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB004</td>
                    <td><i class="ri-file-text-line" style="color:var(--text-muted);"></i> 阅读理解技巧.txt</td>
                    <td>TXT</td>
                    <td>45 KB</td>
                    <td>32</td>
                    <td><span class="tag tag-green">已解析</span></td>
                    <td><span class="tag">阅读技巧</span><span class="tag">教学方法</span></td>
                    <td>2024-02-25</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB005</td>
                    <td><i class="ri-file-pdf-line" style="color:var(--danger);"></i> 英语分级阅读标准.pdf</td>
                    <td>PDF</td>
                    <td>3.8 MB</td>
                    <td>65</td>
                    <td><span class="tag tag-green">已解析</span></td>
                    <td><span class="tag">分级标准</span><span class="tag">英语</span></td>
                    <td>2024-03-01</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB006</td>
                    <td><i class="ri-file-word-line" style="color:var(--primary);"></i> 阅读教学案例分析.docx</td>
                    <td>Word</td>
                    <td>2.1 MB</td>
                    <td>42</td>
                    <td><span class="tag tag-red">解析失败</span></td>
                    <td><span class="tag">教学案例</span></td>
                    <td>2024-03-05</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB007</td>
                    <td><i class="ri-markdown-line" style="color:var(--success);"></i> 名著导读资料.md</td>
                    <td>Markdown</td>
                    <td>1.2 MB</td>
                    <td>180</td>
                    <td><span class="tag tag-green">已解析</span></td>
                    <td><span class="tag">作者简介</span><span class="tag">作品背景</span><span class="tag">文学赏析</span></td>
                    <td>2024-03-08</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB008</td>
                    <td><i class="ri-file-text-line" style="color:var(--text-muted);"></i> 学生阅读习惯调研.txt</td>
                    <td>TXT</td>
                    <td>128 KB</td>
                    <td>88</td>
                    <td><span class="tag tag-yellow">解析中</span></td>
                    <td><span class="tag">调研</span><span class="tag">数据</span></td>
                    <td>2024-03-10</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB009</td>
                    <td><i class="ri-file-pdf-line" style="color:var(--danger);"></i> 语文课程标准解读.pdf</td>
                    <td>PDF</td>
                    <td>4.2 MB</td>
                    <td>95</td>
                    <td><span class="tag tag-green">已解析</span></td>
                    <td><span class="tag">课程</span><span class="tag">标准</span></td>
                    <td>2024-03-12</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>KB010</td>
                    <td><i class="ri-file-word-line" style="color:var(--primary);"></i> 英语阅读教学策略.docx</td>
                    <td>Word</td>
                    <td>1.8 MB</td>
                    <td>55</td>
                    <td><span class="tag tag-green">已解析</span></td>
                    <td><span class="tag">英语</span><span class="tag">阅读</span><span class="tag">策略</span></td>
                    <td>2024-03-15</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-view-knowledge')"><i class="ri-eye-line"></i> 查看</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-knowledge-ref')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 48 条记录</span>
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

<!-- 新增文档模态框 -->
<div class="modal-overlay" id="modal-add-knowledge">
    <div class="modal" style="max-width:520px;">
        <div class="modal-header">
            <span class="modal-title">新增文档</span>
            <button class="modal-close" onclick="closeModal('modal-add-knowledge')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <!-- 步骤1：上传文件 -->
            <div id="kb-upload-step">
                <div style="padding:12px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:var(--radius);margin-bottom:16px;">
                    <div style="font-size:13px;color:#0369a1;"><i class="ri-information-line" style="margin-right:4px;"></i>请先上传文件，系统将自动解析并提取文档信息</div>
                </div>
                <div class="form-group">
                    <label class="form-label">上传文件</label>
                    <div style="border:2px dashed var(--border);border-radius:8px;padding:32px;text-align:center;color:var(--text-muted);cursor:pointer;" onclick="simulateKbUpload()">
                        <i class="ri-upload-cloud-2-line" style="font-size:40px;"></i>
                        <p style="margin:8px 0;font-size:14px;">点击上传或拖拽文件到此处</p>
                        <p style="font-size:12px;color:var(--text-muted);">支持 PDF、Word、Markdown、TXT、图片格式</p>
                    </div>
                </div>
            </div>

            <!-- 步骤2：解析完成，可编辑 -->
            <div id="kb-edit-step" style="display:none;">
                <div style="padding:12px;background:#f0fdf4;border:1px solid #86efac;border-radius:var(--radius);margin-bottom:16px;">
                    <div style="font-size:13px;color:#15803d;"><i class="ri-check-line" style="margin-right:4px;"></i>文件解析完成，已自动填入文档信息，您可以修改后保存</div>
                </div>
                <div class="form-group">
                    <label class="form-label">文档名称</label>
                    <input type="text" class="form-input" id="kb-doc-name" value="作者生平简介" placeholder="请输入文档名称">
                </div>
                <div class="form-group">
                    <label class="form-label">文档类型</label>
                    <select class="form-select" id="kb-doc-type">
                        <option selected>PDF</option>
                        <option>Word</option>
                        <option>Markdown</option>
                        <option>TXT</option>
                        <option>图片</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">可调用标签</label>
                    <div style="position:relative;" id="kb-tag-dropdown-wrapper">
                        <!-- 已选标签展示 -->
                        <div id="kb-selected-tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;min-height:28px;"></div>
                        <!-- 下拉触发区 -->
                        <div style="border:1px solid var(--border);border-radius:var(--radius);padding:8px 12px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="toggleKbTagDropdown()">
                            <span style="color:var(--text-muted);font-size:13px;">点击选择标签...</span>
                            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);"></i>
                        </div>
                        <!-- 下拉面板 -->
                        <div id="kb-tag-dropdown" style="display:none;position:absolute;top:100%;left:0;right:0;margin-top:4px;background:#fff;border:1px solid var(--border);border-radius:var(--radius);box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:100;max-height:280px;overflow:hidden;">
                            <div style="padding:8px 12px;border-bottom:1px solid var(--border);">
                                <input type="text" class="form-input" id="kb-tag-search" placeholder="搜索标签..." style="font-size:13px;" oninput="filterKbTagOptions()">
                            </div>
                            <div id="kb-tag-options" style="max-height:200px;overflow-y:auto;padding:4px 0;">
                                <label style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                                    <input type="checkbox" value="作者简介" style="margin-right:8px;" onchange="toggleKbTag(this)">
                                    <span>作者简介</span>
                                </label>
                                <label style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                                    <input type="checkbox" value="作品背景" style="margin-right:8px;" onchange="toggleKbTag(this)">
                                    <span>作品背景</span>
                                </label>
                                <label style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                                    <input type="checkbox" value="文学赏析" style="margin-right:8px;" onchange="toggleKbTag(this)">
                                    <span>文学赏析</span>
                                </label>
                                <label style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                                    <input type="checkbox" value="词汇表" style="margin-right:8px;" onchange="toggleKbTag(this)">
                                    <span>词汇表</span>
                                </label>
                                <label style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                                    <input type="checkbox" value="术语库" style="margin-right:8px;" onchange="toggleKbTag(this)">
                                    <span>术语库</span>
                                </label>
                                <label style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                                    <input type="checkbox" value="创作背景" style="margin-right:8px;" onchange="toggleKbTag(this)">
                                    <span>创作背景</span>
                                </label>
                                <label style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                                    <input type="checkbox" value="时代背景" style="margin-right:8px;" onchange="toggleKbTag(this)">
                                    <span>时代背景</span>
                                </label>
                            </div>
                            <!-- 新增标签 -->
                            <div id="kb-tag-add-new" style="display:none;padding:8px 12px;border-top:1px solid var(--border);cursor:pointer;color:var(--primary);font-size:13px;" onclick="addNewKbTag()">
                                <i class="ri-add-line" style="margin-right:4px;"></i>新增标签 "<span id="kb-tag-search-text"></span>"
                            </div>
                        </div>
                    </div>
                </div>
                <div style="padding:10px 12px;background:var(--bg);border-radius:var(--radius);font-size:12px;color:var(--text-muted);">
                    <i class="ri-file-line" style="margin-right:4px;"></i>已上传：<span id="kb-file-name">作者生平简介.pdf</span>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-knowledge')">取消</button>
            <button class="btn btn-primary" id="kb-btn-upload" onclick="simulateKbUpload()">开始解析</button>
            <button class="btn btn-primary" id="kb-btn-save" style="display:none;" onclick="closeModal('modal-add-knowledge')">保存</button>
        </div>
    </div>
</div>

<!-- 删除确认（含关联检测） -->
<div class="modal-overlay" id="modal-delete-knowledge-ref">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">确认删除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-knowledge-ref')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="padding:24px 20px;">
            <div style="text-align:center;margin-bottom:16px;">
                <i class="ri-error-warning-line" style="font-size:40px;color:var(--warning);"></i>
            </div>
            <div style="font-size:15px;font-weight:600;text-align:center;margin-bottom:12px;">以下 AI 提示词正在引用此文档</div>
            <div style="padding:12px;background:var(--bg);border-radius:var(--radius);margin-bottom:16px;">
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;"><i class="ri-robot-line" style="margin-right:4px;"></i>AI导读配置：{{知识库:作者简介}}、{{知识库:作品背景}}</div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;"><i class="ri-translate-2" style="margin-right:4px;"></i>AI翻译配置：{{知识库:词汇表}}、{{知识库:术语库}}</div>
                <div style="font-size:13px;color:var(--text-secondary);"><i class="ri-chat-ai-line" style="margin-right:4px;"></i>AI讲解配置：{{知识库:作者简介}}、{{知识库:作品背景}}、{{知识库:文学赏析}}</div>
            </div>
            <div style="font-size:13px;color:var(--text-secondary);text-align:center;">删除后将影响对应 AI 功能的回答质量，是否确认？</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-knowledge-ref')">取消</button>
            <button class="btn btn-danger">确认删除</button>
        </div>
    </div>
</div>

<!-- 查看知识库文档模态框 -->
<div class="modal-overlay" id="modal-view-knowledge">
    <div class="modal" style="max-width:600px;">
        <div class="modal-header">
            <span class="modal-title">知识库文档详情</span>
            <button class="modal-close" onclick="closeModal('modal-view-knowledge')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div style="display:flex;gap:16px;margin-bottom:16px;flex-wrap:wrap;">
                <div><span style="color:var(--text-muted);font-size:12px;">文档标题</span><div style="font-size:14px;font-weight:500;">文学作品赏析指南</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">类型</span><div style="font-size:14px;font-weight:500;">PDF</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">大小</span><div style="font-size:14px;font-weight:500;">2.5 MB</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">段落数</span><div style="font-size:14px;font-weight:500;">128</div></div>
                <div><span style="color:var(--text-muted);font-size:12px;">状态</span><div style="font-size:14px;font-weight:500;"><span class="tag tag-green">已解析</span></div></div>
            </div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">可调用标签</div>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
                <span class="tag">作者简介</span>
                <span class="tag">作品背景</span>
                <span class="tag">文学赏析</span>
            </div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">文档摘要</div>
            <div style="padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;line-height:1.6;color:var(--text-secondary);margin-bottom:16px;max-height:200px;overflow-y:auto;">
                本文档收录了经典文学作品的深度赏析，包括主题解读、人物分析、写作手法等内容，适用于小学高年级和初中学生的课外阅读指导。
            </div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">关联书籍</div>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
                <span class="tag">小王子</span>
                <span class="tag">夏洛的网</span>
                <span class="tag">草房子</span>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-view-knowledge')">关闭</button>
        </div>
    </div>
</div>
`,


recommendation: () => `
<div class="page-title">
    <span>推荐排序</span>
</div>

<!-- Tab 切换 -->
<div style="display:flex;gap:8px;margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:8px;">
    <button class="btn btn-sm btn-primary" id="tab-btn-home" onclick="switchRecommendTab('home')" style="border-radius:20px;"><i class="ri-home-line"></i> 首页推荐</button>
    <button class="btn btn-sm btn-secondary" id="tab-btn-detail" onclick="switchRecommendTab('detail')" style="border-radius:20px;"><i class="ri-book-open-line"></i> 书籍详情推荐</button>
</div>

<!-- 首页推荐 Tab -->
<div id="tab-home" style="display:block;">
    <!-- 小学 -->
    <div class="card" style="margin-bottom:16px;">
        <div class="card-header" style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border-bottom:1px solid var(--border);cursor:pointer;" onclick="toggleTreeNode(this)">
            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
            <span style="font-weight:600;">小学</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">6个年级</span>
        </div>
        <div class="card-body" style="padding:0;">
            <!-- 小学1年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学1年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">3本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/4A90D9/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">猜猜我有多爱你</div>
                                <div style="font-size:12px;color:var(--text-secondary);">山姆·麦克布雷尼</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">2</span>
                            <img src="https://via.placeholder.com/32x44/E67E22/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">好饿的毛毛虫</div>
                                <div style="font-size:12px;color:var(--text-secondary);">艾瑞·卡尔</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">3</span>
                            <img src="https://via.placeholder.com/32x44/27AE60/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">大卫不可以</div>
                                <div style="font-size:12px;color:var(--text-secondary);">大卫·香农</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 小学2年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学2年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">2本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/8E44AD/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">没头脑和不高兴</div>
                                <div style="font-size:12px;color:var(--text-secondary);">任溶溶</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">2</span>
                            <img src="https://via.placeholder.com/32x44/C0392B/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">小猪唏哩呼噜</div>
                                <div style="font-size:12px;color:var(--text-secondary);">孙幼军</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 小学3年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学3年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">2本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/4A90D9/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">小王子</div>
                                <div style="font-size:12px;color:var(--text-secondary);">安托万·德·圣埃克苏佩里</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">2</span>
                            <img src="https://via.placeholder.com/32x44/E67E22/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">夏洛的网</div>
                                <div style="font-size:12px;color:var(--text-secondary);">E·B·怀特</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 小学4年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学4年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">1本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/8E44AD/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">草房子</div>
                                <div style="font-size:12px;color:var(--text-secondary);">曹文轩</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 小学5年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学5年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">1本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/C0392B/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">哈利·波特与魔法石</div>
                                <div style="font-size:12px;color:var(--text-secondary);">J.K.罗琳</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 小学6年级 -->
            <div>
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">小学6年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 初中 -->
    <div class="card" style="margin-bottom:16px;">
        <div class="card-header" style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border-bottom:1px solid var(--border);cursor:pointer;" onclick="toggleTreeNode(this)">
            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
            <span style="font-weight:600;">初中</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">3个年级</span>
        </div>
        <div class="card-body" style="padding:0;">
            <!-- 初中1年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">初中1年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">1本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/1ABC9C/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">西游记</div>
                                <div style="font-size:12px;color:var(--text-secondary);">吴承恩</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 初中2年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">初中2年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
            <!-- 初中3年级 -->
            <div>
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">初中3年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 高中 -->
    <div class="card" style="margin-bottom:16px;">
        <div class="card-header" style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border-bottom:1px solid var(--border);cursor:pointer;" onclick="toggleTreeNode(this)">
            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
            <span style="font-weight:600;">高中</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">3个年级</span>
        </div>
        <div class="card-body" style="padding:0;">
            <!-- 高中一年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">高中一年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
            <!-- 高中二年级 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">高中二年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
            <!-- 高中三年级 -->
            <div>
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-folder-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">高中三年级</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 大学生 -->
    <div class="card" style="margin-bottom:16px;">
        <div class="card-header" style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border-bottom:1px solid var(--border);cursor:pointer;" onclick="toggleTreeNode(this)">
            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
            <span style="font-weight:600;">大学生</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
        </div>
        <div class="card-body" style="padding:12px 16px 12px 48px;">
            <div style="display:flex;gap:8px;margin-bottom:12px;">
                <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
            </div>
            <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
        </div>
    </div>
    <!-- 在职人员 -->
    <div class="card" style="margin-bottom:16px;">
        <div class="card-header" style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border-bottom:1px solid var(--border);cursor:pointer;" onclick="toggleTreeNode(this)">
            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
            <span style="font-weight:600;">在职人员</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
        </div>
        <div class="card-body" style="padding:12px 16px 12px 48px;">
            <div style="display:flex;gap:8px;margin-bottom:12px;">
                <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-home')"><i class="ri-add-line"></i> 添加推荐书籍</button>
            </div>
            <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
        </div>
    </div>
</div>

<!-- 书籍详情推荐 Tab -->
<div id="tab-detail" style="display:none;">
    <!-- 中文 -->
    <div class="card" style="margin-bottom:16px;">
        <div class="card-header" style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border-bottom:1px solid var(--border);cursor:pointer;" onclick="toggleTreeNode(this)">
            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
            <span style="font-weight:600;">中文</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">4个二级分类</span>
        </div>
        <div class="card-body" style="padding:0;">
            <!-- 文学 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-book-mark-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">文学</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">2本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-detail')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/4A90D9/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">小王子</div>
                                <div style="font-size:12px;color:var(--text-secondary);">安托万·德·圣埃克苏佩里</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">2</span>
                            <img src="https://via.placeholder.com/32x44/E67E22/fff?text=书" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">草房子</div>
                                <div style="font-size:12px;color:var(--text-secondary);">曹文轩</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 艺术 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-book-mark-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">艺术</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-detail')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
            <!-- 人文社科 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-book-mark-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">人文社科</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-detail')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
            <!-- 自然科学 -->
            <div>
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-book-mark-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">自然科学</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-detail')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 英文 -->
    <div class="card" style="margin-bottom:16px;">
        <div class="card-header" style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border-bottom:1px solid var(--border);cursor:pointer;" onclick="toggleTreeNode(this)">
            <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
            <span style="font-weight:600;">英文</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">3个二级分类</span>
        </div>
        <div class="card-body" style="padding:0;">
            <!-- 英语周报时文 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-book-mark-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">英语周报时文</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">1本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-detail')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/F39C12/fff?text=EN" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">Charlotte's Web / 夏洛的网</div>
                                <div style="font-size:12px;color:var(--text-secondary);">E.B. White / E.B.怀特</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 外研社分级阅读 -->
            <div style="border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-book-mark-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">外研社分级阅读</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">0本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-detail')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px;">暂无推荐书籍</div>
                </div>
            </div>
            <!-- 原版名著 -->
            <div>
                <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(74,144,217,0.05);cursor:pointer;" onclick="toggleTreeNode(this)">
                    <i class="ri-arrow-down-s-line" style="color:var(--text-muted);transition:transform 0.2s;"></i>
                    <i class="ri-book-mark-line" style="color:var(--primary);"></i>
                    <span style="font-weight:500;">原版名著</span>
                    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto;">1本推荐</span>
                </div>
                <div style="padding:12px 16px 12px 48px;">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <button class="btn btn-primary btn-sm" onclick="openModal('modal-add-book-detail')"><i class="ri-add-line"></i> 添加推荐书籍</button>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg);border-radius:6px;border:1px solid var(--border);" class="recommend-item">
                            <i class="ri-drag-move-fill" style="color:var(--text-muted);cursor:move;"></i>
                            <span style="font-weight:600;color:var(--primary);width:24px;text-align:center;" class="sort-num">1</span>
                            <img src="https://via.placeholder.com/32x44/9B59B6/fff?text=EN" style="border-radius:3px;">
                            <div style="flex:1;">
                                <div style="font-weight:500;">Harry Potter and the Sorcerer's Stone / 哈利·波特与魔法石</div>
                                <div style="font-size:12px;color:var(--text-secondary);">J.K. Rowling / J.K.罗琳</div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendUp(this)" title="上移"><i class="ri-arrow-up-line"></i></button>
                                <button class="btn btn-sm btn-secondary" onclick="moveRecommendDown(this)" title="下移"><i class="ri-arrow-down-line"></i></button>
                            </div>
                            <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-recommendation')"><i class="ri-delete-bin-line"></i> 移除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 添加推荐书籍模态框（首页推荐） -->
<div class="modal-overlay" id="modal-add-book-home">
    <div class="modal" style="max-width:600px;">
        <div class="modal-header">
            <span class="modal-title">添加推荐书籍</span>
            <button class="modal-close" onclick="closeModal('modal-add-book-home')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">搜索书籍</label>
                <div style="display:flex;gap:8px;">
                    <input type="text" class="form-input" placeholder="输入书名或作者名搜索" style="flex:1;">
                    <button class="btn btn-primary"><i class="ri-search-line"></i> 搜索</button>
                </div>
            </div>
            <div style="max-height:300px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">
                <div style="padding:12px;border-bottom:1px solid var(--border);cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/4A90D9/fff?text=书" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">小王子</div>
                            <div style="font-size:12px;color:var(--text-secondary);">安托万·德·圣埃克苏佩里</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
                <div style="padding:12px;border-bottom:1px solid var(--border);cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/E67E22/fff?text=书" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">夏洛的网</div>
                            <div style="font-size:12px;color:var(--text-secondary);">E·B·怀特</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
                <div style="padding:12px;border-bottom:1px solid var(--border);cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/8E44AD/fff?text=EN" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">The Little Prince / 小王子</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Antoine de Saint-Exupéry / 安托万·德·圣埃克苏佩里</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
                <div style="padding:12px;border-bottom:1px solid var(--border);cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/27AE60/fff?text=书" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">西游记</div>
                            <div style="font-size:12px;color:var(--text-secondary);">吴承恩</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
                <div style="padding:12px;cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/C0392B/fff?text=书" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">哈利·波特与魔法石</div>
                            <div style="font-size:12px;color:var(--text-secondary);">J.K.罗琳</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-book-home')">取消</button>
        </div>
    </div>
</div>

<!-- 添加推荐书籍模态框（书籍详情推荐） -->
<div class="modal-overlay" id="modal-add-book-detail">
    <div class="modal" style="max-width:600px;">
        <div class="modal-header">
            <span class="modal-title">添加推荐书籍</span>
            <button class="modal-close" onclick="closeModal('modal-add-book-detail')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">搜索书籍</label>
                <div style="display:flex;gap:8px;">
                    <input type="text" class="form-input" placeholder="输入书名或作者名搜索" style="flex:1;">
                    <button class="btn btn-primary"><i class="ri-search-line"></i> 搜索</button>
                </div>
            </div>
            <div style="max-height:300px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">
                <div style="padding:12px;border-bottom:1px solid var(--border);cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/4A90D9/fff?text=书" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">小王子</div>
                            <div style="font-size:12px;color:var(--text-secondary);">安托万·德·圣埃克苏佩里</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
                <div style="padding:12px;border-bottom:1px solid var(--border);cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/8E44AD/fff?text=EN" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">The Little Prince / 小王子</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Antoine de Saint-Exupéry / 安托万·德·圣埃克苏佩里</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
                <div style="padding:12px;cursor:pointer;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="https://via.placeholder.com/40x56/F39C12/fff?text=EN" style="border-radius:3px;">
                        <div style="flex:1;">
                            <div style="font-weight:500;">Charlotte's Web / 夏洛的网</div>
                            <div style="font-size:12px;color:var(--text-secondary);">E.B. White / E.B.怀特</div>
                        </div>
                        <button class="btn btn-primary btn-sm">选择</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-book-detail')">取消</button>
        </div>
    </div>
</div>

<!-- 删除确认模态框 -->
<div class="modal-overlay" id="modal-delete-recommendation">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认移除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-recommendation')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:32px 20px;">
            <i class="ri-error-warning-line" style="font-size:48px;color:var(--danger);margin-bottom:16px;"></i>
            <div style="font-size:15px;font-weight:600;margin-bottom:8px;">确定要移除该推荐吗？</div>
            <div style="font-size:13px;color:var(--text-secondary);">移除后该书籍将不再显示在推荐位中</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-recommendation')">取消</button>
            <button class="btn btn-danger">确认移除</button>
        </div>
    </div>
</div>
`,
wordbank: () => `
<div class="filter-bar" style="align-items:flex-end;">
    <div class="filter-group">
        <label>词库名称</label>
        <input type="text" class="form-input" placeholder="搜索词库">
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
    </div>
    <div class="filter-group" style="margin-left:auto;align-self:flex-end;">
        <button class="btn btn-primary" onclick="openModal('modal-add-wordbank')"><i class="ri-add-line"></i> 新增词库</button>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>词库名称</th>
                    <th>词汇数量</th>
                    <th>适用年级</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>WB001</td>
                    <td>小学1年级核心词库</td>
                    <td>128</td>
                    <td>小学1年级</td>
                    <td>2024-01-15 10:23:45</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB002</td>
                    <td>小学2年级核心词库</td>
                    <td>95</td>
                    <td>小学2年级</td>
                    <td>2024-01-20 14:30:12</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB003</td>
                    <td>小学3年级核心词库</td>
                    <td>256</td>
                    <td>小学3年级</td>
                    <td>2024-02-01 09:15:33</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB004</td>
                    <td>小学4年级核心词库</td>
                    <td>168</td>
                    <td>小学4年级</td>
                    <td>2024-02-10 16:45:08</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB005</td>
                    <td>小学5年级核心词库</td>
                    <td>88</td>
                    <td>小学5年级</td>
                    <td>2024-02-15 11:20:55</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB006</td>
                    <td>小学6年级核心词库</td>
                    <td>500</td>
                    <td>小学6年级</td>
                    <td>2024-02-20 08:50:22</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB007</td>
                    <td>初中1年级核心词库</td>
                    <td>320</td>
                    <td>初中1年级</td>
                    <td>2024-03-01 13:10:18</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB008</td>
                    <td>初中2年级核心词库</td>
                    <td>145</td>
                    <td>初中2年级</td>
                    <td>2024-03-05 15:35:42</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB009</td>
                    <td>初中3年级核心词库</td>
                    <td>210</td>
                    <td>初中3年级</td>
                    <td>2024-03-10 10:15:33</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
                <tr>
                    <td>WB010</td>
                    <td>高中一年级核心词库</td>
                    <td>280</td>
                    <td>高中一年级</td>
                    <td>2024-03-12 14:20:45</td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('manageWords')"><i class="ri-translate-2"></i> 管理单词</button>
                        <button class="btn btn-link btn-sm" onclick="openModal('modal-edit-wordbank')"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="openModal('modal-delete-wordbank')"><i class="ri-delete-bin-line"></i> 删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 36 条记录</span>
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

<div class="modal-overlay" id="modal-add-wordbank">
    <div class="modal" style="max-width:520px;">
        <div class="modal-header">
            <span class="modal-title">新增词库</span>
            <button class="modal-close" onclick="closeModal('modal-add-wordbank')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">词库名称 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" placeholder="请输入词库名称">
            </div>
            <div class="form-group">
                <label class="form-label">适用年级 <span style="color:var(--danger);">*</span></label>
                <div class="multiselect-dropdown" id="wordbank-grade" style="position:relative;">
                    <div class="multiselect-trigger" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius);cursor:pointer;background:#fff;" onclick="toggleDropdown(this, 'wordbank-grade-opts')">
                        <span id="wordbank-grade-text" style="font-size:13px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;">请选择（可多选）</span>
                        <i class="ri-arrow-down-s-line" style="color:var(--text-muted);flex-shrink:0;margin-left:4px;"></i>
                    </div>
                    <div class="multiselect-options" id="wordbank-grade-opts" style="display:none;position:fixed;z-index:10000;background:#fff;border:1px solid var(--border);border-radius:var(--radius);max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15);min-width:180px;">
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 小学1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 小学2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 小学3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 小学4年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 小学5年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 小学6年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 初中1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 初中2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 初中3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 高中一年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 高中二年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 高中三年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 大学生</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.2s;" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''"><input type="checkbox" onchange="updateGradeText('wordbank-grade')"> 在职人员</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-add-wordbank')">取消</button>
            <button class="btn btn-primary">确认新增</button>
        </div>
    </div>
</div>

<!-- 删除词库确认弹窗 -->
<div class="modal-overlay" id="modal-delete-wordbank">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认删除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-wordbank')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-error-warning-line" style="font-size:40px;color:var(--danger);margin-bottom:12px;"></i>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;">删除后该词库及所有单词数据将无法恢复，是否确认删除？</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-wordbank')">取消</button>
            <button class="btn btn-danger" onclick="closeModal('modal-delete-wordbank');alert('词库已删除')">确认删除</button>
        </div>
    </div>
</div>

<!-- 编辑词库弹窗 -->
<div class="modal-overlay" id="modal-edit-wordbank">
    <div class="modal" style="max-width:520px;">
        <div class="modal-header">
            <span class="modal-title">编辑词库</span>
            <button class="modal-close" onclick="closeModal('modal-edit-wordbank')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">词库名称 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" placeholder="请输入词库名称">
            </div>
            <div class="form-group">
                <label class="form-label">适用年级 <span style="color:var(--danger);">*</span></label>
                <div class="multiselect-dropdown" id="edit-wordbank-grade" style="position:relative;">
                    <div class="multiselect-trigger" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius);cursor:pointer;background:#fff;" onclick="toggleDropdown(this, 'edit-wordbank-grade-opts')">
                        <span id="edit-wordbank-grade-text" style="font-size:13px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;">请选择（可多选）</span>
                        <i class="ri-arrow-down-s-line" style="color:var(--text-muted);flex-shrink:0;margin-left:4px;"></i>
                    </div>
                    <div class="multiselect-options" id="edit-wordbank-grade-opts" style="display:none;position:fixed;z-index:10000;background:#fff;border:1px solid var(--border);border-radius:var(--radius);max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15);min-width:180px;">
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 小学1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 小学2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 小学3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 小学4年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 小学5年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 小学6年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 初中1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 初中2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 初中3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 高中一年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 高中二年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 高中三年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 大学生</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-wordbank-grade')"> 在职人员</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-edit-wordbank')">取消</button>
            <button class="btn btn-primary">保存</button>
        </div>
    </div>
</div>
`,

manageWords: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('wordbank')"><i class="ri-arrow-left-line"></i> 返回词库列表</button>
</div>

<div class="card" style="margin-bottom:16px;">
    <div class="card-body" style="padding:16px 20px;">
        <div style="display:flex;gap:24px;font-size:13px;">
            <div><span style="color:var(--text-muted);">词库ID：</span><span style="font-weight:500;">3944</span></div>
            <div><span style="color:var(--text-muted);">词库名称：</span><span style="font-weight:500;">小学3年级词库</span></div>
        </div>
    </div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
    <div style="display:flex;gap:8px;align-items:center;">
        <div class="filter-group" style="margin:0;">
            <input type="text" class="form-input" placeholder="搜索单词" style="width:200px;">
        </div>
        <button class="btn btn-primary"><i class="ri-search-line"></i> 搜索</button>
        <button class="btn btn-secondary">重置</button>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--text-secondary);cursor:pointer;margin-left:8px;">
            <input type="checkbox" id="filter-no-audio" onchange="toggleNoAudioFilter(this)"> 无音频单词
        </label>
    </div>
    <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary" onclick="openModal('modal-import-words')"><i class="ri-file-upload-line"></i> 导入单词</button>
        <button class="btn btn-primary" onclick="addWordRow()"><i class="ri-add-line"></i> 添加单词</button>
    </div>
</div>

<div class="card">
    <div class="card-body" style="overflow-x:auto;">
        <table class="data-table" id="word-edit-table">
            <thead>
                <tr>
                    <th style="width:30px;"></th>
                    <th>单词</th>
                    <th style="width:120px;">词性</th>
                    <th>释义</th>
                    <th style="width:180px;">操作</th>
                </tr>
            </thead>
            <tbody id="word-edit-tbody">
                <tr class="word-row" data-word="good" data-audio="true">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">good</span></td>
                    <td><span class="word-pos">adj.</span></td>
                    <td><span class="word-meaning">好的</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="English" data-audio="true">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">English</span></td>
                    <td><span class="word-pos">adj.</span></td>
                    <td><span class="word-meaning">英格兰的；英语的</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="meaning-row" data-word="English">
                    <td style="padding:8px 4px;"></td>
                    <td></td>
                    <td><span class="word-pos">n.</span></td>
                    <td><span class="word-meaning">英语</span></td>
                    <td style="white-space:nowrap;">
                    </td>
                </tr>
                <tr class="word-row" data-word="in English" data-audio="false">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">in English</span></td>
                    <td><span class="word-pos"></span></td>
                    <td><span class="word-meaning">用英语</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="morning" data-audio="true">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">morning</span></td>
                    <td><span class="word-pos">n.</span></td>
                    <td><span class="word-meaning">早晨；上午</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="hi" data-audio="false">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">hi</span></td>
                    <td><span class="word-pos">int.</span></td>
                    <td><span class="word-meaning">(用于打招呼)嗨；喂</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="hello" data-audio="true">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">hello</span></td>
                    <td><span class="word-pos">int.</span></td>
                    <td><span class="word-meaning">你好；喂</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="OK" data-audio="false">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">OK</span></td>
                    <td><span class="word-pos">int.</span></td>
                    <td><span class="word-meaning">好；可以</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="How are you?" data-audio="false">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">How are you?</span></td>
                    <td><span class="word-pos"></span></td>
                    <td><span class="word-meaning">你好吗？</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="how" data-audio="true">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">how</span></td>
                    <td><span class="word-pos">adv.</span></td>
                    <td><span class="word-meaning">怎样；如何</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="BBC" data-audio="false">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">BBC</span></td>
                    <td><span class="word-pos"></span></td>
                    <td><span class="word-meaning">英国广播公司</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="a" data-audio="true">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">a</span></td>
                    <td><span class="word-pos">art.</span></td>
                    <td><span class="word-meaning">(用于单数可数名字前，表示未曾提到的)—(人、事、物)</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
                <tr class="word-row" data-word="spell" data-audio="true">
                    <td style="padding:8px 4px;" class="word-delete-cell"></td>
                    <td><span class="word-text">spell</span></td>
                    <td><span class="word-pos">v.</span></td>
                    <td><span class="word-meaning">用字母拼；拼写</span></td>
                    <td style="white-space:nowrap;" class="word-action-cell">
                        <button class="btn btn-link btn-sm" style="color:var(--primary);" onclick="enableWordEdit(this)"><i class="ri-edit-line"></i> 编辑</button>
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="openModal('modal-word-audio')"><i class="ri-volume-up-line"></i> 音频</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="pagination-bar">
    <span>共 28 条记录</span>
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

<!-- 单词音频弹窗 -->
<div class="modal-overlay" id="modal-word-audio">
    <div class="modal" style="max-width:480px;">
        <div class="modal-header">
            <span class="modal-title">单词音频</span>
            <button class="modal-close" onclick="closeModal('modal-word-audio')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">单词</label>
                <div style="font-size:14px;font-weight:500;">good</div>
            </div>
            <div class="form-group">
                <label class="form-label">当前音频</label>
                <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--bg);border-radius:8px;border:1px solid var(--border);">
                    <i class="ri-file-music-line" style="font-size:24px;color:var(--info);"></i>
                    <div style="flex:1;">
                        <div style="font-size:13px;font-weight:500;">good.mp3</div>
                        <div style="font-size:12px;color:var(--text-muted);">2.3 MB · 上传于 2024-03-15</div>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="alert('播放音频')"><i class="ri-play-fill"></i> 播放</button>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">替换音频</label>
                <div style="display:flex;gap:8px;align-items:center;">
                    <button class="btn btn-secondary" onclick="document.getElementById('replace-word-audio').click()"><i class="ri-upload-2-line"></i> 上传新音频</button>
                    <span style="font-size:12px;color:var(--text-muted);">支持 MP3/WAV 格式</span>
                    <input type="file" id="replace-word-audio" accept="audio/mp3,audio/wav" style="display:none;" onchange="alert('音频已上传')">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-word-audio')">关闭</button>
        </div>
    </div>
</div>

<div class="modal-overlay" id="modal-import-words">
    <div class="modal" style="max-width:640px;">
        <div class="modal-header">
            <span class="modal-title" id="import-words-title">导入单词</span>
            <button class="modal-close" onclick="closeImportModal()"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <!-- Step 1: Upload Document -->
            <div id="import-step-1">
                <div class="form-group">
                    <label class="form-label">下载模板</label>
                    <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--bg);border-radius:8px;border:1px solid var(--border);">
                        <i class="ri-file-excel-line" style="font-size:24px;color:var(--success);"></i>
                        <div style="flex:1;">
                            <div style="font-size:13px;font-weight:500;">单词导入模板.xlsx</div>
                            <div style="font-size:12px;color:var(--text-muted);">请按模板格式填写单词、词性和释义</div>
                        </div>
                        <a href="#" class="btn btn-link btn-sm" style="color:var(--primary);white-space:nowrap;" onclick="alert('下载模板')"><i class="ri-download-2-line"></i> 点击下载模板</a>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">选择文档</label>
                    <div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:24px;background:var(--bg);border-radius:8px;border:2px dashed var(--border);">
                        <i class="ri-upload-cloud-2-line" style="font-size:48px;color:var(--text-muted);"></i>
                        <div style="font-size:13px;color:var(--text-muted);">支持 Excel 格式 (.xlsx, .xls)</div>
                        <button class="btn btn-primary" onclick="document.getElementById('import-word-file').click()"><i class="ri-file-upload-line"></i> 选择文档</button>
                        <input type="file" id="import-word-file" accept=".xlsx,.xls" style="display:none;" onchange="onImportFileSelected(this)">
                    </div>
                </div>
            </div>
            <!-- Step 2: Parse Results -->
            <div id="import-step-2" style="display:none;">
                <div style="margin-bottom:12px;font-size:13px;color:var(--text-muted);">已解析 <span id="import-word-count" style="font-weight:600;color:var(--text);">0</span> 个单词，请确认无误后导入</div>
                <div style="max-height:400px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">
                    <table class="data-table" style="margin:0;">
                        <thead>
                            <tr>
                                <th style="width:50px;text-align:center;">序号</th>
                                <th>单词</th>
                                <th style="width:80px;">词性</th>
                                <th>释义</th>
                            </tr>
                        </thead>
                        <tbody id="import-word-tbody">
                            <!-- Populated by JS -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeImportModal()">放弃导入</button>
            <button class="btn btn-primary" id="import-btn-next" onclick="parseImportDocument()">解析文档，开始单词导入</button>
            <button class="btn btn-primary" id="import-btn-confirm" style="display:none;" onclick="confirmImportWords()">确定导入</button>
        </div>
    </div>
</div>
`,

listening: () => `
<div class="filter-bar" style="align-items:flex-end;">
    <div class="filter-group">
        <label>听力名称</label>
        <input type="text" class="form-input" placeholder="搜索听力">
    </div>
    <div class="filter-group">
        <label>作者/演讲者</label>
        <input type="text" class="form-input" placeholder="搜索作者">
    </div>
    <div class="filter-group">
        <label>状态</label>
        <select class="form-select">
            <option>全部</option>
            <option>已上架</option>
            <option>已下架</option>
        </select>
    </div>
    <div class="filter-group" style="align-self:flex-end;">
        <button class="btn btn-primary"><i class="ri-search-line"></i> 查询</button>
        <button class="btn btn-secondary">重置</button>
    </div>
    <div class="filter-group" style="margin-left:auto;align-self:flex-end;">
        <button class="btn btn-primary" onclick="navigateTo('listeningAddStep1')"><i class="ri-add-line"></i> 新增听力</button>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>听力名称</th>
                    <th>作者/演讲者</th>
                    <th>适用年级</th>
                    <th>简介</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>L240115001</td>
                    <td>小王子 - 第一章</td>
                    <td>安托万·德·圣-埃克苏佩里</td>
                    <td>小学3年级、小学4年级、小学5年级、小学6年级</td>
                    <td>小王子与玫瑰的故事开篇</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240120002</td>
                    <td>夏洛的网 - 第一章</td>
                    <td>E·B·怀特</td>
                    <td>小学3年级、小学4年级、小学5年级、小学6年级</td>
                    <td>小猪威尔伯与蜘蛛夏洛的友谊</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240201003</td>
                    <td>The Little Prince - Ch.1</td>
                    <td>Antoine de Saint-Exupéry</td>
                    <td>初中1年级、初中2年级、初中3年级</td>
                    <td>The little prince meets the narrator</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240210004</td>
                    <td>西游记 - 第一回</td>
                    <td>吴承恩</td>
                    <td>小学1年级、小学2年级、小学3年级、小学4年级、小学5年级、小学6年级</td>
                    <td>猴王出世与拜师学艺</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240215005</td>
                    <td>哈利·波特 - 第一章</td>
                    <td>J.K.罗琳</td>
                    <td>初中1年级、初中2年级、初中3年级</td>
                    <td>哈利收到霍格沃茨入学信</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240301006</td>
                    <td>草房子 - 第一章</td>
                    <td>曹文轩</td>
                    <td>小学3年级、小学4年级、小学5年级、小学6年级</td>
                    <td>油麻地小学的童年故事</td>
                    <td><span class="tag">已下架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已上架')"><i class="ri-arrow-up-circle-line"></i> 上架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240305007</td>
                    <td>三字经 - 全文诵读</td>
                    <td>王应麟</td>
                    <td>小学1年级、小学2年级、小学3年级</td>
                    <td>中国传统启蒙经典，三字一句的韵律诵读</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240310008</td>
                    <td>论语 - 学而篇</td>
                    <td>孔子</td>
                    <td>初中1年级、初中2年级、初中3年级</td>
                    <td>儒家经典语录，学而时习之的智慧</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240315009</td>
                    <td>The Little Prince - Ch.21</td>
                    <td>Antoine de Saint-Exupéry</td>
                    <td>初中1年级、初中2年级、初中3年级、高中一年级</td>
                    <td>The fox teaches the little prince about taming</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
                    </td>
                </tr>
                <tr>
                    <td>L240320010</td>
                    <td>哈利·波特 - 大结局片段</td>
                    <td>J.K.罗琳</td>
                    <td>初中1年级、初中2年级、初中3年级</td>
                    <td>哈利与伏地魔最终对决的经典片段</td>
                    <td><span class="tag tag-green">已上架</span></td>
                    <td style="white-space:nowrap;">
                        <button class="btn btn-link btn-sm" style="color:var(--info);" onclick="navigateTo('listeningTranslation')"><i class="ri-translate-2"></i> 译文</button>
                        <button class="btn btn-link btn-sm" style="color:var(--warning);" onclick="navigateTo('listeningAlignment')"><i class="ri-time-line"></i> 音文对齐</button>
                        <button class="btn btn-link btn-sm" style="color:var(--success);" onclick="alert('已下架')"><i class="ri-arrow-down-circle-line"></i> 下架</button>
                        <button class="btn btn-link btn-sm" onclick="navigateTo('listeningEdit')"><i class="ri-edit-line"></i> 编辑</button>
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
        <button class="btn btn-sm btn-secondary">4</button>
        <button class="btn btn-sm btn-secondary"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</div>
`,

listeningAddStep1: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('listening')"><i class="ri-arrow-left-line"></i> 返回听力列表</button>
    <span>新增听力 - 填写听力信息</span>
</div>

<div style="max-width:800px;margin:0 auto;">
    <div style="display:flex;gap:8px;margin-bottom:24px;">
        <div style="flex:1;text-align:center;padding:12px;background:var(--primary);color:#fff;border-radius:var(--radius);font-size:13px;font-weight:500;">1. 填写听力信息</div>
        <div style="flex:1;text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;color:var(--text-muted);">2. 译文匹配</div>
        <div style="flex:1;text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;color:var(--text-muted);">3. 音文对齐</div>
    </div>

    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label class="form-label">听力名称 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" id="listening-name" placeholder="请输入听力名称">
            </div>
            <div class="form-group">
                <label class="form-label">作者/演讲者</label>
                <input type="text" class="form-input" id="listening-author" placeholder="请输入作者或演讲者">
            </div>
            <div class="form-group">
                <label class="form-label">适用年级 <span style="color:var(--danger);">*</span></label>
                <div class="multiselect-dropdown" id="listening-grade" style="position:relative;">
                    <div class="multiselect-trigger" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius);cursor:pointer;background:#fff;" onclick="toggleDropdown(this, 'listening-grade-opts')">
                        <span id="listening-grade-text" style="font-size:13px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;">请选择（可多选）</span>
                        <i class="ri-arrow-down-s-line" style="color:var(--text-muted);flex-shrink:0;margin-left:4px;"></i>
                    </div>
                    <div class="multiselect-options" id="listening-grade-opts" style="display:none;position:fixed;z-index:10000;background:#fff;border:1px solid var(--border);border-radius:var(--radius);max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15);min-width:180px;">
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 小学1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 小学2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 小学3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 小学4年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 小学5年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 小学6年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 初中1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 初中2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 初中3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 高中一年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 高中二年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 高中三年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 大学生</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('listening-grade')"> 在职人员</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">简介（20字以内） <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" id="listening-intro" placeholder="请输入简介" maxlength="20" oninput="document.getElementById('intro-count').textContent = this.value.length + '/20'">
                <div style="text-align:right;font-size:12px;color:var(--text-muted);margin-top:4px;" id="intro-count">0/20</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
                <div class="form-group">
                    <label class="form-label">导入原文 <span style="color:var(--danger);">*</span></label>
                    <div style="border:2px dashed var(--border);border-radius:8px;padding:24px;text-align:center;cursor:pointer;" onclick="document.getElementById('listening-source-file').click()">
                        <i class="ri-file-text-line" style="font-size:32px;color:var(--text-muted);"></i>
                        <p style="margin:8px 0 4px;font-size:13px;color:var(--text-primary);">点击上传原文文档</p>
                        <p style="font-size:12px;color:var(--text-muted);">支持 .txt, .docx, .pdf</p>
                    </div>
                    <input type="file" id="listening-source-file" accept=".txt,.docx,.pdf" style="display:none;" onchange="alert('原文已上传')">
                </div>
                <div class="form-group">
                    <label class="form-label">导入译文 <span style="color:var(--danger);">*</span></label>
                    <div style="border:2px dashed var(--border);border-radius:8px;padding:24px;text-align:center;cursor:pointer;" onclick="document.getElementById('listening-trans-file').click()">
                        <i class="ri-translate-2" style="font-size:32px;color:var(--text-muted);"></i>
                        <p style="margin:8px 0 4px;font-size:13px;color:var(--text-primary);">点击上传译文文档</p>
                        <p style="font-size:12px;color:var(--text-muted);">支持 .txt, .docx, .pdf</p>
                    </div>
                    <input type="file" id="listening-trans-file" accept=".txt,.docx,.pdf" style="display:none;" onchange="alert('译文已上传')">
                </div>
            </div>
        </div>
    </div>

    <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:24px;">
        <button class="btn btn-secondary" onclick="navigateTo('listening')">取消</button>
        <button class="btn btn-primary" onclick="navigateTo('listeningAddStep2')">下一步</button>
    </div>
</div>
`,

listeningAddStep2: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('listening')"><i class="ri-arrow-left-line"></i> 返回听力列表</button>
    <span>新增听力 - 译文匹配</span>
</div>

<div style="max-width:1200px;margin:0 auto;">
    <div style="display:flex;gap:8px;margin-bottom:24px;">
        <div style="flex:1;text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;color:var(--text-muted);">1. 填写听力信息</div>
        <div style="flex:1;text-align:center;padding:12px;background:var(--primary);color:#fff;border-radius:var(--radius);font-size:13px;font-weight:500;">2. 译文匹配</div>
        <div style="flex:1;text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;color:var(--text-muted);">3. 音文对齐</div>
    </div>

    <div style="display:flex;gap:16px;margin-bottom:16px;">
        <div style="flex:1;text-align:center;font-weight:500;font-size:14px;color:var(--text-primary);">原文</div>
        <div style="flex:1;text-align:center;font-weight:500;font-size:14px;color:var(--text-primary);">译文</div>
    </div>

    <div class="card" style="margin-bottom:12px;">
        <div class="card-body" style="display:flex;gap:16px;align-items:stretch;">
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="原文段落1">When I was six years old, in a book about primeval forests called 'True Stories', I saw a magnificent illustration.</textarea>
            </div>
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="译文段落1">在我六岁的时候，在一本名为《真实的故事》的关于原始森林的书中，我看到了一幅精彩的插图。</textarea>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;justify-content:center;">
                <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="this.closest('.card').remove()"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    </div>

    <div class="card" style="margin-bottom:12px;">
        <div class="card-body" style="display:flex;gap:16px;align-items:stretch;">
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="原文段落2">It was a picture of a boa constrictor in the act of swallowing an animal.</textarea>
            </div>
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="译文段落2">那是一条蟒蛇正在吞食一只动物的图片。</textarea>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;justify-content:center;">
                <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="this.closest('.card').remove()"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    </div>

    <div class="card" style="margin-bottom:12px;">
        <div class="card-body" style="display:flex;gap:16px;align-items:stretch;">
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="原文段落3">Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it."</textarea>
            </div>
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="译文段落3">这是那幅画的复制品。书中写道："蟒蛇把猎物整个吞下去，不加咀嚼。"</textarea>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;justify-content:center;">
                <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="this.closest('.card').remove()"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    </div>

    <div style="text-align:center;margin:16px 0;">
        <button class="btn btn-secondary" onclick="addListeningParagraph(this)"><i class="ri-add-line"></i> 添加段落</button>
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:24px;">
        <button class="btn btn-secondary" onclick="navigateTo('listeningAddStep1')">上一步</button>
        <button class="btn btn-primary" onclick="navigateTo('listeningAddStep3')">下一步</button>
    </div>
</div>
`,

listeningAddStep3: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('listening')"><i class="ri-arrow-left-line"></i> 返回听力列表</button>
    <span>新增听力 - 音文对齐</span>
</div>

<div style="display:flex;flex-direction:column;gap:16px;height:calc(100vh - 160px);min-height:500px;">
    <!-- 步骤指示器 -->
    <div class="card" style="flex-shrink:0;">
        <div class="card-body" style="padding:12px 16px;">
            <div style="display:flex;gap:8px;">
                <div style="flex:1;text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;color:var(--text-muted);">1. 填写听力信息</div>
                <div style="flex:1;text-align:center;padding:12px;background:var(--bg);border-radius:var(--radius);font-size:13px;color:var(--text-muted);">2. 译文匹配</div>
                <div style="flex:1;text-align:center;padding:12px;background:var(--primary);color:#fff;border-radius:var(--radius);font-size:13px;font-weight:500;">3. 音文对齐</div>
            </div>
        </div>
    </div>

    <!-- 音频信息卡片 -->
    <div class="card" style="flex-shrink:0;">
        <div class="card-body">
            <div id="listening-add-audio-card" style="display:flex;align-items:center;gap:12px;padding:16px;background:var(--bg);border-radius:8px;border:1px solid var(--border);">
                <i class="ri-file-music-line" style="font-size:24px;color:var(--info);"></i>
                <div id="listening-add-audio-info" style="flex:1;">
                    <div style="font-size:13px;color:var(--text-muted);">待上传音频</div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="document.getElementById('listening-audio-upload').click()"><i class="ri-upload-2-line"></i> 上传音频</button>
                <input type="file" id="listening-audio-upload" accept="audio/mp3,audio/wav" style="display:none;" onchange="handleListeningAudioUpload(this)">
            </div>
        </div>
    </div>

    <!-- 时间轴编辑区域 -->
    <div class="card" style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
            <span class="card-title">📝 时间轴编辑</span>
            <div style="display:flex;gap:8px;">
                <button class="btn btn-secondary btn-sm" onclick="addTimelineRow()"><i class="ri-add-line"></i> 新增分句</button>
                <button class="btn btn-primary btn-sm" onclick="saveTimeline()"><i class="ri-save-line"></i> 保存</button>
            </div>
        </div>
        <div class="card-body" style="flex:1;overflow-y:auto;padding:12px;">
            <div style="display:flex;flex-direction:column;gap:8px;" id="timeline-list">
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="1">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">1</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:00.000" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">When I was six years old, in a book about primeval forests called 'True Stories', I saw a magnificent illustration.</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="2">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">2</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:15.320" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">It was a picture of a boa constrictor in the act of swallowing an animal.</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="3">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">3</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:28.150" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it."</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="4">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">4</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:42.890" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing.</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 底部音频播放器 -->
<div style="position:fixed;bottom:0;left:var(--sidebar-width);right:0;background:#fff;border-top:1px solid var(--border);padding:10px 20px;display:flex;align-items:center;gap:12px;z-index:100;">
    <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;min-width:120px;">
        <i class="ri-music-2-line" style="color:var(--primary);font-size:16px;"></i>
        <span style="font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:90px;" id="audio-name-display">listening_audio.mp3</span>
    </div>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="回退 5s"><i class="ri-rewind-fill" style="font-size:16px;"></i></button>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="回退 0.5s"><i class="ri-rewind-mini-fill" style="font-size:16px;"></i></button>
    <button class="btn btn-primary" style="width:36px;height:36px;border-radius:50%;padding:0;font-size:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><i class="ri-play-fill" style="font-size:18px;"></i></button>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="快进 0.5s"><i class="ri-speed-mini-fill" style="font-size:16px;"></i></button>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="快进 5s"><i class="ri-speed-fill" style="font-size:16px;"></i></button>
    <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
        <!-- 波形背景 -->
        <div style="height:20px;background:var(--bg);border-radius:10px;position:relative;overflow:hidden;display:flex;align-items:center;gap:1px;padding:0 4px;">
            <div style="width:2px;height:6px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:20px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:8px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
        </div>
        <!-- 进度条（高度8px，不超过10px） -->
        <div style="height:8px;background:var(--bg);border-radius:4px;position:relative;overflow:hidden;">
            <div style="position:absolute;left:0;top:0;bottom:0;width:35%;background:var(--primary);border-radius:4px;"></div>
            <div style="position:absolute;left:35%;top:0;bottom:0;width:2px;background:#fff;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);font-variant-numeric:tabular-nums;">
            <span>01:23:456</span>
            <span>06:15:789</span>
        </div>
    </div>
</div>

<!-- 删除分句确认弹窗 -->
<div class="modal-overlay" id="modal-delete-sentence">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认删除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-sentence')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-error-warning-line" style="font-size:40px;color:var(--danger);margin-bottom:12px;"></i>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;">删除当前分句后，将无法恢复，是否确认删除？</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-sentence')">取消</button>
            <button class="btn btn-danger" onclick="confirmDeleteSentence()">确认删除</button>
        </div>
    </div>
</div>

<style>
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>

<div style="display:flex;justify-content:space-between;margin-top:24px;">
    <button class="btn btn-secondary" onclick="navigateTo('listeningAddStep2')">上一步</button>
    <button class="btn btn-primary" onclick="alert('保存成功');navigateTo('listening')">保存</button>
</div>
`,

listeningEdit: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('listening')"><i class="ri-arrow-left-line"></i> 返回听力列表</button>
    <span>编辑听力信息</span>
</div>

<div style="max-width:800px;margin:0 auto;">
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label class="form-label">听力名称 <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" value="小王子 - 第一章">
            </div>
            <div class="form-group">
                <label class="form-label">作者/演讲者</label>
                <input type="text" class="form-input" value="安托万·德·圣-埃克苏佩里">
            </div>
            <div class="form-group">
                <label class="form-label">适用年级 <span style="color:var(--danger);">*</span></label>
                <div class="multiselect-dropdown" id="edit-listening-grade" style="position:relative;">
                    <div class="multiselect-trigger" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius);cursor:pointer;background:#fff;" onclick="toggleDropdown(this, 'edit-listening-grade-opts')">
                        <span id="edit-listening-grade-text" style="font-size:13px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;">小学3年级、小学4年级、小学5年级、小学6年级</span>
                        <i class="ri-arrow-down-s-line" style="color:var(--text-muted);flex-shrink:0;margin-left:4px;"></i>
                    </div>
                    <div class="multiselect-options" id="edit-listening-grade-opts" style="display:none;position:fixed;z-index:10000;background:#fff;border:1px solid var(--border);border-radius:var(--radius);max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15);min-width:180px;">
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 小学1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 小学2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" checked onchange="updateGradeText('edit-listening-grade')"> 小学3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" checked onchange="updateGradeText('edit-listening-grade')"> 小学4年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" checked onchange="updateGradeText('edit-listening-grade')"> 小学5年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" checked onchange="updateGradeText('edit-listening-grade')"> 小学6年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 初中1年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 初中2年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 初中3年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 高中一年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 高中二年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 高中三年级</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 大学生</label>
                        <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;font-size:13px;"><input type="checkbox" onchange="updateGradeText('edit-listening-grade')"> 在职人员</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">简介（20字以内） <span style="color:var(--danger);">*</span></label>
                <input type="text" class="form-input" value="小王子与玫瑰的故事开篇" maxlength="20" oninput="document.getElementById('edit-intro-count').textContent = this.value.length + '/20'">
                <div style="text-align:right;font-size:12px;color:var(--text-muted);margin-top:4px;" id="edit-intro-count">11/20</div>
            </div>
        </div>
    </div>

    <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:24px;">
        <button class="btn btn-secondary" onclick="navigateTo('listening')">取消</button>
        <button class="btn btn-primary" onclick="alert('保存成功');navigateTo('listening')">保存</button>
    </div>
</div>
`,

listeningTranslation: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('listening')"><i class="ri-arrow-left-line"></i> 返回听力列表</button>
    <span>译文管理</span>
</div>

<div style="max-width:1200px;margin:0 auto;">
    <div style="display:flex;gap:16px;margin-bottom:16px;">
        <div style="flex:1;text-align:center;font-weight:500;font-size:14px;color:var(--text-primary);">原文</div>
        <div style="flex:1;text-align:center;font-weight:500;font-size:14px;color:var(--text-primary);">译文</div>
    </div>

    <div class="card" style="margin-bottom:12px;">
        <div class="card-body" style="display:flex;gap:16px;align-items:stretch;">
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;">When I was six years old, in a book about primeval forests called 'True Stories', I saw a magnificent illustration.</textarea>
            </div>
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;">在我六岁的时候，在一本名为《真实的故事》的关于原始森林的书中，我看到了一幅精彩的插图。</textarea>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;justify-content:center;">
                <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="this.closest('.card').remove()"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    </div>

    <div class="card" style="margin-bottom:12px;">
        <div class="card-body" style="display:flex;gap:16px;align-items:stretch;">
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;">It was a picture of a boa constrictor in the act of swallowing an animal.</textarea>
            </div>
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;">那是一条蟒蛇正在吞食一只动物的图片。</textarea>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;justify-content:center;">
                <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="this.closest('.card').remove()"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    </div>

    <div class="card" style="margin-bottom:12px;">
        <div class="card-body" style="display:flex;gap:16px;align-items:stretch;">
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;">Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it."</textarea>
            </div>
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;">这是那幅画的复制品。书中写道："蟒蛇把猎物整个吞下去，不加咀嚼。"</textarea>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;justify-content:center;">
                <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="this.closest('.card').remove()"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    </div>

    <div style="text-align:center;margin:16px 0;">
        <button class="btn btn-secondary" onclick="alert('添加新段落')"><i class="ri-add-line"></i> 添加段落</button>
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:24px;">
        <button class="btn btn-primary" onclick="alert('保存成功');navigateTo('listening')">保存</button>
    </div>
</div>
`,

listeningAlignment: () => `
<div class="page-title">
    <button class="btn btn-link" onclick="navigateTo('listening')"><i class="ri-arrow-left-line"></i> 返回听力列表</button>
    <span>音文对齐</span>
</div>

<div style="display:flex;flex-direction:column;gap:16px;height:calc(100vh - 160px);min-height:500px;">
    <!-- 音频信息卡片 -->
    <div class="card" style="flex-shrink:0;">
        <div class="card-body">
            <div id="listening-alignment-audio-card" style="display:flex;align-items:center;gap:12px;padding:16px;background:var(--bg);border-radius:8px;border:1px solid var(--border);">
                <i class="ri-file-music-line" style="font-size:24px;color:var(--info);"></i>
                <div id="listening-alignment-audio-info" style="flex:1;">
                    <div style="font-size:13px;font-weight:500;">listening_audio.mp3</div>
                    <div style="font-size:12px;color:var(--text-muted);">12.5 MB · 06:15</div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="document.getElementById('listening-audio-upload').click()"><i class="ri-upload-2-line"></i> 替换音频</button>
                <input type="file" id="listening-audio-upload" accept="audio/mp3,audio/wav" style="display:none;" onchange="handleListeningAudioUpload(this)">
            </div>
        </div>
    </div>

    <!-- 时间轴编辑区域 -->
    <div class="card" style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
            <span class="card-title">📝 时间轴编辑</span>
            <div style="display:flex;gap:8px;">
                <button class="btn btn-secondary btn-sm" onclick="addTimelineRow()"><i class="ri-add-line"></i> 新增分句</button>
                <button class="btn btn-primary btn-sm" onclick="saveTimeline()"><i class="ri-save-line"></i> 保存</button>
            </div>
        </div>
        <div class="card-body" style="flex:1;overflow-y:auto;padding:12px;">
            <div style="display:flex;flex-direction:column;gap:8px;" id="timeline-list">
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="1">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">1</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:00.000" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">When I was six years old, in a book about primeval forests called 'True Stories', I saw a magnificent illustration.</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="2">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">2</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:15.320" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">It was a picture of a boa constrictor in the act of swallowing an animal.</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="3">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">3</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:28.150" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it."</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <div style="display:flex;gap:8px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px;border:1px solid transparent;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'" data-timeline-index="4">
                    <span style="flex-shrink:0;width:24px;height:24px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;">4</span>
                    <div style="flex-shrink:0;width:100px;">
                        <input type="text" class="form-input" style="font-size:12px;padding:5px 6px;text-align:center;font-variant-numeric:tabular-nums;" value="00:00:42.890" placeholder="HH:MM:SS.mmm">
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:column;gap:4px;">
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:12px;" onclick="markTimelineTime(this)"><i class="ri-flag-line"></i> 标记</button>
                    </div>
                    <div style="flex:1;max-width:840px;">
                        <textarea class="form-textarea" rows="2" style="font-size:13px;line-height:1.5;resize:vertical;min-height:60px;" placeholder="对应文本段落">I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing.</textarea>
                    </div>
                    <div style="flex-shrink:0;display:flex;flex-direction:row;gap:8px;align-items:center;">
                        <button class="btn btn-link btn-sm" style="color:var(--danger);padding:2px 6px;font-size:14px;" onclick="showDeleteSentenceModal(this)" title="删除分句"><i class="ri-delete-bin-line"></i></button>
                        <button class="btn btn-link btn-sm" style="padding:2px 6px;font-size:14px;" onclick="addTimelineAfter(this)" title="添加分句"><i class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 底部音频播放器 -->
<div style="position:fixed;bottom:0;left:var(--sidebar-width);right:0;background:#fff;border-top:1px solid var(--border);padding:10px 20px;display:flex;align-items:center;gap:12px;z-index:100;">
    <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;min-width:120px;">
        <i class="ri-music-2-line" style="color:var(--primary);font-size:16px;"></i>
        <span style="font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:90px;" id="audio-name-display">listening_audio.mp3</span>
    </div>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="回退 5s"><i class="ri-rewind-fill" style="font-size:16px;"></i></button>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="回退 0.5s"><i class="ri-rewind-mini-fill" style="font-size:16px;"></i></button>
    <button class="btn btn-primary" style="width:36px;height:36px;border-radius:50%;padding:0;font-size:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><i class="ri-play-fill" style="font-size:18px;"></i></button>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="快进 0.5s"><i class="ri-speed-mini-fill" style="font-size:16px;"></i></button>
    <button class="btn btn-secondary" style="width:32px;height:32px;border-radius:50%;padding:0;flex-shrink:0;font-size:14px;display:flex;align-items:center;justify-content:center;" title="快进 5s"><i class="ri-speed-fill" style="font-size:16px;"></i></button>
    <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
        <!-- 波形背景 -->
        <div style="height:20px;background:var(--bg);border-radius:10px;position:relative;overflow:hidden;display:flex;align-items:center;gap:1px;padding:0 4px;">
            <div style="width:2px;height:6px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:20px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:8px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:19px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:10px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:15px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:18px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:11px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:21px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:12px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:16px;background:var(--primary);opacity:0.3;"></div>
            <div style="width:2px;height:14px;background:var(--primary);opacity:0.3;"></div>
        </div>
        <!-- 进度条（高度8px，不超过10px） -->
        <div style="height:8px;background:var(--bg);border-radius:4px;position:relative;overflow:hidden;">
            <div style="position:absolute;left:0;top:0;bottom:0;width:35%;background:var(--primary);border-radius:4px;"></div>
            <div style="position:absolute;left:35%;top:0;bottom:0;width:2px;background:#fff;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);font-variant-numeric:tabular-nums;">
            <span>01:23:456</span>
            <span>06:15:789</span>
        </div>
    </div>
</div>

<!-- 删除分句确认弹窗 -->
<div class="modal-overlay" id="modal-delete-sentence">
    <div class="modal" style="max-width:400px;">
        <div class="modal-header">
            <span class="modal-title">确认删除</span>
            <button class="modal-close" onclick="closeModal('modal-delete-sentence')"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;padding:24px 20px;">
            <i class="ri-error-warning-line" style="font-size:40px;color:var(--danger);margin-bottom:12px;"></i>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.6;">删除当前分句后，将无法恢复，是否确认删除？</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-delete-sentence')">取消</button>
            <button class="btn btn-danger" onclick="confirmDeleteSentence()">确认删除</button>
        </div>
    </div>
</div>

<style>
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>
`,
});

function handleListeningAudioUpload(input) {
    if (!input.files || !input.files.length) return;
    const file = input.files[0];
    const sizeMB = (file.size / 1024 / 1024).toFixed(1) + ' MB';
    const audio = new Audio(URL.createObjectURL(file));
    audio.addEventListener('loadedmetadata', function() {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const timeStr = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
        const infoDiv = document.getElementById('listening-add-audio-info');
        if (infoDiv) {
            infoDiv.innerHTML = '<div style="font-size:13px;font-weight:500;">' + file.name + '</div>' +
                '<div style="font-size:12px;color:var(--text-muted);">' + sizeMB + ' · ' + timeStr + '</div>';
        }
        const alignmentInfoDiv = document.getElementById('listening-alignment-audio-info');
        if (alignmentInfoDiv) {
            alignmentInfoDiv.innerHTML = '<div style="font-size:13px;font-weight:500;">' + file.name + '</div>' +
                '<div style="font-size:12px;color:var(--text-muted);">' + sizeMB + ' · ' + timeStr + '</div>';
        }
        alert('音频已上传');
    });
}

