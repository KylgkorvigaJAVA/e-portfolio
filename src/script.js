document.addEventListener('DOMContentLoaded', function () {

    // === typewriter effect ===

    const textH1 = "Hello, I'm Kaspar";
    const textP = "A software development student seeking for opportunities";

    const typingElementH1 = document.querySelector(".typing-text-h1");
    const typingElementP = document.querySelector(".typing-text-p");
    const cursor = document.querySelector(".cursor");

    let i = 0;

    function typeWriterH1() {
        if (i < textH1.length) {
            typingElementH1.innerHTML += textH1.charAt(i++);
            setTimeout(typeWriterH1, 40);
        } else {
            i = 0;
            setTimeout(typeWriterP, 400);
        }
    }

    function typeWriterP() {
        if (i < textP.length) {
            typingElementP.innerHTML += textP.charAt(i++);
            setTimeout(typeWriterP, 40);
        } else {
            cursor.style.display = "inline-block";
        }
    }

    typeWriterH1();

    // === card flip ===

    document.querySelectorAll('.card').forEach(card => {
        let isFlipped = false;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-back-btn')) {
                card.classList.remove('flipped');
                isFlipped = false;
                return;
            }
            if (e.target.closest('a') && isFlipped) return;

            if (!isFlipped) {
                card.classList.add('flipped');
                isFlipped = true;
            }
        });
    });


    // === back to top btn ===

    const backToTop = document.getElementById('back-to-top');
    const snapContainer = document.querySelector('.snap-container');

    function updateBackToTopVisibility() {
        if (snapContainer.scrollTop > window.innerHeight * 1.5) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    backToTop.addEventListener('click', () => {
        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        backToTop.classList.remove('visible');
    });

    snapContainer.addEventListener('scroll', updateBackToTopVisibility);
    updateBackToTopVisibility();


    // === scroll hint ===

    const scrollHint = document.querySelector('.scroll-hint');

    function updateScrollHint() {
        scrollHint.style.display = snapContainer.scrollTop > 0 ? 'none' : 'block';
    }

    snapContainer.addEventListener('scroll', updateScrollHint);
    updateScrollHint();


    // === sidenav on/off and active states ===
    const navBtn = document.getElementById('navBtn');
    const sideNav = document.getElementById('sideNav');
    const navLinks = document.querySelectorAll('#sideNav .nav-link');
    const desktopLinks = document.querySelectorAll('.navbar-nav .nav-link');

    sideNav.addEventListener('show.bs.offcanvas', () => navBtn.classList.add('is-active'));
    sideNav.addEventListener('hide.bs.offcanvas', () => navBtn.classList.remove('is-active'));

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(sideNav);
            if (bsOffcanvas) bsOffcanvas.hide();
        });
    });

    function syncNavLinks() {
        desktopLinks.forEach((desktopLink, index) => {
            if (desktopLink.classList.contains('active')) {
                navLinks[index].classList.add('active');
            } else {
                navLinks[index].classList.remove('active');
            }
        });
    }

    const observer = new MutationObserver(syncNavLinks);
    desktopLinks.forEach(link => {
        observer.observe(link, { attributes: true, attributeFilter: ['class'] });
    });

    syncNavLinks();

});
