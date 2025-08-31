---
layout: couple
title: 回忆归档
permalink: /archive/
---

<div class="archive-page">
  <h1>📚 回忆归档</h1>
  <p class="archive-intro">按时间顺序浏览我们的每一个甜蜜瞬间</p>

  <div class="archive-stats">
    <div class="stat-card">
      <div class="stat-number">{{ site.posts | size }}</div>
      <div class="stat-label">篇日记</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">{{ site.posts | map: 'tags' | join: ',' | split: ',' | uniq | size }}</div>
      <div class="stat-label">个标签</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">{{ site.posts | map: 'date' | first | date: "%Y" | default: 2024 }}</div>
      <div class="stat-label">年开始记录</div>
    </div>
  </div>

  <div class="timeline-container">
    {% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
    
    {% for year in posts_by_year %}
    <div class="year-section">
      <div class="year-header">
        <h2>{{ year.name }}年</h2>
        <span class="year-count">{{ year.items | size }}篇</span>
      </div>
      
      <div class="year-timeline">
        {% assign posts_by_month = year.items | group_by_exp: 'post', 'post.date | date: "%m"' %}
        
        {% for month in posts_by_month %}
        <div class="month-group">
          <div class="month-header">
            <h3>{{ month.name | prepend: '0' | slice: -2, 2 }}月</h3>
            <span class="month-count">{{ month.items | size }}篇</span>
          </div>
          
          <div class="posts-list">
            {% for post in month.items %}
            <article class="archive-post">
              <div class="post-date">
                <span class="day">{{ post.date | date: "%d" }}</span>
                <span class="month-year">{{ post.date | date: "%m/%y" }}</span>
              </div>
              
              <div class="post-content">
                <h4 class="post-title">
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </h4>
                <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                
                <div class="post-meta">
                  <span class="post-category">{{ post.category | default: "日常" }}</span>
                  {% if post.tags.size > 0 %}
                  <div class="post-tags">
                    {% for tag in post.tags %}
                    <span class="tag">#{{ tag }}</span>
                    {% endfor %}
                  </div>
                  {% endif %}
                </div>
              </div>
              
              {% if post.image %}
              <div class="post-image">
                <img src="{{ post.image }}" alt="{{ post.title }}" onerror="this.src='/assets/images/default-memory.jpg'">
              </div>
              {% endif %}
            </article>
            {% endfor %}
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="search-section">
    <h3>🔍 搜索回忆</h3>
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="输入关键词搜索回忆...">
      <button onclick="searchPosts()">搜索</button>
    </div>
    <div id="searchResults"></div>
  </div>
</div>

<style>
.archive-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.archive-intro {
  text-align: center;
  color: #718096;
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.archive-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6b9d;
  margin-bottom: 5px;
}

.stat-label {
  color: #718096;
  font-size: 0.9rem;
}

.timeline-container {
  margin: 40px 0;
}

.year-section {
  margin-bottom: 60px;
}

.year-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ff6b9d;
}

.year-header h2 {
  color: #ff6b9d;
  margin: 0;
}

.year-count {
  background: #ff6b9d;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.year-timeline {
  margin-left: 20px;
  border-left: 3px solid #ffeef2;
  padding-left: 30px;
}

.month-group {
  margin-bottom: 40px;
}

.month-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: -40px;
}

.month-header h3 {
  color: #c084fc;
  margin: 0;
  background: white;
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.month-count {
  background: #c084fc;
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.archive-post {
  display: flex;
  align-items: center;
  background: white;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.archive-post:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 20px rgba(255, 107, 157, 0.2);
}

.post-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 20px;
  background: linear-gradient(135deg, #ff6b9d, #c084fc);
  color: white;
  font-weight: bold;
}

.post-date .day {
  font-size: 1.5rem;
  line-height: 1;
}

.post-date .month-year {
  font-size: 0.8rem;
  opacity: 0.9;
}

.post-content {
  flex: 1;
  padding: 20px;
}

.post-title {
  margin: 0 0 10px 0;
}

.post-title a {
  color: #4a5568;
  text-decoration: none;
  font-size: 1.1rem;
}

.post-title a:hover {
  color: #ff6b9d;
}

.post-excerpt {
  color: #718096;
  margin: 0 0 15px 0;
  line-height: 1.5;
  font-size: 0.9rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.post-category {
  background: #ffeef2;
  color: #ff6b9d;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.post-tags {
  display: flex;
  gap: 5px;
}

.tag {
  background: #f0f0f0;
  color: #718096;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
}

.post-image {
  width: 120px;
  height: 80px;
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.search-section {
  margin-top: 60px;
  text-align: center;
}

.search-section h3 {
  color: #ff6b9d;
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.search-box input {
  padding: 10px 15px;
  border: 2px solid #ffeef2;
  border-radius: 25px;
  outline: none;
  width: 300px;
  max-width: 100%;
}

.search-box input:focus {
  border-color: #ff6b9d;
}

.search-box button {
  background: #ff6b9d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-box button:hover {
  background: #c084fc;
}

#searchResults {
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .archive-post {
    flex-direction: column;
    text-align: center;
  }
  
  .post-date {
    min-width: auto;
    width: 100%;
    flex-direction: row;
    gap: 10px;
  }
  
  .post-image {
    width: 100%;
    height: 200px;
    margin: 0;
    border-radius: 15px 15px 0 0;
  }
  
  .search-box {
    flex-direction: column;
    align-items: center;
  }
  
  .search-box input {
    width: 100%;
    max-width: 300px;
  }
}
</style>

<script>
// 搜索功能
function searchPosts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const posts = document.querySelectorAll('.archive-post');
  const resultsContainer = document.getElementById('searchResults');
  
  if (!searchTerm) {
    resultsContainer.innerHTML = '';
    posts.forEach(post => post.style.display = 'flex');
    return;
  }
  
  let foundCount = 0;
  const results = [];
  
  posts.forEach(post => {
    const title = post.querySelector('.post-title a').textContent.toLowerCase();
    const content = post.querySelector('.post-excerpt').textContent.toLowerCase();
    const tags = Array.from(post.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
    
    if (title.includes(searchTerm) || content.includes(searchTerm) || tags.some(tag => tag.includes(searchTerm))) {
      post.style.display = 'flex';
      foundCount++;
    } else {
      post.style.display = 'none';
    }
  });
  
  if (foundCount === 0) {
    resultsContainer.innerHTML = '<p style="text-align: center; color: #718096;">没有找到相关的回忆 😢</p>';
  } else {
    resultsContainer.innerHTML = `<p style="text-align: center; color: #ff6b9d;">找到 ${foundCount} 个相关回忆 💕</p>`;
  }
}

// 回车搜索
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchPosts();
  }
});
</script>