document.addEventListener("DOMContentLoaded", function(event) {
    function sliderFunction() {
        const slider = document.querySelector('.materials');
        const sliderItems = slider.querySelectorAll('.glimpses-card');
        const maxSlide = sliderItems.length - 1;
        let currentSlide = 0;
        console.warn(slider.scrollWidth, 'slider');
        

        function moveSlider(slidesToMove) {
            const newSlide = currentSlide + slidesToMove;
            if (newSlide < 0) {
                currentSlide = 0;
            } else if (newSlide > maxSlide) {
                currentSlide = maxSlide;
            } else {
                currentSlide = newSlide;
            }

            const sectionWidth = slider.scrollWidth;
            const totalWidth = sliderItems.length * 290;
            const offset = (totalWidth - sectionWidth) / maxSlide;

            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(-${currentSlide * (290 + offset)}px)`;
        }

        const arrows = document.querySelectorAll('.slider-arrow');

        arrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                if (arrow.querySelector('.slider-arrow-left')) {
                    moveSlider(-1);
                } else if (arrow.querySelector('.slider-arrow-right')) {
                    moveSlider(1);
                }
            });
        });
    }

    sliderFunction();
});
