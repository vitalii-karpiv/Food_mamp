window.addEventListener('DOMContentLoaded', function () {
    const tabs = require('./modules/tabs'),
          cards = require('./modules/cards'),
          calc = require('./modules/calculator'),
          forms = require('./modules/forms'),
          modal = require('./modules/modal'),
          slider = require('./modules/slider'),
          timer = require('./modules/timer');
          
    tabs();
    cards();
    calc();
    forms();
    modal();
    slider();
    timer();
});