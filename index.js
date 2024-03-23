gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})

gsap.from("#page2 #circle",{
    scale:0,
    duration:2,
    rotate:720,
    // scrollTrigger: "#page2 #circle" 
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroll:"body",
        // markers:true,       // it shows when the scroll is going to start & end
        start: "top 100%",
        // end:"top 80%" this property is not used that much
    }
})


gsap.from("#page3 #circle",{
    scale:0,
    duration:2,
    rotate:720,
    // scrollTrigger: "#page2 #circle" 
    scrollTrigger:{
        trigger:"#page3 #circle",
        scroll:"body",
        // markers:true,       // it shows when the scroll is going to start & end
        start: "top 100%",
        // end:"top 80%" no need to use this
        scrub: true   // instead of true we can give values like: 1 2 3 4 5
    }
})

