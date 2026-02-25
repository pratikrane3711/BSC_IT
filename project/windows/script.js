const startMenu = document.getElementById("startMenu");
const appWindow = document.getElementById("appWindow");

function toggleStart() {
  startMenu.style.display =
    startMenu.style.display === "block" ? "none" : "block";
}

function openApp() {
  appWindow.style.display = "block";
}

function closeApp() {
  appWindow.style.display = "none";
}
