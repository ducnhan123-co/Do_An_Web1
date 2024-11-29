document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".delete-button");

  if (deleteButtons.length === 0) {
    console.error("Không tìm thấy nút xóa nào trong DOM.");
    return;
  }

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định (nếu có)

      const confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?");
      if (confirmDelete) {
        alert("Đã xóa thành công!");
        // Xóa dòng hiện tại khỏi bảng (không cần reload)
        button.closest("tr").remove();
        location.reload();
      } else {
        alert("Hủy thao tác xóa.");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const updateButton = document.querySelector(".update-button");

  if (!updateButton) {
    console.error("Không tìm thấy nút cập nhật sản phẩm.");
    return;
  }

  updateButton.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    // Thu thập thông tin sản phẩm từ form
    const productName = document.getElementById("edit-product-name").value;
    const productCategory = document.getElementById(
      "edit-product-category"
    ).value;
    const productPrice = document.getElementById("edit-product-price").value;
    const productQuantity = document.getElementById(
      "edit-product-quantity"
    ).value;
    const productDescription = document.getElementById(
      "edit-product-description"
    ).value;
    const productStatus = document.getElementById("edit-product-status").value;

    // Kiểm tra thông tin sản phẩm
    if (!productName || !productCategory || !productPrice || !productQuantity) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm trước khi cập nhật.");
      return;
    }

    // Thông báo sản phẩm đã được cập nhật
    alert(`Sản phẩm "${productName}" đã được cập nhật thành công!`);
    location.reload();
    console.log({
      name: productName,
      category: productCategory,
      price: productPrice,
      quantity: productQuantity,
      description: productDescription,
      status: productStatus,
    });

    // Thực hiện các thao tác bổ sung tại đây (nếu có, như gửi dữ liệu đến server)
  });
});
