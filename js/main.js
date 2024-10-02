
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
//--------------------- Javasciprt cho phần menu xổ ra 
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

// ---------------------------zoom in nhan xet (sơ qua)
const tBoxes = document.querySelectorAll('.t-box');
const zoomedInContainer = document.createElement('div');
zoomedInContainer.classList.add('zoomed-in');
document.body.appendChild(zoomedInContainer);

// Xử lý sự kiện nhấn vào t-box
tBoxes.forEach(tBox => {
    tBox.addEventListener('click', (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện click từ t-box truyền ra ngoài
        zoomedInContainer.style.display = 'block';
        zoomedInContainer.innerHTML = tBox.innerHTML; // Sao chép nội dung của t-box vào zoomed-in
        zoomedInContainer.querySelector('.t-box').style.transform = 'scale(1)'; // Đặt t-box về kích thước bình thường
    });
});

// Ẩn zoomed-in khi nhấn ra ngoài hoặc nhấn vào chính t-box
zoomedInContainer.addEventListener('click', () => {
    zoomedInContainer.style.display = 'none';
});

// Ngăn chặn sự kiện click từ zoomed-in truyền ra ngoài
zoomedInContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Ẩn zoomed-in khi nhấn vào bất kỳ đâu trên trang
document.addEventListener('click', () => {
    zoomedInContainer.style.display = 'none';
});


//JS cho phần menu bấm qua thì chuyển qua menu khác
document.querySelectorAll('.link__to').forEach(link => {
  link.addEventListener('click', function() {
      // Lấy menu cần hiển thị từ data-menu
      const menuToShow = this.getAttribute('data-menu');
      
      // Ẩn tất cả các menu
      document.querySelectorAll('.item-content').forEach(menu => {
          menu.style.display = 'none';  // Ẩn menu
      });

      // Hiển thị menu tương ứng
      document.getElementById(menuToShow).style.display = 'grid';  // Hiển thị menu bằng grid
  });
});



