const sliderSimple = document.getElementById("sliderSimple");
const sliderContentWrapper = document.querySelector(".slider__content-wrapper");
const sliderItems = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dots-item");

const prevBtn = document.querySelector(".slider__button-prev");
const nextBtn = document.querySelector(".slider__button-next");

let i;
let defaultSlide = 1;
let width;
let count;

function nextSlide() {
    showSlides(defaultSlide += 1)
}

function previousSlide() {
    showSlides(defaultSlide -= 1)
}

function currentSlide(n) {
    showSlides(defaultSlide = n)
}

function showSlides(n) {
    if (n > sliderItems.length) {
        defaultSlide = 1
    }

    if (n < 1) {
        defaultSlide = sliderItems.length
    }

    for (i = 0; i < sliderItems.length; i++) {

        sliderItems[i].classList.remove('slider__item--active');
    }

    for (i = 0; i < sliderDots.length; i++) {
        sliderDots[i].className = sliderDots[i].className.replace(" slider__dots-item--active", "");
    }

    sliderItems[defaultSlide - 1].classList.add('slider__item--active');
    sliderDots[defaultSlide - 1].className += " slider__dots-item--active";
}
showSlides(defaultSlide);

for (i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener("click", (function(i) {
        return function () {
            currentSlide(i+1);
        };
    }(i)));
}

prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);


setInterval(() => {
    showSlides(defaultSlide += 1);
}, 7000);



function init() {
    width = sliderSimple.offsetWidth;
    sliderContentWrapper.style.width = width * sliderItems.length + 'px';
    sliderItems.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

function rollSlider() {
    sliderContentWrapper.style.transform = 'translate(-' + count * width + 'px)';
}

sliderSimple.addEventListener('keypress', function(event) {
    if (event.keyCode === '37')  {
        previousSlide();
        }
    }
);