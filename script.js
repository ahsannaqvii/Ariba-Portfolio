const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

    hamburger.classList.toggle("active");

    navLinks.classList.toggle("active");

});

/*=========================================
UNIVERSAL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-right"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            // Animate only once
            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.15,
    rootMargin:"0px 0px -80px 0px"
});

revealElements.forEach(element=>{

    observer.observe(element);

});

const slides =
document.querySelectorAll(".story-slide");

const counter =
document.querySelector("#storyCounter");

const storySection =
document.querySelector(".story-section");

/*=========================================
STORY SECTION (Desktop Only)
=========================================*/

if (
    window.innerWidth > 768 &&
    storySection &&
    slides.length
){

    window.addEventListener("scroll",()=>{

        const rect =
        storySection.getBoundingClientRect();

        const total =
        storySection.offsetHeight -
        window.innerHeight;

        const progress =
        Math.max(
            0,
            Math.min(
                total,
                -rect.top
            )
        );

        const percentage =
        progress / total;

        let active = 0;

        if(percentage >= .25) active = 1;
        if(percentage >= .50) active = 2;
        if(percentage >= .75) active = 3;

        slides.forEach(slide =>
            slide.classList.remove("active")
        );

        slides[active].classList.add("active");

        counter.textContent =
        String(active + 1)
        .padStart(2,"0");

    });

}

const track =
document.querySelector(".artifacts-track");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

if(track){

    nextBtn.addEventListener("click",()=>{

        track.scrollBy({

            left:450,

            behavior:"smooth"

        });

    });

    prevBtn.addEventListener("click",()=>{

        track.scrollBy({

            left:-450,

            behavior:"smooth"

        });

    });

}