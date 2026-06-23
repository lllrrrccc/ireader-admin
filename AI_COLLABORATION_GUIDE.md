# 管理后台原型 — 双 AI 协作手册

> 本文档用于描述项目架构和分工，确保两个 AI 工具能并行开发且最终合并零冲突。

---

## 一、项目架构

**单页面应用（SPA）**，纯前端 HTML/CSS/JS，无后端。浏览器刷新即可加载最新文件。

### 文件结构

```
ireader-admin-prototype/
├── index.html              # 入口：登录页 + 主框架（sidebar + header + 内容区）
├── css/main.css            # 全局样式（变量、布局、组件）
├── js/
│   ├── navigation.js       # 侧边栏导航配置（navConfig 数组）
│   ├── pages_books.js      # 书籍相关页面（4个）
│   ├── pages_categories.js # 分类管理页面（1个）
│   ├── pages_ai.js         # AI 功能页面（7个）
│   ├── pages_user.js       # 用户管理页面（4个）
│   ├── pages_device.js     # 设备管理页面（2个）
│   ├── pages_data.js       # 数据报表页面（4个）
│   ├── pages_system.js     # 系统设置页面（6个）
│   ├── main_core.js        # 核心框架：导航、路由、面包屑、初始化
│   ├── main_modal.js       # 弹窗系统 + 下拉框通用逻辑
│   └── main_book.js        # 书籍业务交互：新增、批量、音频、状态切换
│   └── [BAK] pages.js.BAK  # 旧备份，不需要了
│   └── [BAK] main.js.BAK   # 旧备份，不需要了
├── assets/                 # 图片资源
└── docs/prd.md             # 需求文档
```

### 加载顺序（index.html 中 script 标签顺序）

```html
<script src="js/navigation.js?v=19"></script>
<script>const pageFunctions = {};</script>       <!-- 全局容器，所有页面函数注册到这里 -->
<script src="js/pages_books.js?v=19"></script>      <!-- AI A 负责 -->
<script src="js/pages_categories.js?v=19"></script> <!-- AI A 负责 — 已完成 -->
<script src="js/pages_ai.js?v=19"></script>         <!-- AI A 负责 -->
<script src="js/pages_user.js?v=19"></script>       <!-- AI B 负责 -->
<script src="js/pages_device.js?v=19"></script>     <!-- AI B 负责 -->
<script src="js/pages_data.js?v=19"></script>       <!-- AI B 负责 -->
<script src="js/pages_system.js?v=19"></script>     <!-- AI A 负责 -->
<script src="js/main_core.js?v=19"></script>        <!-- 共享，改前必须同步 -->
<script src="js/main_modal.js?v=19"></script>       <!-- 共享，改前必须同步 -->
<script src="js/main_book.js?v=19"></script>        <!-- AI A 负责 -->
```

---

## 二、两个 AI 的分工表

| 文件 | 负责方 | 内容说明 |
|------|--------|----------|
| `pages_books.js` | **AI A** | 书籍管理、书籍详情、批量新增、音频管理 |
| `pages_categories.js` | **AI A** | 分类管理（一级+二级）—— **已完成** |
| `pages_ai.js` | **AI A** | 推荐排序、词库、听力、AI导读、翻译、讲解、知识库 |
| `pages_user.js` | **AI B** | 学生管理、学生详情、教师管理、家长管理 |
| `pages_device.js` | **AI B** | 设备管理、设备学生 |
| `pages_data.js` | **AI B** | 阅读数据、阅读任务、单词学习、听力数据 |
| `pages_system.js` | **AI A** | 平台概况、书籍分析、用户分析、版本管理、权限管理、账号管理 |
| `main_book.js` | **AI A** | 书籍相关交互函数（批量新增、音频上传、状态切换等） |
| `main_core.js` | **共享** | 导航、路由、面包屑、初始化。改前必须通知对方 |
| `main_modal.js` | **共享** | 弹窗、下拉框。改前必须通知对方 |
| `index.html` | **共享** | 主框架、script 引入顺序。改前必须通知对方 |
| `css/main.css` | **共享** | 全局样式。改前必须通知对方 |
| `navigation.js` | **共享** | 导航配置。改前必须通知对方 |

---

## 三、核心规则（必须遵守）

### 1. 绝不修改对方文件

> 这是零冲突合并的唯一前提。

