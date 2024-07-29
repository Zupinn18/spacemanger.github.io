const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

let currentIndex = 0; // Start from the first actual image
const container = document.querySelector('.story-container');
const story = document.querySelector('.story');
const images = story.querySelectorAll('img');
const totalImages = images.length;
const imageWidth = images[0].clientWidth + 20; // Width of image plus gap

function slideStories() {
    currentIndex++;

    if (currentIndex < totalImages) {
        story.style.transition = 'transform 0.5s ease';
        story.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    if (currentIndex === totalImages - 1) { // If it's the last cloned image
        setTimeout(() => {
            story.style.transition = 'none';
            story.style.transform = `translateX(0)`; // Jump to the original first image
            currentIndex = 0; // Reset to the original first image
        }, 500);
    }
}

setInterval(slideStories, 5000); // Slide every 5 seconds
