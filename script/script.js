const menuEl = document.querySelector(".menu");
const closeEl = document.querySelector(".close");
const navMobile = document.querySelector(".mobile");
const navCloseBtn1 = document.getElementById("btn1");
const navCloseBtn2 = document.getElementById("btn2");
const navCloseBtn3 = document.getElementById("btn3");
menuEl.addEventListener("click", () => {
  navMobile.style.top = 0;
});

closeEl.addEventListener("click", () => {
  navMobile.style.top = "-100vh";
});
navCloseBtn1.addEventListener("click", () => {
  navMobile.style.top = "-100vh";
});
navCloseBtn2.addEventListener("click", () => {
  navMobile.style.top = "-100vh";
});
navCloseBtn3.addEventListener("click", () => {
  navMobile.style.top = "-100vh";
});


//scroll top
scrollTop = document.getElementById("scroll-top");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 700) {
    scrollTop.className = "scroll-top show"
  } else {
    scrollTop.className = "scroll-top hide"
  }
  
};


window.addEventListener("scroll", myScrollFunc);