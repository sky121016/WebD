window.onload = function(){

    let navList = document.querySelectorAll(".menu");

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".subMenu").style.height = "155px";
        });
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".subMenu").style.height = "0px";
        });
    });
    
}



