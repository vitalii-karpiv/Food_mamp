import calculator from "./modules/calculator.js";
import cards from "./modules/cards.js";
import forms from "./modules/forms.js";
import modal from "./modules/modal.js";
import slider from "./modules/slider.js";
import tabs from "./modules/tabs.js";
import timer from "./modules/timer.js";
import {openModal} from "./modules/modal"

window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    calculator();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        numberOfSlides: '#total',
        numberOfCurrentSlide: '#current',
        wrapper: '.offer__slider-wrapper',
        fieldOfSlides: '.offer__slider-inner'
    });
    timer(".timer", 2020-12-30);
});