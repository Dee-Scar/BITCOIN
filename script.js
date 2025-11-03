// Toggle dark mode with switch
const toggleSwitch = document.getElementById("toggleDark");


// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a'); // get all the nav links

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu when any nav link is clicked
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Fade-in on load
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  faders.forEach(el => {
    setTimeout(() => el.classList.add("visible"), 300);
  });

  const form = document.getElementById("contactForm");
  const message = form.querySelector(".form-message");
  form.addEventListener("submit", e => {
    e.preventDefault();
    message.textContent = "Message sent successfully!";
    form.reset();
  });
});

  
  // Fade-in animation
  document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
    faders.forEach(el => {
      setTimeout(() => el.classList.add("visible"), 300);
    });
  
    // Form validation
    const form = document.getElementById("contactForm");
    const message = form.querySelector(".form-message");
    form.addEventListener("submit", e => {
      e.preventDefault();
      message.textContent = "Message sent successfully!";
      form.reset();
    });
  });


