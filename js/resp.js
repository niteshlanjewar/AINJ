burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navList = document.querySelector('.nav-list');



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('visibility-resp');
    navList.classList.toggle('visibility-resp');
    navbar.classList.toggle('ht-nav-resp');
})