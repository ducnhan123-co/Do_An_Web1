
function navigateToPage(select) {
    const selectedValue = select.value;
    if (selectedValue !== "#") {
        window.location.href = selectedValue; // Điều hướng đến trang đã chọn
    }
}

// Hàm hiển thị thông báo khi lưu thay đổi
function saveChanges() {
    alert("Đã lưu thay đổi thành công!");
}

// Hàm hiển thị thông báo khi đổi mật khẩu
function changePassword() {
    alert("Đã đổi mật khẩu thành công!");
}

// Hàm hiển thị/ẩn mật khẩu
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function searchOrder() {
  const searchInput = document.getElementById("filter-search").value.trim();
  if (searchInput) {
    alert(`Tìm kiếm mã đơn hàng: ${searchInput} thành công!`);
    window.location.href = window.location.href; // Quay lại trang chính nó
  } else {
    alert("Vui lòng nhập mã đơn hàng để tìm kiếm.");
  }
}

function filterTable() {
  const dateInput = document.getElementById("filter-date").value;
  const productInput = document.getElementById("filter-product").value.trim();

  if (dateInput || productInput) {
    let message = "Lọc thành công: ";
    if (dateInput) message += `Ngày đặt hàng: ${dateInput}`;
    if (productInput)
      message += `${dateInput ? ", " : ""}Mã đơn hàng: ${productInput}`;
    alert(message);
    window.location.href = window.location.href; // Quay lại trang chính nó
  } else {
    alert("Vui lòng nhập thông tin lọc.");
  }
}
