window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    let subMenu = document.querySelectorAll(".subMenu");
    let header = document.querySelector("#header");

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function(){
            subMenu.forEach(sub =>{
                sub.style.height = "126px";
            });
            header.classList.add("on");
        });
        navItem.addEventListener("mouseout", function(){
            subMenu.forEach(sub =>{
                sub.style.height = "0px";
            });
            header.classList.remove("on");
        });
    });


    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");

    slider[0].style.opacity = "1";
    let currentIndex = 0;
    let nextIndex;
    setInterval(() => {
        nextIndex = (currentIndex + 1) % 3;
        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        currentIndex = nextIndex;
    }, 3000);


    // popup
    let popup = document.querySelector(".popup");
    let popupBtn = document.querySelector(".popup-btn");
    let popupClose = document.querySelector(".popup-close");

    popupBtn.addEventListener("click",function(){
        popup.style.display = "block";
    });
    popupClose.addEventListener("click",function(){
        popup.style.display = "none";
    });

}