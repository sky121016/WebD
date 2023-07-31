window.onload = function(){
    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".subMenu").style.height = "158px";
        });
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".subMenu").style.height = "0px";
        });
    })
}