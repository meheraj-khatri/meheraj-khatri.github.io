document.addEventListener('DOMContentLoaded', () => {
    // Console Initialization Sequence
    console.log("%c MK_SYSTEMS // INITIALIZED", "color: #6366f1; font-weight: bold; font-size: 14px;");
    console.log("%c [STATUS] All modules active. Current User: Recruiters", "color: #94a3b8; font-size: 11px;");

    // Dynamic Navigation Highlighting
    const currentLocation = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        if(item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });

    // Smooth scroll for Contact anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Card Hover Reveal Logic (Subtle glow follows mouse)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});