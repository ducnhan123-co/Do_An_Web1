
// Code để thanh Header chuyển màu khi di chuyển xuống dưới
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  // Tắt tính năng autoplay
  autoplay: {
    delay: 3000,
      disableOnInteraction: false,
  },
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
// Javasciprt cho phần menu xổ ra 
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.item-box');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  });

  items.forEach(item => {
      observer.observe(item);
  });
});
