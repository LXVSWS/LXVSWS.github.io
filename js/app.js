var btn = document.getElementById("btn");
var menu = document.getElementById("menu");
btn.onclick = function () {
    menu.classList.toggle("is-active")
    btn.classList.toggle("is-active")
};

var theme1 = document.getElementById("theme1");
var theme2 = document.getElementById("theme2");
theme1.onclick = function () {
    document.getElementsByTagName("main")[0].removeAttribute("id");
};
theme2.onclick = function () {
    document.getElementsByTagName("main")[0].setAttribute("id", "bg");
};