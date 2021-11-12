$("#btnmenu").click(function(){
  if($("#line2").css("left") === "135px"){
    $("#line1").css({
      "transform": "translate(-50%, -50%)", 
      "top": "25%"});
    $("#line2").css({
        "left": "50%"});
    $("#line3").css({
      "transform": "translate(-50%, -50%)", 
      "top": "75%"});
  }
  else {
    $("#line1").css({
      "transform": "translate(-50%, -50%) rotate(45deg)", 
      "top": "50%"});
    $("#line2").css({
        "left": "300%"});
    $("#line3").css({
      "transform": "translate(-50%, -50%) rotate(-45deg)", 
      "top": "50%"});
  }
  if($("#menu").height()==0){
    $("#menu").addClass("show");
  }
  else {
    $("#menu").removeClass("show");
  }
})

// $("#logo").click(function(){
//   alert($("#menu").height());
// })