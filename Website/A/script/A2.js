window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    let subMenu = document.querySelectorAll(".subMenu");
    let header = document.querySelector("#header");

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function(){
            subMenu.forEach(sub=>{
                sub.style.height = "126px";
            });
            header.classList.add("on");
        });
        navItem.addEventListener("mouseout", function(){
            subMenu.forEach(sub=>{
                sub.style.height = "0";
            });
            header.classList.remove("on");
        });
    });


    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let currentIndex = 0;
    let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

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