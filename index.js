var darkModeToggle = document.getElementById("dark-light");
var container = document.querySelector("body");

function darkMode() {
  container.classList.toggle("dark");
}

darkModeToggle.addEventListener("click", darkMode);
