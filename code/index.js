document.querySelector(".login-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password!");
    return;
  }

  // Dummy login check (you can connect to real backend later)
  if (username === "admin" && password === "1234") {
    alert("Login Successful!");
  } else {
    alert("Invalid credentials. Try again!");
  }
});
