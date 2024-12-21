// Add interactivity for a smooth hover animation
document.querySelectorAll('.section').forEach((section) => {
  section.addEventListener('mouseover', () => {
    section.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.8)';
  });

  section.addEventListener('mouseout', () => {
    section.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.6)';
  });
});
