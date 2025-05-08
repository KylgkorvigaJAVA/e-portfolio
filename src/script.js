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

    // card flip effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    //back to top logic
    const backToTop = document.getElementById('back-to-top');
    const snapContainer = document.querySelector('.snap-container');

    function updateBackToTopVisibility() {
        if (snapContainer.scrollTop > window.innerHeight * 1.5) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    updateBackToTopVisibility();

    snapContainer.addEventListener('scroll', updateBackToTopVisibility);

    backToTop.addEventListener('click', () => {
        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });

        backToTop.classList.remove('visible');
    });

    // scroll hint logic
    const scrollHint = document.querySelector('.scroll-hint');

    scrollHint.style.display = 'block';

    snapContainer.addEventListener('scroll', () => {
        if (snapContainer.scrollTop > 0) {
            scrollHint.style.display = 'none';
        } else {
            scrollHint.style.display = 'block';
        }
    });

    // sidenav + nav-icon logic
    const navBtn = document.getElementById('navBtn');
    const sideNav = document.getElementById('sideNav');
    const navLinks = document.querySelectorAll('#sideNav .nav-link');

    sideNav.addEventListener('show.bs.offcanvas', function () {
        navBtn.classList.add('is-active');
    });

    sideNav.addEventListener('hide.bs.offcanvas', function () {
        navBtn.classList.remove('is-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(sideNav);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }

            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function setActiveLink() {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const targetId = section.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');

                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    setActiveLink();

    window.addEventListener('scroll', setActiveLink);
});