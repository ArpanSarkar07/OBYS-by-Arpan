var h5Timer=document.querySelector("#line1-part1 h5")
var grow=0;
var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,

})
tl.from("#line1-part1",{
  opacity:0,
  onStart:function(){
    setInterval(function(){
    if(grow<100){
      h5Timer.innerHTML=  grow++;
    }else{
      h5Timer.innerHTML=grow;
    }
},33)
  }
})
tl.to(".line h2",{
  animationName:"loadAnime",
  opacity:1
})

tl.to("#loader",{
    opacity:0,
    delay:0.2,
    duration:4
}) 
tl.from("#page1",{
  delay:0.2,
  opacity:0,
  y:1600,ease:Power4,
  duration:0.5,

})
tl.to("#loader",{
  display:"none",
})