const slider = document.getElementById("skillsSlider");
const slides = document.querySelectorAll("#skillsSlider .slide");

const slideWidth = 340;
let index = 1;

// Start at real slide 1
slider.style.transform = `translateX(${-slideWidth * index}px)`;

// NEXT
function slideRight() {
    if (index >= slides.length - 1) return;
    index++;
    slider.style.transition = "0.5s";
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
}

// PREVIOUS
function slideLeft() {
    if (index <= 0) return;
    index--;
    slider.style.transition = "0.5s";
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
}

// LOOP RESET
slider.addEventListener("transitionend", () => {
    if (slides[index].classList.contains("clone")) {
        slider.style.transition = "none";
        index = index === 0 ? slides.length - 2 : 1;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});
