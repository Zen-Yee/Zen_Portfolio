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

/* -------- FLIP CARD -----------
const flipBtn=document.getElementsByClassName("btn-aboutMe");

for(var i=0;i<flipBtn.length;i++){
    flipBtn[i].addEventListener('click',function(){
       FrontC = document.querySelector(".frontCard");
       BackC = document.querySelector(".backCard");
       FrontC.classList.toggle("hidden");
       BackC.classList.toggle("hidden");
       flipBtn.innerHTML;
    });
}
*/