console.log('Helldivers 2 Wiki - JS Loaded');

// ==== Initializers ==== //
initFooterYear();
initIntroMessage();
initPageSpecificFeatures();

if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index') {
  getHomepageData();
}

// ==== Functions ==== //

// Footer Year Updater
function initFooterYear() {
  const footer = document.getElementById('footer-text');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Helldivers 2 Wiki Project | For educational purposes only`;
  }
}

// Intro Message on Homepage
function initIntroMessage() {
  const introSection = document.querySelector('.intro');
  if (introSection) {
    const message = document.createElement('p');
    message.textContent = "Glory to Super Earth! Stay informed, Citizen. Never fall for enemy propaganda!";
    introSection.appendChild(message);
  }
}

// Page Specific Features (About Page)
function initPageSpecificFeatures() {
  if (window.location.pathname.includes('about.html')) {
    const container = document.querySelector('.content-container');
    const msg = document.createElement('p');
    msg.textContent = "This is a student fan project. There is no official affiliation with Helldivers 2, Arrowhead Studio, or Sony.";
    container.appendChild(msg);

    // Exercise 3: Name form handling
    const nameForm = document.getElementById('name-form');
    const welcomeMessage = document.getElementById('welcome-message');

    const savedName = localStorage.getItem('citizenName');
    if (savedName) {
      console.log("Welcome back, citizen:", savedName);
      welcomeMessage.textContent = `Welcome back, Citizen ${savedName}!`;
    }

    if (nameForm) {
      nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('citizen-name').value.trim();

        if (nameInput) {
          localStorage.setItem('citizenName', nameInput);
          console.log("Citizen name saved:", nameInput);
          welcomeMessage.textContent = `Welcome, citizen ${nameInput}!`;
          nameForm.reset();
        }
      });
    }
  }
}

// ==== Exercise 1: JSON Conversion ====
const personalInfo = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com"
};

const jsonString = JSON.stringify(personalInfo);
console.log("Exercise 1 - JSON String:", jsonString);

const parsedInfo = JSON.parse(jsonString);
console.log("Exercise 1 - Parsed name:", parsedInfo.name);

// ==== Exercise 2: Fetch JSON Data with async/await ====
async function getHomepageData() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Exercise 2 - Homepage Data:", data);
    console.log("Exercise 2 - Featured Articles:", data.featuredArticles);

    const featuredList = document.getElementById('featured-list');
    if (featuredList && Array.isArray(data.featuredArticles)) {
      if (data.featuredArticles.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.featuredArticles.length);
        const article = data.featuredArticles[randomIndex];

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = article.link;
        a.textContent = article.title;
        li.appendChild(a);
        featuredList.appendChild(li);
      }
    }

  } catch (error) {
    console.error("Error loading data.json:", error);
  }
}

// ==== Exercise 4: Theme Toggle with localStorage ====

// Dynamic button text updater
function updateThemeToggleText(theme) {
  if (themeToggleButton) {
    themeToggleButton.textContent = theme === 'super-earth-mode'
      ? 'Switch to Galactic War Mode'
      : 'Switch to Super Earth Mode';
  }
}

// Check saved theme preference on page load
const themeToggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'super-earth-mode') {
  document.body.classList.add('super-earth-mode');
  updateThemeToggleText(savedTheme);
} else {
  document.body.classList.remove('super-earth-mode'); // Ensure it's off if dark mode
  updateThemeToggleText('dark-mode');
}

// Theme toggle button logic
if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('super-earth-mode')) {
      document.body.classList.remove('super-earth-mode');
      localStorage.setItem('theme', 'dark-mode');
      updateThemeToggleText('dark-mode');
    } else {
      document.body.classList.add('super-earth-mode');
      localStorage.setItem('theme', 'super-earth-mode');
      updateThemeToggleText('super-earth-mode');
    }
  });
}

// ==== Optional Future Features ==== //
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('nav ul');
// if (navToggle && navMenu) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('open');
//   });
// }
