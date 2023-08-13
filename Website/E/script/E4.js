window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    navList.forEach((navItem)=>{
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".subMenu").style.height = "166px";
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
        sliderWrap.style.marginTop = -currentIndex * 100 + "vh";
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
    let popup = document.querySelector(".popup-view");
    let popBtn = document.querySelector(".popup-btn");
    let popClose = document.querySelector(".popup-close");

    popBtn.addEventListener("click", function(){
        popup.style.display = "block";
    });
    
    popClose.addEventListener("click", function(){
        popup.style.display = "none";
    });
}