const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const mode = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
});