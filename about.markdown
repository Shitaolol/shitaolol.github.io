---
layout: couple
title: 关于我们
permalink: /about/
---

<div class="about-us">
  <div class="story-section">
    <h1>💕 我们的故事</h1>
    
    <div class="love-story">
      <div class="story-timeline">
        <div class="story-item">
<<<<<<< HEAD
          <div class="story-date">2025年8月3日</div>
=======
          <div class="story-date">2024年8月31日</div>
>>>>>>> 21ef48183dc32d6e692e48b7b2b092f605219958
          <div class="story-content">
            <h3>💝 初次相遇</h3>
            <p>在那个特别的日子，我们相遇了。从那一刻起，我的世界开始有了不同的色彩。</p>
            <div class="story-image">
              <img src="/assets/images/first-meeting.jpg" alt="初次相遇" onerror="this.src='/assets/images/default-love.jpg'">
            </div>
          </div>
        </div>
        
        <div class="story-item">
          <div class="story-date">现在</div>
          <div class="story-content">
            <h3>💞 甜蜜进行时</h3>
            <p>每一天都是新的冒险，每一个瞬间都值得珍藏。我们一起创造着属于我们的美好回忆。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="couple-profile">
    <h2>👫 我们是谁</h2>
    
    <div class="profiles-grid">
      <div class="profile-card">
        <div class="profile-avatar">
          <div class="avatar-placeholder">🤴</div>
        </div>
<<<<<<< HEAD
        <h3>世涛</h3>
        <p class="profile-role">男朋友 & 最佳拍档</p>
        <p class="profile-desc">喜欢技术、美食和探索新事物。最大的爱好就是让小静开心。</p>
=======
        <h3>石涛</h3>
        <p class="profile-role">男朋友 & 最佳拍档</p>
        <p class="profile-desc">喜欢技术、美食和探索新事物。最大的爱好就是让她开心。</p>
>>>>>>> 21ef48183dc32d6e692e48b7b2b092f605219958
        <div class="profile-stats">
          <span>💝 爱的指数: ∞</span>
          <span>📝 已写情书: {{ site.posts | size }}封</span>
        </div>
      </div>
      
      <div class="profile-card">
        <div class="profile-avatar">
          <div class="avatar-placeholder">👸</div>
        </div>
<<<<<<< HEAD
        <h3>小静</h3>
        <p class="profile-role">女朋友 & 生活阳光</p>
        <p class="profile-desc">美丽、善良、充满爱心。是世涛生命中最美好的遇见。</p>
=======
        <h3>心爱的她</h3>
        <p class="profile-role">女朋友 & 生活阳光</p>
        <p class="profile-desc">美丽、善良、充满爱心。是我生命中最美好的遇见。</p>
>>>>>>> 21ef48183dc32d6e692e48b7b2b092f605219958
        <div class="profile-stats">
          <span>💖 被爱的指数: ∞</span>
          <span>😊 笑容次数: 无数</span>
        </div>
      </div>
    </div>
  </div>

  <div class="love-quotes">
    <h2>💌 爱的语录</h2>
    
    <div class="quotes-container">
      <div class="quote-card">
        <blockquote>
          "遇见你之前，爱情只是个词；遇见你之后，它有了名字。"
        </blockquote>
<<<<<<< HEAD
        <cite>— 世涛</cite>
=======
        <cite>— 石涛</cite>
>>>>>>> 21ef48183dc32d6e692e48b7b2b092f605219958
      </div>
      
      <div class="quote-card">
        <blockquote>
          "每一天醒来，看到你在我身边，这就是我想要的未来。"
        </blockquote>
<<<<<<< HEAD
        <cite>— 世涛 & 小静</cite>
=======
        <cite>— 我们的心愿</cite>
>>>>>>> 21ef48183dc32d6e692e48b7b2b092f605219958
      </div>
    </div>
  </div>

  <div class="future-plans">
    <h2>🌟 未来计划</h2>
    
    <div class="plans-grid">
      <div class="plan-item">
        <div class="plan-icon">🏠</div>
        <h4>我们的小家</h4>
        <p>一起布置属于我们的温馨小窝</p>
      </div>
      
      <div class="plan-item">
        <div class="plan-icon">✈️</div>
        <h4>旅行清单</h4>
        <p>去世界各地留下我们的足迹</p>
      </div>
      
      <div class="plan-item">
        <div class="plan-icon">📸</div>
        <h4>更多回忆</h4>
        <p>用照片和文字记录每一个美好瞬间</p>
      </div>
      
      <div class="plan-item">
        <div class="plan-icon">💝</div>
        <h4>永远相爱</h4>
        <p>这是最重要也是最简单的愿望</p>
      </div>
    </div>
  </div>
</div>

<style>
.about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.story-section h1, .couple-profile h2, .love-quotes h2, .future-plans h2 {
  text-align: center;
  color: #ff6b9d;
  margin-bottom: 40px;
}

.love-story {
  margin: 40px 0;
}

.story-timeline {
  position: relative;
  padding: 20px 0;
}

.story-item {
  display: flex;
  margin-bottom: 40px;
  align-items: flex-start;
}

.story-date {
  background: linear-gradient(135deg, #ff6b9d, #c084fc);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  margin-right: 30px;
  min-width: 120px;
  text-align: center;
}

.story-content {
  flex: 1;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.story-content h3 {
  color: #ff6b9d;
  margin-bottom: 15px;
}

.story-image {
  margin-top: 15px;
  text-align: center;
}

.story-image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.profiles-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 40px 0;
}

.profile-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.profile-avatar {
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b9d, #c084fc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto;
  color: white;
}

.profile-card h3 {
  color: #ff6b9d;
  margin: 15px 0 10px 0;
  font-size: 1.5rem;
}

.profile-role {
  color: #c084fc;
  font-weight: bold;
  margin-bottom: 15px;
}

.profile-desc {
  color: #718096;
  line-height: 1.6;
  margin-bottom: 20px;
}

.profile-stats {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.9rem;
  color: #a0aec0;
}

.quotes-container {
  display: grid;
  gap: 30px;
  margin: 40px 0;
}

.quote-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
}

.quote-card::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 4rem;
  color: #ff6b9d;
  opacity: 0.3;
}

.quote-card blockquote {
  font-size: 1.3rem;
  color: #4a5568;
  font-style: italic;
  margin: 0 0 20px 0;
  line-height: 1.8;
}

.quote-card cite {
  color: #c084fc;
  font-weight: bold;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.plan-item {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.plan-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.2);
}

.plan-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.plan-item h4 {
  color: #ff6b9d;
  margin: 10px 0;
}

.plan-item p {
  color: #718096;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .profiles-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .story-item {
    flex-direction: column;
    text-align: center;
  }
  
  .story-date {
    margin-right: 0;
    margin-bottom: 15px;
    align-self: center;
  }
}
</style>