let hamburgerMenu = document.querySelector('#checkbox-menu')
let menuBg = document.querySelector('#nav-bg')
let menuCont = document.querySelector('.header-links-media')
let spanOne = document.querySelector('.one')
let spanTwo = document.querySelector('.two')
let spanThree = document.querySelector('.three')
let showMoreModal = document.querySelector('.show-more')
let modalWindowCont = document.querySelector('.modal-cont')
let modalWindow = document.querySelector('.modal-window')
let closeModal = document.querySelector('.exit')
let body = document.querySelector('body')
let applicantForm = document.querySelector('#submit-btn')
let modalForm = document.querySelector('#form-sub')
let couchesNum = document.querySelector('.couches')
let galleryImages = document.querySelector('.grid-one')
let indicators = document.querySelector('.indicators')
let numbers = document.querySelectorAll('.number')
let popup = document.querySelector('.popup-message')
let formCont = document.querySelector('.modal-window-form')
let arrOfNum = [450, 2500, 10, 365] 
let teamSection = document.querySelector('.team-members-container')
let tarrifChoose = document.querySelectorAll('.tariff-item')
let showCloseModal = (elem)=>{
    elem.onclick = () =>{
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
}

for (let index = 0; index < tarrifChoose.length; index++) {
    const element = tarrifChoose[index];
    showCloseModal(element)
    
}

function cycle(content,num) {
    for (let index = 0; index < num.length; index++) {
        let element = num[index];
        let innerContent= content[index];
        for (let i = 0; i <= element; i = i + 1) {
            setTimeout(function () {
                let a = 0
                innerContent.innerHTML = i
            }, 2*i);
        }
    }
}

function runWhenVisible(element, callback) {
    let handler = function() {
    let rect = element.getBoundingClientRect();
    let viewportHeight = window.innerHeight;
    if (rect.bottom >= 0 && rect.top+50 <= viewportHeight) {
    callback();
    window.removeEventListener('scroll', handler);
    }
    };
    window.addEventListener('scroll', handler);
}
runWhenVisible(indicators, function() {
    cycle(numbers, arrOfNum)
});
showCloseModal(popup.children[0])
let visibility = function(entries) {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        popup.style.scale = '1'
        popup.style.transition = '200ms'
    } else{
        popup.style.scale = '0'

    }
    });
    };
const observer = new IntersectionObserver(visibility);
observer.observe(teamSection);

hamburgerMenu.onclick = () =>{
    if(hamburgerMenu.checked == true){
    menuBg.style.scale = '1660'
    spanOne.style.top = '15px'
    spanTwo.style.top = '15px'
    spanThree.style.top = '15px'
    setTimeout(() => {
        spanOne.style.rotate = '45deg'
        spanTwo.style.rotate = '-45deg'
        spanThree.style.rotate = '-45deg'
        menuCont.style.scale = '1'
    }, 150);
    spanOne.style.transition = '300ms'
    spanTwo.style.transition = '300ms'
    spanThree.style.transition = '300ms'
    menuCont.style.transition = '200ms'
    menuBg.style.transition = '300ms'
    }else{
    menuCont.style.scale = '0'
    menuCont.style.transition = '400ms'
    spanOne.style.rotate = '0deg'
    spanTwo.style.rotate = '0deg'
    spanThree.style.rotate = '0deg'
    setTimeout(() => {
        spanOne.style.top = '0px'
        spanTwo.style.top = '15px'
        spanThree.style.top = '30px'
        menuBg.style.scale = '1'
    }, 150);
    }
}

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

function handleFormSubmit(event) {
    event.preventDefault()
}
modalForm.onclick = handleFormSubmit
applicantForm.onclick = handleFormSubmit

let dragSrcEl = null;
function handleDragStart(e) {
dragSrcEl = this;
e.dataTransfer.effectAllowed = 'move';
e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragOver(e) {
if (e.preventDefault) {
e.preventDefault();
}
e.dataTransfer.dropEffect = 'move';
return false;
}
function handleDragEnter(e) {
this.classList.add('over');
}
function handleDragLeave(e) {
this.classList.remove('over');
}
function handleDrop(e) {
if (e.stopPropagation) {
e.stopPropagation();
}
if (dragSrcEl != this) {
dragSrcEl.innerHTML = this.innerHTML;
this.innerHTML = e.dataTransfer.getData('text/html');
}
return false;
}
function handleDragEnd(e) {
this.style.opacity = '1';
let imgs = document.querySelectorAll('.team-member');
for (let i = 0; i < imgs.length; i++) {
imgs[i].classList.remove('over');
}
}
function init() {
    let imgs = document.querySelectorAll('.team-member-img');
    for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('draggable', true);
    imgs[i].addEventListener('dragstart', handleDragStart, false);
    imgs[i].addEventListener('dragenter', handleDragEnter, false);
    imgs[i].addEventListener('dragover', handleDragOver, false);
    imgs[i].addEventListener('dragleave', handleDragLeave, false);
    imgs[i].addEventListener('drop', handleDrop, false);
    imgs[i].addEventListener('dragend', handleDragEnd, false);
    }
    }
init()

