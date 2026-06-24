// Core framework: navigation, routing, breadcrumb, init
let currentPage = 'books';
let sidebarCollapsed = false;
let isLoggedIn = false;

function init() {
    // 初始显示登录页，隐藏主应用
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('main-app').style.display = 'none';
}


function doLogin() {
    // 模拟登录成功
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('main-app').style.display = 'flex';
    isLoggedIn = true;
    renderSidebar();
    loadPage(currentPage);
    updateBreadcrumb(currentPage);
    setupEventListeners();
}


function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = navConfig.map(group => `
        <div class="nav-group">
            <div class="nav-group-title">${group.group}</div>
            ${group.items.map(item => `
                <a class="nav-item ${item.page === currentPage ? 'active' : ''}" 
                   data-page="${item.page}" onclick="navigateTo('${item.page}')">
                    <i class="${item.icon}"></i>
                    <span>${item.label}</span>
                </a>
            `).join('')}
        </div>
    `).join('');
}


function navigateTo(page) {
    currentPage = page;
    renderSidebar();
    loadPage(page);
    updateBreadcrumb(page);
    
    // 移动端自动关闭侧边栏
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}


function updateBreadcrumb(page) {
    let label = '书籍管理';
    for (const group of navConfig) {
        const item = group.items.find(i => i.page === page);
        if (item) {
            label = item.label;
            break;
        }
    }
    // 特殊页面不在导航配置中
    const extraPages = {
        'batchAddBooks': '批量新增书籍',
        'bookDetail': '书籍详情',
        'bookAudio': '音频管理',
        'bookTranslation': '译文管理',
        'audioAlignment': '音文对齐',
        'audioAlignmentEn': '音文对齐',
        'audioRange': '段落配置',
        'studentDetail': '学生详情',
        'deviceStudents': '设备学生列表',
        'manageWords': '管理单词',
        'aiGuideConfig': 'AI导读配置',
        'aiTranslateConfig': 'AI翻译配置',
        'aiExplainConfig': 'AI讲解配置',
        'listeningAddStep1': '新增听力',
        'listeningAddStep2': '译文匹配',
        'listeningAddStep3': '音文对齐',
        'listeningEdit': '编辑听力',
        'listeningTranslation': '译文管理',
        'listeningAlignment': '音文对齐',
        'studentReadingDetail': '学生阅读详情',
        'taskDetail': '任务详情'
    };
    if (extraPages[page]) {
        label = extraPages[page];
    }
    document.getElementById('breadcrumb').textContent = label;
}


function loadPage(page) {
    const container = document.getElementById('page-container');
    container.innerHTML = '';
    
    const pageFn = pageFunctions[page];
    if (pageFn) {
        container.innerHTML = pageFn();
        attachPageEvents(page);
    } else {
        container.innerHTML = '<div class="empty-state"><i class="ri-error-warning-line"></i><p>页面未找到</p></div>';
    }
}


function setupEventListeners() {
    // 菜单折叠
    document.getElementById('menu-toggle').addEventListener('click', () => {
        sidebarCollapsed = !sidebarCollapsed;
        document.getElementById('sidebar').classList.toggle('collapsed', sidebarCollapsed);
    });
    
    // 移动端点击遮罩关闭
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('menu-toggle');
            if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
}


function attachPageEvents(page) {
    // 页面特定事件绑定
    if (page === 'platformOverview') {
        initDeviceChart();
        initStudentChart();
        initActiveDeviceChart();
    }
}

