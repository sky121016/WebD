window.onload = function(){
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    let currentIndex = 0;
 
    setInterval(() => {
        currentIndex ++;
        sliderWrap.style.transition = "all 0.6s";
        sliderWrap.style.transform = `translateY(-${currentIndex * 100}vh)`;
        // sliderWrap.style.marginTop = -currentIndex * 100 + "vh";
        
        if(currentIndex == 3){
            setTimeout(()=>{
                sliderWrap.style.transition = "0s";
                sliderWrap.style.transform = "translateY(0)";
                // sliderWrap.style.marginTop = "0";
                currentIndex = 0;
            },700);
        }
    }, 3000);

}