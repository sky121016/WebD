window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    navList.forEach(nav => {
        nav.addEventListener("mouseover", function(){
            this.querySelector(".subMenu").style.height = "110px";
        });
        nav.addEventListener("mouseout", function(){
            this.querySelector(".subMenu").style.height = "0";
        });
    });




    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");
    let currentIndex = 0;
    let nextIndex;

    slider[0].style.opacity = "1";

    setInterval(() => {
        nextIndex = (currentIndex + 1) % 3;
        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        currentIndex = nextIndex;
    }, 3000);


    // content
    let tabList = document.querySelectorAll(".tab > ul > li > a");
    let contents = document.querySelectorAll(".content1 > article");
    contents[0].style.display = "block";

    tabList.forEach((tab, index) => {

        tab.addEventListener("click", function(){
            tabList.forEach(item => {
                item.classList.remove("active");
            });
            tab.classList.add("active");

            contents.forEach(con =>{
                con.style.display = "none";
            });
            contents[index].style.display = "block";
        });
    });


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