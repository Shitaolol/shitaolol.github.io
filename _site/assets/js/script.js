// 全局变量
let imageViewer;

// 创建浪漫小爱心装饰元素
function createHeartDecorations() {
  const container = document.body;
  const heartCount = 50; // 小爱心数量
  
  // 移除已有的爱心装饰，避免重复创建
  const existingHearts = document.querySelectorAll('.heart-decoration');
  existingHearts.forEach(heart => heart.remove());
  
  // 创建新的小爱心装饰
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-decoration');
    heart.textContent = '💖';
    
    // 随机位置
    const left = Math.random() * 100; // 百分比
    const top = Math.random() * 100;  // 百分比
    const size = 8 + Math.random() * 10; // 8-18px
    const delay = Math.random() * 5; // 0-5s 延迟
    const duration = 5 + Math.random() * 7; // 5-12s 动画时长
    
    heart.style.left = `${left}%`;
    heart.style.top = `${top}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.animationDuration = `${duration}s`;
    
    container.appendChild(heart);
  }
}

// 页面加载完成后创建爱心装饰
function initializeDecorations() {
  createHeartDecorations();
  
  // 窗口大小改变时重新创建爱心装饰
  window.addEventListener('resize', createHeartDecorations);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 创建加载屏幕
  createLoadingScreen();
  
  // 创建图片查看器
  createImageViewer();
  
  // 初始化浪漫爱心装饰
  initializeDecorations();
  
  // 设置页面加载动画
  setTimeout(() => {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('hidden');
    setTimeout(() => loadingScreen.remove(), 800);
    
    // 开始内容渐入动画
    animateOnScroll();
  }, 1500);
  
  // 为每个卡片添加交互功能
  initializeCards();
  
  // 添加滚动监听
  window.addEventListener('scroll', throttle(animateOnScroll, 200));
  
  // 初始化心情标签
  initializeMoodTags();
  
  // 初始化所有卡片的轮播图
  setTimeout(() => {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => initCarouselForCard(card));
  }, 200);
});

// 创建加载屏幕
function createLoadingScreen() {
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  
  const heartLoader = document.createElement('div');
  heartLoader.className = 'heart-loader';
  heartLoader.textContent = '❤️';
  
  loadingScreen.appendChild(heartLoader);
  document.body.appendChild(loadingScreen);
}

// 创建图片查看器
function createImageViewer() {
  imageViewer = document.createElement('div');
  imageViewer.className = 'image-viewer';
  
  const viewerContent = document.createElement('div');
  viewerContent.className = 'viewer-content';
  
  const viewerImage = document.createElement('img');
  viewerImage.className = 'viewer-image';
  
  const viewerClose = document.createElement('span');
  viewerClose.className = 'viewer-close';
  viewerClose.innerHTML = '&times;';
  
  viewerContent.appendChild(viewerImage);
  viewerContent.appendChild(viewerClose);
  imageViewer.appendChild(viewerContent);
  document.body.appendChild(imageViewer);
  
  // 添加关闭事件
  viewerClose.addEventListener('click', closeImageViewer);
  imageViewer.addEventListener('click', function(e) {
    if (e.target === imageViewer) closeImageViewer();
  });
}

// 关闭图片查看器
function closeImageViewer() {
  imageViewer.classList.remove('active');
  document.body.style.overflow = 'auto';
  
  // 延迟移除图片源，确保动画完成
  setTimeout(() => {
    imageViewer.querySelector('.viewer-image').src = '';
  }, 300);
}

// 打开图片查看器
function openImageViewer(src) {
  const viewerImage = imageViewer.querySelector('.viewer-image');
  viewerImage.src = src;
  
  // 防止背景滚动
  document.body.style.overflow = 'hidden';
  
  // 触发重排以确保过渡效果正常
  void imageViewer.offsetWidth;
  
  // 显示查看器
  imageViewer.classList.add('active');
}

// 初始化卡片动画和交互 - 确保直接在原位展开
function initializeCards() {
  const cards = document.querySelectorAll('.event-card');
  
  cards.forEach(function(card, index) {
    // 为卡片添加随机渐入延迟，创造错开效果
    setTimeout(function() {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      setTimeout(function() {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    }, index * 200);
    
    // 查看详情按钮点击处理 - 展开/折叠切换
    const viewDetailsBtn = card.querySelector('.view-details-btn');
    if (viewDetailsBtn) {
      viewDetailsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (card.classList.contains('expanded')) {
          collapseCard(card);
        } else {
          expandCard(card);
          // 当卡片展开时，初始化轮播图
          setTimeout(function() {
            initCarouselForCard(card);
          }, 300);
        }
      });
    }
    
    // 关闭卡片按钮点击处理
    const closeCardBtn = card.querySelector('.close-card-btn');
    if (closeCardBtn) {
      closeCardBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        collapseCard(card);
      });
    }
    
    // 点赞功能已移除
  });
}

// 点赞功能已恢复

// 城市筛选功能
function initCityFilter() {
  // 中国城市列表 - 根据之前修改的事件卡片整理
  const cities = [
    '北京', '上海', '广州', '深圳', '杭州', '成都', '西安', 
    '重庆', '武汉', '苏州', '青岛', '吉林', '云南', '三亚', '莫干山'
  ];
  
  // 排序城市列表
  cities.sort();
  
  // 获取筛选按钮容器
  const filterButtonsContainer = document.getElementById('city-filter-buttons');
  const selectedCountElement = document.getElementById('selected-count');
  const clearFiltersButton = document.getElementById('clear-filters');
  
  // 已选择的城市集合
  let selectedCities = new Set();
  
  // 创建城市按钮
  cities.forEach(city => {
    const button = document.createElement('button');
    button.className = 'city-button';
    button.textContent = city;
    button.dataset.city = city;
    
    // 添加点击事件
    button.addEventListener('click', () => {
      toggleCitySelection(city, button);
    });
    
    filterButtonsContainer.appendChild(button);
  });
  
  // 切换城市选择状态
  function toggleCitySelection(city, button) {
    if (selectedCities.has(city)) {
      selectedCities.delete(city);
      button.classList.remove('active');
    } else {
      selectedCities.add(city);
      button.classList.add('active');
    }
    
    // 更新选择计数
    selectedCountElement.textContent = selectedCities.size;
    
    // 更新清除按钮状态
    clearFiltersButton.disabled = selectedCities.size === 0;
    
    // 应用筛选
    applyCityFilter();
  }
  
  // 应用城市筛选
  function applyCityFilter() {
    const cards = document.querySelectorAll('.event-card');
    
    cards.forEach(card => {
      const locationElement = card.querySelector('.event-location');
      if (!locationElement) {
        // 如果没有位置信息，默认显示
        card.style.display = selectedCities.size === 0 ? 'block' : 'none';
        return;
      }
      
      const locationText = locationElement.textContent;
      let shouldShow = false;
      
      // 如果没有选择任何城市，显示所有卡片
      if (selectedCities.size === 0) {
        shouldShow = true;
      } else {
        // 检查卡片位置是否包含任何已选择的城市
        for (const city of selectedCities) {
          if (locationText.includes(city)) {
            shouldShow = true;
            break;
          }
        }
      }
      
      // 显示或隐藏卡片
      card.style.display = shouldShow ? 'block' : 'none';
    });
  }
  
  // 清除所有筛选
  clearFiltersButton.addEventListener('click', () => {
    selectedCities.clear();
    
    // 重置所有按钮状态
    const buttons = document.querySelectorAll('.city-button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    
    // 更新UI
    selectedCountElement.textContent = 0;
    clearFiltersButton.disabled = true;
    
    // 显示所有卡片
    applyCityFilter();
  });
  
  // 初始化清除按钮状态
  clearFiltersButton.disabled = true;
}

// 在DOM加载完成后初始化城市筛选
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化，确保所有卡片都已加载
    setTimeout(initCityFilter, 500);
  });
} else {
  // 如果DOM已经加载完成
  setTimeout(initCityFilter, 500);
}

// 处理卡片内容，提取图片
function processCardContent(card) {
  const originalContent = card.querySelector('.original-content');
  const slidesContainer = card.querySelector('.carousel-slides');
  const indicatorsContainer = card.querySelector('.carousel-indicators');
  
  if (!originalContent || !slidesContainer || !indicatorsContainer) {
    console.log('找不到必要的容器元素');
    return [];
  }
  
  // 克隆原始内容，避免直接操作原始DOM
  const contentClone = originalContent.cloneNode(true);
  contentClone.style.display = 'block';
  
  // 尝试直接从原始内容中获取图片路径
  // 方法1: 直接查找markdown中的图片引用
  const contentText = originalContent.textContent || originalContent.innerText;
  console.log('原始内容文本:', contentText);
  
  // 尝试直接从文章中提取图片路径
  const imageSources = [];
  
  // 方法2: 检查文章元数据中的图片
  const articleImage = card.dataset.image || '';
  if (articleImage) {
    console.log('从data属性获取到文章图片:', articleImage);
    imageSources.push(articleImage);
  }
  
  // 方法3: 查找DOM中的图片元素
  const images = contentClone.querySelectorAll('img');
  console.log('找到图片元素数量:', images.length);
  
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      console.log('添加图片路径:', src);
      imageSources.push(src);
    }
  });
  
  // 方法4: 如果仍然没有图片，尝试从thumbnail中获取
  if (imageSources.length === 0) {
    const thumbnail = card.querySelector('.event-thumbnail-container img');
    if (thumbnail && thumbnail.src) {
      console.log('从缩略图获取图片:', thumbnail.src);
      imageSources.push(thumbnail.src);
    }
  }
  
  console.log('最终提取的图片路径列表:', imageSources);
  
  // 移除文字处理逻辑，只保留图片提取
  
  return imageSources;
}

// 为卡片初始化轮播图
function initCarouselForCard(card) {
  console.log('开始初始化轮播图...');
  
  // 确保轮播图容器显示
  const carouselContainer = card.querySelector('.image-carousel');
  const slidesContainer = card.querySelector('.carousel-slides');
  const prevBtn = card.querySelector('.carousel-prev');
  const nextBtn = card.querySelector('.carousel-next');
  const indicatorsContainer = card.querySelector('.carousel-indicators');
  
  if (!carouselContainer || !slidesContainer || !prevBtn || !nextBtn || !indicatorsContainer) {
    console.error('找不到轮播图必要元素');
    return;
  }
  
  // 确保轮播图容器显示
  carouselContainer.style.display = 'block';
  
  // 处理卡片内容，提取图片路径
  const imageSources = processCardContent(card);
  
  // 确保只使用从当前卡片中提取的图片
  if (imageSources.length === 0) {
    console.log('当前卡片没有找到相关图片');
    // 如果没有图片，可以显示一个提示信息或占位图
    const placeholderSlide = document.createElement('div');
    placeholderSlide.classList.add('carousel-slide');
    placeholderSlide.style.position = 'absolute';
    placeholderSlide.style.width = '100%';
    placeholderSlide.style.height = '100%';
    placeholderSlide.style.display = 'flex';
    placeholderSlide.style.alignItems = 'center';
    placeholderSlide.style.justifyContent = 'center';
    placeholderSlide.style.background = '#f8f8f8';
    placeholderSlide.style.color = '#666';
    placeholderSlide.textContent = '暂无图片';
    slidesContainer.appendChild(placeholderSlide);
    
    // 创建一个指示器
    const indicator = document.createElement('button');
    indicator.classList.add('carousel-indicator', 'active');
    indicatorsContainer.appendChild(indicator);
    
    // 设置轮播图状态数据
    card.dataset.currentSlide = 0;
    card.dataset.totalSlides = 1;
    
    // 禁用按钮
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    
    return;
  }
  
  // 清空现有内容
  slidesContainer.innerHTML = '';
  indicatorsContainer.innerHTML = '';
  
  // 设置轮播图状态数据
  card.dataset.currentSlide = 0;
  card.dataset.totalSlides = imageSources.length;
  
  // 创建幻灯片和指示器
  imageSources.forEach((src, index) => {
    // 创建幻灯片
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    slide.style.position = 'absolute';
    slide.style.width = '100%';
    slide.style.height = '100%';
    slide.style.transition = 'transform 0.5s ease';
    slide.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';
    slide.style.display = 'flex';
    slide.style.alignItems = 'center';
    slide.style.justifyContent = 'center';
    slide.style.background = '#f8f8f8';
    
    // 创建图片
    const img = document.createElement('img');
    img.src = src;
    img.alt = `轮播图片 ${index + 1}`;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.objectFit = 'cover';
    img.style.cursor = 'pointer';
    
    // 添加点击事件，打开大图查看器
    function handleImageClick() {
      openImageViewer(src);
    }
    
    // 同时支持点击和触摸事件
    img.addEventListener('click', handleImageClick);
    img.addEventListener('touchstart', function(e) {
      // 防止事件冒泡
      e.stopPropagation();
      handleImageClick();
    }, { passive: true });
    
    // 添加图片加载事件处理
    img.onload = function() {
      console.log('图片加载成功:', this.src);
    };
    
    img.onerror = function() {
      console.error('图片加载失败:', this.src);
      // 如果加载失败，显示占位符
      const placeholder = document.createElement('div');
      placeholder.textContent = '图片加载失败';
      placeholder.style.color = '#666';
      placeholder.style.textAlign = 'center';
      slide.appendChild(placeholder);
    };
    
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
    
    // 创建指示器
    const indicator = document.createElement('button');
    indicator.classList.add('carousel-indicator');
    indicator.classList.toggle('active', index === 0);
    indicator.addEventListener('click', () => goToSlide(card, index));
    indicatorsContainer.appendChild(indicator);
  });
  
  // 添加按钮事件监听
  prevBtn.addEventListener('click', () => {
    const currentSlide = parseInt(card.dataset.currentSlide);
    const totalSlides = parseInt(card.dataset.totalSlides);
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(card, prevSlide, 'prev');
  });
  
  nextBtn.addEventListener('click', () => {
    const currentSlide = parseInt(card.dataset.currentSlide);
    const totalSlides = parseInt(card.dataset.totalSlides);
    const nextSlide = (currentSlide + 1) % totalSlides;
    goToSlide(card, nextSlide, 'next');
  });
  
  // 添加拖动支持（触摸和鼠标）
  let dragStartX = 0;
  let dragStartTime = 0;
  let isDragging = false;
  
  // 开始拖动的通用函数
  function startDrag(e) {
    // 阻止默认行为，特别是在图片上的拖动
    e.preventDefault();
    
    // 获取起始X坐标
    if (e.type === 'touchstart') {
      dragStartX = e.touches[0].clientX;
    } else {
      dragStartX = e.clientX;
    }
    
    dragStartTime = new Date().getTime();
    isDragging = true;
    
    // 暂停自动轮播
    if (card.carouselInterval) {
      clearInterval(card.carouselInterval);
    }
    
    // 移除过渡效果，直接拖动
    const slides = card.querySelectorAll('.carousel-slide');
    slides.forEach(slide => {
      slide.style.transition = 'none';
    });
  }
  
  // 拖动中的通用函数
  function dragMove(e) {
    if (!isDragging) return;
    
    // 获取当前X坐标
    let currentX;
    if (e.type === 'touchmove') {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    
    const diffX = currentX - dragStartX;
    const currentIndex = parseInt(card.dataset.currentSlide);
    
    // 计算当前拖动的位置比例
    const dragPercentage = diffX / slidesContainer.offsetWidth * 100;
    
    // 获取所有幻灯片
    const slides = card.querySelectorAll('.carousel-slide');
    
    // 更新幻灯片位置
    slides.forEach((slide, index) => {
      const position = (index - currentIndex) * 100 + dragPercentage;
      slide.style.transform = `translateX(${position}%)`;
    });
  }
  
  // 结束拖动的通用函数
  function endDrag(e) {
    if (!isDragging) return;
    
    // 获取结束X坐标
    let endX;
    if (e.type === 'touchend') {
      endX = e.changedTouches[0].clientX;
    } else {
      endX = e.clientX;
    }
    
    const diffX = endX - dragStartX;
    const diffTime = new Date().getTime() - dragStartTime;
    
    // 重置拖动状态
    isDragging = false;
    
    // 恢复过渡效果
    const slides = card.querySelectorAll('.carousel-slide');
    slides.forEach(slide => {
      slide.style.transition = 'transform 0.5s ease';
    });
    
    const currentIndex = parseInt(card.dataset.currentSlide);
    const totalSlides = parseInt(card.dataset.totalSlides);
    
    // 判断是否需要切换幻灯片
    // 1. 滑动距离超过阈值
    // 2. 滑动速度足够快
    const slideThreshold = 50; // 切换阈值(像素)
    const quickSwipeThreshold = 100; // 快速滑动阈值(像素/秒)
    const swipeSpeed = Math.abs(diffX) / diffTime * 1000;
    
    let targetIndex = currentIndex;
    
    // 向左滑动(下一张)
    if (diffX < -slideThreshold || (diffX < 0 && swipeSpeed > quickSwipeThreshold)) {
      targetIndex = (currentIndex + 1) % totalSlides;
    }
    // 向右滑动(上一张)
    else if (diffX > slideThreshold || (diffX > 0 && swipeSpeed > quickSwipeThreshold)) {
      targetIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    
    // 如果没有切换，则恢复当前幻灯片位置
    if (targetIndex === currentIndex) {
      updateSlidesPosition(card);
    } else {
      goToSlide(card, targetIndex, diffX < 0 ? 'next' : 'prev');
    }
    
    // 重新启动自动轮播
    startAutoCarousel(card);
  }
  
  // 添加触摸事件监听
  slidesContainer.addEventListener('touchstart', startDrag, { passive: false });
  slidesContainer.addEventListener('touchmove', dragMove, { passive: true });
  slidesContainer.addEventListener('touchend', endDrag);
  
  // 添加鼠标事件监听
  slidesContainer.addEventListener('mousedown', startDrag);
  slidesContainer.addEventListener('mousemove', dragMove);
  document.addEventListener('mouseup', endDrag);
  
  // 鼠标离开窗口时结束拖动
  document.addEventListener('mouseleave', endDrag);
  
  // 启动自动轮播
  startAutoCarousel(card);
  
  console.log('轮播图初始化完成，已添加拖动支持');
}

// 更新幻灯片位置
function updateSlidesPosition(card) {
  const slides = card.querySelectorAll('.carousel-slide');
  const currentIndex = parseInt(card.dataset.currentSlide);
  
  slides.forEach((slide, index) => {
    // 设置所有幻灯片的位置
    slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
}

// 切换到指定轮播图
function goToSlide(card, index, direction = 'next') {
  const slides = card.querySelectorAll('.carousel-slide');
  const indicators = card.querySelectorAll('.carousel-indicator');
  const totalSlides = parseInt(card.dataset.totalSlides);
  const currentIndex = parseInt(card.dataset.currentSlide);
  
  if (index >= totalSlides || index < 0) return;
  
  // 更新指示器状态
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  
  // 添加过渡效果
  slides.forEach(slide => {
    slide.style.transition = 'transform 0.5s ease';
  });
  
  // 更新幻灯片位置，实现推动效果
  updateSlidesPosition(card);
  
  // 延迟更新索引，确保动画完成
  setTimeout(() => {
    // 更新当前索引
    card.dataset.currentSlide = index;
    
    // 重置自动轮播
    if (card.carouselInterval) {
      clearInterval(card.carouselInterval);
    }
    startAutoCarousel(card);
  }, 500);
}

// 启动自动轮播
function startAutoCarousel(card) {
  card.carouselInterval = setInterval(() => {
    const currentSlide = parseInt(card.dataset.currentSlide);
    const totalSlides = parseInt(card.dataset.totalSlides);
    const nextSlide = (currentSlide + 1) % totalSlides;
    goToSlide(card, nextSlide, 'next');
  }, 5000); // 每5秒切换一次
}

// 卡片展开函数 - 直接在原位下拉展开
function expandCard(card) {
    // 确保其他卡片都收起
    const allCards = document.querySelectorAll('.event-card');
    allCards.forEach(c => {
        if (c !== card && c.classList.contains('expanded')) {
            c.classList.remove('expanded');
            // 清除其他卡片的轮播计时器
            if (c.carouselInterval) {
              clearInterval(c.carouselInterval);
            }
        }
    });
    
    // 添加展开类，触发CSS动画
    card.classList.add('expanded');
    
    // 记录当前展开的卡片位置，方便后续优化
    console.log('Card expanded in place:', card.dataset.id || 'Unknown');
}

// 卡片收起函数 - 保持原位收起
function collapseCard(card) {
    card.classList.remove('expanded');
    // 清除轮播计时器
    if (card.carouselInterval) {
      clearInterval(card.carouselInterval);
    }
    console.log('Card collapsed in place:', card.dataset.id || 'Unknown');
}

// ESC键仅用于关闭图片查看器
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && imageViewer && imageViewer.classList.contains('active')) {
    closeImageViewer();
  }
});

// 互动工具栏功能已移除

// 计算爱情天数
function calculateLoveDays() {
  // 由于文章是按新到旧排序的，我们需要获取最后一篇文章（最早的日期）作为恋爱开始日期
  const allPosts = document.querySelectorAll('.event-card');
  if (allPosts.length > 0) {
    // 获取最后一篇文章（最早的日期）
    const oldestPost = allPosts[allPosts.length - 1];
    const dateText = oldestPost.querySelector('.event-time').textContent;
    const match = dateText.match(/\d{4}-\d{2}-\d{2}/);
    if (match) {
      const startDate = new Date(match[0]);
      const today = new Date();
      
      // 计算天数差
      const timeDiff = today.getTime() - startDate.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      const daysElement = document.getElementById('days-together');
      if (daysElement) {
        // 数字增长动画
        animateNumber(daysElement, 0, dayDiff, 2000);
      }
    }
  }
}

// 数字增长动画
function animateNumber(element, start, end, duration) {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    
    // 使用缓动函数使动画更自然
    const easeOutQuad = progress * (2 - progress);
    const current = Math.floor(start + (end - start) * easeOutQuad);
    
    element.textContent = current;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
}

// 滚动时动画
function animateOnScroll() {
  // 卡片动画
  const elements = document.querySelectorAll('.event-card');
  const loveCounter = document.querySelector('.love-counter');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
  
  // 爱情计数器动画
  if (loveCounter) {
    const counterPosition = loveCounter.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (counterPosition < screenPosition && !loveCounter.classList.contains('visible')) {
      loveCounter.classList.add('visible');
      
      // 触发爱情天数计算
      setTimeout(calculateLoveDays, 500);
      
      // 为统计数字添加弹出动画
      const statNumbers = loveCounter.querySelectorAll('.stat-number');
      statNumbers.forEach((number, index) => {
        setTimeout(() => {
          number.style.transform = 'scale(1.2)';
          setTimeout(() => {
            number.style.transform = 'scale(1)';
          }, 200);
        }, 300 + (index * 200));
      });
    }
  }
}

// 初始化心情标签
function initializeMoodTags() {
  const moodTags = document.querySelectorAll('.mood-tag');
  
  moodTags.forEach(tag => {
    // 添加悬停效果
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
      this.style.boxShadow = '0 4px 12px rgba(244, 143, 177, 0.3)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
