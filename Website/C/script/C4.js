window.onload = function(){
    //nav
    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".subMenu").style.height = "160px";
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
                sliderWrap.style.marginLeft ="0";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }, 700);
            
        }
    }, 3000);



    // popup

    let popupBtn = document.querySelector(".popup-btn");
    let popupView = document.querySelector(".popup-view");
    let popupClose = document.querySelector(".popup-close");

    popupBtn.addEventListener("click", function(){
        popupView.style.display = "block";
    });

    popupClose.addEventListener("click", function(){
        popupView.style.display = "none";
    });
    

}