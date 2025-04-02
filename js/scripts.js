document.addEventListener('DOMContentLoaded', () => {
    console.log('Helldivers 2 Wiki - JS Loaded');
  
    initFooterYear();
    initIntroMessage();
    initPageSpecificFeatures();
    // future: initSearchFeature();
    // future: initDarkModeToggle();
  
    // Toggle mobile menu (future for potential nav toggle button)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
  
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }
});
  
/* ==== Functions ==== */
function initFooterYear() {
    const year = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = `&copy; ${year} Helldivers 2 Wiki Project`;
    }
}
  
function initIntroMessage() {
    const introSection = document.querySelector('.intro');
    if (introSection) {
        const message = document.createElement('p');
        message.textContent =
            "Glory to Super Earth! Stay informed, Citizen. Never fall for enemy propaganda!";
        introSection.appendChild(message);
    }
}
  
function initPageSpecificFeatures() {
    if (window.location.pathname.includes('about.html')) {
        const main = document.querySelector('main');
        const msg = document.createElement('p');
        msg.textContent = "This is a student fan project. No official affiliation.";
        main.appendChild(msg);
    }
}
  
/* 
Future JavaScript plans:
- Add search bar functionality
- Load dynamic content (ie JSON files or API data)
- Add collapsible sections
- Implement light/dark mode toggle
- Add article contribution system
- User reg and login? Maybe
- Admin panel? Maybe
*/
  