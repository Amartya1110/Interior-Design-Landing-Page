const menu = document.getElementById("ham-menu");
const underlined = document.getElementById("underline");

menu.addEventListener("click", ()=> {
    underlined.classList.toggle('reveal');
})