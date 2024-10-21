// login.ts
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Thực hiện kiểm tra đăng nhập ở đây (ví dụ: gửi dữ liệu lên server)
    console.log('Username:', username);
    console.log('Password:', password);
    // Chuyển hướng đến trang khác sau khi đăng nhập thành công (ví dụ: trang chủ)
    window.location.href = 'index.html';
});
