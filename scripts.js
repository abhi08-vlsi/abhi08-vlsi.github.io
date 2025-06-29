document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('cardModal');
  const modalDetails = document.getElementById('modalDetails');
  const closeBtn = document.querySelector('.close-btn');

  // ✅ On Card Click → Open Modal with Only Back Content
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const backSide = card.querySelector('.back');
      modalDetails.innerHTML = backSide ? backSide.innerHTML : '<p>No additional info available.</p>';
      modal.style.display = 'block';
    });
  });

  // ✅ Close Modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // ✅ Close when clicking outside modal content
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  // ✅ Typing Animation
  const text = "ABHIRAJAN R - TECHNOLOGIST";
  let index = 0;
  function type() {
    document.getElementById('typing').textContent = text.slice(0, index++);
    if (index <= text.length) setTimeout(type, 120);
  }
  type();

  // ✅ Dark Mode Toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // ✅ Scroll Reveal
  ScrollReveal().reveal('.card', {
    interval: 150,
    distance: '60px',
    origin: 'bottom',
    reset: false
  });

  // ✅ Scroll To Top Button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function() {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ✅ Live Clock
  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleString();
  }
  setInterval(updateClock, 1000);
  updateClock();
}); 