document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 2. Glitch Effect Trigger
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        const originalText = glitchTitle.textContent;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        glitchTitle.addEventListener('mouseenter', () => {
            let iteration = 0;
            const interval = setInterval(() => {
                glitchTitle.textContent = originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) return originalText[index];
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
                
                if (iteration >= originalText.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        });
    }

    // 3. Live Ping Simulation (Optimized)
    const pingContainer = document.getElementById('live-ping');
    let seq = 1;
    
    if (pingContainer) {
        const createPing = () => {
            const time = (Math.random() * 0.02 + 0.04).toFixed(3);
            const p = document.createElement('p');
            p.style.margin = "4px 0";
            p.innerHTML = `<span style="color: #27c93f;">64 bytes</span> from KSU_GATEWAY: icmp_seq=${seq++} ttl=64 time=${time} ms`;
            
            pingContainer.appendChild(p);
            
            if (pingContainer.children.length > 4) {
                pingContainer.removeChild(pingContainer.firstChild);
            }
        };

        createPing(); 
        setInterval(createPing, 4000);
    }

    // 4. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        // Apply saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeBtn.innerText = 'Light';
        }

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeBtn.innerText = isDark ? 'Light' : 'Theme';
        });
    }

    console.log("%c MK_SYSTEMS_v3.0: Online ", "background: #2563eb; color: #fff; font-weight: bold; padding: 2px 5px;");
});