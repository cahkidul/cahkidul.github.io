$("#btnmenu").click(function(){
  if($("#line2").css("left") === "135px"){
    $("#line1").css({
      "transform": "translate(-50%, -50%)", 
      "top": "30%"});
    $("#line2").css({
        "left": "50%"});
    $("#line3").css({
      "transform": "translate(-50%, -50%)", 
      "top": "70%"});
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

$("main").click(function(){
  if($("#menu").is(":visible")){
    $("#menu").removeClass("show");
    $("#line1").css({
      "transform": "translate(-50%, -50%)", 
      "top": "30%"});
    $("#line2").css({
        "left": "50%"});
    $("#line3").css({
      "transform": "translate(-50%, -50%)", 
      "top": "70%"});
  }
})