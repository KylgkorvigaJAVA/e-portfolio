let captchaAnswer;

function generateCaptcha() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    captchaAnswer = a + b;
    document.getElementById('captcha-question').textContent = `${a} + ${b}`;
}

generateCaptcha();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = this;

    const userAnswer = parseInt(form.querySelector('#captcha').value.trim(), 10);
    if (userAnswer !== captchaAnswer) {
        showMessage('Incorrect CAPTCHA answer.');
        generateCaptcha();
        return;
    }

    const honeypot = form.querySelector('input[name="_honey"]');
    if (honeypot && honeypot.value !== "") {
        showMessage('Bot detected. Submission blocked.');
        return;
    }

    showLoading();

    emailjs.sendForm('service_zf1as5l', 'template_83eam1n', this)
        .then(() => {
            hideLoading();
            showMessage('Message sent successfully!');
            this.reset();
            generateCaptcha();
        }, () => {
            hideLoading();
            showMessage('Failed to send message!');
        });
});

function showLoading() {
    const btn = document.querySelector('.btn-send');
    const spinner = document.createElement('span');
    spinner.className = 'form-tooltip loading show';
    spinner.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    btn.appendChild(spinner);
}

function hideLoading() {
    const spinner = document.querySelector('.loading');
    if (spinner) spinner.remove();
}

function showMessage(text) {
    const btn = document.querySelector('.btn-send');
    const msg = document.createElement('span');
    msg.className = 'form-tooltip';
    msg.textContent = text;
    btn.appendChild(msg);

    setTimeout(() => msg.classList.add('show'), 10);
    setTimeout(() => btn.removeChild(msg), 2000);
}