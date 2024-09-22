let circle = document.querySelector('.circle');

// elements
let elements = document.querySelectorAll('h1, h2, h3, p');

// cursor follow effect
document.addEventListener('mousemove', (e)=>{
    let X = e.clientX - circle.offsetWidth/2;
    let Y = e.clientY - circle.offsetHeight/2;
    gsap.to(circle,{
        x: X,
        y: Y,
        delay: 0.1
    })
})

// cursor scaling effect

elements.forEach(element =>{
    element.addEventListener('mouseenter', ()=>{
        gsap.to(circle, {
            scale: 15
        })
    })

    element.addEventListener('mouseleave', ()=>{
        gsap.to(circle, {
            scale: 1
        })
    })
})
