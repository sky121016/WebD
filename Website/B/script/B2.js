window.onload = function(){

    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    let subMenu = document.querySelectorAll(".subMenu");
    let header = document.querySelector(".header-container");

    navList.forEach(nav=>{
        nav.addEventListener("mouseover", function(){
            subMenu.forEach(sub=>{
                sub.style.height = "188px";
            });
            header.classList.add("on");
        });
        nav.addEventListener("mouseout", function(){
            subMenu.forEach(sub=>{
                sub.style.height = "0";
            });
            header.classList.remove("on");
        });
    });


    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);
    let currentIndex = 0;

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.marginTop = -currentIndex * 300 + "px";
        sliderWrap.style.transition = "all 0.6s";

        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.marginTop = "0";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }, 700);
        }

    }, 3000);


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