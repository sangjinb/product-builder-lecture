const snacks = [
    { name: '치킨', image: 'https://i.imgur.com/gJT3pDc.png', description: '오늘 밤, 바삭한 튀김옷과 촉촉한 속살로 스트레스를 날려버리세요! 야식의 왕, 치킨!' },
    { name: '피자', image: 'https://i.imgur.com/eT8sC8d.png', description: '쭉 늘어나는 치즈와 풍부한 토핑의 향연! 친구와 함께 즐기면 더욱 맛있는 피자!' },
    { name: '족발', image: 'https://i.imgur.com/39S4a2j.png', description: '쫄깃한 껍데기와 부드러운 살코기의 완벽한 조화. 새우젓에 콕 찍어 즐겨보세요.' },
    { name: '보쌈', image: 'https://i.imgur.com/MYyYx3h.png', description: '기름기는 쏙 빼고 담백함만 남았다! 김치와 함께 싸먹는 부드러운 보쌈 한 점.' },
    { name: '떡볶이', image: 'https://i.imgur.com/i9B0YpL.png', description: '매콤달콤한 소스에 쫀득한 떡, 그리고 바삭한 튀김까지! 멈출 수 없는 중독적인 맛.' },
    { name: '라면', image: 'https://i.imgur.com/ANeO9p9.png', description: '세상에서 가장 맛있는 라면은? 바로 지금 끓여먹는 라면! 간단하지만 완벽한 야식.' },
    { name: '김치전', image: 'https://i.imgur.com/xThsL1M.png', description: '비 오는 날엔 역시 김치전! 막걸리 한 잔과 함께라면 여기가 바로 지상낙원.' },
    { name: '파전', image: 'https://i.imgur.com/PzXAt7Z.png', description: '해물과 파가 듬뿍! 고소한 기름 냄새가 코를 자극하는 바삭바삭 해물파전.' },
    { name: '곱창', image: 'https://i.imgur.com/pGCSv2Z.png', description: '고소한 곱이 가득! 씹을수록 퍼지는 진한 풍미에 빠져보세요. 볶음밥은 필수!' },
    { name: '닭발', image: 'https://i.imgur.com/rQWjC2I.png', description: '화끈한 매운맛으로 스트레스 타파! 쫀득한 식감에 자꾸만 손이 가는 매력 만점 닭발.' },
    { name: '아이스크림', image: 'https://i.imgur.com/NGRS11f.png', description: '이불 속에서 즐기는 달콤한 행복. 오늘 하루 수고한 나를 위한 완벽한 디저트.' },
    { name: '마른안주', image: 'https://i.imgur.com/s60YwW1.png', description: '영화나 드라마 볼 때 빠질 수 없는 단짝. 짭짤하고 고소한 마른안주와 함께 즐거운 시간을.' },
    { name: '과일', image: 'https://i.imgur.com/T0T9b1d.png', description: '상큼하고 달콤한 과일로 비타민 충전! 부담 없는 건강한 야식을 원한다면.' },
    { name: '햄버거', image: 'https://i.imgur.com/8zS6wzI.png', description: '두툼한 패티와 신선한 야채, 그리고 고소한 빵의 완벽한 삼위일체! 출출할 땐 역시 햄버거.' },
    { name: '만두', image: 'https://i.imgur.com/Ggqmr1n.png', description: '육즙 가득! 찐만두, 군만두, 물만두... 어떻게 먹어도 맛있는 만두의 무한 매력.' },
    { name: '나노바나나', image: 'https://i.imgur.com/yv6vjCV.png', description: '미래에서 온 궁극의 달콤함! 나노 기술로 더욱 진해진 바나나의 풍미를 느껴보세요.' },
    { name: '콘푸르스트', image: 'https://i.imgur.com/v2z2uT0.png', description: '밤새 과제할 때, 출출함을 달래주는 든든한 친구. 우유와 함께라면 더욱 꿀맛!' }
];

const generateBtn = document.getElementById('generate-btn');
const recommendationCard = document.getElementById('recommendation-card');

generateBtn.addEventListener('click', () => {
    // Clear previous result and animation
    recommendationCard.innerHTML = '';
    recommendationCard.style.animation = 'none';
    
    // Trigger reflow to restart animation
    void recommendationCard.offsetWidth;

    // Get a random snack
    const randomIndex = Math.floor(Math.random() * snacks.length);
    const selectedSnack = snacks[randomIndex];

    // Set new animation and content
    recommendationCard.style.animation = 'flip-in 0.6s ease-out forwards';
    recommendationCard.innerHTML = `
        <img src="${selectedSnack.image}" alt="${selectedSnack.name}">
        <div class="snack-info">
            <div class="snack-name">${selectedSnack.name}</div>
            <p class="snack-description">${selectedSnack.description}</p>
        </div>
    `;
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.removeItem('theme');
        themeToggle.textContent = '🌙';
    }
});

// Apply saved theme on load
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.textContent = '☀️';
    }
})();