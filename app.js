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
    $("#dark").removeClass("dark");
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
    $("#dark").addClass("dark");
  }
  if($("#menu").height()==0){
    $("#menu").addClass("show");
  }
  else {
    $("#menu").removeClass("show");
  }
})

$("#dark").click(function(){
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
    $(this).removeClass("dark");
  }
});

gsap.registerPlugin(ScrollTrigger);

for(let i=0; i<6; i++){
  const project = $(".project");
  const handler = $(".project-handler");
  gsap.to(project[i], {
    transform: "translate(0, 0)",
    scrollTrigger: {
      trigger: handler[i],
      start: "top 100%",
      end: "top 70%",
      scrub: 1,
      // markers: true,
    }
  })
}

gsap.to(".icon", {
  transform: "scale(1)",
  scrollTrigger: {
    trigger: "#icon-box",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
    // markers: true,
  }
})