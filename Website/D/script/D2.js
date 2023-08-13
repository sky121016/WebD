window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    let subMenu = document.querySelectorAll(".subMenu");
    // let subMenuList = document.querySelectorAll(".subMenu");

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            let subMenuList = this.querySelectorAll(".subMenu > li");
            this.querySelector(".subMenu").style.height = subMenuList.length * 42 + "px";
        });
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".subMenu").style.height = "0";
        });
    });


    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    let currentIndex = 0;

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.marginLeft = "0";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    // popup

    let popBtn = document.querySelector(".popup-btn");
    let popClose = document.querySelector(".popup-close");
    let popup = document.querySelector(".popup-view");

    popBtn.addEventListener("click", function(){
        popup.style.display = "block";
    });
    popClose.addEventListener("click", function(){
        popup.style.display = "none";
    });
}