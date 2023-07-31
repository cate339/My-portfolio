const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('navLink').forEach(n => n.addEventListener('click'), function(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
})