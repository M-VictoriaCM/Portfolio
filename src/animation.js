// animation.js
export const animateMenu = () => {
    const navToggle = document.querySelector(".bars__menu");
    const line1__bars = document.querySelector(".line1__bars-menu");
    const line2__bars = document.querySelector(".line2__bars-menu");
    const line3__bars = document.querySelector(".line3__bars-menu");

    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
};
