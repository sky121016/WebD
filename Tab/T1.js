window.onload = function(){
    const tabBtn = document.querySelectorAll(".tab-btn > ul > li");
    const tabCont = document.querySelectorAll(".tab-cont > div");

    tabCont.forEach((el)=>{
        el.style.display = "none";
    });

    tabCont[0].style.display = "block";

    tabBtn.forEach((tab, index)=>{
        tab.addEventListener("click", ()=>{
            tabBtn.forEach((tab) => {
                tab.classList.remove("active");     // 모두 active 지우기
            })
            tab.classList.add("active");        // 클릭 된 나한테만 active
            
            tabCont.forEach((cont)=>{
                cont.style.display = "none";        // 모든 컨텐츠 숨김
            });
            tabCont[index].style.display = "block"; // 클릭한 컨텐츠만 보여줌
        });

    });
}