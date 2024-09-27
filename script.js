let currentSlide = 0;

function scrollToSection(projectNum) {
  const section = document.getElementById(`project-detail-${projectNum}`);
  section.scrollIntoView({ behavior: 'smooth' });
}

function prevSlide() {
  const slides = document.querySelector('.carousel-slide');
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.children.length - 1;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  const slides = document.querySelector('.carousel-slide');
  currentSlide = (currentSlide < slides.children.length - 1) ? currentSlide + 1 : 0;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
