// ======================================
// 1) Модальное окно для галереи (home.html)
// ======================================
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalVideo = document.getElementById("modal-video");
  modal.style.display = "flex";

  if (src.toLowerCase().endsWith(".mp4")) {
    modalImg.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = src;
  } else {
    modalImg.style.display = "block";
    modalVideo.style.display = "none";
    modalImg.src = src;
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalVideo = document.getElementById("modal-video");
  modal.style.display = "none";
  modalImg.src = "";
  modalVideo.src = "";
}

// ======================================
// 2) Логика Login PIN-панели (index.html)
// ======================================
const VALID_CODES = { 8008: true, 2323: true, 6699: true };
const PIN_LENGTH = 4;
const MAX_ATTEMPTS = 5;

let currentPin = "";
let attemptsRemain = MAX_ATTEMPTS;

const pinDots = document.querySelectorAll(".pin-dot");
const keys = document.querySelectorAll(".key");

function initPinPanel() {
  // Если на странице нет PIN-панели — сразу выходим
  if (!keys.length) return;

  keys.forEach((key) => {
    key.addEventListener("click", () =>
      handleKey(key.getAttribute("data-key")),
    );
  });
}

function handleKey(k) {
  if (k === "delete") {
    currentPin = currentPin.slice(0, -1);
  } else if (k === "unlock") {
    tryUnlock();
    return;
  } else if (currentPin.length < PIN_LENGTH) {
    currentPin += k;
  }
  updateDots();
  if (currentPin.length === PIN_LENGTH) {
    setTimeout(tryUnlock, 200);
  }
}

function updateDots() {
  pinDots.forEach((dot, i) => {
    dot.classList.toggle("active", i < currentPin.length);
  });
}

function tryUnlock() {
  if (VALID_CODES[currentPin]) {
    // Правильный PIN → сохраняем и уходим на home.html
    localStorage.setItem("password", currentPin);
    window.location.href = "home.html";
  } else {
    attemptsRemain--;
    if (attemptsRemain > 0) {
      alert(`Неверный PIN — осталось ${attemptsRemain} попыток`);
    } else {
      alert("Система заблокирована — попытки сброшены");
      attemptsRemain = MAX_ATTEMPTS;
    }
    currentPin = "";
    updateDots();
  }
}

// Запускаем инициализацию PIN-панели после загрузки DOM
window.addEventListener("DOMContentLoaded", initPinPanel);

