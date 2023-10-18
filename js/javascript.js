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
