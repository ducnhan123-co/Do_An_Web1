function togglePassword(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function navigateToPage(select) {
    const selectedValue = select.value;
    if (selectedValue !== "#") {
        window.location.href = selectedValue; // Điều hướng đến trang đã chọn
    }
}


function changePassword() { 
    var curPassword = document.getElementById('password-cur-info').value; 
    var newPassword = document.getElementById('password-after-info').value; 
    var confirmPassword = document.getElementById('password-confirm-info').value; 
    // Kiểm tra mật khẩu 
    if (newPassword === confirmPassword) { 
        // Thực hiện thay đổi mật khẩu, bạn có thể gọi API hoặc thực hiện hành động khác tại đây 
        alert('Đổi mật khẩu thành công!'); 
        // Chuyển hướng về trang chính
        window.location.href = 'user.html'; // thay thế 'home.html' bằng URL trang chính của bạn 
    } else { 
        alert('Mật khẩu mới và xác nhận mật khẩu không khớp. Vui lòng thử lại.'); 
    } 
}

function saveChanges() {
    // Thực hiện lưu các thay đổi thông tin tài khoản 
    alert('Thay đổi đã được lưu!'); 
}