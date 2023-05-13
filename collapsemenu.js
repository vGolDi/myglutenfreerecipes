const container2 = document.querySelector('.container2');
const categories = document.querySelector('.categories');

container2.addEventListener('click', () => {
  categories.classList.toggle('active');
  container2.classList.toggle('change');
});