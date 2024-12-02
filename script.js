//Navbar
const menuIcon = document.getElementsById('menuIcon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const sliderImages = document.querySelector('slider-images');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const sliderWidth = 240;
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    if(currentSlide < sliderImages.children.length - 3){
        currentSlide++;
        updateSliderPosition();
    }
});

prevBtn.addEventListener('click', () => {
    if(currentSlide < sliderImages.children.length - 3){
        currentSlide++;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    sliderImages.computedStyleMap.transform = 'translateX(-$ {currentSlide* slideWidth}px)';
}