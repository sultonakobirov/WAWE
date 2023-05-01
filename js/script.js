let hamburgerMenu = document.getElementById('menu-toggle')
let menuCont = document.querySelector('.menu-box')
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
hamburgerMenu.onclick = () =>{
    if (hamburgerMenu.checked === true) {
        menuCont.style.overflow = 'visible'
        menuCont.style.width = 'fit-content'
        menuCont.style.height = 'fit-content'
        menuCont.style.position = 'absolute'
        menuCont.style.top = '0px'
        menuCont.style.right = '0px'
        menuCont.style.padding = '50px 100px'
        spanOne.style.rotate = '45deg'
        spanTwo.style.rotate = '-45deg'
        spanOne.style.position = 'absolute'
        spanTwo.style.position = 'absolute'
        spanOne.style.zIndex = '9'
        spanTwo.style.zIndex = '9'
        spanThree.style.display = 'none'
        spanOne.style.right = '5px'
        spanTwo.style.right = '5px'
        spanOne.style.top = '10px'
        spanTwo.style.top = '10px'
        
    }else{
        menuCont.style.overflow = 'hidden'
        menuCont.style.height = 'fit-content'
        menuCont.style.position = 'unset'
        menuCont.style.width = '0'
        menuCont.style.top = '0'
        menuCont.style.right = '0'
        menuCont.style.padding = '0'
        spanOne.style.rotate = '0deg'
        spanTwo.style.rotate = '0deg'
        spanThree.style.display = 'block'
        spanOne.style.position = 'unset'
        spanTwo.style.position = 'unset'
    }
}

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
});