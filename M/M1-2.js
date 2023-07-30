window.onload = function(){
    let menuList = document.querySelectorAll(".nav > ul > li");

    menuList.forEach(function(menuItem){
        menuItem.addEventListener("mouseover", function(){
            this.querySelector(".subMenu").style.height = "150px";
        });
        
        menuItem.addEventListener("mouseout", function(){
            this.querySelector(".subMenu").style.height = "0px";
        });
    });
}