# 使用 GitHub Pages 搭建爱情记录博客

## 1. 项目概述
GitHub Pages 是一个静态网站托管平台，适合轻量级博客。以下设计基于静态网站架构，利用 HTML、CSS、JavaScript 和静态生成工具（如 Jekyll 或 React 静态框架）实现爱情记录博客的核心功能。

## 2. 功能实现
### 2.1 博客文章管理
- **文章展示**：使用 Markdown 文件存储文章，放置在 `_posts` 文件夹（Jekyll）或静态 JSON 文件（React），按时间顺序生成文章列表。
- **时间线视图**：通过 JavaScript 动态生成时间线，展示文章发布日期和摘要。
- **分类与标签**：在 Markdown 文件的 Front Matter 或 JSON 中添加分类（如“初识”、“纪念日”）和标签（如“旅行”），通过 JavaScript 过滤显示。
- **静态搜索**：集成 lunr.js 或 Algolia（免费版）实现站内搜索，基于文章标题、标签和内容。

### 2.2 用户交互
- **情侣留言板**：使用 Disqus 或 utterances（基于 GitHub Issues）实现评论功能，仅限授权用户（如情侣双方）留言。
- **纪念日提醒**：通过 JavaScript 计算恋爱天数和纪念日倒计时，静态渲染在首页。
- **隐私控制**：通过 GitHub 仓库权限控制（私有仓库）或密码保护页面（JavaScript 加密）实现私密文章访问。

### 2.3 多媒体支持
- **图片展示**：将图片存储在 GitHub 仓库的 `assets` 文件夹，使用 `<img>` 标签嵌入，支持懒加载优化性能。
- **视频嵌入**：通过 `<iframe>` 嵌入 YouTube 或 Bilibili 视频链接，避免直接存储大型视频文件。
- **音频播放**：使用 HTML5 `<audio>` 标签嵌入小型音频文件（如语音记录），存储在仓库中。

### 2.4 个性化定制
- **主题切换**：提供多套 CSS 样式（如粉色、星空主题），通过 JavaScript 切换或用户选择保存至 localStorage。
- **爱情地图**：使用 Leaflet.js（轻量地图库）展示情侣去过的地点，数据静态存储在 JSON 文件中。
- **情感统计**：用 Chart.js 渲染静态统计图表（如恋爱天数、文章数），数据手动更新至 JSON。

## 3. 技术选型
### 3.1 框架
- **Jekyll**（推荐）：GitHub Pages 原生支持，适合 Markdown 驱动的博客。使用 `_config.yml` 配置站点，主题选择支持浪漫风格的模板（如 Minimal Mistakes）。
- **React + Gatsby/Vite**（可选）：生成静态页面，适合需要复杂交互的场景。使用 CDN（如 jsDelivr）加载 React 和 Tailwind CSS。
  
### 3.2 文件结构
```
love-blog/
├── _posts/                  # Jekyll 文章（Markdown 格式）
├── assets/                  # 图片、音频等静态资源
├── data/                    # JSON 文件存储地图数据、纪念日等
├── index.html               # 首页
├── css/                     # 自定义 CSS（Tailwind 或原生）
├── js/                      # JavaScript 文件（交互逻辑）
└── _config.yml              # Jekyll 配置文件
```

### 3.3 部署
- **仓库设置**：创建 GitHub 仓库（如 `username.github.io` 或 `username/love-blog`），启用 GitHub Pages（`main` 分支，`/docs` 文件夹可选）。
- **自动部署**：通过 GitHub Actions 配置 CI/CD，推送代码后自动构建和部署。
- **自定义域名**（可选）：在 GitHub Pages 设置中绑定自定义域名，配置 CNAME。

## 4. 实现步骤
1. **初始化项目**：
   - 创建 GitHub 仓库。
   - 如果使用 Jekyll，运行 `jekyll new .` 初始化项目。
   - 如果使用 React，初始化 Gatsby/Vite 项目，配置 `package.json`。

2. **编写文章**：
   - 在 `_posts` 创建 Markdown 文件（如 `2025-08-31-first-date.md`），格式：
     ```markdown
     ---
     title: 我们的第一次约会
     date: 2025-08-31
     category: 初识
     tags: [约会, 浪漫]
     ---
     内容...
     ```

3. **添加多媒体**：
   - 上传图片到 `assets/images/`，在 Markdown 或 HTML 中引用。
   - 嵌入 YouTube 视频：`<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>`。

4. **实现交互**：
   - 使用 JavaScript 计算纪念日倒计时：
     ```javascript
     const startDate = new Date('2023-01-01');
     const today = new Date();
     const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
     document.getElementById('days').innerText = `${daysTogether} 天`;
     ```
   - 使用 Leaflet.js 添加地图：
     ```javascript
     const map = L.map('map').setView([51.505, -0.09], 13);
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
     L.marker([51.5, -0.09]).addTo(map).bindPopup('我们的第一次约会').openPopup();
     ```

5. **部署与测试**：
   - 推送代码至 GitHub：`git push origin main`。
   - 访问 `https://username.github.io` 查看效果。

## 5. 用户体验优化
- **浪漫设计**：使用 Tailwind CSS 实现柔和色调（如粉色、紫色渐变），添加心形动画。
- **响应式布局**：确保移动端和 PC 端适配，使用 Tailwind 的响应式类。
- **SEO 优化**：为公开文章添加 meta 标签，提升搜索引擎可见性。

## 6. 局限性与解决方案
- **动态功能受限**：GitHub Pages 不支持后端，动态功能（如用户登录）需借助第三方服务（如 Firebase Authentication）。
- **存储限制**：GitHub 仓库限制 1GB，需优化图片大小或使用外部 CDN 存储大文件。
- **备份**：定期下载仓库备份，或使用 GitHub Actions 自动备份至其他云服务。