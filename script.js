function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('open');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerIcon.classList.toggle('open');
}

var moonIcon = document.getElementById("moonIcon");

function toggleTheme() {
    console.log("Toggle theme function called");
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        moonIcon.src = "./assets/sun.png";
    } else {
        moonIcon.src = "./assets/moon.png";
    }
}
