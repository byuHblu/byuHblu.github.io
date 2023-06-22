/* Swiper */


const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  }
});


/* Burger */


let burger = document.querySelector ('.burger');
let menu = document.querySelector ('.header__nav-down');
let btn = document.querySelector ('.header__btn-login');
let menuLinks = document.querySelectorAll ('.nav__link-down');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    
    menu.classList.toggle('header__nav-down--active');

    btn.classList.toggle('header__btn-login--active');

    document.body.classList.toggle('stop-scroll');
  });

  menuLinks.forEach(function (el) {
    el.addEventListener ('click', function() {

      burger.classList.remove('burger--active');

      menu.classList.remove('header__nav-down--active');
      
      btn.classList.remove('header__btn-login--active');

      document.body.classList.remove('stop-scroll');
    });
  })