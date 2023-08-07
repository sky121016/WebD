window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".menu > li");
    let subMenu = document.querySelectorAll(".subMenu");

    navList.forEach((nav)=>{
        nav.addEventListener("mouseover", ()=>{
            subMenu.forEach((sub)=>{
                sub.style.height = "157px";
            });
        });
        nav.addEventListener("mouseout", ()=>{
            subMenu.forEach((sub)=>{
                sub.style.height = "0";
            });
        });
    });



    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
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



    // info
    let infoMenu = document.querySelectorAll(".info-menu > a");
    let infoCont = document.querySelectorAll(".info-cont > div");
    infoCont[0].style.display = "block";

    infoMenu.forEach((menu, index)=>{
        menu.addEventListener("click", function(){
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

}