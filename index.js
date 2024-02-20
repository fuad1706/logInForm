document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.querySelector(".email-input");
  const passwordInput = document.querySelector(".password-input");
  const loginButton = document.querySelector('button[type="submit"]');

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission for demonstration

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if username meets conditions (e.g., email format, phone number format, or minimum length for username)
    if (!isValidUsername(username)) {
      alert("Please enter a valid email, phone number, or username.");
      return;
    }

    // Check if password meets conditions (e.g., minimum length, contains capital letter and symbol)
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long and contain at least one capital letter and one symbol."
      );
      return;
    }

    // If both username and password meet conditions, proceed with login
    // Here, you can perform further actions like sending a request to a server for authentication
    console.log("Username:", username);
    console.log("Password:", password);

    // You can also uncomment the line below to allow form submission
    // event.target.closest('form').submit();
  });

  function isValidUsername(username) {
    // Check if the input matches email format
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
      return true;
    }
    // Check if the input matches phone number format (assuming 10-digit number)
    if (/^\d{10}$/.test(username)) {
      return true;
    }
    // Check if the input is at least 3 characters long (for username)
    if (username.length >= 3) {
      return true;
    }
    return false;
  }
});
