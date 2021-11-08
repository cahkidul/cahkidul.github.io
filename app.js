//---------------------------------------------
// make auto refresh on resize window
//---------------------------------------------
jQuery(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});

//---------------------------------------------
// make header child element value relative to header height
//---------------------------------------------
var headerHeight = $("header").height();

function headerIn(){
  $("header").css({
    "top": `-${headerHeight}px`});
  
  $("#hanger-barrier").css({
    "height": `${headerHeight*.15}px`});
  
  $("#ava").css({
    "transform": `translate(-50%, ${headerHeight*.05}px)`,
    "height": `${headerHeight*.4}px`,
    "width": `${headerHeight*.4}px`});

  $("#logo").css({
    "transform": `translate(-50%, ${headerHeight*.50}px) scale(3)`});

  $("#ul, #btnmenu").css({
    "transform": `translate(50%, ${headerHeight*.65}px)`});
};

headerIn();

//---------------------------------------------
// make animation header scrollTrigger from gsap
//--------------------------------------------
gsap.registerPlugin(ScrollTrigger);

var scroller = {
  trigger: "#demo",
  start: `top ${headerHeight*.85}px`,
  end: `top ${headerHeight*.15}px`,
  scrub: .25,
  // markers: true,
};

gsap.to("#ava", {
  left: "1rem", top: "5px", width: "35px", height: "35px", transform: "translate(0, 0)",
  scrollTrigger: scroller,
})

function hideLogo(){
  var ww = $(window).width();
  if ( ww > 480){
    gsap.to("#logo", {
      left: "4rem", top: "0", transform: "translate(0, 0)",
      scrollTrigger: scroller,
    })  
  }
  else {
    gsap.to("#logo", {
      left: "1rem",
      transform: "translate(0, 0) scale(0)",
      scrollTrigger: scroller,
    })
  }
}
hideLogo();


gsap.to("#ul, #btnmenu", {
  right: "1rem", top: "0", transform: "translate(0, 0)",
  scrollTrigger: scroller,
});

//---------------------------------------------
// make responsive menu on mobile viewport
//---------------------------------------------
window.onscroll = function(){
  var vh = $("header").height();
  var h = vh;
  if (document.body.scrollTop >= h ||
    document.documentElement.scrollTop >= h){
      if($("#ul").hasClass("expand")===false){
        $("#ul").addClass("hide");
      }
      $("#btnmenu").addClass("show");
    }
  else {
    $("#ul").removeClass("hide");
    $("#btnmenu").removeClass("show");
    $("#ul a").removeClass("adjust");
    $("#ul").removeClass("expand");
  }
}

//---------------------------------------------
// make toggle menu in mobile viewport when click on btnmenu
//---------------------------------------------
$("#btnmenu").click(function(){
  if($("#ul").is(":visible")){
    $("#ul").addClass("hide");
  }
  else {
    $("#ul").removeClass("hide");
    $("#ul").addClass("expand");
    $("#ul a").addClass("adjust");
  }
})


//---------------------------------------------
// make animation slider on section
//---------------------------------------------
const tile = $(".tile");
const tileContainer = $(".tile-container");
for(let i = 0; i < 6; i++){
  gsap.to(tile[i],{
    transform: "scale(1)",
    scrollTrigger: {
      trigger: tileContainer[i],
      start: "top 100%",
      end: "top 60%",
      scrub: 1,
      // markers: true,
    }
  })
}

/* pinning left panel */

gsap.to("#left-panel", {
  scrollTrigger: {
    trigger: "#slides",
    start: "top 0",
    end: `bottom ${$("#left-panel").height()}`,
    pin: "#left-panel",
    pinSpacing: false,
    // markers: true,
  }
})

const slider = $(".slider");
const sliderContainer = $(".slider-container");
for (let k=0; k<7; k++){
  gsap.to(slider[k], {
    transform: "translateX(0)",
    scrollTrigger: {
      trigger: sliderContainer[k],
      start: "top 100%",
      end: "top 60%",
      scrub: 1,
      markers: true,
    }
});
}


//   // $(`.slider:eq(${k})`).css("transform", "translateX(0) scale(0.5)" );
//   // console.log(k);
// }

// $(".slider:eq(5)").css("transform", "translate(0)");

// slider[1].style.transform = "translateX(0)";