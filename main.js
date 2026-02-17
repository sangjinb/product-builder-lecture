const snacks = [
    { name: '치킨', image: 'https://i.imgur.com/gJT3pDc.png' },
    { name: '피자', image: 'https://i.imgur.com/eT8sC8d.png' },
    { name: '족발', image: 'https://i.imgur.com/39S4a2j.png' },
    { name: '보쌈', image: 'https://i.imgur.com/MYyYx3h.png' },
    { name: '떡볶이', image: 'https://i.imgur.com/i9B0YpL.png' },
    { name: '라면', image: 'https://i.imgur.com/ANeO9p9.png' },
    { name: '김치전', image: 'https://i.imgur.com/xThsL1M.png' },
    { name: '파전', image: 'https://i.imgur.com/PzXAt7Z.png' },
    { name: '곱창', image: 'https://i.imgur.com/pGCSv2Z.png' },
    { name: '닭발', image: 'https://i.imgur.com/rQWjC2I.png' },
    { name: '아이스크림', image: 'https://i.imgur.com/NGRS11f.png' },
    { name: '마른안주', image: 'https://i.imgur.com/s60YwW1.png' },
    { name: '과일', image: 'https://i.imgur.com/T0T9b1d.png' },
    { name: '햄버거', image: 'https://i.imgur.com/8zS6wzI.png' },
    { name: '만두', image: 'https://i.imgur.com/Ggqmr1n.png' },
    { name: '나노바나나', image: 'https://i.imgur.com/yv6vjCV.png' },
    { name: '콘푸르스트', image: 'https://i.imgur.com/v2z2uT0.png' }
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
        <div class="snack-name">${selectedSnack.name}</div>
    `;
});