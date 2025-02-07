document.addEventListener("DOMContentLoaded", () => {
  fetch("../header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // Initialize the sidebar functionality after header is loaded
      initializeSidebar();
    })
    .catch((error) => console.error("Error loading header:", error));
});

// Sidebar initialization logic
function initializeSidebar() {
  const productsMenu = document.getElementById("productsMenu");
  const sidebar = document.getElementById("sidebar");

  if (productsMenu && sidebar) {
    // Open Sidebar
    productsMenu.addEventListener("click", () => {
      sidebar.classList.add("active");
    });

    // Close Sidebar
    const closeButton = sidebar.querySelector(".close-btn");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    }
  } else {
    console.error("Products menu or sidebar element not found");
  }
}

// to open the responsiveness
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  // Toggle menu visibility
  mobileMenu.classList.toggle("active");

  // Toggle hamburger icon animation
  bar1.classList.toggle("rotate45");
  bar2.classList.toggle("opacityZero");
  bar3.classList.toggle("inverseRotate");
}
