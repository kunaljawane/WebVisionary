// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form Validation for Contact Form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      alert('Your message has been sent successfully!');
      contactForm.reset();
    });
  }
  
  // Email Validation Helper
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Hover Animation for Portfolio Items
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', function () {
      this.classList.add('hovered');
    });
  
    item.addEventListener('mouseout', function () {
      this.classList.remove('hovered');
    });
  });



  