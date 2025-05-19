function openModal(src) {
    // Получаем модальное окно и элементы для изображения/видео
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalVideo = document.getElementById("modal-video");

    // Показываем модальное окно (flex)
    modal.style.display = "flex";

    // Проверяем, это видео или картинка (по расширению .mp4)
    if (src.toLowerCase().endsWith(".mp4")) {
        // Скрываем img, показываем video
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = src;
    } else {
        // Скрываем video, показываем img
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = src;
    }
}

function closeModal() {
    // Закрываем модальное окно, сбрасываем источники
    var modal = document.getElementById("modal");
    var modalVideo = document.getElementById("modal-video");
    var modalImg = document.getElementById("modal-img");

    modal.style.display = "none";
    modalVideo.src = "";
    modalImg.src = "";
}
