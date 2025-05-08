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

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});