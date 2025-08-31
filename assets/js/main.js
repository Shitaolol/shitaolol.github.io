// 爱情博客主要JavaScript功能

// 计算恋爱天数
function calculateDaysTogether() {
    const loveStartDate = new Date('2023-01-01'); // 可以从配置中读取
    const today = new Date();
    const timeDiff = today - loveStartDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    const daysElement = document.getElementById('days-together');
    if (daysElement) {
        daysElement.textContent = daysDiff;
    }
}

// 计算下一个纪念日倒计时
function calculateNextAnniversary() {
    const anniversary = new Date('2023-01-01');
    const today = new Date();
    
    // 计算今年的纪念日
    let nextAnniversary = new Date(today.getFullYear(), anniversary.getMonth(), anniversary.getDate());
    
    // 如果今年的纪念日已经过了，计算明年的
    if (today > nextAnniversary) {
        nextAnniversary = new Date(today.getFullYear() + 1, anniversary.getMonth(), anniversary.getDate());
    }
    
    const timeDiff = nextAnniversary - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    const anniversaryElement = document.getElementById('next-anniversary');
    if (anniversaryElement) {
        anniversaryElement.textContent = daysDiff;
    }
}

// 初始化爱情地图
function initLoveMap() {
    const mapElement = document.getElementById('love-map');
    if (!mapElement) return;

    // 示例地点数据
    const locations = [
        { lat: 39.9042, lng: 116.4074, title: "第一次约会", description: "北京三里屯" },
        { lat: 40.7128, lng: -74.0060, title: "第一次旅行", description: "纽约之旅" },
        { lat: 35.6762, lng: 139.6503, title: "樱花季", description: "东京赏樱" }
    ];

    const map = L.map('love-map').setView([30, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<b>${location.title}</b><br>${location.description}`);
    });
}

// 平滑滚动
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 导航栏响应式
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 动画效果
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.post-card, .timeline-item, .counter-item');
    animatedElements.forEach(el => observer.observe(el));
}

// 主题切换（可选）
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// 分享功能
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.dataset.url;
            const title = this.dataset.title;
            
            if (navigator.share) {
                navigator.share({
                    title: title,
                    url: url
                });
            } else {
                // 备用分享方案
                const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
                window.open(shareUrl, '_blank', 'width=600,height=300');
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    calculateDaysTogether();
    calculateNextAnniversary();
    initLoveMap();
    smoothScroll();
    initMobileNav();
    initLazyLoading();
    initAnimations();
    initThemeToggle();
    initShareButtons();
});

// 窗口调整大小时重新计算地图
window.addEventListener('resize', function() {
    const mapElement = document.getElementById('love-map');
    if (mapElement && mapElement._leaflet_id) {
        mapElement._leaflet_id.invalidateSize();
    }
});

// 添加一些实用工具函数
const LoveBlogUtils = {
    // 格式化日期
    formatDate: function(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('zh-CN', options);
    },
    
    // 获取恋爱时长
    getLoveDuration: function() {
        const start = new Date('2023-01-01');
        const now = new Date();
        const years = now.getFullYear() - start.getFullYear();
        const months = now.getMonth() - start.getMonth();
        const totalMonths = years * 12 + months;
        return `${Math.floor(totalMonths / 12)}年${totalMonths % 12}个月`;
    },
    
    // 创建心形动画
    createHeartAnimation: function(element) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.animation = 'float 3s ease-out forwards';
        element.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
};

// 导出到全局作用域
window.LoveBlogUtils = LoveBlogUtils;