/*Menu tablet */
let navToggle = document.querySelector(".bars__menu");
let navMenu = document.querySelector(".container-menu");

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");


navToggle.addEventListener("click", () =>{
    
    /*Animacion de las lineas hamburguesa*/
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    /*Animación del 
    menu bar*/
    navMenu.classList.toggle("container-menu__visible");
    
    
});
    
    
