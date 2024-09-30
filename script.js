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
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg',
  'img8.jpg',
  'img9.jpg',
  'img10.jpg',
  'img11.jpg',
  'img12.jpg',
  'img13.jpg',
  'img14.jpg',
  'img15.jpg'
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
