window.onload = function(){
    let sliderWrap = document.querySelector(".sliderWrap");
    let slider = document.querySelectorAll(".slider");

    let currentIndex=0;

    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);

    setInterval(()=>{
        currentIndex++;
        sliderWrap.style.marginTop = -currentIndex * 300 + "px";
        sliderWrap.style.transition = "all 0.6s";
        
        if(currentIndex == 3){
            setTimeout(()=>{
                sliderWrap.style.marginTop = "0";
                sliderWrap.style.transition = "0s";   
                currentIndex = 0;
            },700);
        }

    },3000);

}