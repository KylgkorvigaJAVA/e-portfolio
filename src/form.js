document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_zf1as5l', 'template_83eam1n', this)
        .then(() => {
            showFormNotification('Message sent successfully!', 'success');
            this.reset();
        }, (error) => {
            showFormNotification('Failed to send message. Please try again.', 'error');
            console.error('EmailJS error:', error);
        });
});

function showFormNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `form-notification ${type}`;
    notification.textContent = message;

    const form = document.getElementById('contact-form');
    form.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => form.removeChild(notification), 300);
    }, 3000);
}