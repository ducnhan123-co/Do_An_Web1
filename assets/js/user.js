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
