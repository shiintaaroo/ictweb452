{const button = document.getElementById('theme-toggle');
    /* When reding page */
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }
    /* When Click */
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            button.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            button.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
}