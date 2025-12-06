
document.getElementById("imageInput").addEventListener("change", function () {
  const fileName = this.files[0]?.name || "";
  document.getElementById("fileName").textContent = fileName ? `📎 Прикреплено: ${fileName}` : "";
});

document.getElementById("adForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formContainer").classList.add("hidden");
  document.getElementById("thankYouContainer").classList.remove("hidden");
});

function reloadPage() {
  location.reload();
}
