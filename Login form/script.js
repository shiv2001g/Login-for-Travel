const box1 = document.querySelector(".boxPart1");
const box2 = document.querySelector(".boxPart2");
const form = document.querySelector(".LoginForm");

box1.addEventListener("click", function first() {
  document.querySelector("img").style.transform = "translateY(-30rem)";
  document.getElementById("title").style.transform = "translateY(-10rem)";
  document.getElementById("para").style.transform = "translateY(-10rem)";
  document.querySelector("#inputB").style.opacity = "1";
  document.querySelector("#TitleS").style.transform = "translateY(0rem)";
  document.querySelector("#inputBox").style.opacity = "1";
  document.querySelector("#logoP").style.transform =
    "translate(-7rem , -2.4rem)";
  document.querySelector("#logoKey").style.transform =
    "translate(-7rem , 2.6rem)";
  box1.style.opacity = "0";
  box2.style.opacity = "0";
  form.style.zIndex = "2";
});
box2.addEventListener("click", function () {
  document.querySelector("img").style.transform = "translateY(-30rem)";
  document.getElementById("title").style.transform = "translateY(-10rem)";
  document.getElementById("para").style.transform = "translateY(-10rem)";
  document.querySelector("#inputB").style.opacity = "1";
  document.querySelector("#TitleS").style.transform = "translateY(0rem)";
  document.querySelector("#inputBox").style.opacity = "1";
  document.querySelector("#logoP").style.transform =
    "translate(-7rem , -2.4rem)";
  document.querySelector("#logoKey").style.transform =
    "translate(-7rem , 2.6rem)";
  box1.style.opacity = "0";
  box2.style.opacity = "0";
  form.style.zIndex = "2";
});
