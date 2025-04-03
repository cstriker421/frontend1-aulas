// script.js

console.log('Helldivers 2 Wiki - JS Loaded');

initFooterYear();
initIntroMessage();
initPageSpecificFeatures();

// ==== Functions ==== //
function initFooterYear() {
    const footer = document.getElementById('footer-text');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} Helldivers 2 Wiki Project | For educational purposes only`;
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

    // Now your JS should be dynamically populating the list (if enabled)
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

if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index') {
  getHomepageData();
}


// ==== Optional Future Features ==== //
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('nav ul');
//
// if (navToggle && navMenu) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('open');
//   });
// }
