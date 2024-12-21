// Get elements
const popup = document.getElementById("popup");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.getElementById("closeBtn");

// Show popup
contactBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup on outside click
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
