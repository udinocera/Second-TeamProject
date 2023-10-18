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



const btnEA = document.querySelector('.btn-EA')
const btnFC24 = document.querySelector('.btn-FC24')
const btnApex = document.querySelector('.btn-Apex')
const btnTheSims = document.querySelector('.btn-TheSims')
const btnStarWars = document.querySelector('.btn-StarWars')
const btnF1 = document.querySelector('.btn-F1')
const btnBattlefield = document.querySelector('.btn-Battlefield')
const btnNFS = document.querySelector('.btn-NFS')

const newsEA = document.querySelector('.newsEA')
const newsFC24 = document.querySelector('.newsFC24')
const newsApex = document.querySelector('.newsApex')
const newsTheSims = document.querySelector('.newsTheSims')
const newsStarWars = document.querySelector('.newsStarWars')
const newsF1 = document.querySelector('.newsF1')
const newsBattlefield = document.querySelector('.newsBattlefield')
const newsNFS = document.querySelector('.newsNFS')




btnEA.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "body-active")
    btnFC24.parentNode.setAttribute("class", "")
    btnApex.parentNode.setAttribute("class", "")
    btnTheSims.parentNode.setAttribute("class", "")
    btnStarWars.parentNode.setAttribute("class", "")
    btnF1.parentNode.setAttribute("class", "")
    btnBattlefield.parentNode.setAttribute("class", "")
    btnNFS.parentNode.setAttribute("class", "")
    newsEA.removeAttribute("id")
    newsFC24.setAttribute("id", "invisible")
    newsApex.setAttribute("id", "invisible")
    newsTheSims.setAttribute("id", "invisible")
    newsStarWars.setAttribute("id", "invisible")
    newsF1.setAttribute("id", "invisible")
    newsBattlefield.setAttribute("id", "invisible")
    newsNFS.setAttribute("id", "invisible")

});

btnFC24.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "")
    btnFC24.parentNode.setAttribute("class", "body-active")
    btnApex.parentNode.setAttribute("class", "")
    btnTheSims.parentNode.setAttribute("class", "")
    btnStarWars.parentNode.setAttribute("class", "")
    btnF1.parentNode.setAttribute("class", "")
    btnBattlefield.parentNode.setAttribute("class", "")
    btnNFS.parentNode.setAttribute("class", "")
    newsFC24.removeAttribute("id")
    newsEA.setAttribute("id", "invisible")
    newsApex.setAttribute("id", "invisible")
    newsTheSims.setAttribute("id", "invisible")
    newsStarWars.setAttribute("id", "invisible")
    newsF1.setAttribute("id", "invisible")
    newsBattlefield.setAttribute("id", "invisible")
    newsNFS.setAttribute("id", "invisible")
});

btnApex.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "")
    btnFC24.parentNode.setAttribute("class", "")
    btnApex.parentNode.setAttribute("class", "body-active")
    btnTheSims.parentNode.setAttribute("class", "")
    btnStarWars.parentNode.setAttribute("class", "")
    btnF1.parentNode.setAttribute("class", "")
    btnBattlefield.parentNode.setAttribute("class", "")
    btnNFS.parentNode.setAttribute("class", "")
    newsApex.removeAttribute("id")
    newsEA.setAttribute("id", "invisible")
    newsFC24.setAttribute("id", "invisible")
    newsTheSims.setAttribute("id", "invisible")
    newsStarWars.setAttribute("id", "invisible")
    newsF1.setAttribute("id", "invisible")
    newsBattlefield.setAttribute("id", "invisible")
    newsNFS.setAttribute("id", "invisible")
});

btnTheSims.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "")
    btnFC24.parentNode.setAttribute("class", "")
    btnApex.parentNode.setAttribute("class", "")
    btnTheSims.parentNode.setAttribute("class", "body-active")
    btnStarWars.parentNode.setAttribute("class", "")
    btnF1.parentNode.setAttribute("class", "")
    btnBattlefield.parentNode.setAttribute("class", "")
    btnNFS.parentNode.setAttribute("class", "")
    newsTheSims.removeAttribute("id")
    newsEA.setAttribute("id", "invisible")
    newsApex.setAttribute("id", "invisible")
    newsFC24.setAttribute("id", "invisible")
    newsStarWars.setAttribute("id", "invisible")
    newsF1.setAttribute("id", "invisible")
    newsBattlefield.setAttribute("id", "invisible")
    newsNFS.setAttribute("id", "invisible")
});

