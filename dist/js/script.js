// Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


// Navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fix_nav = header.offsetTop;

    if (window.pageYOffset > fix_nav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}