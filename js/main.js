var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  // Tắt tính năng autoplay
  autoplay: false,
  // Kích hoạt pagination (nút chuyển ảnh) có thể click
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Cho phép điều khiển qua nút next/prev nếu cần
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
