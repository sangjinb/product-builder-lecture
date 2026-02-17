const snacks = [
    '치킨', '피자', '족발', '보쌈', '떡볶이',
    '라면', '김치전', '파전', '곱창', '닭발',
    '아이스크림', '마른안주', '과일', '햄버거', '만두'
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
    recommendationCard.textContent = selectedSnack;
});