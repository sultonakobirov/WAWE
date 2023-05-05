let hamburgerMenu = document.getElementById('checkbox-menu')
let menuBg = document.getElementById('nav-bg')
let menuCont = document.querySelector('.header-links-media')
let spanOne = document.querySelector('.one')
let spanTwo = document.querySelector('.two')
let spanThree = document.querySelector('.three')
let threeSpan = document.getElementsByClassName('span-cont')
let days = document.querySelector('.days')
let daysCont = document.querySelector('.days-cont')
let showMoreModal = document.querySelector('.show-more')
let modalWindowCont = document.querySelector('.modal-cont')
let modalWindow = document.querySelector('.modal-window')
let closeModal = document.querySelector('.exit')
let body = document.querySelector('body')
let applicantForm = document.getElementById('submit-btn')
let daysNum = 365

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

// hamburgerMenu.onclick = () =>{
//     if(hamburgerMenu.checked == true){
//     menuCont.style.scale = '1'
//     menuBg.style.scale = '2080'
//     menuCont.style.transition = '100ms'
//     menuBg.style.transition = '800ms'
//     body.style.overflow = 'hidden'
//     spanOne.style.top = '20px'
//     spanTwo.style.top = '20px'
//     spanThree.style.top = '20px'
//     spanOne.style.display = 'none'
//     spanThree.style.rotate = '45deg'
//     spanTwo.style.rotate = '-45deg'
//     spanOne.style.transition = '1000ms'
//     spanTwo.style.transition = '1000ms'
//     spanThree.style.transition = '1000ms'
//     hamburgerMenu.style.rotateX = '360deg'
//     hamburgerMenu.style.transition= '1000ms'


//     }else{
//     menuCont.style.scale = '0'
//     menuBg.style.scale = '0'
//     body.style.overflow = 'auto'
//     menuCont.style.transition = '400ms'
//     spanOne.style.top = '0'
//     spanTwo.style.top = '15px'
//     spanThree.style.top = '30px'
//     spanOne.style.display = 'block'
//     spanThree.style.rotate = '0deg'
//     spanTwo.style.rotate = '0deg'
//     }
// }