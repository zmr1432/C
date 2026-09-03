document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.image-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.image-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

  // ఫుల్ స్క్రీన్ రిక్వెస్ట్
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  // స్క్రీన్ లాండ్ స్కేప్ ఓరియంటేషన్ లాకింగ్
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape').catch(err => console.error(err));
  }
});



