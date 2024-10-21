// login.ts
document.getElementById('login-form')!.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Thực hiện kiểm tra đăng nhập ở đây (ví dụ: gửi dữ liệu lên server)
    console.log('Username:', username);
    console.log('Password:', password);

    // Chuyển hướng đến trang khác sau khi đăng nhập thành công (ví dụ: trang chủ)
    window.location.href = 'index.html';
});