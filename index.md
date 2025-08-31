---
layout: couple
title: 我们的甜蜜时光
---

<div class="recent-memories">
  <h2>💕 最新回忆</h2>
  
  <div class="posts-grid">
    {% for post in site.posts limit:6 %}
    <article class="post-card fade-in">
      <div class="post-image">
        {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}">
        {% else %}
        <div class="default-image">
          <span class="heart-icon">❤️</span>
        </div>
        {% endif %}
      </div>
      
      <div class="post-content">
        <h3 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        <div class="post-meta">
          <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
          <span class="post-category">{{ post.category | default: "日常" }}</span>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</div>

<div class="special-moments">
  <h2>🌟 特别时刻</h2>
  
  <div class="moments-grid">
    <div class="moment-card">
      <div class="moment-icon">🎂</div>
      <h4>生日庆祝</h4>
      <p>每一次生日都是爱的见证</p>
    </div>
    
    <div class="moment-card">
      <div class="moment-icon">🎬</div>
      <h4>电影时光</h4>
      <p>一起看过的每一部电影</p>
    </div>
    
    <div class="moment-card">
      <div class="moment-icon">🍽️</div>
      <h4>美食探索</h4>
      <p>一起品尝的美味佳肴</p>
    </div>
    
    <div class="moment-card">
      <div class="moment-icon">✈️</div>
      <h4>旅行回忆</h4>
      <p>一起走过的每一个角落</p>
    </div>
  </div>
</div>

<style>
.recent-memories, .special-moments {
  margin: 60px 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.post-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.2);
}

.post-image {
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.1);
}

.default-image {
  height: 100%;
  background: linear-gradient(135deg, #ff6b9d, #c084fc);
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-icon {
  font-size: 3rem;
  animation: heartbeat 2s ease-in-out infinite;
}

.post-content {
  padding: 20px;
}

.post-title a {
  color: #ff6b9d;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.post-title a:hover {
  color: #c084fc;
}

.post-excerpt {
  color: #718096;
  margin: 10px 0;
  line-height: 1.6;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #a0aec0;
}

.moments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.moment-card {
  background: white;
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.moment-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.15);
}

.moment-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.moment-card h4 {
  color: #ff6b9d;
  margin: 10px 0;
  font-size: 1.1rem;
}

.moment-card p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .moments-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>