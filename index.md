---
layout: default
title: Our Love Story
date: 2023-12-04
---

<div class="page-header">
  <h1 class="site-title">小静与世涛的恋爱日记 💖</h1>
  <p class="subtitle">记录每一段甜蜜时光</p>
  <h2 class="timeline-title">甜蜜时光线</h2>
  <p class="site-description">记录小静与世涛爱情旅程中的每一个珍贵瞬间 💖</p>
</div>

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}

<!-- 爱情计数器 -->
<div class="love-counter">
  <div class="counter-content">
    <h3>我们的爱情旅程</h3>
    <div class="counter-stats">
      <div class="stat-item">
        <div class="stat-number">{{ sorted_posts.size }}</div>
        <div class="stat-label">美好回忆</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" id="days-together">0</div>
        <div class="stat-label">相识天数</div>
      </div>
    </div>
  </div>
</div>

<!-- 城市筛选按钮区域 -->
<div class="city-filter">
  <h3 class="filter-title">按城市筛选 💫</h3>
  <div class="filter-buttons" id="city-filter-buttons">
    <!-- 城市按钮将通过JavaScript动态生成 -->
  </div>
  <div class="filter-info">
    <span class="selected-count">已选择: <span id="selected-count">0</span></span>
    <button class="clear-filters" id="clear-filters">清除筛选</button>
  </div>
</div>

{% for post in sorted_posts %}
<div class="event-card standard-card" id="event-{{ forloop.index }}" data-post-id="{{ post.date | date: '%Y%m%d' }}">
  <div class="event-header">
    <h2 class="card-title">{{ post.title }}</h2>
    <div class="basic-info">
      <span class="event-time">🕒 {{ post.date | date: "%Y-%m-%d" }}</span>
      <span class="event-location">📍 {{ post.location }}</span>
    </div>
  </div>
  
  <div class="card-content-wrapper">
    <div class="event-thumbnail-container">
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }} thumbnail" class="thumbnail-image">
      {% else %}
        <div class="thumbnail-placeholder">📷</div>
      {% endif %}
    </div>
    
    <div class="event-preview">
      <!-- 显示内容预览，截断长文本 -->
      <div class="preview-text">{{ post.content | strip_html | truncate: 120 }}</div>
    </div>
  </div>
  
  <!-- 心情标签 -->
  <div class="mood-tags">
    {% if post.moods %}
      {% for mood in post.moods %}
        <span class="mood-tag">{{ mood }}</span>
      {% endfor %}
    {% else %}
      <span class="mood-tag">甜蜜</span>
      <span class="mood-tag">难忘</span>
      {% if forloop.first %}
        <span class="mood-tag">最新</span>
      {% endif %}
    {% endif %}
  </div>
  
  <!-- 直接显示完整内容 -->
  <div class="event-full-content" style="display: block;">
    <!-- 内容将通过JavaScript处理为轮播图 -->
    <div class="content-wrapper">
      <!-- 轮播图容器 -->
      <div class="image-carousel">
        <div class="carousel-container">
          <div class="carousel-slides"></div>
          <button class="carousel-prev">‹</button>
          <button class="carousel-next">›</button>
          <div class="carousel-indicators"></div>
        </div>
      </div>
    </div>
    
    <!-- 原始内容（将被JavaScript处理，不直接显示） -->
    <div class="original-content" style="display: none;">
      {{ post.content | markdownify }}
    </div>
  </div>
  

</div>
{% endfor %}