var btn = document.getElementById("btn");
var menu = document.getElementById("menu");

btn.onclick = function () {
    menu.classList.toggle("is-active")
    btn.classList.toggle("is-active")
};
