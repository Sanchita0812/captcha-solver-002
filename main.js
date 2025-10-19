function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function displayCaptcha() {
    const captchaTextElement = document.getElementById('captchaText');
    captchaText = generateCaptcha();
    captchaTextElement.textContent = captchaText;
}

let captchaText = '';
document.addEventListener('DOMContentLoaded', () => {
    displayCaptcha();

    const captchaButton = document.getElementById('captchaButton');
    const captchaInput = document.getElementById('captchaInput');
    const captchaResult = document.getElementById('captchaResult');

    captchaButton.addEventListener('click', () => {
        if (captchaInput.value === captchaText) {
            captchaResult.textContent = 'Captcha Verified!';
            captchaResult.style.color = 'green';
            displayCaptcha();
            captchaInput.value = '';
        } else {
            captchaResult.textContent = 'Captcha Incorrect!';
            captchaResult.style.color = 'red';
        }
    });
});