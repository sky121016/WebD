window.onload = function(){
    // contents
    let tabList = document.querySelectorAll(".tab > ul > li > a");
    let contents = document.querySelectorAll("#contents > article");
    
    contents[0].style.display = "block";

    tabList.forEach((tab, index) => {
        tab.addEventListener("click", function(){
            tabList.forEach(t=>{
                t.classList.remove("active");
            });
            tab.classList.add("active");
            
            contents.forEach(cont => {
                cont.style.display = "none";
            });
            contents[index].style.display = "block";

        });

    });



    //popup
    let popup = document.querySelector(".popup");
    let popupBtn = document.querySelector(".popup-btn");
    let popupClose = document.querySelector(".popup-close");

    popupBtn.addEventListener("click", function(){
        popup.style.display = "block";
    });
    popupClose.addEventListener("click", function(){
        popup.style.display = "none";
    });


    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");
    let currentIndex = 0;
    let nextIndex;

    slider.forEach(s=>{
        s.style.opacity = "0";
    });
    slider[0].style.opacity = "1";

    setInterval(() => {
        nextIndex = (currentIndex + 1) % 3;
        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        currentIndex = nextIndex;
    }, 3000);


    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    let subMenu = document.querySelectorAll(".subMenu");
    let header = document.querySelector("#header");

    navList.forEach(nav => {
        nav.addEventListener("mouseover", function(){
            subMenu.forEach(sub => {
                sub.style.display = "block";
            });
            header.classList.add("on");
        });
        nav.addEventListener("mouseout", function(){
            subMenu.forEach(sub => {
                sub.style.display = "none";
            });
            header.classList.remove("on");
        });
    });
}