// Мапа паролей -> набор ссылок + путь к WeChat QR
const linkSet = {
  8008: {
    facebook: "https://www.facebook.com/profile.php?id=61575296676118",
    instagram:
      "https://www.instagram.com/escort_revolution?igsh=MXZldzRvdGxwaWt6aw%3D%3D&utm_source=qr",
    x: "https://x.com/escortrevo80400?s=21",
    telegram: "https://t.me/escort_revolution",
    whatsapp: "https://wa.me/message/A6ZDSRGSOAP7N1",
    // Вместо прямой ссылки wechat — делаем "#", чтобы не было перехода:
    wechat: "#",
    // Путь к QR-файлу
    wechatQR: "wechat/8008.JPG",
  },
  2323: {
    facebook: "#", // нет в задаче
    instagram:
      "https://www.instagram.com/muse_shanghai?igsh=MW1yczRkcnh5cmppZQ%3D%3D&utm_source=qr",
    x: "https://x.com/shanghai_muse?s=11",
    telegram: "https://t.me/Miishka_ch",
    whatsapp: "https://wa.me/message/G52Q5VJQCL2AH1",
    wechat: "#",
    wechatQR: "wechat/2323.JPG",
  },
  // Пароль 6699
  6699: {
    facebook: "#",
    instagram:
      "https://www.instagram.com/elizavetta0307?igsh=MWpvbG9tbzl1Z2lzMA==",
    x: "https://x.com/elizave10729378?s=11&t=EOmjCE0aJiDVKkSu9ZA-Rg",
    telegram: "https://t.me/stellar0000",
    whatsapp: "http://Wa.me/8613611786043",
    wechat: "#",
    wechatQR: "wechat/6699.JPG",
  },
};

// Функция, которая считывает пароль из localStorage и меняет ссылки (если пароль найден).
(function applyLinks() {
  const pw = localStorage.getItem("password");

  if (pw && linkSet[pw]) {
    const set = linkSet[pw];

    // Facebook
    const fbEl = document.getElementById("facebook");
    if (fbEl) fbEl.href = set.facebook || "#";

    // Instagram
    const instaEl = document.getElementById("instagram");
    if (instaEl) instaEl.href = set.instagram || "#";

    // X
    const xEl = document.getElementById("x");
    if (xEl) xEl.href = set.x || "#";

    // Telegram
    const telEl = document.getElementById("telegram");
    if (telEl) telEl.href = set.telegram || "#";

    // WeChat
    const wcEl = document.getElementById("wechat");
    if (wcEl) {
      // Вместо перехода по ссылке — открываем модальное окно с QR
      wcEl.href = "#";
      wcEl.onclick = (e) => {
        e.preventDefault();
        openModal(set.wechatQR);
      };
    }

    // WhatsApp
    const waEl = document.getElementById("whatsapp");
    if (waEl) waEl.href = set.whatsapp || "#";
  }
})();
