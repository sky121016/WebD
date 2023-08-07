window.onload = function(){

    // info
    let infoMenu = document.querySelectorAll(".info-menu > a");
    let infoCont = document.querySelectorAll(".info-cont > div");
    infoCont[0].style.display = "block";

    infoMenu.forEach((menu, index)=>{
        menu.addEventListener("click",function(){
            infoMenu.forEach((menu)=>{
                menu.classList.remove("active");
            });
            menu.classList.add("active");
            
            infoCont.forEach((cont)=>{
                cont.style.display = "none";
            });
            infoCont[index].style.display = "block";
        });
    });



    // nav
    let Menu = document.querySelectorAll(".nav > ul > li");

    Menu.forEach((menu)=>{
        menu.addEventListener("mouseover",function(){
            this.querySelector(".subMenu").style.height = "150px";
        });
        menu.addEventListener("mouseout",function(){
            this.querySelector(".subMenu").style.height = "0px";
        });
    });



    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");
    let currentIndex = 0;
    let nextIndex;

    slider[0].style.opacity = "1";

    setInterval(() => {
        nextIndex = (currentIndex + 1) % slider.length;
        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";

        currentIndex = nextIndex;
    }, 3000);



    // pop up
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