// Hàm để kiểm tra xem phần tử có nằm trong cửa sổ trình duyệt hay không
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Lắng nghe sự kiện cuộn trang (scroll)
  window.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    
    if (isElementInViewport(content)) {
      content.classList.add('visible');
    }
  });


// Khởi tạo carousel bằng JavaScript
var myCarousel = document.querySelector('#demo');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,  // Chuyển slide tự động mỗi 2 giây
  ride: 'carousel' // Chạy carousel ngay khi trang được tải
});
