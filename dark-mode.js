const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle img');

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    });
};

export default darkMode;
