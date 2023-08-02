window.onload = function(){
    let slider = document.querySelectorAll(".slider");
    let currentIndex = 0;

    slider[currentIndex].style.opacity = "1";

    setInterval(()=>{
        let nextIndex = (currentIndex + 1) % slider.length;
        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        currentIndex = nextIndex;
    },3000);
}