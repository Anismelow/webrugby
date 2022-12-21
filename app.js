const toggleMenuElement = document.getElementById('toggle-menu');
const mainMEnuElement = document.getElementById ('main-menu');

toggleMenuElement.addEventListener('click', () =>{
    mainMEnuElement.classList.toggle('main-menu--show');
});



function comprobar(){
    clave1 = document.f2.clave1.value
    clave2 = document.f2.clave2.value
    if(clave1 == clave2)
    alert("bien")
    else
    alert("Las contraseñas no son iguales")
}