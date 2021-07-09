let buttonMenu = document.getElementById('burger');
let menu = document.querySelector('nav');

buttonMenu.addEventListener('click', ()=>{
    if(menu.style.display == "none"){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }
})