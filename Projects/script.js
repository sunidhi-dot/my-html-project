// Current Year in Footer
const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){
copyright.innerHTML =
`© ${year} Divya Thakur Astrology. All Rights Reserved.`;
}
const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menuBtn.onclick=()=>{

nav.classList.toggle("active");

}
window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});