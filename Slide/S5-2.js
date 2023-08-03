window.onload = function(){
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");
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
}