btnStarWars.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "")
    btnFC24.parentNode.setAttribute("class", "")
    btnApex.parentNode.setAttribute("class", "")
    btnTheSims.parentNode.setAttribute("class", "")
    btnStarWars.parentNode.setAttribute("class", "body-active")
    btnF1.parentNode.setAttribute("class", "")
    btnBattlefield.parentNode.setAttribute("class", "")
    btnNFS.parentNode.setAttribute("class", "")
    newsStarWars.removeAttribute("id")
    newsEA.setAttribute("id", "invisible")
    newsApex.setAttribute("id", "invisible")
    newsTheSims.setAttribute("id", "invisible")
    newsFC24.setAttribute("id", "invisible")
    newsF1.setAttribute("id", "invisible")
    newsBattlefield.setAttribute("id", "invisible")
    newsNFS.setAttribute("id", "invisible")
});

btnF1.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "")
    btnFC24.parentNode.setAttribute("class", "")
    btnApex.parentNode.setAttribute("class", "")
    btnTheSims.parentNode.setAttribute("class", "")
    btnStarWars.parentNode.setAttribute("class", "")
    btnF1.parentNode.setAttribute("class", "body-active")
    btnBattlefield.parentNode.setAttribute("class", "")
    btnNFS.parentNode.setAttribute("class", "")
    newsF1.removeAttribute("id")
    newsEA.setAttribute("id", "invisible")
    newsApex.setAttribute("id", "invisible")
    newsTheSims.setAttribute("id", "invisible")
    newsStarWars.setAttribute("id", "invisible")
    newsFC24.setAttribute("id", "invisible")
    newsBattlefield.setAttribute("id", "invisible")
    newsNFS.setAttribute("id", "invisible")
});

btnBattlefield.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "")
    btnFC24.parentNode.setAttribute("class", "")
    btnApex.parentNode.setAttribute("class", "")
    btnTheSims.parentNode.setAttribute("class", "")
    btnStarWars.parentNode.setAttribute("class", "")
    btnF1.parentNode.setAttribute("class", "")
    btnBattlefield.parentNode.setAttribute("class", "body-active")
    btnNFS.parentNode.setAttribute("class", "")
    newsBattlefield.removeAttribute("id")
    newsEA.setAttribute("id", "invisible")
    newsApex.setAttribute("id", "invisible")
    newsTheSims.setAttribute("id", "invisible")
    newsStarWars.setAttribute("id", "invisible")
    newsF1.setAttribute("id", "invisible")
    newsFC24.setAttribute("id", "invisible")
    newsNFS.setAttribute("id", "invisible")
});

btnNFS.addEventListener("click", () => {
    btnEA.parentNode.setAttribute("class", "")
    btnFC24.parentNode.setAttribute("class", "")
    btnApex.parentNode.setAttribute("class", "")
    btnTheSims.parentNode.setAttribute("class", "")
    btnStarWars.parentNode.setAttribute("class", "")
    btnF1.parentNode.setAttribute("class", "")
    btnBattlefield.parentNode.setAttribute("class", "")
    btnNFS.parentNode.setAttribute("class", "body-active")
    newsNFS.removeAttribute("id")
    newsEA.setAttribute("id", "invisible")
    newsApex.setAttribute("id", "invisible")
    newsTheSims.setAttribute("id", "invisible")
    newsStarWars.setAttribute("id", "invisible")
    newsF1.setAttribute("id", "invisible")
    newsBattlefield.setAttribute("id", "invisible")
    newsFC24.setAttribute("id", "invisible")
});

const initSlider = () => {
  const slider = document.querySelector(".newsSelector");

  const scrollLeftButton = document.getElementById("scrollLeft");

  scrollLeftButton.addEventListener("click", () => {
    slider.scrollBy({ left: -100, behavior: "smooth" });
    erisci;
  });

  scrollRightButton.addEventListener("click", () => {
    slider.scrollBy({ left: 100, behavior: "smooth" });
  });

  const handleSlideButtons = () => {
    scrollLeftButton.style.opacity = slider.scrollLeft <= 0 ? "0" : "1";
    scrollRightButton.style.opacity =
      slider.scrollLeft >= maxScrollLeft ? "0" : "1";
  };

  handleSlideButtons();
};



const buttonFooter = document.querySelector(".button-javascript")
const buttonFooter2 = document.querySelector(".button-javascript2")
const prezzi = document.querySelector(".prezzi")
const lingue = document.querySelector(".footer-lingue")
const arrow = document.querySelector(".arrow")
const arrow2 = document.querySelector(".arrow2")

buttonFooter.addEventListener("click" , () => {
    if(prezzi.id){
        prezzi.removeAttribute("id")
       arrow.style.transform = 'rotate(180deg)'
    }else {
        prezzi.setAttribute("id", "footer-invisible")
        arrow.style.transform = 'rotate(0deg)'
    }
})

buttonFooter2.addEventListener("click" , () => {
    if(lingue.id){
        lingue.removeAttribute("id")
        arrow2.style.transform = 'rotate(180deg)'

    }else {
        lingue.setAttribute("id", "footer-lingue-invisible")
        arrow2.style.transform = 'rotate(0deg)'
    }
})
