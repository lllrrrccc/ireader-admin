// 导航配置
const navConfig = [
    {
        group: "内容管理",
        items: [
            { id: "categories", label: "分类管理", icon: "ri-folder-line", page: "categories" },
            { id: "books", label: "书籍管理", icon: "ri-book-line", page: "books" },
            { id: "recommendation", label: "推荐排序", icon: "ri-pushpin-line", page: "recommendation" },
            { id: "wordbank", label: "词库管理", icon: "ri-translate", page: "wordbank" },
            { id: "listening", label: "听力管理", icon: "ri-headphone-line", page: "listening" }
        ]
    },
    {
        group: "AI管理",
        items: [
            { id: "ai-guide", label: "AI导读管理", icon: "ri-robot-line", page: "aiGuide" },
            { id: "ai-translate", label: "AI翻译管理", icon: "ri-translate-2", page: "aiTranslate" },
            { id: "ai-explain", label: "AI讲解管理", icon: "ri-message-3-line", page: "aiExplain" },
            { id: "knowledge", label: "知识库管理", icon: "ri-database-2-line", page: "knowledge" }
        ]
    },
    {
        group: "用户管理",
        items: [
            { id: "students", label: "学生管理", icon: "ri-user-line", page: "students" },
            { id: "teachers", label: "教师管理", icon: "ri-user-star-line", page: "teachers" },
            { id: "parents", label: "家长管理", icon: "ri-parent-line", page: "parents" },
            { id: "devices", label: "设备管理", icon: "ri-tablet-line", page: "devices" }
        ]
    },
    {
        group: "阅读学习中心",
        items: [
            { id: "reading-data", label: "学生阅读数据", icon: "ri-book-read-line", page: "readingData" },
            { id: "reading-tasks", label: "阅读任务", icon: "ri-task-line", page: "readingTasks" },
            { id: "word-learning", label: "学生背单词", icon: "ri-character-recognition-line", page: "wordLearning" },
            { id: "listening-data", label: "学生听力", icon: "ri-music-line", page: "listeningData" }
        ]
    },
    {
        group: "数据统计",
        items: [
            { id: "platform-overview", label: "平台概览", icon: "ri-bar-chart-box-line", page: "platformOverview" },
            { id: "version", label: "版本管理", icon: "ri-git-branch-line", page: "version" }
        ]
    },
    {
        group: "基础设置",
        items: [
            { id: "permissions", label: "权限管理", icon: "ri-shield-keyhole-line", page: "permissions" },
            { id: "accounts", label: "后台账号", icon: "ri-admin-line", page: "accounts" }
        ]
    }
];
