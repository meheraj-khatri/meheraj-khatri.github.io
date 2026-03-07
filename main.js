document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 2. Theme Toggle with LocalStorage & Icon Support
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        const updateButtonText = (isDark) => {
            themeBtn.innerHTML = isDark ? '<span>☀️ Light</span>' : '<span>🌙 Dark</span>';
        };

        // Check for saved preference
        const isDarkMode = localStorage.getItem('theme') === 'dark';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        updateButtonText(isDarkMode);

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isNowDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
            updateButtonText(isNowDark);
        });
    }

    // 3. Live Ping Simulation (Contact Page Only)
    const pingContainer = document.getElementById('live-ping');
    if (pingContainer) {
        let seq = 1;
        const createPing = () => {
            const time = (Math.random() * 0.02 + 0.04).toFixed(3);
            const p = document.createElement('p');
            p.style.margin = "4px 0";
            p.style.fontSize = "0.85rem";
            p.style.color = "var(--text-muted)";
            p.innerHTML = `<span style="color:var(--accent)">></span> 64 bytes from KSU_GATEWAY: icmp_seq=${seq++} time=${time} ms`;
            
            pingContainer.prepend(p); // Newest pings at top
            
            if (pingContainer.children.length > 5) {
                pingContainer.lastChild.remove();
            }
        };

        createPing(); 
        setInterval(createPing, 4000);
    }

    console.log("%c MK_SYSTEMS_v3.0: Online ", "background: #2563eb; color: #fff; font-weight: bold; padding: 2px 5px;");
});