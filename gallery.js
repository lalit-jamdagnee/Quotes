const filterButtons = document.querySelectorAll('.filter_btn');
const gallery = document.querySelectorAll('.image_gallery img');
const image_gallery = document.querySelector('.image_gallery');

const hideLoadingScreen = () => {
    const loading = document.querySelector('.loading');
    gsap.to(loading, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    });
    setTimeout(() => {
        loading.style.display = 'none';
    }, 500);
}

// Loading screen animation
window.addEventListener('load', () => {
    hideLoadingScreen();
    image_gallery.style.display = 'block';
    gsap.from(image_gallery,{
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power1.out"
    })
});

// Filtering functionality
filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        gallery.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === "all" || category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        gsap.from(gallery, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "power1.out"
        });
    });
});

gsap.from(gallery, {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "power1.out"
});

// Modals

const modal = document.querySelector('.modal');
const content = document.querySelector('.content');
const close = document.querySelector('.close_btn');
const img = document.querySelector('.model_image');
const images = document.querySelectorAll('.image_gallery img');
const download = document.querySelector('.download');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        modal.style.display = 'block';
        img.src = image.src;
        download.href = image.src;
        
        gsap.fromTo(content, {
            opacity: 0,
            scale: 0.7,
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
        });

        // Background fade-in
        gsap.fromTo(modal, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    })
})

close.addEventListener('click', ()=>{
    modal.style.display = 'none';
    gsap.to(content, {
        opacity: 0,
        scale: 0.7,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
            modal.style.display = 'none';
        }
    });

    // Background fade-out
    gsap.to(modal, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
    });
})