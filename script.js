// === NAVIGATION TOGGLE FOR MOBILE ===
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  }

  // === INGREDIENT TOOLTIP ===
  const ingredients = document.querySelectorAll('.ingredient');
  const tooltip = document.getElementById('tooltip');

  if (tooltip && ingredients.length) {
    ingredients.forEach((ingredient) => {
      ingredient.addEventListener('mouseenter', (e) => {
        const info = ingredient.getAttribute('data-info');
        tooltip.innerText = info;
        tooltip.style.display = 'block';
        tooltip.style.top = `${e.pageY - 40}px`;
        tooltip.style.left = `${e.pageX + 10}px`;
      });

      ingredient.addEventListener('mousemove', (e) => {
        tooltip.style.top = `${e.pageY - 40}px`;
        tooltip.style.left = `${e.pageX + 10}px`;
      });

      ingredient.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
  }

  // === CONTACT FORM VALIDATION ===
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('[name="name"]').value.trim();
      const email = this.querySelector('[name="email"]').value.trim();
      const message = this.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Message sent successfully!');
      this.reset();
    });
  }

  // === VIDEO PLAYER CUSTOM CONTROLS ===
  const video = document.getElementById('neuroVideo');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const muteBtn = document.getElementById('muteBtn');

  if (video && playPauseBtn && muteBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸';
      } else {
        video.pause();
        playPauseBtn.textContent = '▶️';
      }
    });

    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? '🔇' : '🔊';
    });
  }
});
