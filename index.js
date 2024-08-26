/*EVENT LISTENER*/
/* --------NAVIGATION BAR --------*/
document.querySelector(".icon").addEventListener("click", addResponsive);

/*FUNCTION*/
function addResponsive(){
    navBar = document.getElementById("topnav");
    if(navBar.className === "navTop"){
        navBar.classList.add("responsive");
    } else {
        navBar.classList.remove("responsive");
    }
}
