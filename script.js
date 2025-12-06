document.getElementById("imageInput").addEventListener("change", function () {
  const fileName = this.files[0]?.name || "";
  document.getElementById("fileName").textContent = fileName
    ? `📎 Прикреплено: ${fileName}`
    : "";
});

document.getElementById("adForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = document.getElementById("adForm");
  const formData = new FormData(form);

  // --- отправка данных в n8n webhook ---
  fetch("https://broakk72.app.n8n.cloud/webhook/f83011a2-d083-47dc-83dd-4119707f015e", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("Ответ от n8n:", response);
      // если n8n возвращает JSON, можно распарсить:
      // return response.json();
    })
    .catch((error) => {
      console.error("Ошибка отправки в n8n:", error);
    });

  // --- показываем экран 'Спасибо' ---
  document.getElementById("formContainer").classList.add("hidden");
  document.getElementById("thankYouContainer").classList.remove("hidden");
});

document.getElementById("adForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch("https://broakk72.app.n8n.cloud/webhook/f83011a2-d083-47dc-83dd-4119707f015e", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  // Спрячь форму, покажи блок результата
  document.getElementById("formContainer").classList.add("hidden");
  document.getElementById("thankYouContainer").classList.remove("hidden");

  // Покажи изображение
  const imgEl = document.getElementById("resultImage");
  imgEl.src = data.image_url;
  imgEl.classList.remove("hidden");
});


// Кнопка "Заказать еще один креатив"
function reloadPage() {
  location.reload();
}
