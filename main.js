// Intersection Observer for the "reveal" effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize scroll reveal on all items
document.querySelectorAll('.item, section').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
});

// CSS helper for the observer
const style = document.createElement('style');
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const mode = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
});