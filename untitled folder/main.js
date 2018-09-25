var bubbles = 0
var blowBtn = document.getElementById("blowBtn");
var body = document.getElementByTagName("body")[0];

blowBtn.addEventListener("click", blow);
function blow (){
  body.innerHTML += '<div style="Number(Math.round(Math.random(* 50) + 2)""left" + Number(Math.round(Math.random(* 50) +100) +class="bubbles>" + bubbles + </div>'
}
