document.addEventListener('DOMContentLoaded', function () {

    // typewriter effect
    const textH1 = "Hello, I'm Kaspar";
    const textP = "A software development student looking for opportunities";

    const typingElementH1 = document.querySelector(".typing-text-h1");
    const typingElementP = document.querySelector(".typing-text-p");

    const cursor = document.querySelector(".cursor");

    let i = 0;

    function typeWriterH1() {
        if (i < textH1.length) {
            typingElementH1.innerHTML += textH1.charAt(i);
            i++;
            setTimeout(typeWriterH1, 80);
        } else {
            setTimeout(() => {
                i = 0;
                typeWriterP();
            }, 400);
        }
    }

    function typeWriterP() {
        if (i < textP.length) {
            typingElementP.innerHTML += textP.charAt(i);
            i++;
            setTimeout(typeWriterP, 70);
        } else {
            cursor.style.display = "inline-block";
        }
    }

    typeWriterH1();

    // update nav items on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});