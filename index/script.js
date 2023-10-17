const toggleNavButton = document.getElementById('toggle-nav');
const navElements = document.querySelector('.nav-toggle');

const extraNavButton = document.getElementById('nav-extra-menu-button');
const navExtraMenu = document.querySelector('.nav-extra-menu');

const navHelpButton = document.getElementById('nav-help');
const helpSection = document.querySelector('.help-section');

const navProfileButton = document.getElementById('nav-profile');
const profileSection = document.querySelector('.profile-section');

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
    profileSection.classList.remove('active');
});

// Profile

navProfileButton.addEventListener('click', () => {
    profileSection.classList.toggle('active');
    helpSection.classList.remove('active');
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


//CLOSE MENU BUTTON
const closeMenuButton = document.querySelectorAll('#close-menu-button');

closeMenuButton.forEach(button => {
    button.addEventListener('click', () => {
        profileSection.classList.remove('active');
        helpSection.classList.remove("active");
        navExtraMenu.classList.remove("active");
        
    });
});
