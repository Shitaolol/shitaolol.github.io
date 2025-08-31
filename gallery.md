---
layout: couple
title: 我们的照片墙
permalink: /gallery/
---

<div class="photo-gallery">
  <h1>📸 我们的照片墙</h1>
  <p class="gallery-intro">每一张照片都是一个故事，每一个瞬间都是永恒</p>
  
  <div class="gallery-categories">
    <button class="category-btn active" data-category="all">全部</button>
    <button class="category-btn" data-category="dates">约会时光</button>
    <button class="category-btn" data-category="travel">旅行回忆</button>
    <button class="category-btn" data-category="food">美食记录</button>
    <button class="category-btn" data-category="daily">日常点滴</button>
  </div>

  <div class="photos-grid">
    <!-- 示例照片 - 实际使用时请替换为真实照片 -->
    <div class="photo-item" data-category="dates">
      <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400" alt="第一次约会">
      <div class="photo-overlay">
        <h4>第一次约会</h4>
        <p>2024年8月31日</p>
      </div>
    </div>
    
    <div class="photo-item" data-category="food">
      <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400" alt="浪漫晚餐">
      <div class="photo-overlay">
        <h4>浪漫晚餐</h4>
        <p>烛光下的甜蜜时光</p>
      </div>
    </div>
    
    <div class="photo-item" data-category="travel">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" alt="海边日落">
      <div class="photo-overlay">
        <h4>海边日落</h4>
        <p>一起看过的最美夕阳</p>
      </div>
    </div>
    
    <div class="photo-item" data-category="daily">
      <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400" alt="温馨日常">
      <div class="photo-overlay">
        <h4>温馨日常</h4>
        <p>平凡日子里的不平凡</p>
      </div>
    </div>
    
    <div class="photo-item" data-category="dates">
      <img src="https://images.unsplash.com/photo-1511275539165-c6f4e4e4ee97?w=400" alt="电影之夜">
      <div class="photo-overlay">
        <h4>电影之夜</h4>
        <p>爆米花和爱情片</p>
      </div>
    </div>
    
    <div class="photo-item" data-category="travel">
      <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400" alt="城市漫步">
      <div class="photo-overlay">
        <h4>城市漫步</h4>
        <p>手牵手走过每条街道</p>
      </div>
    </div>
  </div>

  <div class="upload-section">
    <h3>📤 上传新照片</h3>
    <p>想要添加更多甜蜜回忆？联系我们上传新的照片！</p>
    <div class="upload-placeholder">
      <div class="upload-icon">📷</div>
      <p>联系我们添加更多照片</p>
    </div>
  </div>
</div>

<style>
.photo-gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.gallery-intro {
  text-align: center;
  color: #718096;
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.gallery-categories {
  text-align: center;
  margin-bottom: 40px;
}

.category-btn {
  background: white;
  border: 2px solid #ff6b9d;
  color: #ff6b9d;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.category-btn.active,
.category-btn:hover {
  background: #ff6b9d;
  color: white;
  transform: translateY(-2px);
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
}

.photo-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.2);
}

.photo-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-item:hover img {
  transform: scale(1.1);
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.photo-item:hover .photo-overlay {
  transform: translateY(0);
}

.photo-overlay h4 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.photo-overlay p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.upload-section {
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.upload-section h3 {
  color: #ff6b9d;
  margin-bottom: 15px;
}

.upload-section p {
  color: #718096;
  margin-bottom: 30px;
}

.upload-placeholder {
  border: 2px dashed #ff6b9d;
  border-radius: 15px;
  padding: 40px;
  color: #a0aec0;
}

.upload-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .photos-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .category-btn {
    margin: 3px;
    padding: 8px 15px;
    font-size: 0.8rem;
  }
}
</style>

<script>
// 照片筛选功能
const categoryBtns = document.querySelectorAll('.category-btn');
const photoItems = document.querySelectorAll('.photo-item');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 更新按钮状态
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // 筛选照片
    const category = btn.dataset.category;
    
    photoItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
        item.style.animation = 'fadeIn 0.5s ease';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 照片点击放大效果
photoItems.forEach(item => {
  item.addEventListener('click', () => {
    // 这里可以添加照片查看器功能
    alert('照片查看器功能 - 实际使用时可以集成lightbox等库');
  });
});

// 添加淡入动画
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
</script>