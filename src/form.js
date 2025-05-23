document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_zf1as5l', 'template_83eam1n', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset(); // clear form
        }, (error) => {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
});

(function () {
    emailjs.init("0sx78NiymcpZL-Ajw");
})();