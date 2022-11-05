// let smoother = ScrollSmoother.create({
    //     smooth: 2,                       
    //     effects:true
    //   });
    let pro = document.getElementById("projects");

    gsap.from(".img1",{
        scrollTrigger:{
            trigger:".img1",
            toggleActions:"restart none restart pause",
        },
        x: 500,
        end:"+=300",
    });
    gsap.from(".img2",{
        scrollTrigger:{
            trigger:".img2",
            toggleActions:"restart none restart pause"
        },
        x: 500,  
    });
   
    
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

project.addEventListener("click",function(){
    gsap.to(window, {duration: 1, scrollTo: ".proheading"});
})



    
  
