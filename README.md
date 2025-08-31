# 💕 我们的爱情日记

一个基于 GitHub Pages 的浪漫爱情记录博客，用代码记录我们的每一个甜蜜瞬间。

## ✨ 特色功能

- 📅 **恋爱计时器** - 实时显示我们在一起的天数
- 🗺️ **爱情地图** - 标记我们一起走过的每一个地方
- 📸 **爱情相册** - 展示我们的美好回忆
- 📖 **时光轴** - 按时间顺序展示我们的爱情故事
- 📱 **响应式设计** - 完美适配手机、平板和电脑
- 🎨 **浪漫主题** - 粉色系设计，充满爱意

## 🚀 快速开始

### 1. 创建GitHub仓库
1. 点击右上角的 "Use this template" 按钮
2. 命名你的仓库（建议使用 `love-diary` 或 `our-love-story`）
3. 确保仓库设置为公开（GitHub Pages 需要公开仓库）

### 2. 个性化配置
编辑 `_config.yml` 文件：
```yaml
title: "我们的爱情日记"           # 网站标题
author: "小明 & 小红"           # 作者名称
love_start_date: "2023-01-01"   # 恋爱开始日期
couple_names: "小明 & 小红"     # 情侣名字
```

### 3. 添加新文章
在 `_posts` 文件夹中创建新的 Markdown 文件：
```markdown
---
layout: post
title: "我们的第一次约会"
date: 2025-01-01
category: "初识"
tags: ["约会", "浪漫"]
location: "北京三里屯"
image: "/assets/images/first-date.jpg"
---

这里是文章内容...
```

### 4. 上传照片
1. 将照片上传到 `assets/images/` 文件夹
2. 在文章中通过 `![描述]({{ '/assets/images/photo.jpg' | relative_url }})` 引用

### 5. 部署到GitHub Pages
1. 进入仓库的 Settings → Pages
2. 选择部署源为 "Deploy from a branch"
3. 选择 `main` 分支和 `/(root)` 文件夹
4. 点击保存，几分钟后你的网站就会在 `https://yourusername.github.io/repository-name` 上线

## 📁 项目结构

```
love-blog/
├── _config.yml              # Jekyll配置文件
├── index.html              # 首页
├── timeline.html           # 时光轴页面
├── gallery.html            # 爱情相册
├── about.html              # 关于我们
├── _layouts/               # 页面模板
│   ├── default.html        # 默认布局
│   └── post.html           # 文章布局
├── _posts/                 # 博客文章
│   └── 2025-01-01-our-first-date.md
├── assets/                 # 静态资源
│   ├── css/
│   │   └── style.css       # 主样式文件
│   ├── js/
│   │   └── main.js         # 主要JavaScript
│   └── images/             # 照片文件夹
└── README.md               # 项目说明
```

## 🎨 个性化定制

### 修改主题颜色
编辑 `assets/css/style.css` 中的 CSS 变量：
```css
:root {
    --primary-color: #ff6b9d;    /* 主色调 */
    --secondary-color: #ffa8e4;  /* 次要色调 */
    --accent-color: #c44569;     /* 强调色 */
}
```

### 添加新页面
1. 创建新的 HTML 文件（如 `anniversary.html`）
2. 使用相同的布局结构
3. 添加到导航菜单中

### 自定义地图标记
编辑 `assets/js/main.js` 中的 `locations` 数组：
```javascript
const locations = [
    { lat: 39.9042, lng: 116.4074, title: "第一次约会", description: "北京三里屯" },
    { lat: 31.2304, lng: 121.4737, title: "上海之旅", description: "外滩夜景" }
];
```

## 📱 本地开发

### 安装Jekyll（可选）
如果你想在本地预览：
```bash
# 安装Jekyll
gem install jekyll bundler

# 本地运行
cd love-blog
bundle install
bundle exec jekyll serve

# 访问 http://localhost:4000
```

### 不安装Jekyll的替代方案
直接双击 `index.html` 在浏览器中打开即可预览静态效果（部分功能可能受限）。

## 💝 使用建议

### 日常更新
- **添加新文章**：每周记录一次特别的约会或感受
- **更新照片**：定期上传新的合照和旅行照片
- **纪念日**：在重要日子（纪念日、生日等）发布特别内容

### 内容灵感
- 🍽️ 第一次一起做饭
- 🎬 第一次看电影
- ✈️ 第一次旅行
- 🎁 收到的特别礼物
- 💌 写给对方的情书
- 📅 每个月的纪念日

### 隐私保护
- 使用化名代替真实姓名
- 避免分享过于私密的照片
- 可以设置仓库为私有（GitHub Pro 功能）

## 🌟 技术栈

- **Jekyll** - 静态网站生成器
- **HTML5/CSS3** - 现代网页技术
- **JavaScript** - 交互功能
- **Leaflet.js** - 交互式地图
- **Font Awesome** - 图标库
- **Google Fonts** - 精美字体

## 📞 支持与反馈

如果你在使用过程中遇到任何问题，或者有好的建议，欢迎：

1. 提交 [Issue](https://github.com/yourusername/love-blog/issues)
2. 发送邮件到：love@example.com
3. 在评论区留言

## 📄 许可证

MIT License - 你可以自由地使用、修改和分享这个项目。

---

**用代码记录爱情，让每一刻都成为永恒 💕**

Made with ❤️ by [小明 & 小红]