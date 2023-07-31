window.onload = function(){
    let navList = document.querySelector(".nav > ul");


    navList.addEventListener("mouseover", function () {
        document.getElementById("main").classList.add("on");
        document.querySelectorAll(".subMenu").forEach((sub) => {
        sub.style.display = "block";
        });
    });

    navList.addEventListener("mouseout", function () {
        document.getElementById("main").classList.remove("on");
        document.querySelectorAll(".subMenu").forEach((sub) => {
        sub.style.display = "none";
        });
    });

}