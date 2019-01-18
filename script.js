var resetbtn=document.getElementById("reset");
var home=document.getElementById("home");
var selectmode1=document.getElementById("selectmode1");
var hambtn=document.getElementById("ham");
resetbtn.addEventListener("click",function(){
  $("h1").remove();
  $("p").remove();
  home.style.display="block";
  resetbtn.style.display="none"

});

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  hambtn.classList.toggle("change");
}
function myFunction(x) {
  x.classList.toggle("change");
}