function initDeviceChart() {
    if (typeof echarts === 'undefined') {
        console.error('ECharts not loaded');
        return;
    }
    
    var dom = document.getElementById('device-chart-container');
    if (!dom) {
        console.error('Chart container not found');
        return;
    }
    
    var myChart = echarts.init(dom, null, { renderer: 'canvas' });
    
    var monthData = {
        xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        series: [28500, 29800, 30600, 31200, 32100, 32944, 33800]
    };
    
    var dayData = {
        xAxis: ['06-18', '06-19', '06-20', '06-21', '06-22', '06-23', '06-24'],
        series: [15200, 18500, 21800, 17300, 24600, 20100, 26400]
    };
    
    function getOption(data) {
        return {
            grid: {
                top: 30,
                right: 20,
                bottom: 30,
                left: 60,
                containLabel: false
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                    return params[0].value.toLocaleString();
                },
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#e8e8e8',
                borderWidth: 1,
                textStyle: { color: '#333', fontSize: 13 },
                extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.15);'
            },
            xAxis: {
                type: 'category',
                data: data.xAxis,
                axisLine: { lineStyle: { color: '#d9d9d9' } },
                axisTick: { show: false },
                axisLabel: { color: '#8c8c8c', fontSize: 12 }
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: { lineStyle: { color: '#f0f0f0' } },
                axisLabel: {
                    color: '#8c8c8c',
                    fontSize: 12,
                    formatter: function(value) {
                        return (value / 1000).toFixed(0) + 'k';
                    }
                }
            },
            series: [{
                data: data.series,
                type: 'line',
                smooth: false,
                symbol: 'rect',
                symbolSize: 8,
                lineStyle: {
                    color: '#1890ff',
                    width: 2
                },
                itemStyle: {
                    color: '#1890ff',
                    borderColor: '#fff',
                    borderWidth: 2
                },
                emphasis: {
                    itemStyle: {
                        color: '#1890ff',
                        borderColor: '#fff',
                        borderWidth: 2,
                        shadowBlur: 4,
                        shadowColor: 'rgba(24,144,255,0.3)'
                    }
                }
            }]
        };
    }
    
    myChart.setOption(getOption(monthData));
    
    window.addEventListener('resize', function() {
        myChart.resize();
    });
    
    // 按钮切换
    var card = dom;
    while (card && !card.classList.contains('card')) {
        card = card.parentElement;
    }
    var monthBtn = card.querySelector('.device-btn-month');
    var dayBtn = card.querySelector('.device-btn-day');
    
    if (monthBtn && dayBtn) {
        monthBtn.addEventListener('click', function() {
            monthBtn.classList.remove('btn-secondary');
            monthBtn.classList.add('btn-primary');
            dayBtn.classList.remove('btn-primary');
            dayBtn.classList.add('btn-secondary');
            myChart.setOption(getOption(monthData));
        });
        
        dayBtn.addEventListener('click', function() {
            dayBtn.classList.remove('btn-secondary');
            dayBtn.classList.add('btn-primary');
            monthBtn.classList.remove('btn-primary');
            monthBtn.classList.add('btn-secondary');
            myChart.setOption(getOption(dayData));
        });
    }
}

