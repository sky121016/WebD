window.onload = function(){
    let sliderWrap = document.querySelector(".sliderWrap");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
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
}