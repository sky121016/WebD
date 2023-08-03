window.onload = function () {
    let sliderWrap = document.querySelector(".sliderWrap");

    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    let currentIndex = 0;

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = "all 0.6s";
        sliderWrap.style.marginTop = -currentIndex * 300 + "px";
        
        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginTop = "0";
                currentIndex = 0;
            }, 700);
        }

    }, 3000);

};