function initStudentChart() {
    if (typeof echarts === 'undefined') {
        console.error('ECharts not loaded');
        return;
    }
    
    var dom = document.getElementById('student-chart-container');
    if (!dom) {
        console.error('Student chart container not found');
        return;
    }
    
    var myChart = echarts.init(dom, null, { renderer: 'canvas' });
    
    var monthData = {
        xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
        series: [34200, 35800, 36500, 37200, 38600, 39844]
    };
    
    var dayData = {
        xAxis: ['06-18', '06-19', '06-20', '06-21', '06-22', '06-23', '06-24'],
        series: [38500, 38720, 38950, 39180, 39400, 39620, 39844]
    };
    
    function getOption(data) {
        return {
            grid: {
                top: 30,
                right: 20,
                bottom: 30,
                left: 60,
                containLabel: false
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                    return params[0].value.toLocaleString();
                },
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#e8e8e8',
                borderWidth: 1,
                textStyle: { color: '#333', fontSize: 13 },
                extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.15);'
            },
            xAxis: {
                type: 'category',
                data: data.xAxis,
                axisLine: { lineStyle: { color: '#d9d9d9' } },
                axisTick: { show: false },
                axisLabel: { color: '#8c8c8c', fontSize: 12 }
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: { lineStyle: { color: '#f0f0f0' } },
                axisLabel: {
                    color: '#8c8c8c',
                    fontSize: 12,
                    formatter: function(value) {
                        return (value / 1000).toFixed(0) + 'k';
                    }
                }
            },
            series: [{
                data: data.series,
                type: 'line',
                smooth: false,
                symbol: 'rect',
                symbolSize: 8,
                lineStyle: {
                    color: '#1890ff',
                    width: 2
                },
                itemStyle: {
                    color: '#1890ff',
                    borderColor: '#fff',
                    borderWidth: 2
                },
                emphasis: {
                    itemStyle: {
                        color: '#1890ff',
                        borderColor: '#fff',
                        borderWidth: 2,
                        shadowBlur: 4,
                        shadowColor: 'rgba(24,144,255,0.3)'
                    }
                }
            }]
        };
    }
    
    myChart.setOption(getOption(monthData));
    
    window.addEventListener('resize', function() {
        myChart.resize();
    });
    
    // 按钮切换
    var card = dom;
    while (card && !card.classList.contains('card')) {
        card = card.parentElement;
    }
    var monthBtn = card.querySelector('.student-btn-month');
    var dayBtn = card.querySelector('.student-btn-day');
    
    if (monthBtn && dayBtn) {
        monthBtn.addEventListener('click', function() {
            monthBtn.classList.remove('btn-secondary');
            monthBtn.classList.add('btn-primary');
            dayBtn.classList.remove('btn-primary');
            dayBtn.classList.add('btn-secondary');
            myChart.setOption(getOption(monthData));
        });
        
        dayBtn.addEventListener('click', function() {
            dayBtn.classList.remove('btn-secondary');
            dayBtn.classList.add('btn-primary');
            monthBtn.classList.remove('btn-primary');
            monthBtn.classList.add('btn-secondary');
            myChart.setOption(getOption(dayData));
        });
    }
}

function initActiveDeviceChart() {
    if (typeof echarts === 'undefined') {
        console.error('ECharts not loaded');
        return;
    }
    
    var dom = document.getElementById('active-device-chart-container');
    if (!dom) {
        console.error('Active device chart container not found');
        return;
    }
    
    var myChart = echarts.init(dom, null, { renderer: 'canvas' });
    
    var data = {
        xAxis: ['05-26', '05-27', '05-28', '05-29', '05-30', '05-31', '06-01', '06-02', '06-03', '06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10', '06-11', '06-12', '06-13', '06-14', '06-15', '06-16', '06-17', '06-18', '06-19', '06-20', '06-21', '06-22', '06-23', '06-24'],
        series: [21800, 22500, 23100, 22800, 23500, 24200, 23800, 24500, 25100, 24800, 25500, 26200, 25800, 26500, 27100, 26800, 27500, 28200, 27800, 28500, 29100, 28800, 29500, 30200, 29800, 30500, 31200, 30800, 31500, 32100]
    };
    
    var option = {
        grid: {
            top: 30,
            right: 20,
            bottom: 50,
            left: 60,
            containLabel: false
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                return params[0].name + '<br/>活跃设备: ' + params[0].value.toLocaleString();
            },
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderColor: '#e8e8e8',
            borderWidth: 1,
            textStyle: { color: '#333', fontSize: 13 },
            extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.15);'
        },
        xAxis: {
            type: 'category',
            data: data.xAxis,
            axisLine: { lineStyle: { color: '#d9d9d9' } },
            axisTick: { show: false },
            axisLabel: { 
                color: '#8c8c8c', 
                fontSize: 11,
                rotate: 45,
                interval: 4
            }
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: {
                color: '#8c8c8c',
                fontSize: 12,
                formatter: function(value) {
                    return (value / 1000).toFixed(0) + 'k';
                }
            }
        },
        series: [{
            data: data.series,
            type: 'bar',
            barWidth: '60%',
            itemStyle: {
                color: '#1890ff',
                borderRadius: [4, 4, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#40a9ff'
                }
            }
        }]
    };
    
    myChart.setOption(option);
    
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

function toggleDistributeRange(radio) {
    var snGroup = document.getElementById('sn-input-group');
    if (snGroup) {
        snGroup.style.display = (radio.value === 'specific') ? 'block' : 'none';
    }
}

