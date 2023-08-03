window.onload = function () {
    let popupBtn = document.querySelector(".popup-btn");
    let popupView = document.querySelector(".popup-view");
    let popupClose = document.querySelector(".popup-close");

    popupBtn.addEventListener("click", ()=>{
        popupView.style.display = "block";
    });
    popupClose.addEventListener("click", ()=>{
        popupView.style.display = "none";
    });
};
