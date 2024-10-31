"use strict";

document.getElementById("menu-toggle").addEventListener("click", function() {
    const navList = document.querySelector(".ul");
    navList.classList.toggle("show");
});