function toggleAccountStatus(btn) {
    var row = btn.closest('tr');
    var statusCell = row.querySelector('td:nth-child(7)');
    var isDisabling = btn.textContent.trim().includes('停用');
    
    if (isDisabling) {
        statusCell.innerHTML = '<span class="tag tag-red">停用</span>';
        btn.innerHTML = '<i class="ri-check-line"></i> 启用';
        btn.style.color = 'var(--success)';
    } else {
        statusCell.innerHTML = '<span class="tag tag-green">正常</span>';
        btn.innerHTML = '<i class="ri-forbid-line"></i> 停用';
        btn.style.color = 'var(--danger)';
    }
}

function toggleParentPhone(btn) {
    var cell = btn.closest('td');
    var phoneSpan = cell.querySelector('.phone-text');
    if (!phoneSpan) return;
    
    var masked = phoneSpan.dataset.masked;
    var full = phoneSpan.dataset.full;
    
    if (phoneSpan.textContent.includes('*')) {
        phoneSpan.textContent = full;
        btn.innerHTML = '<i class="ri-eye-off-line"></i>';
    } else {
        phoneSpan.textContent = masked;
        btn.innerHTML = '<i class="ri-eye-line"></i>';
    }
}

function togglePasswordVisibility(inputId, btn) {
    var input = document.getElementById(inputId);
    if (!input) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = '<i class="ri-eye-off-line"></i>';
    } else {
        input.type = 'password';
        btn.innerHTML = '<i class="ri-eye-line"></i>';
    }
}

function showResetSuccess() {
    closeModal('modal-reset-password');
    openModal('modal-reset-success');
}

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

function switchTeacherTab(tabName) {
    const tabs = ['classes', 'tasks'];
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

// ========== 变量库面板切换函数 ==========

function switchVarTab(page, tabName) {
    const tabs = ['user', 'book', 'kb'];
    tabs.forEach(t => {
        const panel = document.getElementById('var-panel-' + page + '-' + t);
        const btn = document.getElementById('var-tab-' + page + '-' + t);
        if (panel) {
            panel.style.display = (t === tabName) ? 'block' : 'none';
        }
        if (btn) {
            btn.className = (t === tabName) ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-secondary';
        }
    });
}

function switchKbVarTab(page, tabName) {
    const tabs = ['file', 'tag'];
    tabs.forEach(t => {
        const panel = document.getElementById('var-kb-panel-' + page + '-' + t);
        const btn = document.getElementById('var-kbtab-' + page + '-' + t);
        if (panel) {
            panel.style.display = (t === tabName) ? 'block' : 'none';
        }
        if (btn) {
            btn.className = (t === tabName) ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-secondary';
        }
    });
}

function filterVarList(page, category) {
    const searchInput = document.getElementById('var-search-' + page + '-' + category);
    if (!searchInput) return;
    const keyword = searchInput.value.toLowerCase();
    const list = document.getElementById('var-list-' + page + '-' + category);
    if (!list) return;
    const items = list.querySelectorAll('.var-item');
    items.forEach(item => {
        const codeText = item.querySelector('code')?.textContent?.toLowerCase() || '';
        item.style.display = (keyword === '' || codeText.includes(keyword)) ? 'flex' : 'none';
    });
}

function filterKbVarList(page, type) {
    const searchInput = document.getElementById('var-search-' + page + '-kb' + type);
    if (!searchInput) return;
    const keyword = searchInput.value.toLowerCase();
    const list = document.getElementById('var-list-' + page + '-kb' + type);
    if (!list) return;
    const items = list.querySelectorAll('.var-item');
    items.forEach(item => {
        const codeText = item.querySelector('code')?.textContent?.toLowerCase() || '';
        item.style.display = (keyword === '' || codeText.includes(keyword)) ? 'flex' : 'none';
    });
}

function copyVar(varText) {
    navigator.clipboard.writeText(varText).then(() => {
        showToast('已复制: ' + varText);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = varText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('已复制: ' + varText);
    });
}

function showToast(message) {
    // Simple toast implementation - can be enhanced
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--primary);color:#fff;padding:10px 20px;border-radius:var(--radius);font-size:13px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ========== 知识库上传模拟函数 ==========

function simulateKbUpload() {
    // 模拟文件上传和解析过程
    const uploadStep = document.getElementById('kb-upload-step');
    const editStep = document.getElementById('kb-edit-step');
    const uploadBtn = document.getElementById('kb-btn-upload');
    const saveBtn = document.getElementById('kb-btn-save');
    
    if (uploadStep && editStep) {
        uploadStep.style.display = 'none';
        editStep.style.display = 'block';
        if (uploadBtn) uploadBtn.style.display = 'none';
        if (saveBtn) saveBtn.style.display = 'inline-block';
    }
}

// ========== 知识库标签下拉函数 ==========

let kbSelectedTags = [];

function toggleKbTagDropdown() {
    const dropdown = document.getElementById('kb-tag-dropdown');
    if (dropdown) {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            document.getElementById('kb-tag-search')?.focus();
        }
    }
}

