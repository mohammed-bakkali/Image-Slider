// Select the carousel container element
const carousel = document.querySelector(".carousel");

// Select all arrow buttons within the container
const arrowBtns = document.querySelectorAll(".container i");

// Determine the width of the first card in the carousel
const firstCardWidth = carousel.querySelector(".box").offsetWidth;

// isDragging: A boolean flag to track whether the mouse button is being held down.
let isDragging = false,
  startX,
  startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((arrowButton) => {
  arrowButton.addEventListener("click", function () {
    // Determine the direction of scrolling based on the arrow button clicked
    if (arrowButton.id === "left") {
      // If left arrow button clicked, scroll left by subtracting the width of the first card
      carousel.scrollLeft -= firstCardWidth;
    } else {
      // If right arrow button clicked, scroll right by adding the width of the first card
      carousel.scrollLeft += firstCardWidth;
    }
  });
});

// Event handler for when mouse drag starts
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor position and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

// Event handler for mouse dragging
const dragging = (e) => {
  if (!isDragging) return; // If isDragging is false, return from here
  // Update the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

// Event handler for when mouse drag stops
const dragStop = (e) => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

// Add event listeners for mouse events
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
