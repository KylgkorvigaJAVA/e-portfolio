document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_zf1as5l', 'template_83eam1n', this)
        .then(() => {
            showFormNotification('Message sent successfully!', 'success');
            this.reset();
        }, (error) => {
            showFormNotification('Failed to send message. Please try again.', 'error');
        });
});

function showFormNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `form-notification ${type}`;
    notification.textContent = message;

    // Position it near the form
    const sendButton = document.querySelector('.btn-send');
    sendButton.parentNode.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);

    // Hide and remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => sendButton.parentNode.removeChild(notification), 300);
    }, 3000);
}