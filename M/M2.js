window.onload = function(){

    let navList = document.querySelector(".nav > ul");


    navList.addEventListener("mouseover", function(){
        navList.querySelectorAll(".subMenu").forEach(sub =>{
            sub.style.height = "155px";
        });
    });

    navList.addEventListener("mouseout", function(){
        navList.querySelectorAll(".subMenu").forEach(sub =>{
            sub.style.height = "0px";
        });
    });

};