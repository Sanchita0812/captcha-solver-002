// main.js
function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

function displayCaptcha() {
  const captchaText = generateCaptcha();
  document.getElementById('captchaText').innerText = captchaText;
  document.getElementById('captchaText').dataset.captcha = captchaText;
}

function verifyCaptcha() {
  const userInput = document.getElementById('captchaInput').value;
  const correctCaptcha = document.getElementById('captchaText').dataset.captcha;
  const resultElement = document.getElementById('captchaResult');

  if (userInput === correctCaptcha) {
    resultElement.innerText = 'Captcha correct!';
    resultElement.style.color = 'green';
    displayCaptcha(); // Generate a new captcha after successful verification
  } else {
    resultElement.innerText = 'Captcha incorrect. Please try again.';
    resultElement.style.color = 'red';
    displayCaptcha(); // Generate a new captcha after failed verification
  }
  document.getElementById('captchaInput').value = ''; // Clear the input
}

document.addEventListener('DOMContentLoaded', () => {
  displayCaptcha();

  document.getElementById('captchaButton').addEventListener('click', verifyCaptcha);
});