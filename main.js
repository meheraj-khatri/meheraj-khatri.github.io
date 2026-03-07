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

    // 2. Live Ping Simulation for Contact Page
    const pingContainer = document.getElementById('live-ping');
    let seq = 1;
    
    if (pingContainer) {
        const createPing = () => {
            const time = (Math.random() * 0.02 + 0.04).toFixed(3);
            const p = document.createElement('p');
            p.style.margin = "4px 0";
            p.style.fontSize = "0.85rem";
            p.style.color = "#94a3b8";
            p.textContent = `64 bytes from KSU_GATEWAY: icmp_seq=${seq++} ttl=64 time=${time} ms`;
            pingContainer.appendChild(p);
            
            if (pingContainer.children.length > 4) {
                pingContainer.removeChild(pingContainer.firstChild);
            }
        };

        createPing(); 
        setInterval(createPing, 4000);
    }

    // 3. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeBtn.innerText = 'Light Mode';
        }

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeBtn.innerText = isDark ? 'Light Mode' : 'Dark Mode';
        });
    }

    console.log("%c MK_SYSTEMS_v3.0: Online ", "background: #2563eb; color: #fff; font-weight: bold; border-radius: 4px; padding: 2px 5px;");
});