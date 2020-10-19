function slider() {
    // Slider

    /*const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          totalSlides = document.querySelector('#total');
    let currentSlide = document.querySelector('#current'),
        slideIndex = 1;
  
    console.log(slides);
  
    showSlides(slideIndex);
  
    function addZero(n) {
        if(n < 10) {
            return `0${n}`;
        } else {
            return n;
        };
    };
  
    function showSlides(n) {
        if(n > slides.length) {
          slideIndex = n = 1;
        };
  
        if(n < 1) {
          slideIndex = n = slides.length;
        };
  
        slides.forEach(item => item.style.display = "none");
  
        slides[n - 1].style.display = "block";
        currentSlide.innerHTML = addZero(n);
    }
  
    function changeSlide(n) {
        slideIndex += n;
        showSlides(slideIndex);
    };
  
    prev.addEventListener('click', () => {
      changeSlide(-1);
    });
  
    next.addEventListener('click', () => {
      changeSlide(1);
    });
  */

 let offset = 0;
 let slideIndex = 1;

 const slides = document.querySelectorAll('.offer__slide'),
     slider = document.querySelector('.offer__slider')
 prev = document.querySelector('.offer__slider-prev'),
     next = document.querySelector('.offer__slider-next'),
     totalSlides = document.querySelector('#total'),
     currentSlide = document.querySelector('#current'),
     slideWrapper = document.querySelector('.offer__slider-wrapper'),
     width = window.getComputedStyle(slideWrapper).width,
     slidesField = document.querySelector('.offer__slider-inner');

 function deleteSumbols(string) {
     return +string.replace(/\D/g, '');
 };

 function dotsRefresh() {
     dots.forEach(dot => dot.style.opacity = ".5");
     dots[slideIndex - 1].style.opacity = 1;
 };

 if (slides.length < 10) {
     totalSlides.textContent = `0${slides.length}`;
     currentSlide.textContent = `0${slideIndex}`
 } else {
     totalSlides.textContent = slides.length;
     currentSlide.textContent = slideIndex;
 }

 slidesField.style.width = 100 * slides.length + "%";
 slidesField.style.display = "flex";
 slidesField.style.transition = '0.5s all'

 slideWrapper.style.overflow = 'hidden';

 slides.forEach(slide => {
     slide.style.width = width;
 });

 slider.style.position = "relative";

 const indicators = document.createElement("ol"),
     dots = [];
 indicators.classList.add("carousel-indicators");
 indicators.style.cssText = `
 position: absolute;
 right: 0;
 bottom: 0;
 left: 0;
 z-index: 15;
 display: flex;
 justify-content: center;
 margin-right: 15%;
 margin-left: 15%;
 list-style: none;
`
 slider.append(indicators);

 for (let i = 0; i < slides.length; i++) {
     const dot = document.createElement('li');
     dot.setAttribute("data-slide-to", i + 1);
     dot.style.cssText = `
     box-sizing: content-box;
     flex: 0 1 auto;
     width: 30px;
     height: 6px;
     margin-right: 3px;
     margin-left: 3px;
     cursor: pointer;
     background-color: #fff;
     background-clip: padding-box;
     border-top: 10px solid transparent;
     border-bottom: 10px solid transparent;
     opacity: .5;
     transition: opacity .6s ease;
   `;
     if (i == 0) {
         dot.style.opacity = 1;
     };
     indicators.append(dot);
     dots.push(dot);
 };

 next.addEventListener('click', () => {
     if (offset == deleteSumbols(width) * (slides.length - 1)) {
         offset = 0;
     } else {
         offset += deleteSumbols(width);
     };

     slidesField.style.transform = `translateX(-${offset}px`;

     if (slideIndex == slides.length) {
         slideIndex = 1;
     } else {
         slideIndex++;
     }

     if (slides.length < 10) {
         currentSlide.textContent = `0${slideIndex}`;
     } else {
         currentSlide.textContent = slideIndex;
     }

     dotsRefresh();
 })


 prev.addEventListener('click', () => {
     if (offset == 0) {
         offset = deleteSumbols(width) * (slides.length - 1);
     } else {
         offset -= deleteSumbols(width);
     }

     slidesField.style.transform = `translateX(-${offset}px)`;

     if (slideIndex == 1) {
         slideIndex = slides.length;
     } else {
         slideIndex--;
     }

     if (slides.length < 10) {
         currentSlide.textContent = `0${slideIndex}`;
     } else {
         currentSlide.textContent = slideIndex;
     }

     dotsRefresh();
 });

 dots.forEach(dot => {
     dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');

         slideIndex = slideTo;
         offset = deleteSumbols(width) * (slideTo - 1);

         slidesField.style.transform = `translateX(-${offset}px)`;

         if (slides.length < 10) {
             current.textContent = `0${slideIndex}`;
         } else {
             current.textContent = slideIndex;
         }

         dotsRefresh();
     });
 });

}

module.exports = slider;