function filterKbTagOptions() {
    const searchInput = document.getElementById('kb-tag-search');
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const options = document.querySelectorAll('#kb-tag-options label');
    let hasMatch = false;
    
    options.forEach(label => {
        const text = label.querySelector('span')?.textContent?.toLowerCase() || '';
        const match = keyword === '' || text.includes(keyword);
        label.style.display = match ? 'flex' : 'none';
        if (match) hasMatch = true;
    });
    
    // 显示/隐藏"新增标签"选项
    const addNewDiv = document.getElementById('kb-tag-add-new');
    const searchText = document.getElementById('kb-tag-search-text');
    if (addNewDiv && searchText) {
        if (keyword && !hasMatch) {
            addNewDiv.style.display = 'block';
            searchText.textContent = keyword;
        } else {
            addNewDiv.style.display = 'none';
        }
    }
}

function toggleKbTag(checkbox) {
    const tagValue = checkbox.value;
    if (checkbox.checked) {
        if (!kbSelectedTags.includes(tagValue)) {
            kbSelectedTags.push(tagValue);
        }
    } else {
        kbSelectedTags = kbSelectedTags.filter(t => t !== tagValue);
    }
    renderKbSelectedTags();
}

function renderKbSelectedTags() {
    const container = document.getElementById('kb-selected-tags');
    if (!container) return;
    
    container.innerHTML = kbSelectedTags.map(tag => 
        `<span style="display:inline-flex;align-items:center;background:var(--primary);color:#fff;padding:4px 10px;border-radius:12px;font-size:12px;">${tag}<i class="ri-close-line" style="margin-left:6px;cursor:pointer;" onclick="removeKbTag('${tag}')"></i></span>`
    ).join('');
}

function removeKbTag(tagValue) {
    kbSelectedTags = kbSelectedTags.filter(t => t !== tagValue);
    // 同步取消下拉中的勾选
    const checkbox = document.querySelector(`#kb-tag-options input[value="${tagValue}"]`);
    if (checkbox) checkbox.checked = false;
    renderKbSelectedTags();
}

function addNewKbTag() {
    const searchInput = document.getElementById('kb-tag-search');
    const newTag = searchInput ? searchInput.value.trim() : '';
    if (!newTag) return;
    
    // 添加到已选
    if (!kbSelectedTags.includes(newTag)) {
        kbSelectedTags.push(newTag);
    }
    
    // 动态添加到下拉选项中
    const optionsContainer = document.getElementById('kb-tag-options');
    if (optionsContainer) {
        const newLabel = document.createElement('label');
        newLabel.style.cssText = 'display:flex;align-items:center;padding:8px 12px;cursor:pointer;font-size:13px;';
        newLabel.setAttribute('onmouseover', "this.style.background='var(--bg)'");
        newLabel.setAttribute('onmouseout', "this.style.background=''");
        newLabel.innerHTML = `<input type="checkbox" value="${newTag}" style="margin-right:8px;" checked onchange="toggleKbTag(this)"><span>${newTag}</span>`;
        optionsContainer.appendChild(newLabel);
    }
    
    // 清空搜索框并重新渲染
    if (searchInput) searchInput.value = '';
    filterKbTagOptions();
    renderKbSelectedTags();
}

