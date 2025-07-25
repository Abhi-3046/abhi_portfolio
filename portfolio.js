// Portfolio JavaScript - Abhishek Shirure

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header-glass');
  if (header) {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(15, 15, 35, 0.95)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
