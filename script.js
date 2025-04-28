function openModal(src) {
    // Получаем модальное окно и элементы для изображения/видео
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalVideo = document.getElementById("modal-video");

    // Открываем модальное окно
    modal.style.display = "flex";

    // Устанавливаем источник изображения/видео
    if (src.endsWith(".MP4")) {
        modalImg.style.display = "none"; // Скрываем изображение
        modalVideo.style.display = "block"; // Показываем видео
        modalVideo.src = src;
    } else {
        modalImg.style.display = "block"; // Показываем изображение
        modalVideo.style.display = "none"; // Скрываем видео
        modalImg.src = src;
    }
}

function closeModal() {
    // Закрываем модальное окно и очищаем источник видео
    var modal = document.getElementById("modal");
    var modalVideo = document.getElementById("modal-video");
    modal.style.display = "none";
    modalVideo.src = ""; // Очищаем видео
}
