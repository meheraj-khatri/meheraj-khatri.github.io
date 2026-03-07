document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const themeBtn = document.getElementById('theme-toggle');

    // 1. Mobile Menu with body-lock (prevents scrolling when menu is open)
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isOpen = navLinks.classList.contains('active');
            mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });
    }

    // 2. Theme Toggle with LocalStorage
    const updateThemeButton = (isDark) => {
        themeBtn.innerHTML = isDark ? 
            '<span>☀️ Light</span>' : 
            '<span>🌙 Dark</span>';
    };

    if (themeBtn) {
        // Initialize
        const isDark = localStorage.getItem('theme') === 'dark';
        if (isDark) {
            document.body.classList.add('dark-mode');
        }
        updateThemeButton(isDark);

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const currentDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', currentDark ? 'dark' : 'light');
            updateThemeButton(currentDark);
        });
    }

    // 3. Live Terminal Ping Simulation (For Contact Page)
    const pingContainer = document.getElementById('live-ping');
    if (pingContainer) {
        let seq = 1;
        const addPing = () => {
            const time = (Math.random() * 5 + 15).toFixed(1);
            const line = document.createElement('div');
            line.className = 'term-line';
            line.style.fontSize = '0.8rem';
            line.style.opacity = '0.7';
            line.innerHTML = `<span style="color:var(--accent)">[OK]</span> response from ksu.edu: seq=${seq++} time=${time}ms`;
            
            pingContainer.prepend(line);
            if (pingContainer.children.length > 5) pingContainer.lastChild.remove();
        };
        setInterval(addPing, 3000);
    }
});