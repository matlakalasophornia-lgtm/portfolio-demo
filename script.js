console.log("Portfolio loaded successfully");

document.getElementById("downloadBtn").addEventListener("click", function () {
  console.log("CV download started");});

   function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
  }

  function showLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  }

  function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
      alert('Login successful! (Demo only)');
    } else {
      alert('Please fill in all fields');
    }
  }

  function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (name && email && password) {
      alert('Registration successful! (Demo only)');
      showLogin();
    } else {
      alert('Please fill in all fields');
    }
  }