- AI A 只碰 `pages_books.js`、`pages_categories.js`、`pages_ai.js`、`pages_system.js`、`main_book.js`
- AI B 只碰 `pages_user.js`、`pages_device.js`、`pages_data.js`
- 共享文件（main_core.js、main_modal.js、index.html、css/main.css、navigation.js）**需要改时必须先同步**

### 2. 页面函数注册格式

每个 `pages_*.js` 文件的格式固定为：

```javascript
// 文件头注释
Object.assign(pageFunctions, {
    pageName: () => `
    <div class="page-title">...</div>
    <!-- 页面内容 -->
    `,
    anotherPage: () => `
    <!-- 另一个页面 -->
    `,
});
```

**注意**：
- 使用 `Object.assign(pageFunctions, {...})` 注册到全局对象
- 每个函数返回一个模板字符串（用反引号包裹）
- 函数名必须与 `navigation.js` 中的 `page` 字段对应（例如 `navConfig` 中有 `page: "books"`，则 `pages_books.js` 中必须有 `books: () => ...`）

### 3. 版本号统一递增

`index.html` 中的 `?v=19` 用于强制浏览器刷新缓存。每次修改后**双方同步递增**到最新版本（如 `v=20`、`v=21`）。

### 4. 新增页面时的流程

如果 AI A 或 AI B 需要新增页面：

1. **先确认放在哪个文件**（按功能域）
2. **在 navigation.js 中添加导航项**（这是共享文件，必须通知对方）
3. **在对应的 pages_*.js 中新增函数**
4. **如果新增页面需要新交互函数**，在 main_core.js 或 main_modal.js 或 main_book.js 中添加（共享文件需通知）
5. **递增版本号**

### 5. 合并方式 = 文件复制

最终合并**不需要任何合并操作**：

- 两个 AI 各自把修改后的文件放到同一个目录下
- 确保文件名正确、不重叠
- 检查 `index.html` 的 script 引入顺序正确
- 刷新浏览器即可

**因为双方修改的文件完全不同，所以不会覆盖对方。**

---

## 四、页面清单（29个页面）

| 页面函数名 | 所属文件 | 负责方 | 说明 |
|-----------|---------|--------|------|
| `books` | pages_books.js | AI A | 书籍列表 + 筛选 + 分页 |
| `bookAudio` | pages_books.js | AI A | 音频管理（文字定位模式） |
| `batchAddBooks` | pages_books.js | AI A | 批量新增书籍（三步流程） |
| `bookDetail` | pages_books.js | AI A | 书籍详情页 |
| `categories` | pages_categories.js | AI A | 分类管理（一级/二级）—— **已完成** |
| `recommendation` | pages_ai.js | AI A | 推荐排序配置 |
| `wordbank` | pages_ai.js | AI A | 词库管理 |
| `listening` | pages_ai.js | AI A | 听力管理 |
| `aiGuide` | pages_ai.js | AI A | AI导读管理 |
| `aiTranslate` | pages_ai.js | AI A | AI翻译管理 |
| `aiExplain` | pages_ai.js | AI A | AI讲解管理 |
| `knowledge` | pages_ai.js | AI A | 知识库管理 |
| `students` | pages_user.js | AI B | 学生管理 |
| `studentDetail` | pages_user.js | AI B | 学生详情 |
| `teachers` | pages_user.js | AI B | 教师管理 |
| `parents` | pages_user.js | AI B | 家长管理 |
| `devices` | pages_device.js | AI B | 设备管理 |
| `deviceStudents` | pages_device.js | AI B | 设备学生关联 |
| `readingData` | pages_data.js | AI B | 阅读数据报表 |
| `readingTasks` | pages_data.js | AI B | 阅读任务管理 |
| `wordLearning` | pages_data.js | AI B | 单词学习数据 |
| `listeningData` | pages_data.js | AI B | 听力数据报表 |
| `platformOverview` | pages_system.js | AI A | 平台概况 |
| `bookAnalysis` | pages_system.js | AI A | 书籍分析 |
| `userAnalysis` | pages_system.js | AI A | 用户分析 |
| `version` | pages_system.js | AI A | 版本管理 |
| `permissions` | pages_system.js | AI A | 权限管理 |
| `accounts` | pages_system.js | AI A | 账号管理 |

---

## 五、交互函数清单（main_*.js 中的函数）

### main_core.js（共享 — 导航/路由/初始化）

