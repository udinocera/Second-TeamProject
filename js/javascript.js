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

let helpButtonActive = false;
let profileButtonActive = false;

// Extra nav

extraNavButton.addEventListener('click', () => {
    navExtraMenu.classList.toggle('active');
    document.body.style.overflow = "hidden";
});

// Help

navHelpButton.addEventListener('click', () => {
    
    profileSection.classList.remove('active');

    setTimeout(() => {
        helpSection.classList.toggle('active');
    }, 50);
    

    helpSection.style.display = 'flex';
    
    profileSection.style.display = 'none';
    profileButtonActive = false;
    if (helpButtonActive == false) {
        helpButtonActive = true
    } else {
        helpButtonActive = false
    }
    document.body.style.overflow = "hidden";

    if (helpButtonActive == false) {
        document.body.style.overflow = "auto";

        
    }
});

// Profile

navProfileButton.addEventListener('click', () => {
    setTimeout(() => {
        profileSection.classList.toggle('active');
    }, 50);
    
    helpSection.classList.remove('active');

    profileSection.style.display = 'flex';
    helpButtonActive = false;
   
    if (profileButtonActive == false) {
        profileButtonActive = true
    } else {
        profileButtonActive = false
    }
    document.body.style.overflow = "hidden";

    if (profileButtonActive == false) {
        document.body.style.overflow = "auto";
        
        
    }


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
        buttonActive = false;
        document.body.style.overflow = "auto";

        
    });
});

// extra button close

const extraButtonClose = document.querySelectorAll('close-menu-button-extra');

extraButtonClose.forEach(button => {
    button.addEventListener('click', () => {
        profileSection.classList.remove('active');
        helpSection.classList.remove("active");
        navExtraMenu.classList.remove("active");
        buttonActive = false;
        document.body.style.overflow = "auto";
        console.log('ciao')
    });
});
