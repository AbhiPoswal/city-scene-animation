$(window).on("load", function() {

    var tl = new TimelineMax({repeat:-1});
    tl.to("#building", {
        duration:22,
        backgroundPosition: "5600px 0px",
        //autoRound:false,
        ease: "linear"
    });
    

    var rl = new TimelineMax({repeat:-1});
    rl.to("#road", {
        duration:22,
        backgroundPosition: "5600px 0px",
        //autoRound:false,
        ease: "linear"
    });

});

gsap.to('#car',{
    y:20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})
    
gsap.to('#tyre_1',{
    rotate:-360,
    duration:1,
    repeat:-1,
    ease:'linear'
})

gsap.to('#tyre_2',{
    rotate:-360,
    duration:1,
    repeat:-1,
    ease:'linear'
})

gsap.to('#tyre_1',{
    y:20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})

gsap.to('#tyre_2',{
    y:20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})