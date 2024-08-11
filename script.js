var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#coffee",{
    top: "115%",
    left: "10%"
}, 'together')
tl.to("#beans2",{
    top:"158%",
    left: "15%",
    width: "22%",
    rotate: "248deg"
}, 'together')
tl.to("#beans",{
    width: "16%",
    top:"170%",
    // right: "10%"
    left:"78%"
}, 'together')
tl.to("#leaf",{
    top:"94%",
    rotate: "70deg",
    left: "70%"
}, 'together')
tl.to("#leaf2",{
    top:"110%",
    rotate: "160deg",
    left: "3%"
}, 'together')




var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "5% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})


tl2.from(".vanilla",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from(".classicVanilla",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from(".cocoa",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from(".mochaDelight",{
    rotate: "90deg",
    top: "110%",
    left: "100%"
}, 'ca')


tl2.to("#coffee",{
    width:"15.5%",
    top: "211%",
    left: "43%",
}, 'ca')
tl2.to("#beans",{
    // width:"18%",
    left: "42%",
    top: "200%"
}, 'ca')