const swiperAbout = new Swiper('.swiperAbout', {
  loop:true,
  spaceBetween: 50,
  slidesPerView: 1,
  // autoplay: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet',
    clickable: true,
  },
});
const swiperInterest = new Swiper('.swiperInterest', {
  loop:true,
  spaceBetween: 50,
  slidesPerView: 1,
  autoplay: true,
  autoplay: {
    delay: 5000,
  },
});