// 点击外部关闭下拉
function closeKbTagDropdown() {
    const dropdown = document.getElementById('kb-tag-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

// 听力管理：添加段落
function addListeningParagraph(btn) {
    const container = btn.closest('div').parentElement;
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.style.marginBottom = '12px';
    newCard.innerHTML = `
        <div class="card-body" style="display:flex;gap:16px;align-items:stretch;">
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="原文段落"></textarea>
            </div>
            <div style="flex:1;">
                <textarea class="form-input" style="width:100%;min-height:80px;resize:vertical;" placeholder="译文段落"></textarea>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;justify-content:center;">
                <button class="btn btn-link btn-sm" style="color:var(--danger);" onclick="this.closest('.card').remove()"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    `;
    container.insertBefore(newCard, btn.closest('div'));
}

// 听力管理：播放/暂停切换
function toggleListeningPlay(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('ri-play-fill')) {
        icon.classList.remove('ri-play-fill');
        icon.classList.add('ri-pause-fill');
    } else {
        icon.classList.remove('ri-pause-fill');
        icon.classList.add('ri-play-fill');
    }
}

// 学生阅读详情：Tab切换
function switchReadingDetailTab(tabName) {
    const tabs = ['bookmark', 'note', 'review'];
    tabs.forEach(t => {
        const content = document.getElementById('tab-' + t);
        const btn = document.getElementById('tab-btn-' + t);
        if (content) content.style.display = (t === tabName) ? 'block' : 'none';
        if (btn) {
            if (t === tabName) {
                btn.className = 'btn btn-sm btn-primary';
                btn.style.borderRadius = '20px';
            } else {
                btn.className = 'btn btn-sm btn-secondary';
                btn.style.borderRadius = '20px';
            }
        }
    });
}

// 推荐排序：Tab切换
function switchRecommendTab(tabName) {
    const tabs = ['home', 'detail'];
    tabs.forEach(t => {
        const content = document.getElementById('tab-' + t);
        const btn = document.getElementById('tab-btn-' + t);
        if (content) content.style.display = (t === tabName) ? 'block' : 'none';
        if (btn) {
            if (t === tabName) {
                btn.className = 'btn btn-sm btn-primary';
                btn.style.borderRadius = '20px';
            } else {
                btn.className = 'btn btn-sm btn-secondary';
                btn.style.borderRadius = '20px';
            }
        }
    });
}

// 树状节点展开/收起
function toggleTreeNode(header) {
    const arrow = header.querySelector('.ri-arrow-down-s-line, .ri-arrow-right-s-line');
    const body = header.nextElementSibling;
    if (!body) return;
    
    if (body.style.display === 'none') {
        body.style.display = 'block';
        if (arrow) {
            arrow.classList.remove('ri-arrow-right-s-line');
            arrow.classList.add('ri-arrow-down-s-line');
            arrow.style.transform = 'rotate(0deg)';
        }
    } else {
        body.style.display = 'none';
        if (arrow) {
            arrow.classList.remove('ri-arrow-down-s-line');
            arrow.classList.add('ri-arrow-right-s-line');
            arrow.style.transform = 'rotate(-90deg)';
        }
    }
}

// 推荐排序：上移
function moveRecommendUp(btn) {
    const item = btn.closest('.recommend-item');
    const prev = item.previousElementSibling;
    if (prev && prev.classList.contains('recommend-item')) {
        item.parentNode.insertBefore(item, prev);
        renumberRecommendItems(item.parentNode);
    }
}

// 推荐排序：下移
function moveRecommendDown(btn) {
    const item = btn.closest('.recommend-item');
    const next = item.nextElementSibling;
    if (next && next.classList.contains('recommend-item')) {
        item.parentNode.insertBefore(next, item);
        renumberRecommendItems(item.parentNode);
    }
}

// 重新计算排序序号
function renumberRecommendItems(container) {
    const items = container.querySelectorAll('.recommend-item');
    items.forEach((item, index) => {
        const numSpan = item.querySelector('.sort-num');
        if (numSpan) numSpan.textContent = index + 1;
    });
}

// 模态框工具函数

