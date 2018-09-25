
document.getElementById('box').;
function colorCompute(){
    var num1 = Math.round(Math.random() * 255);
    var num2 = Math.round(Math.random() * 255);
    var num3 = Math.round(Math.random() * 255);
    return "rgb(" + num1 + "," + num2 + "," + num3 + ")";
}

function changeColor(){
  document.getElementById('box').style.backgroundColor = colorCompute();
}
$(".box").mouseenter(function(){
  $(this).css("background-color", colorCompute())
})
