let hamburgerMenu = document.getElementById('menu-toggle')
let menuCont = document.querySelector('.menu-box')
let spanOne = document.getElementById('one')
let spanTwo = document.getElementById('two')
let spanThree = document.getElementById('three')
let threeSpan = document.getElementsByClassName('span-cont')
let days = document.querySelector('.days')
let daysCont = document.querySelector('.days-cont')
let showMoreModal = document.querySelector('.show-more')
let modalWindow = document.querySelector('.modal-cont')
let closeModal = document.querySelector('.exit')
let body = document.querySelector('body')
let daysNum = 365
const applicantForm = document.getElementById('submit-btn')
hamburgerMenu.onclick = () =>{
    if (hamburgerMenu.checked === true) {
        menuCont.style.overflow = 'visible'
        menuCont.style.width = 'fit-content'
        menuCont.style.position = 'absolute'
        menuCont.style.top = '50px'
        menuCont.style.right = '100px'
        menuCont.style.padding = '50px 100px'
        spanOne.style.rotate = '45deg'
        spanTwo.style.rotate = '-45deg'
        spanOne.style.position = 'absolute'
        spanTwo.style.position = 'absolute'
        spanThree.style.display = 'none'
        spanOne.style.right = '5px'
        spanTwo.style.right = '5px'
        spanOne.style.top = '10px'
        spanTwo.style.top = '10px'
    }else{
        menuCont.style.overflow = 'hidden'
        menuCont.style.width = '0'
        menuCont.style.position = 'unset'
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

showMoreModal.onclick = ()=>{
    modalWindow.style.display = 'flex'
    body.style.oveflowY = 'hidden'
    body.style.backgroundColor = 'black'
    body.style.opacity = '0.1'
    body.style.height = '100vh'
    body.style.position = 'fixed'
}
showMoreModal.onclick = () =>{
    modalWindow.style.display = 'flex'
    body.style.overflow = 'hidden'

}
closeModal.onclick = () =>{
    modalWindow.style.display = 'none'
    body.style.overflow = 'auto'
}


function handleFormSubmit(event) {
    event.preventDefault()
}
applicantForm.onclick = handleFormSubmit

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + ("") + "</span>";
      },
    },
  });