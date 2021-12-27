const sliderContent = document.querySelectorAll('.slider-item');
const sliderLine = document.querySelector('.slider-line');
const sliderDots = document.querySelectorAll('.slider-dots .slider-dots__item');

let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * sliderContent.length + 'px';
    sliderContent.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';

        if(item.classList.contains('slider-item--active')) {
            item.classList.remove('slider-item--active')
        } else {
            item.classList.add('slider-item--active')
        }
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= sliderContent.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = sliderContent.length - 1;
    }
    rollSlider();
});

sliderDots.forEach(dots => {
    dots.addEventListener('click', function () {
        if (count++) {
            dots.classList.toggle('slider-dots__item--active');
            dots[count - 1].classList.remove('slider-dots__item--active');
        }
        rollSlider();
    });
})


function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
