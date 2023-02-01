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
<<<<<<< HEAD
        hideSlider()
        showSlider()
    }
=======
    hideSlider()
    showSlider()
>>>>>>> 1a1d6d94c42fde4f23daf0318265c58b7593f657
}
}

function prevSlider() {
    hideSlider()
<<<<<<< HEAD
    if (currentSlide > 0) {
        currentSlide--
    }
=======
    if(currentSlide > 0) {
        currentSlide--} 
   
>>>>>>> 1a1d6d94c42fde4f23daf0318265c58b7593f657
    showSlider()
}

    btnNext.addEventListener('click', nextSlider)
    btnPrev.addEventListener('click', prevSlider)

<<<<<<< HEAD
    
=======
    console.log(slider)
        
>>>>>>> 1a1d6d94c42fde4f23daf0318265c58b7593f657
