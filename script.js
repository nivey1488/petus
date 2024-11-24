// Анимация при загрузке страницы
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

// Функция для отображения сообщения при "покупке"
function purchase(productName) {
    alert(`Спасибо за покупку!!!`);
}
