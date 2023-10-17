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
/*
const navGame = document.getElementsByClassName('nav-game');
const navGameConteiner = document.getElementsByClassName('nav-games-container')

navGame[0].addEventListener('mouseover', () => {
    console.log('0')
    navGameConteiner[0].style.display = 'flex';
    setTimeout(() => {
        navGameConteiner[0].style.height = '400px'
    }, 1000);
});

// navGame[0].addEventListener('mouseout', () => {
//     console.log('0')
//     navGameConteiner[0].style.height = '0px'
//     setTimeout(() => {
        
//         navGameConteiner[0].style.display = 'none';
//     }, 1000);
// });


navGameConteiner[0].addEventListener('mouseover', () => {
    console.log('0')
    navGameConteiner[0].style.display = 'flex';
    navGameConteiner[0].style.height = '400px';
});

navGameConteiner[0].addEventListener('mouseout', () => {
    console.log('0')
    navGameConteiner[0].style.height = '0px';
    setTimeout(() => {
        
        navGameConteiner[0].style.display = 'none';
    }, 1000);
}); */