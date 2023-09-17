const hamburger = document.querySelector('.hamburger');
let menu_show = document.querySelector('.btn1');
let list_nav = document.querySelector('.target');
let navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=>{
    console.log("working");
    menu_show.classList.toggle('d-none');
    navbar.classList.toggle('nav-h');
    list_nav.classList.toggle('d-none');
    hamburger.classList.toggle('axe');
})
