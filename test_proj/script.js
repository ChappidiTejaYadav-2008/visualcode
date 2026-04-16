const users = {
  alice: "password123",
  bob: "welcome2026",
};

const loginForm = document.getElementById("login-form");
const loginCard = document.getElementById("login-card");
const welcomeCard = document.getElementById("welcome-card");
const welcomeText = document.getElementById("welcome-text");
const message = document.getElementById("message");
const logoutButton = document.getElementById("logout-button");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    showMessage("Please enter both username and password.");
    return;
  }

  if (users[username] === password) {
    showWelcome(username);
  } else {
    showMessage("Invalid login credentials. Try again.");
  }
});

logoutButton.addEventListener("click", () => {
  loginCard.classList.remove("hidden");
  welcomeCard.classList.add("hidden");
  loginForm.reset();
  showMessage("");
});

function showWelcome(username) {
  welcomeText.textContent = `Hello, ${username}! You are now logged in.`;
  message.textContent = "";
  loginCard.classList.add("hidden");
  welcomeCard.classList.remove("hidden");
}

function showMessage(text) {
  message.textContent = text;
}
