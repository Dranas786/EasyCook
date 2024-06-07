function toggleForm(form) {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  var loginToggle = document.getElementById("login-toggle");
  var signupToggle = document.getElementById("signup-toggle");

  if (form === "login") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginToggle.classList.add("active");
    signupToggle.classList.remove("active");
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    loginToggle.classList.remove("active");
    signupToggle.classList.add("active");
  }
}

var users = {
  test1: { password: "Asdf1234!", fullName: "Test User 1" },
  test2: { password: "Qwer0987@", fullName: "Test User 2" },
};

function handleEnter(event, action) {
  if (event.key === "Enter") {
    action(event);
  }
}

function login(event) {
  event.preventDefault();

  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  var usernameError = document.getElementById("username-error");
  var passwordError = document.getElementById("password-error");
  usernameError.style.display = "none";
  passwordError.style.display = "none";

  if (!username) {
    usernameError.textContent = "Please enter username";
    usernameError.style.display = "block";
    return;
  }
  if (!password) {
    passwordError.textContent = "Please enter password";
    passwordError.style.display = "block";
    return;
  }

  if (users.hasOwnProperty(username)) {
    if (users[username].password === password) {
      window.location.href = "index_logged_in.html";
    } else {
      passwordError.textContent = "Password is invalid";
      passwordError.style.display = "block";
    }
  } else {
    usernameError.textContent = "Username is invalid";
    usernameError.style.display = "block";
  }
}

function signup(event) {
  event.preventDefault();
  console.log("Signup function called");

  // Retrieve values from the form
  var fullname = document.getElementById("signup-fullname").value.trim();
  var username = document.getElementById("signup-username").value.trim();
  var password = document.getElementById("signup-password").value.trim();
  var reenterPassword = document
    .getElementById("signup-reenter-password")
    .value.trim();

  // Get error elements
  var fullnameError = document.getElementById("signup-fullname-error");
  var usernameError = document.getElementById("signup-username-error");
  var passwordError = document.getElementById("signup-password-error");
  var reenterPasswordError = document.getElementById(
    "signup-reenter-password-error"
  );

  // Clear any previous errors
  fullnameError.style.display = "none";
  usernameError.style.display = "none";
  passwordError.style.display = "none";
  reenterPasswordError.style.display = "none";

  // Validate Full Name
  if (!fullname) {
    fullnameError.textContent = "Please enter your full name";
    fullnameError.style.display = "block";
    return;
  }

  // Check if username is empty
  if (!username) {
    usernameError.textContent = "Please enter username";
    usernameError.style.display = "block";
    return;
  }

  // Check if the password is empty
  var isPasswordEmpty = !password || !reenterPassword;
  if (isPasswordEmpty) {
    passwordError.textContent = "Please enter password";
    passwordError.style.display = "block";
    return;
  }

  // Check password complexity requirements
  var passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character (@$!%*?&)";
    passwordError.style.display = "block";
    return;
  }

  // Check if passwords match
  if (password !== reenterPassword) {
    reenterPasswordError.textContent = "Passwords don't match";
    reenterPasswordError.style.display = "block";
    return;
  }

  // Check if the username is already taken
  if (users.hasOwnProperty(username)) {
    usernameError.textContent = "Username already taken";
    usernameError.style.display = "block";
    return;
  }

  // Store new user
  users[username] = { password: password, fullName: fullname };
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "sign_up_index.html";
  // Clear the form (or redirect the user, show a success message, etc.)
  document.getElementById("signup-fullname").value = "";
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-reenter-password").value = "";
}
