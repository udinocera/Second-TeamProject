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
    btnEA.parentNode.setAttribute("class", "active")
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
    btnFC24.parentNode.setAttribute("class", "active")
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
    btnApex.parentNode.setAttribute("class", "active")
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
    btnTheSims.parentNode.setAttribute("class", "active")
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
    btnStarWars.parentNode.setAttribute("class", "active")
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
    btnF1.parentNode.setAttribute("class", "active")
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
    btnBattlefield.parentNode.setAttribute("class", "active")
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
    btnNFS.parentNode.setAttribute("class", "active")
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
