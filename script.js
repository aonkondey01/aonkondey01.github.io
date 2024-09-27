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
const imageFolder = 'images/intro_images/'; // Path to images folder
const imageList = [
  'IMG_20230731_124154_814.jpg',
  'IMG_20230731_125400_151.jpg',
  'IMG_20230929_142012_752.jpg',
  'IMG_20230929_143300_768.jpg',
  'IMG_20230731_124154_982.jpg',
  'IMG_20230929_142012_112.jpg',
  'IMG_20230929_142013_076.jpg',
  'IMG_20240511_182858_671.jpg'
];

let currentIndex = 0;  // Track the current image

function loadImages() {
  const slider = document.querySelector('.image-slider');
  imageList.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = imageFolder + image;
    imgElement.alt = `Image ${image}`;
    slider.appendChild(imgElement);
  });
}

function showNextImage() {
  const images = document.querySelectorAll('.image-slider img');
  images[currentIndex].style.display = 'none';  // Hide current image
  currentIndex = (currentIndex + 1) % images.length;  // Move to the next image
  images[currentIndex].style.display = 'block';  // Show the next image
}

// Slower interval: change image every 6 seconds (6000 ms)
setInterval(showNextImage, 10000);  // Slows down image switching

window.onload = loadImages;
