let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector(".certifications-carousel");
  const items = document.querySelectorAll(".certification-item");
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Optional: Add touch swipe functionality for mobile
let touchStartX = 0;
let touchEndX = 0;

const carouselContainer = document.querySelector(".certifications-container");

carouselContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carouselContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > 50) {
    moveCarousel(-1); // Swipe left
  } else if (swipeDistance < -50) {
    moveCarousel(1); // Swipe right
  }
}

function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}