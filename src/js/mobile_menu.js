document.addEventListener("DOMContentLoaded", ()=>{
    "use strict";

    const burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu");
    
    burger.addEventListener("click", ()=>{
        menu.classList.toggle("menu_active");
        burger.classList.toggle("burger_active");
    });

    menu.addEventListener("click", (e)=>{
        let link = e.target; 
        if (link && link.classList.contains("menu_link")) {
            menu.classList.toggle("menu_active");
            burger.classList.toggle("burger_active");
        }
    });
});