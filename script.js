function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('open');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerIcon.classList.toggle('open');
}

function darkMode() {
    document.body.classList.toggle('dark-mode');
}