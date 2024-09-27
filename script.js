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

const imageFolder = 'images/intro_images/';
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
// Dynamically populate the image slider with images from the list
function loadImages() {
  const slider = document.querySelector('.image-slider');
  imageList.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = imageFolder + image;
    imgElement.alt = `Image ${image}`;
    slider.appendChild(imgElement);
  });
}

window.onload = loadImages;

let currentIndex = 0;

function showNextImage() {
  const images = document.querySelectorAll('.image-slider img');
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
