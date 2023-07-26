const hamburgerContainer = document.querySelector('.hamburgerContainer');
const menu = document.querySelector('.menu');

hamburgerContainer.addEventListener('click', function(){
    hamburgerContainer.classList.toggle('active');
    menu.classList.toggle('active');
})

document.querySelectorAll('link1').forEach(n => n.addEventListener('click'), function(){
    hamburgerContainer.classList.remove('active');
    menu.classList.remove('active');
})