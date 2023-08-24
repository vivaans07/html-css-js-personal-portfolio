const darkMode = () => {

    const themeToggleBtns = document.querySelector('#theme-toggle');

    themeToggleBtns.foreach( btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    });
}; 

export default darkMode;