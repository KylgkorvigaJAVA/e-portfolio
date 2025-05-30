document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_zf1as5l', 'template_83eam1n', this)
        .then(() => {
            showMessage('Message sent successfully!');
            this.reset();
        }, (error) => {
            showMessage('Failed to send message!');
        });
});

function showMessage(text) {
    const btn = document.querySelector('.btn-send');
    const msg = document.createElement('span');
    msg.className = 'form-tooltip';
    msg.textContent = text;
    btn.appendChild(msg);

    setTimeout(() => msg.classList.add('show'), 10);
    setTimeout(() => btn.removeChild(msg), 2000);
}