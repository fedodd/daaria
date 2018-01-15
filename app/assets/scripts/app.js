'use strict';

let menuToggleBlock = document.getElementById('menuToggleBlock');
let menuToggle = document.getElementById('menuToggle');
let menu = document.getElementById('headerMenu');

const classToggle = () => {
  menuToggle.classList.toggle('is__active');
  menu.classList.toggle('is__active');
}

menuToggleBlock.addEventListener('click', classToggle);
