// Year
const thisYear = document.querySelectorAll('.year');
const currentYear = new Date().getFullYear();
for (let i = 0; i < thisYear.length; i++) {
  thisYear[i].innerHTML = currentYear;
}

// Hambuger Menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

// Carousel
const sliderElement = document.getElementById('slider');
const slides = document.getElementById('slider').getElementsByTagName('li');
const totalSlides = sliderElement.childElementCount;

let currentSlideID = 1;

function next() {
  if (currentSlideID < totalSlides) {
    currentSlideID++;
    showSlide();
  }
}
function prev() {
  if (currentSlideID > 1) {
    currentSlideID--;
    showSlide();
  }
}
function showSlide() {
  for (let i = 0; i < totalSlides; i++) {
    const el = slides[i];
    if (currentSlideID === i + 1) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }
}
