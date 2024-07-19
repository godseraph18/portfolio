function auth(event) {
    event.preventDefault();
  
    var text = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (text === 'eriyashiro' && password === 'xiomara03!') {
      alert("Login successful");
      sessionStorage.setItem('username', text); 
      window.location.assign('index2.html');
    } else {
      alert("Invalid username or password");
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }
  }
function showEyeIcon() {
    document.getElementById('togglePassword').style.display = 'block';
}
function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.getElementById('togglePassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}
    
