
document.getElementById('file-upload').addEventListener('change', function () {
  const fileDisplay = document.getElementById('file-name-display');
  if (this.files.length > 0) {
    fileDisplay.textContent = `📎 Прикреплено: ${this.files[0].name}`;
  } else {
    fileDisplay.textContent = '';
  }
});

document.getElementById('adForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formContainer = document.getElementById('form-container');
  const thankYouContainer = document.getElementById('thank-you-container');

  formContainer.classList.add('hidden');
  thankYouContainer.classList.remove('hidden');
});
