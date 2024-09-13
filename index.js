/*EVENT LISTENER*/
/* --------NAVIGATION BAR --------*/
document.querySelector(".icon").addEventListener("click", function(){
    navBar = document.getElementById("topnav");
    if(navBar.className === "navTop"){
        navBar.classList.add("responsive");
    } else {
        navBar.classList.remove("responsive");
    }
})

/* -------- FLIP CARD --------*/
const flipBtn=document.querySelector(".btn-aboutMe");
flipBtn.addEventListener('click',function(){
    FrontC = document.querySelector(".frontCard");
    BackC = document.querySelector(".backCard");
    if(FrontC.classList.contains("hidden")){
        FrontC.classList.remove("hidden");
        BackC.classList.add("hidden");
        flipBtn.innerHTML="About Me";
    }else{
        FrontC.classList.add("hidden");
        BackC.classList.remove("hidden");
        flipBtn.innerHTML="Back";
    }
    
})
