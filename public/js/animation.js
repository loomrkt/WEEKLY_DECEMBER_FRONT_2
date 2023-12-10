gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('#nav', {
    y: '-100',
    opacity: 0,
    duration: 0.5,
    ease: 'power1',
});
tl.from('.home1El', {
    y: '100',
    stagger: 0.3,
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});
tl.from('#home2', {
    x: '100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});
gsap.from('.aboutEl',{
    y: '100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
    stagger: 0.3,
    scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
    },
});

tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#aboutAuthor',
        start: 'top 50%',
    },
});
tl.from('#aboutAuthor1', {
    x: '-100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});
tl.from('#aboutAuthor2', {
    x: '100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});

gsap.from('#tbtb',{
    scale: 0.5,
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
    stagger: 0.3,
    scrollTrigger: {
        trigger: '#tbtb',
        start: 'top 75%',
    },
});

tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#bookCopy',
        start: 'top 50%',
    },
});
tl.from('#bookCopy1', {
    x: '-100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});
tl.from('#bookCopy2', {
    x: '100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
}, '-=1');

tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#wwyl',
        start: 'top 50%',
    },
});
tl.from('#wwyl1', {
    y: '-100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});
if(window.innerWidth <= 768){ 
tl.from('.wwyl3El', {
    x: '50',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
    stagger: 0.3,
});
}
tl.from('#wwyl2', {
    x: '100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});
if(window.innerWidth > 768){ 
tl.from('.wwyl3El', {
    x: '50',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
    stagger: 0.3,
});
}

tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#Services',
        start: 'top 50%',
    },
});

tl.from('#Services1', {
    y: '-100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
});
tl.from('.Services2El', {
    y: '100',
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
    stagger: 0.3,
});

tl.from('#Services3',{
    y: '100',
    opacity:0,
    duration: 0.7,
    ease: 'power1',
});

tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#WRS',
        start: 'top 50%',
    },
});                                                                                     
tl.from('.WRSEl',{
    x: '100',
    opacity:0,
    duration:0.7,
    ease: 'power1',
    stagger: 0.3
})
tl.from('.WRS2El',{
    x: '100',
    opacity:0,
    duration:0.7,
    ease: 'power1',
    stagger: 0.3
});


tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#AR',
        start: 'top 50%',
    },
}); 
tl.from('#AR1',{
    y: '100',
    opacity:0,
    duration:0.7,
    ease:'power2'
})
tl.from('.AR2El',{
    x: '100',
    opacity:0,
    duration:0.7,
    ease: 'power1',
    stagger: 0.3
});

gsap.from('#Contact',{
    scale: 0.5,
    opacity: 0,
    duration: 0.7,
    ease: 'power1',
    stagger: 0.3,
    scrollTrigger: {
        trigger: '#Contact',
        start: 'top 75%',
    },
});
