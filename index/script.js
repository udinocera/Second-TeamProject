const toggleNavButton = document.getElementById('toggle-nav');
const navElements = document.querySelector('.nav-toggle');

const extraNavButton = document.getElementById('nav-extra-menu-button');
const navExtraMenu = document.querySelector('.nav-extra-menu');

const navHelpButton = document.getElementById('nav-help');
const helpSection = document.querySelector('.help-section');

const navProfileButton = document.getElementById('nav-profile');
const ProfileSection = document.querySelector('.profile-section');

// toogleNav
toggleNavButton.addEventListener('click', () => {
    navElements.classList.toggle('active');
});

// Extra nav

extraNavButton.addEventListener('click', () => {
    navExtraMenu.classList.toggle('active');
});

// Help

navHelpButton.addEventListener('click', () => {
    helpSection.classList.toggle('active');
});

// Profile

navProfileButton.addEventListener('click', () => {
    ProfileSection.classList.toggle('active');
});

// nav after scroll

const movingElement = document.querySelector('.nav-panel');
let prevScrollY = 0;

function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < prevScrollY) {
        movingElement.style.top = '40px';
    } else {
        movingElement.style.top = '0';
    }

    prevScrollY = scrollTop;
}

window.addEventListener('scroll', handleScroll);

// Dropdown animations

const gameElements = getElementByClassName