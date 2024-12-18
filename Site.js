// Smooth scrolling
document.querySelectorAll('header a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
