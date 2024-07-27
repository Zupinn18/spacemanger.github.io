const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


let currentIndex = 1; // Start from the first actual image
    const container = document.querySelector('.story-container');
    const stories = document.querySelectorAll('.story');
    const totalImages = stories.length;

    function slideStories() {
        currentIndex++;

        container.style.transition = 'transform 0.5s ease';
        container.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (currentIndex === totalImages - 1) { // If it's the last cloned image
            setTimeout(() => {
                container.style.transition = 'none';
                container.style.transform = `translateX(-100%)`; // Jump to the original first image
                currentIndex = 1; // Reset to the original first image
            }, 500);
        }
    }

    setInterval(slideStories, 5000); // Slide every 3 seconds