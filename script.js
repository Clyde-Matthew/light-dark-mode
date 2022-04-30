"use strict";

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Helper function
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg` 
}


// DRY Function

function toggleDarkLightMode(isTheme){
    nav.style.backgroundColor = isTheme? "rgb(0 0 0 /50%)":"rgb(255 255 255 /50%)"
    textBox.style.backgroundColor =isTheme?"rgb(255 255 255 / 50%)":"rgb(0 0 0 / 50%)"
    toggleIcon.children[0].textContent = isTheme? "Dark Mode" :"Light Mode";
    isTheme? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon"): toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    isTheme? imageMode(DARK_THEME) :  imageMode(LIGHT_THEME)  
   
}


// //Dark Mode styles
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 /50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  
//   imageMode('dark')
// }
// // Light Mode styles
// function lightMode() {
//     nav.style.backgroundColor = "rgb(255 255 255 /50%)";
//     textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
//     toggleIcon.children[0].textContent = "Light Mode";
//     toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    
//     imageMode('light')
//   }


function switchTheme(event) {
//   console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME);
    localStorage.setItem('theme', DARK_THEME)
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME)
    toggleDarkLightMode(false);
  }
}

// event listener
toggleSwitch.addEventListener("change", switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem('theme')
if(currentTheme){
    document.documentElement.setAttribute("data-theme", currentTheme);

    if(currentTheme === DARK_THEME){
        toggleSwitch.checked =true
        toggleDarkLightMode(true)
    }  
}

