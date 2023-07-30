window.onload = function(){
    let navList = document.querySelector(".nav > ul");
    let subMenu = document.querySelectorAll(".subMenu");

    navList.addEventListener("mouseover", function(){
        subMenu.forEach(function(sub){
            sub.style.height = "155px";
        });
    });

    navList.addEventListener("mouseout", function(){
        subMenu.forEach(function(sub){
            sub.style.height = "0px";
        });
    });

}