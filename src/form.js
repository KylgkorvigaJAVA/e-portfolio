document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    showLoading();

    emailjs.sendForm('service_zf1as5l', 'template_83eam1n', this)
        .then(() => {
            hideLoading();
            showMessage('Message sent successfully!');
            this.reset();
        }, () => {
            hideLoading();
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