const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 5,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween:20,
          },
          1536:{
            slidesPerView:5,
            spaceBetween:20,
          },
      },
    });
 

  function toggleClass(ID,CLASS){
    document.getElementById(ID).classList.toggle(CLASS)
}


    const items = document.querySelectorAll('.item');
    lastOpen = 0;
    items.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        if (lastOpen != i) {
          items[lastOpen].classList.remove('open');
        }
        el.classList.toggle('open');
        lastOpen = i;
      })
    })





