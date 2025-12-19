// Function to toggle the mobile navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Function to initialize the Theme Toggle
function initTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');
    
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if(btn) btn.innerText = '🌙';
    } else {
        if(btn) btn.innerText = '☀️';
    }

    if (btn) {
        btn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            
            // Update button icon and local storage
            btn.innerText = isLight ? '🌙' : '☀️';
            localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        });
    }
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Run theme check on load
document.addEventListener('DOMContentLoaded', initTheme);