// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all images with the 'lazy-img' class
  const lazyImages = document.querySelectorAll(".lazy-img");

  // Create a new IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Load the image by setting its 'src' attribute
        entry.target.src = entry.target.dataset.src;

        // Stop observing the image
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe each lazy image
  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});

// Smooth scrolling behavior for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