| 函数名 | 说明 |
|--------|------|
| `init()` | 初始化应用 |
| `doLogin()` | 登录处理 |
| `renderSidebar()` | 渲染侧边栏 |
| `navigateTo(page)` | 页面跳转主入口 |
| `updateBreadcrumb(page)` | 更新面包屑 + 页面标题 |
| `loadPage(page)` | 加载页面内容到容器 |
| `setupEventListeners()` | 全局事件监听 |
| `attachPageEvents(page)` | 页面级事件绑定 |

### main_modal.js（共享 — 弹窗/下拉框）

| 函数名 | 说明 |
|--------|------|
| `openModal(modalId, name, parent)` | 打开弹窗 |
| `closeModal(modalId)` | 关闭弹窗 |
| `toggleDropdown(trigger, optsId)` | 下拉框展开/收起（含 fixed 定位修复） |
| `updateGradeText(prefix)` | 更新年级选择文字 |
| `updateRadioText(prefix, value)` | 更新单选按钮文字 |

### main_book.js（AI A — 书籍业务）

| 函数名 | 说明 |
|--------|------|
| `toggleBookEdit(isEdit)` | 切换书籍编辑/查看模式 |
| `showBookStep2()` | 书籍新增第二步 |
| `backToBookStep1()` | 返回书籍新增第一步 |
| `handleBatchFiles(input)` | 批量上传文件处理 |
| `updateBatchCount()` | 更新批量计数 |
| `showBatchStep1()` | 显示批量第一步 |
| `showBatchStep2()` | 显示批量第二步 |
| `updateBatchEditCount()` | 更新批量编辑计数 |
| `showBatchStep3()` | 显示批量第三步（完成） |
| `toggleBatchCheckAll()` | 批量全选/取消 |
| `applyBatchEdit()` | 应用批量编辑 |
| `handleAudioUpload(input)` | 音频上传处理 |
| `openBookStatusModal(modalId, rowId)` | 打开书籍状态弹窗 |
| `toggleBookVisibility(toVisible)` | 切换书籍隐藏/可见状态 |
| `saveTimeline()` | 保存时间轴标记 |
| `markTextPosition(element)` | 标记音频-文字位置 |
| `selectAudio(element)` | 选中音频文件 |
| `showMarkedPositions()` | 显示已标记位置 |

---

## 六、当前开发状态（截至拆分时刻）

- 所有 29 个页面已 skeleton 完成（有数据、分页、操作按钮）
- 音频管理页已重写为"文字定位"模式（左右布局）
- 版本号：`v=19`
- 缓存清除：使用 `?v=XX` 查询参数
- 本地预览：`http://localhost:8090/index.html`
- 服务器：`python3 -m http.server 8090`

---

## 七、快速检查清单（改完后必做）

- [ ] 只修改了分配给自己的文件
- [ ] 没有动共享文件（除非已通知对方）
- [ ] 版本号已递增（如 `v=19` → `v=20`）
- [ ] 页面函数名与 navigation.js 中的 `page` 字段一致
- [ ] `node -c js/xxx.js` 语法验证通过
- [ ] 浏览器刷新后页面正常显示
- [ ] 没有新增全局变量冲突

---

## 八、给另一个 AI 的启动指令（复制即用）

```
你正在参与一个 ireader 阅读器管理后台端原型的开发。

项目路径：/Users/lrc/Documents/kimi/workspace/ireader-admin-prototype/
技术栈：纯前端 HTML/CSS/JS，单页面应用，无后端
预览地址：http://localhost:8090/index.html

=== 你负责的文件 ===
- js/pages_user.js       ← 用户管理页面（4个：学生、学生详情、教师、家长）
- js/pages_device.js     ← 设备管理页面（2个：设备、设备学生）
- js/pages_data.js       ← 数据报表页面（4个：阅读数据、阅读任务、单词学习、听力数据）

=== 规则 ===
1. 只修改上述 3 个文件，绝不碰其他文件
2. 页面函数格式：Object.assign(pageFunctions, { pageName: () => `...html...` })
3. 函数名必须与 navigation.js 中的 navConfig.page 字段对应
4. 改完后递增 index.html 中的版本号（如 v=20）
5. 每次修改后运行 node -c js/xxx.js 验证语法
6. 共享文件（index.html、main_core.js、main_modal.js、css/main.css、navigation.js）需要改时必须先通知对方 AI

=== 合并方式 ===
直接把修改后的文件复制到同一目录下即可，零冲突（因为双方文件不重叠）。
```
