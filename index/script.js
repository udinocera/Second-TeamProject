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

function handleScroll() {
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    let newPosition = 0; 

    if (scrollTop > 40) { 
        newPosition = 0;
    } else {
        newPosition = 40;
    }

    movingElement.style.top = `${newPosition}px`;

}

window.addEventListener('scroll', handleScroll);
