
document.getElementById("imageInput").addEventListener("change", function () {
  const fileName = this.files[0]?.name || "";
  document.getElementById("fileName").textContent = fileName ? `📎 Прикреплено: ${fileName}` : "";
});

document.getElementById("adForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const response = await fetch("https://broakk72.app.n8n.cloud/webhook/f83011a2-d083-47dc-83dd-4119707f015e", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  document.getElementById("formContainer").classList.add("hidden");
  document.getElementById("thankYouContainer").classList.remove("hidden");

  const imgEl = document.getElementById("resultImage");
  imgEl.src = data.image_url;
  imgEl.style.display = "block";
});

function reloadPage() {
  location.reload();
}
