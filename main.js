function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const isActive = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
}

function initTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if(btn) btn.innerText = '🌙';
    }

    if(btn) {
        btn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            btn.innerText = isLight ? '🌙' : '☀️';
            localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        });
    }
}

document.addEventListener('DOMContentLoaded', initTheme);