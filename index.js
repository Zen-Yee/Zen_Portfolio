/*EVENT LISTENER*/
/* --------NAVIGATION BAR --------*/

let navBar = document.getElementById("topnav");

document.querySelector(".icon").addEventListener("click", function(){
    if(navBar.classList.contains("responsive")){
        navBar.classList.remove("responsive");
    } else {
        navBar.classList.add("responsive");
    }
})

let navButton = document.querySelectorAll(".navButton");

for(i=0;i<navButton.length;i++){
    navButton[i].addEventListener("click", function(){
        if(navBar.classList.contains("responsive")){
            navBar.classList.remove("responsive");
        } 
    })
}

// Get the element to animate
const element1 = document.querySelector('.Skill-Container');

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 //set when the img to appear, here means animation apply when the img is 0.5% shown in
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If element is in viewport, add the 'show' class to trigger the animation
    if (entry.isIntersecting) {
      element1.classList.add('animate-scrollFadeDown');
    }
    else {
      element1.classList.remove('animate-scrollFadeDown');
    }
  });
}, options);

// Start observing the element
observer.observe(element1);
