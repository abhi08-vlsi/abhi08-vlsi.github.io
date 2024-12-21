// Select popup and buttons
const popup = document.getElementById("popup");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.getElementById("closeBtn");

// Open popup
contactBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
