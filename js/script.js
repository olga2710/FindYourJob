const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-bt');
const activeBtn = document.querySelectorAll('.nav-button');

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('isOpen');
    activeBtn.forEach((ev) =>{
        ev.classList.toggle('nav-button');
    })
});
closeBtn.addEventListener('click', () =>{
    menu.classList.remove('isOpen');
    activeBtn.forEach((ev) =>{
        ev.classList.add('nav-button');
    })
});
