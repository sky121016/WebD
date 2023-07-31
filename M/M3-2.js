window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", function(){
        document.getElementById("header").classList.add("on");
        document.querySelectorAll(".subMenu").forEach(sub=>{
            sub.style.height = "155px";
        });
    });


    navList.addEventListener("mouseout", function(){
        document.getElementById("header").classList.remove("on");
        document.querySelectorAll(".subMenu").forEach(sub=>{
            sub.style.height = "0px";
        });
    });
}