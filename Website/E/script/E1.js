window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    navList.forEach(nav => {
        nav.addEventListener("mouseover", function(){
            this.querySelector(".subMenu").style.height = "158px";
        });
        nav.addEventListener("mouseout", function(){
            this.querySelector(".subMenu").style.height = "0";
        });
    });

    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");
    let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);
    let currentIndex = 0;

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.marginLeft = - currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        if(currentIndex==3){
            setTimeout(() => {
                sliderWrap.style.marginLeft = "0";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }, 700);
        }

    }, 3000);


    // // slider up down
    // let sliderWrap = document.querySelector(".sliderWrap");
    // let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    // sliderWrap.appendChild(sliderClone);
    // let currentIndex = 0;

    // setInterval(() => {
    //     currentIndex++;
    //     sliderWrap.style.marginTop = -currentIndex * 100 + "vh";
    //     sliderWrap.style.transition = "all 0.6s";

    //     if(currentIndex == 3){
    //         setTimeout(() => {
    //             sliderWrap.style.marginTop = "0";
    //             sliderWrap.style.transition = "0s";
    //             currentIndex = 0;
    //         }, 700);
    //     }
    // }, 3000);


    // popup
    let popup = document.querySelector(".popup");
    let popupBtn = document.querySelector(".popup-btn");
    let popupClose = document.querySelector(".popup-close");

    popupBtn.addEventListener("click", function(){
        popup.style.display = "block";
    });

    popupClose.addEventListener("click", function(){
        popup.style.display = "none";
    });
}