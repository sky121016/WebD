window.onload = function(){
    // popup
    let popupBtn = document.querySelector(".popup-btn");
    let popupView = document.querySelector(".popup-view");
    let closeBtn = document.querySelector(".popup-close");
    
    popupBtn.addEventListener("click", ()=>{
        popupView.style.display = "block";
    });
    closeBtn.addEventListener("click", ()=>{
        popupView.style.display = "none";
    });

    // nav
    let menu = document.querySelectorAll(".menu > li");
    let subMenu = document.querySelectorAll(".subMenu");

    menu.forEach((item)=>{
        item.addEventListener("mouseover", ()=>{
            subMenu.forEach((sub)=>{
                sub.style.height = "167px";
                document.querySelector("#header .container").classList.add("on");
            });
        });
        item.addEventListener("mouseout", ()=>{
            subMenu.forEach((sub)=>{
                sub.style.height = "0";
                document.querySelector("#header .container").classList.remove("on");
            });
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

        setTimeout(() => {
            if(currentIndex == 3){
                sliderWrap.style.marginLeft = "0";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }
        }, 700);

    }, 3000);
}