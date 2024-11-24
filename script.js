function purchase(productName) {
    alert(`Спасибо за покупку!!!`);
}
let footer = document.getElementById('footer');
let lastScrollTop = 0; // Хранит последнюю позицию прокрутки

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) { x
    footer.classList.add('hidden'); 
  } else {
    footer.classList.remove('hidden'); 
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});
