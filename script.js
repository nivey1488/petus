function purchase(productName) {
    alert(`Спасибо за покупку!!!`);
}
let footer = document.getElementById('footer');
let lastScrollTop = 0; // Последняя позиция прокрутки

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) { 

    footer.classList.add('hidden'); 
  } else if (scrollTop < lastScrollTop) {

    footer.classList.remove('hidden'); 
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});
