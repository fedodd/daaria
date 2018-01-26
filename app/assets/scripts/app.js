'use strict';

// Header toggle

let menuToggleBlock = document.getElementById('menuToggleBlock');
let menuToggle = document.getElementById('menuToggle');
let menu = document.getElementById('headerMenu');

const classToggle = () => {
  menuToggle.classList.toggle('is__active');
  menu.classList.toggle('is__active');
}

menuToggleBlock.addEventListener('click', classToggle);

// Gallery

$(document).ready(function() {
  $('.photoGallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
});
