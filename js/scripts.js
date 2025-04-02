// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Helldivers 2 Wiki - JS Loaded');
  
    // Dynamic welcome message on the home page
    const introSection = document.querySelector('.intro');
    if (introSection) {
      const message = document.createElement('p');
      message.textContent = "Glory to Super Earth! Stay informed, Citizen. Never fall for enemy propaganda!";
      introSection.appendChild(message);
    }
  
    // Future feature - toggle mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  });
  
  /* 
    Future JavaScript plans:
    - Add search bar functionality
    - Load dynamic content (e.g. JSON files or API data)
    - Add collapsible sections
    - Implement light/dark mode toggle
    - Add article contribution system
  */
  