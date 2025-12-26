// Function to toggle the mobile navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Function to inject social badges (LinkedIn & GitHub)
function renderBadges() {
    const mainContainer = document.querySelector('main.container');
    if (!mainContainer) return;

    const badgeHTML = `
        <section class="social-badge-container">
            <div class="badge-base LI-profile-badge" 
                 data-locale="en_US" 
                 data-size="large" 
                 data-theme="dark" 
                 data-type="VERTICAL" 
                 data-vanity="meherajkhatri" 
                 data-version="v1">
            </div>

            <a href="https://github.com/meheraj-khatri" target="_blank" class="github-badge-card">
                <img src="https://github.com/meheraj-khatri.png" alt="GitHub Profile">
                <h3>Meheraj Khatri</h3>
                <p class="github-handle">@meheraj-khatri</p>
                <p style="font-size: 0.8rem; margin-top: 15px; color: var(--text-muted);">
                    View my Technical Arsenal & Open Source Projects
                </p>
            </a>
        </section>
    `;

    mainContainer.insertAdjacentHTML('beforeend', badgeHTML);

    // Load LinkedIn SDK script dynamically
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
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

// Run initializations on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderBadges();
});