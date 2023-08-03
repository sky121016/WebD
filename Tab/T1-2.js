window.onload = function(){
    let tabBtn = document.querySelectorAll(".tab-btn > ul > li");
    let tabCont = document.querySelectorAll(".tab-cont > div");

    tabCont[0].style.display = "block";

    tabBtn.forEach((tab, index) => {
        tab.addEventListener("click", ()=>{
            tabBtn.forEach(tab =>{
                tab.classList.remove("active");
            });
            tab.classList.add("active");

            tabCont.forEach(cont =>{
                cont.style.display = "none";
            });
            tabCont[index].style.display = "block";
        });
    });
}