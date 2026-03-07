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

    // 2. Theme Toggle with System Typography
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        const updateThemeLabel = (isDark) => {
            themeBtn.textContent = isDark ? 'MODE: LIGHT' : 'MODE: DARK';
            themeBtn.style.fontFamily = "'Fira Code', monospace";
        };

        const isDark = localStorage.getItem('theme') === 'dark';
        if (isDark) document.body.classList.add('dark-mode');
        updateThemeLabel(isDark);

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const nowDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', nowDark ? 'dark' : 'light');
            updateThemeLabel(nowDark);
        });
    }

    // 3. Live Ping Simulation for Contact Page
    const pingContainer = document.getElementById('live-ping');
    if (pingContainer) {
        let seq = 1;
        const addPing = () => {
            const time = (Math.random() * 0.02 + 0.04).toFixed(3);
            const p = document.createElement('p');
            p.style.margin = "4px 0";
            p.style.fontSize = "0.8rem";
            p.style.color = "var(--text-muted)";
            p.innerHTML = `<span style="color:var(--accent)">[SYS]</span> PING 127.0.0.1: seq=${seq++} time=${time}ms`;
            
            pingContainer.prepend(p);
            if (pingContainer.children.length > 5) pingContainer.lastChild.remove();
        };
        setInterval(addPing, 4000);
    }

    console.log("%c MK_SYSTEMS_v3.1: Unified_Box_Layout_Active ", "background: #2563eb; color: #fff; font-weight: bold; border-radius: 0px; padding: 2px 5px;");
});