// Simple Captcha Solver Logic

const captchaImage = document.getElementById('captcha-image');
const captchaInput = document.getElementById('captcha-input');
const verifyButton = document.getElementById('verify-button');
const verificationResult = document.getElementById('verification-result');

let generatedCaptcha = '';

function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  generatedCaptcha = captcha;
  captchaImage.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='50'%3E%3Ctext x='10' y='35' style='font-size:30px'%3E${captcha}%3C/text%3E%3C/svg%3E`;
}

verifyButton.addEventListener('click', () => {
  if (captchaInput.value === generatedCaptcha) {
    verificationResult.textContent = 'Captcha Verified!';
    verificationResult.style.color = 'green';
    generateCaptcha(); // Generate a new captcha after successful verification
    captchaInput.value = ''; // Clear the input field
  } else {
    verificationResult.textContent = 'Captcha Verification Failed!';
    verificationResult.style.color = 'red';
    generateCaptcha(); // Generate a new captcha after failed verification
    captchaInput.value = ''; // Clear the input field
  }
});

// Generate the initial captcha when the page loads
generateCaptcha();