const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    if(currentSlide < slider.length -1) {
        currentSlide++
        hideSlider()
        showSlider()
    }
}

function prevSlider() {
    hideSlider()
    if (currentSlide > 0) {
        currentSlide--
    }
    showSlider()
}

    btnNext.addEventListener('click', nextSlider)
    btnPrev.addEventListener('click', prevSlider)

