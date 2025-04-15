// typewriter effect for hero section

const text = "Hello, I'm Kaspar | A software student looking for opportunities to grow and learn.";
const typingElement = document.querySelector(".typing-text");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

// Back to top button
window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show an alert
    alert(`Thanks for your message, ${name}! We'll get back to you soon.`);

    // Clear form
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Activate Bootstrap scrollspy
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 100
});