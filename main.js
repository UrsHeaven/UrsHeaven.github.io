document.addEventListener('DOMContentLoaded', () => {
    console.log("...connection established...");

    const loader = document.getElementById('loader');
    const starsLayer = document.getElementById('stars-layer');

    // 1. Ghostly Particles
    function initParticles() {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 2;
            star.className = 'star-particle';
            Object.assign(star.style, {
                position: 'absolute',
                width: size + 'px',
                height: size + 'px',
                background: '#4A48C0',
                borderRadius: '50%',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5,
                boxShadow: `0 0 ${size * 3}px #4A48C0`
            });
            starsLayer.appendChild(star);
        }
    }

    // 2. Cryptic Observer
    const panels = document.querySelectorAll('.panel');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.reveal-text, .fade-in').forEach(el => {
                    el.classList.add('active');
                });
            }
        });
    }, { threshold: 0.2 });

    panels.forEach(p => observer.observe(p));

    // 3. Subtle Parallax
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;

        document.querySelectorAll('.parallax-item').forEach(item => {
            const speed = item.getAttribute('data-speed') || 1;
            item.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });

        const planet = document.querySelector('.floating-planet');
        if (planet) {
            planet.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        }
    });

    // 4. Loader Fade
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 1500);
        }, 1000);
    });

    initParticles();
});

// Dynamic Cryptic Scrambler (Optional/Subtle)
function scrambleText(element) {
    const original = element.innerText;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let iterations = 0;

    const interval = setInterval(() => {
        element.innerText = original.split("").map((char, index) => {
            if (index < iterations) return original[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");

        if (iterations >= original.length) clearInterval(interval);
        iterations += 1 / 3;
    }, 30);
}

// Scramble on hover for cryptic feel
document.querySelectorAll('.cryptic').forEach(el => {
    el.addEventListener('mouseenter', () => scrambleText(el));
});
