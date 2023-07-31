window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", function(){
        document.querySelectorAll(".subMenu").forEach(sub =>{
            document.querySelector("#main").classList.add("on");
            sub.style.display = "block";
        });
    });
    navList.addEventListener("mouseout", function(){
        document.querySelectorAll(".subMenu").forEach(sub =>{
            document.querySelector("#main").classList.remove("on");
            sub.style.display = "none";
        });
    });
}