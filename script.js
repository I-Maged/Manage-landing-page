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
