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

document.querySelector("#backCard-toggle").addEventListener("click", function(){
    
})