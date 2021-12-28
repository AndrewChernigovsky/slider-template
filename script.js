const sliderSimple = document.getElementById("sliderSimple");
const sliderItems = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dots-item");

const prevBtn = document.querySelector(".slider__button-prev");
const nextBtn = document.querySelector(".slider__button-next");

var i;
var defaultSlide = 1;

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
