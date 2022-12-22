const toggleMenuElement = document.getElementById('toggle-menu');
const mainMEnuElement = document.getElementById ('main-menu');

toggleMenuElement.addEventListener('click', () =>{
    mainMEnuElement.classList.toggle('main-menu--show');
});



