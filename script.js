<<<<<<< HEAD
// Sticky Nav - Handled by CSS (position: sticky)

// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll (handled by CSS with scroll-behavior: smooth)

// Ingredient Tooltip Hover
const ingredients = document.querySelectorAll('.ingredient');
const tooltip = document.getElementById('tooltip');

ingredients.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    const info = e.target.getAttribute('data-info');
    tooltip.innerText = info;
    tooltip.style.display = 'block';
    tooltip.style.top = `${e.pageY - 40}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  item.addEventListener('mousemove', (e) => {
    tooltip.style.top = `${e.pageY - 40}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  item.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  alert('Message sent successfully!');
  this.reset();
});
const ingredients = document.querySelectorAll('.ingredient');
const tooltip = document.getElementById('tooltip');

ingredients.forEach(ingredient => {
  ingredient.addEventListener('mousemove', (e) => {
    const info = ingredient.getAttribute('data-info');
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.innerText = info;
    tooltip.style.display = 'block';
  });

  ingredient.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});
=======
// Sticky Nav - Handled by CSS (position: sticky)

// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll (handled by CSS with scroll-behavior: smooth)

// Ingredient Tooltip Hover
const ingredients = document.querySelectorAll('.ingredient');
const tooltip = document.getElementById('tooltip');

ingredients.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    const info = e.target.getAttribute('data-info');
    tooltip.innerText = info;
    tooltip.style.display = 'block';
    tooltip.style.top = `${e.pageY - 40}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  item.addEventListener('mousemove', (e) => {
    tooltip.style.top = `${e.pageY - 40}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  item.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  alert('Message sent successfully!');
  this.reset();
});
const ingredients = document.querySelectorAll('.ingredient');
const tooltip = document.getElementById('tooltip');

ingredients.forEach(ingredient => {
  ingredient.addEventListener('mousemove', (e) => {
    const info = ingredient.getAttribute('data-info');
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.innerText = info;
    tooltip.style.display = 'block';
  });

  ingredient.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});
>>>>>>> de80d3b5ae9b54506a2293202997f250c8a0bab2
