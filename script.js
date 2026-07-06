// itme selector
const menu = document.querySelector('.menu');
const toggle = document.querySelector('#toggle');

// event listener
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

