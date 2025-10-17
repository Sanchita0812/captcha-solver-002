function generateCaptcha() {
    let captcha = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

const captchaTextElement = document.getElementById('captchaText');
const captchaInputElement = document.getElementById('captchaInput');
const captchaButtonElement = document.getElementById('captchaButton');
const captchaResultElement = document.getElementById('captchaResult');

let generatedCaptcha = generateCaptcha();
captchaTextElement.innerText = generatedCaptcha;

captchaButtonElement.addEventListener('click', () => {
    if (captchaInputElement.value === generatedCaptcha) {
        captchaResultElement.innerText = 'Captcha Matched!';
        captchaResultElement.style.color = 'green';
        generatedCaptcha = generateCaptcha(); // Generate new captcha
        captchaTextElement.innerText = generatedCaptcha;
        captchaInputElement.value = '';
    } else {
        captchaResultElement.innerText = 'Captcha Not Matched!';
        captchaResultElement.style.color = 'red';
        captchaInputElement.value = '';
    }
});