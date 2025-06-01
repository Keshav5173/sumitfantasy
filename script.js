const t1= gsap.timeline();
let channelBox = document.getElementById("channelBox");
let featureBox = document.getElementById('featureBox');
let joinTelegramBtn = document.getElementById("joinTelegram");

t1.from("#channelBox", {
    opacity: 0,
    y:10,
    duration:0.7,
    delay:1,

})
t1.from("#featureBox",{
    opacity: 0,
    y:10,
    duration:0.5   

})
t1.from("#featureBox h1" , {
    y:10,
    opacity:0,
    stagger: 0.4
})
t1.from("#joinTelegramBtn", {
    y:10,
    opacity:0,
    duration:0.7
})