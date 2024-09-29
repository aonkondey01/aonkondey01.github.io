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
// images on the right
const imageFolder = 'images/intro_images/'; // Make sure this path is correct
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

let currentIndex = 0;
function loadImages() {
  const slider = document.querySelector('.image-slider');
  if (!slider) {
    console.error('Image slider not found');
    return;
  }
  imageList.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = imageFolder + image;
    imgElement.alt = `Image ${image}`;
    slider.appendChild(imgElement);
    console.log(`Added image: ${imgElement.src}`);  // Log to ensure images are added
  });
}


function showNextImage() {
  const images = document.querySelectorAll('.image-slider img');
  images.forEach((img, index) => img.style.opacity = '0');  // Hide all images
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = '1';  // Show the current image
}

// Slower interval: stay visible for 5 seconds, fade out over 2 seconds
setInterval(showNextImage, 7000);  // Switch image every 7 seconds, where 5 seconds is full opacity

window.onload = loadImages;
