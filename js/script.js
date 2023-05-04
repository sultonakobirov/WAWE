let hamburgerMenu = document.getElementById('checkbox-menu')
let menuBg = document.getElementById('nav-bg')
let menuCont = document.querySelector('.header-links-media')
let spanOne = document.getElementById('one')
let spanTwo = document.getElementById('two')
let spanThree = document.getElementById('three')
let threeSpan = document.getElementsByClassName('span-cont')
let days = document.querySelector('.days')
let daysCont = document.querySelector('.days-cont')
let showMoreModal = document.querySelector('.show-more')
let modalWindowCont = document.querySelector('.modal-cont')
let modalWindow = document.querySelector('.modal-window')
let closeModal = document.querySelector('.exit')
let body = document.querySelector('body')

let daysNum = 365
const applicantForm = document.getElementById('submit-btn')

function cycle(content, object, num) {
    object.addEventListener("click", ()=>{
        for (let i = 0; i <= num; i++) {
            setTimeout(function () {
                content.innerHTML = i
                console.log(i);
            }, 10*i);
            }
    })
}
cycle(days, daysCont, daysNum)


showMoreModal.onclick = () =>{
    modalWindowCont.style.display = 'flex'
    body.style.overflow = 'hidden'
    modalWindowCont.style.overflow = 'auto'
    modalWindowCont.style.height = '100vh'
    modalWindowCont.style.width = '100%'


}
closeModal.onclick = () =>{
    body.style.overflow = 'auto'
    modalWindowCont.style.overflow = 'hidden'
    modalWindowCont.style.height = '0'
    modalWindowCont.style.width = '0'
}



function handleFormSubmit(event) {
    event.preventDefault()
}
applicantForm.onclick = handleFormSubmit

let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + ("") + "</span>";
        },
    },
    speed: 500,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

hamburgerMenu.onclick = () =>{
  if(hamburgerMenu.checked == true){
    menuCont.style.scale = '1'
    menuBg.style.scale = '570'
    menuCont.style.transition = '0.2s'
    menuBg.style.transition = '0.3s'
    body.style.overflow = 'hidden'
    
  }else{
    menuCont.style.scale = '0'
    menuBg.style.scale = '0'
    body.style.overflow = 'auto'
    menuCont.style.transition = '0.4s'
  }
}