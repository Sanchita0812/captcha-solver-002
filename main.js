function generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

function drawCaptcha(captcha) {
    const svg = document.getElementById('captcha-svg');
    svg.innerHTML = ''; // Clear previous captcha

    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.setAttribute('x', '10');
    textElement.setAttribute('y', '60');
    textElement.setAttribute('font-size', '40');
    textElement.textContent = captcha;
    svg.appendChild(textElement);

    // Add some noise
    for (let i = 0; i < 5; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', Math.random() * 200);
      line.setAttribute('y1', Math.random() * 100);
      line.setAttribute('x2', Math.random() * 200);
      line.setAttribute('y2', Math.random() * 100);
      line.setAttribute('stroke', 'gray');
      svg.appendChild(line);
    }
}

let captchaText = generateCaptcha();
drawCaptcha(captchaText);

document.getElementById('refresh-button').addEventListener('click', () => {
    captchaText = generateCaptcha();
    drawCaptcha(captchaText);
});

document.getElementById('submit-button').addEventListener('click', () => {
    const input = document.getElementById('captcha-input').value;
    const result = document.getElementById('result');
    if (input === captchaText) {
        result.textContent = 'Captcha Matched!';
        result.style.color = 'green';
        captchaText = generateCaptcha();
        drawCaptcha(captchaText);
        document.getElementById('captcha-input').value = '';
    } else {
        result.textContent = 'Captcha Not Matched!';
        result.style.color = 'red';
    }
});