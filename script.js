// Registration form handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simulated registration logic
    alert(`Registered successfully as ${name}`);
    // Redirect to login
    window.location.href = "login.html";
  });
}

// Login form handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    // Simulated login logic
    if (email && password) {
      alert(`Logged in as ${email}`);
      // Redirect to index or dashboard
      window.location.href = "index.html";
    } else {
      alert("Please enter email and password.");
    }
  });
}
