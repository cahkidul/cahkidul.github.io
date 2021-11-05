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

gsap.registerPlugin(ScrollTrigger);

var scroller = {
  trigger: "header",
  start: "bottom 100%",
  end: "bottom 0",
  scrub: .25,
  invalidateOnRefresh: true
};

var tl = gsap.timeline({
  scrollTrigger: scroller
})
var tl2 = gsap.timeline({
  scrollTrigger:scroller
})
var tl3 = gsap.timeline({
  scrollTrigger:scroller
})
var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger: "header",
    start: "0",
    end: "100%",
    scrub: .25,
    invalidateOnRefresh: true,
  }
})

tl.to(".ava", {left: "1rem", top: "5px", width: "35px", transform: "translate(0, 0)"
})
tl2.to(".logo", {left: "4rem", top: "0", transform: "translate(0, 0)"
})
tl3.to(".ul", {right: "1rem", top: "0", transform: "translate(0, 0)"
})