/* Custom JavaScript for data scientist portfolio website */

// Smooth scrolling for anchor links
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: 80
  });
  
  // Form submission
  const form = document.getElementById('contact-form');
  const formName = document.getElementById('name');
  const formEmail = document.getElementById('email');
  const formMessage = document.getElementById('message');
  const formSubmit = document.getElementById('submit-button');
  const formStatus = document.getElementById('form-status');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formSubmit.disabled = true;
    formSubmit.textContent = 'Sending...';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        formName.value = '';
        formEmail.value = '';
        formMessage.value = '';
        formSubmit.textContent = 'Send Message';
        formStatus.textContent = 'Message sent successfully!';
        formStatus.classList.remove('text-red-500');
        formStatus.classList.add('text-green-500');
        formSubmit.disabled = false;
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        formSubmit.textContent = 'Send Message';
        formStatus.textContent = 'There was an error sending your message. Please try again.';
        formStatus.classList.remove('text-green-500');
        formStatus.classList.add('text-red-500');
        formSubmit.disabled = false;
      }
    };
    const formData = new FormData(form);
    xhr.send(new URLSearchParams(formData).toString());
  });

  // Animate skill bars on page load
window.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-level');
  skillBars.forEach(skillBar => {
    const skillLevel = skillBar.getAttribute('style');
    skillBar.style.width = skillLevel;
  });
});

  