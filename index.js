
    let pro = document.getElementById("projects");
    gsap.from(".short-intro",{
        scrollTrigger:".short-intro",
        // delay:1,
        duration:2,
        x: 1000,
        
    });
    
gsap.from(".name",{
    scrollTrigger:".name",
    x: -700,
    duration: 2
});
gsap.from(".y", { duration: 2.5, ease: "bounce.out",y:-500});


about.addEventListener("click",function(){
    gsap.to(window, {duration: 1, scrollTo: ".about-section"});
})

contact.addEventListener("click",function(){
    gsap.to(window, {duration: 1, scrollTo: ".contact-section"});
})

project.addEventListener("click",function(){
    gsap.to(window, {duration: 1, scrollTo: ".proheading"});
})

// revele 
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".cardsec",
      toggleActions: "restart pause resume pause"
    },
    defaults: {
      duration: 1,
      ease: "sine.inOut"
    }
  })
  .to(".cardsec", {
    clipPath: "polygon(50% -150%, 170% 150%, -70% 150%)"
  })
  .from(
    ".cardsec",
    {
      y: 150,
      scale: 0.8,
    },
    0
  );

  


    
  
