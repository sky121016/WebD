window.onload = function(){
    let currentIndex = 0;           // 현재 이미지
    const slider = document.querySelectorAll(".slider");

    slider[0].style.opacity = "1";

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";

        currentIndex = nextIndex;
    }, 3000);



}