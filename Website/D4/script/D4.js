window.onload = function(){
    let navList = document.querySelectorAll(".nav > ul > li");
    let header = document.querySelector("#header");
    let subMenu = document.querySelectorAll(".subMenu");

    navList.forEach(nav =>{
        nav.addEventListener("mouseover",function(){
            header.classList.add("on");
            subMenu.forEach(sub => {
                sub.style.display = "block";
            });
        });
        nav.addEventListener("mouseout",function(){
            header.classList.remove("on");
            subMenu.forEach(sub => {
                sub.style.display = "none";
            });
        });
    });


    // slider
    let sliderWrap = document.querySelector(".sliderWrap");
    let sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);
    let curr = 0;

    setInterval(() => {
        curr++;
        sliderWrap.style.marginTop = -curr * 400 + "px";
        sliderWrap.style.transition = "all 0.6s";

        if(curr == 3){
            setTimeout(() => {
                
                sliderWrap.style.marginTop = "0";
                sliderWrap.style.transition = "0s";
                curr = 0
            }, 700);
        }

    }, 3000);


    // tab
    let tabList = document.querySelectorAll(".tab > ul > li > a");
    let contents = document.querySelectorAll("#contents > article");

    contents.forEach(cont => {
        cont.style.display = "none";
    });

    contents[0].style.display = "block";

    tabList.forEach((tab, index) => {
        tab.addEventListener("click", function(){
            // 탭 active 모두 지우고 클릭한 거에만 active 추가 
            tabList.forEach(t => {
                t.classList.remove("active");
            });
            tab.classList.add("active");

            // 컨텐츠 모두 none 해주고 클릭한거만 block
            contents.forEach(cont=>{
                cont.style.display = "none";
            });
            contents[index].style.display = "block";
        });
    });
}