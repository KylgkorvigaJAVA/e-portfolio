const skills = [
    { icon: 'src/img/skill_icons/html.webp' },
    { icon: 'src/img/skill_icons/css.webp' },
    { icon: 'src/img/skill_icons/javascript.webp' },
    { icon: '/api/placeholder/60/60' },
    { icon: '/api/placeholder/60/60' },
    { icon: '/api/placeholder/60/60' },
    { icon: '/api/placeholder/60/60' },
    { icon: '/api/placeholder/60/60' }
];

// Physics constants
const gravity = 0.4;
const friction = 0.99;
const bounce = 0.7;
const speedThreshold = 0.5;

// DOM elements
const container = document.getElementById('skills');
const grid = document.getElementById('skills-grid');

// Storage
const balls = [];

// Create skills
skills.forEach((skill, i) => {
    const el = document.createElement('div');
    el.className = 'skill';
    el.dataset.index = i;

    el.innerHTML = `
        <div class="skill-icon">
            <img src="${skill.icon}">
        </div>
    `;

    el.addEventListener('click', () => createBall(el, skill));
    grid.appendChild(el);
});

// Create ball when skill is clicked
function createBall(skillEl, skill) {
    const rect = skillEl.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Hide original skill
    skillEl.style.visibility = 'hidden';

    // Create ball
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.innerHTML = `<img src="${skill.icon}" alt="">`;

    // Remove background color
    ball.style.backgroundColor = 'transparent';

    // Size and position
    const size = 100;
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;

    const x = rect.left - containerRect.left + rect.width / 2 - size / 2;
    const y = rect.top - containerRect.top + rect.height / 2 - size / 2;

    // Add ball physics properties
    const ballObj = {
        el: ball,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 8,
        vy: -5,
        size: size,
        spinning: true,
        currentRotation: 0
    };

    balls.push(ballObj);
    container.appendChild(ball);

    // Start animation if not already running
    if (balls.length === 1) {
        animate();
    }
}

// Animation loop
function animate() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    function update() {
        for (let ball of balls) {
            // Apply physics
            ball.vy += gravity;
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Apply friction
            ball.vx *= friction;
            ball.vy *= friction;

            // Bounce off walls
            if (ball.x < 0) {
                ball.x = 0;
                ball.vx = -ball.vx * bounce;
            } else if (ball.x + ball.size > width) {
                ball.x = width - ball.size;
                ball.vx = -ball.vx * bounce;
            }

            // Bounce off floor
            if (ball.y + ball.size > height) {
                ball.y = height - ball.size;
                ball.vy = -ball.vy * bounce;
            }

            // Update position
            ball.el.style.left = `${ball.x}px`;
            ball.el.style.top = `${ball.y}px`;

            // Update rotation while spinning
            if (ball.spinning) {
                const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);

                // Check if the ball has almost stopped
                if (speed < speedThreshold && ball.y + ball.size >= height - 2) {
                    // Stop spinning gradually
                    ball.spinning = false;
                    ball.el.style.transform = `rotate(${ball.currentRotation}deg)`;
                    ball.el.style.transition = 'transform 0.5s ease-out';
                } else {
                    // Smooth, speed-proportional spinning
                    const baseSpeed = Math.min(speed * 10, 90);
                    ball.currentRotation = (ball.currentRotation + baseSpeed * 0.1) % 360;
                    ball.el.style.transform = `rotate(${ball.currentRotation}deg)`;
                    ball.el.style.transition = 'none';
                }
            }
        }

        if (balls.length > 0) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Note: Reset button functionality has been removed