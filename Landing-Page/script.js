AOS.init();


const btn = document.getElementById('btn');
const light = document.querySelector('.light');
function toggleBtn(){
    btn.classList.toggle('active');
    light.classList.toggle('on');
}

// // script.js
// document.addEventListener("DOMContentLoaded", function() {
//     const nav = document.getElementById("nav");
//     const img = document.getElementById("img");
//     const textContainer = document.querySelector(".text-container");

//     function showNav() {
//         nav.style.opacity = 1;
//         setTimeout(showImg, 700); // Adjust the delay (in milliseconds) as needed
//     }

//     function showImg() {
//         img.style.opacity = 1;
//         setTimeout(showText, 1000); // Adjust the delay (in milliseconds) as needed
//     }

//     function showText() {
//         textContainer.style.opacity = 1;
//     }

//     // Start the animation when the page is loaded
//     showNav();
// });
