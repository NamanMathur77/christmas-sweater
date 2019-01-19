var resetbtn=document.getElementById("reset");
var home=document.getElementById("home");
var selectmode1=document.getElementById("selectmode1");
var selectmode2=document.getElementById("selectmode2");
var hambtn=document.getElementById("ham");
var facebookbtn=document.getElementById("facebook");
var twitterbtn=document.getElementById("twitter");
selectmode2.addEventListener("mouseover",function(){
  home.style.backgroundImage="url('https://static.vecteezy.com/system/resources/previews/000/237/064/non_2x/vector-christmas-tree-argyle-pattern-background.jpg')";
});
selectmode1.addEventListener("mouseover",function(){
  home.style.backgroundImage="url('https://media.istockphoto.com/vectors/abstract-striped-knitted-sweater-pattern-vector-seamless-background-vector-id995342012?s=170x170')";
});
selectmode1.addEventListener("click",function(){
  $("#home").remove();
});
facebookbtn.addEventListener("mouseover",function(){
  facebookbtn.style.borderRadius="10px"
  facebookbtn.style.width="100px";
  twitterbtn.style.right="100px"
});
facebookbtn.addEventListener("mouseout",function(){
  facebookbtn.style.borderRadius="50%"
  facebookbtn.style.width="40px";
  twitterbtn.style.right="50px";
});
resetbtn.addEventListener("click",function(){
  $("h1").fadeOut("slow", function(){
    $("h1").remove();
  });
  $("p").fadeOut("slow", function(){
    $("p").remove();
  });

  home.style.display="block";
  resetbtn.style.display="none"

});

function on() {
  $("#overlay").fadeIn("slow");
}

function off() {
  $("#overlay").fadeOut("slow");
  hambtn.classList.toggle("change");
}
function myFunction(x) {
  x.classList.toggle("change");
}
