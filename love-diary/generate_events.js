// 生成20个随机事件卡片数据
const fs = require('fs');
const path = require('path');

// 随机数据池
const titles = [
  '第一次约会', '海边漫步', '看电影', '一起做饭', '生日惊喜',
  '爬山', '游乐园', '咖啡馆小聚', '博物馆之旅', '购物日',
  '野餐', '音乐会', '滑雪', '温泉之旅', '露营',
  '划船', '看日出', '节日庆祝', '自驾游', '参观动物园'
];

const locations = [
  '中央公园', '外滩', '迪士尼乐园', '星巴克', '本地电影院',
  '山顶餐厅', '海滨浴场', '艺术博物馆', '购物中心', '湖边公园',
  '音乐厅', '滑雪场', '温泉度假村', '郊外营地', '湖上码头',
  '海滩', '新年广场', '高速公路沿途', '城市动物园', '主题餐厅'
];

const moods = [
  '开心', '浪漫', '兴奋', '放松', '惊喜', 
  '温馨', '有趣', '刺激', '宁静', '难忘',
  '甜蜜', '幸福', '快乐', '感动', '满足'
];

const descriptions = [
  '这是我们美好时光的见证，永远珍藏在心中。',
  '一起度过的每一天都是那么珍贵，期待更多的未来。',
  '今天的回忆将成为我们永恒的财富。',
  '有你的陪伴，平凡的日子也变得特别。',
  '这一刻，我感到无比幸福和满足。',
  '谢谢你给我这么美好的体验，爱你！',
  '我们的故事还在继续，每一天都值得期待。',
  '今天的经历让我更加确定，你就是我要找的人。',
  '这个地方因为有你而变得特别。',
  '美好的一天，和最爱的人一起度过。'
];

// 生成随机日期（在过去一年内）
function getRandomDate() {
  const now = new Date();
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  const randomTime = oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime());
  const randomDate = new Date(randomTime);
  
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

// 生成随机心情标签（2-4个）
function getRandomMoods() {
  const count = Math.floor(Math.random() * 3) + 2; // 2-4个心情
  const selectedMoods = [];
  
  while (selectedMoods.length < count) {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    if (!selectedMoods.includes(randomMood)) {
      selectedMoods.push(randomMood);
    }
  }
  
  return selectedMoods;
}

// 生成随机描述（结合多个描述片段）
function getRandomDescription() {
  const count = Math.floor(Math.random() * 2) + 1; // 1-2个描述片段
  const selectedDescriptions = [];
  
  for (let i = 0; i < count; i++) {
    selectedDescriptions.push(descriptions[Math.floor(Math.random() * descriptions.length)]);
  }
  
  return selectedDescriptions.join(' ');
}

// 生成随机图片数量（1-3张）
function getRandomImageCount() {
  return Math.floor(Math.random() * 3) + 1;
}

// 生成20个事件
const events = [];
for (let i = 0; i < 20; i++) {
  const randomTitleIndex = Math.floor(Math.random() * titles.length);
  const randomLocationIndex = Math.floor(Math.random() * locations.length);
  
  events.push({
    title: titles[randomTitleIndex],
    date: getRandomDate(),
    location: locations[randomLocationIndex],
    image: i % 2 === 0 ? '/assets/images/first-date.jpg' : '/assets/images/paris-travel.jpg',
    moods: getRandomMoods(),
    description: getRandomDescription(),
    imageCount: getRandomImageCount()
  });
}

// 导出事件数据
fs.writeFileSync(
  path.join(__dirname, 'events_data.json'),
  JSON.stringify(events, null, 2)
);

console.log('已生成20个随机事件数据');
console.log(events);