$(".button").click(function(){
  $(".menu, .button").toggleClass("active");
});
$("section").click(function(){
  if($(".menu").hasClass("active")){
    $(".menu, .button").toggleClass("active");
  }
})
$(".menu ul a:nth-child(3), .close, .popUp").click(function(){
  $(".popUp, .messages").toggleClass("active");
})