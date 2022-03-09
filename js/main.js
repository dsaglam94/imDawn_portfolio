const checkbox = document.getElementById('checkbox');
const navLinks = document.querySelectorAll('.nav__link');
const socialLinks = document.querySelectorAll('.social__link');


// Hamburger menu toggle 
const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.nav__items');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navItems.classList.toggle('open')
})


// Change the works page 
// Shows & hides second row 
let worksEl = document.querySelector('.works__title--title');

worksEl.addEventListener('click', () => {
    document.querySelector('.works__items').classList.toggle('hidden');
    document.querySelector('.works__items--secondary').classList.toggle('hidden');
});

// Hides burger menu when navlinks clicked

Array.from(navLinks).forEach(element => element.addEventListener('click', () => {
    navItems.classList.toggle('open');
    menuToggle.classList.toggle('active');
}))



// Theme changer 
checkbox.addEventListener('change', () => {

    // change the theme of the website
    document.querySelector('.home').classList.toggle('dark');
    document.querySelector('.about').classList.toggle('dark__about');
    document.querySelector('.works').classList.toggle('dark__works');
    document.querySelector('.contact').classList.toggle('dark__contact');
    document.querySelector('.contact__items--title').classList.toggle('dark__contact--title');
    document.querySelector('.works__title--title').classList.toggle('dark__works--title');
    Array.from(navLinks).forEach(element => element.classList.toggle('dark--nav'));
    Array.from(socialLinks).forEach(element => element.classList.toggle('dark--social'));
    document.querySelector('.header').classList.toggle('dark__header');
    document.querySelector('.header__logo').classList.toggle('dark');
    document.querySelector('.ball').classList.toggle('dark--ball')
});