window.onload = function(){
    // nav
    let navList = document.querySelectorAll(".nav > ul > li");
    let subMenu = document.querySelectorAll(".subMenu");

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function(){
            subMenu.forEach(sub => {
                sub.style.height = "168px";
            });
        });
        navItem.addEventListener("mouseout", function(){
            subMenu.forEach(sub => {
                sub.style.height = "0";
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

        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.marginLeft = "0";
                sliderWrap.style.transition = "0s";    
                currentIndex = 0;
            }, 700);
        }
    }, 3000);


    // content
    let contentTitle = document.querySelectorAll(".content1 > ul > li");
    let contentBox = document.querySelectorAll(".content1 > div");

    contentTitle[0].classList.add("active");


    contentTitle.forEach((title, index) => {
        title.addEventListener("click", function(){
            contentTitle.forEach(el =>{
                el.classList.remove("active");
            });
            contentTitle[index].classList.add("active");

            contentBox.forEach(box=>{
                box.style.display = "none";
            });
            contentBox[index].style.display = "block";
        });
    });


    // popup
    let popup = document.querySelector(".popup");
    let popupBtn = document.querySelector(".popup-btn");
    let popupClose= document.querySelector(".popup-close");

    popupBtn.addEventListener("click", function(){
        popup.style.display = "block";
    });
    
    popupClose.addEventListener("click", function(){
        popup.style.display = "none";
    });


}