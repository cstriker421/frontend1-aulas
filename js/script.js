console.log('Helldivers 2 Wiki - JS Loaded');

// ==== Global Variables for Exercise 6 ==== //
const apiUrl = 'https://67f56857913986b16fa47750.mockapi.io/api/news';
const newsFeed = document.getElementById('news-feed');
const reloadButton = document.getElementById('reload-news');

// ==== Initialisers ==== //
initFooterYear();
initIntroMessage();
initPageSpecificFeatures();
initNewsFeed();

// Checks if on homepage early
function onHomePage() {
  return (
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname === '/index'
  );
}

if (onHomePage()) {
  getHomepageData();
}

// ==== Functions ==== //

// ==== Exercise 7: Proper API News Ticker ==== //
function initNewsTicker() {
  const tickerContent = document.getElementById('ticker-content');
  const tickerClone = document.getElementById('ticker-content-clone');
  const tickerApi = 'https://helldiverstrainingmanual.com/api/v1/war/news';

  fetch(tickerApi)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const messages = data.map(item => item.message.replace(/\n/g, ' — ')).join(' ⚡️ ');

        tickerContent.textContent = messages;
        tickerClone.textContent = messages;

        adjustTickerSpeed();

      } else {
        tickerContent.textContent = 'No news available at the moment.';
        tickerClone.textContent = 'No news available at the moment.';
        adjustTickerSpeed();
      }
    })
    .catch(error => {
      console.error("Error fetching news ticker:", error);
      tickerContent.textContent = 'Error loading Helldivers 2 News.';
      tickerClone.textContent = 'Error loading Helldivers 2 News.';
    });
}

initNewsTicker();
window.addEventListener('resize', adjustTickerSpeed);

// News ticker speed
function adjustTickerSpeed() {
  const tickerContent = document.querySelector('.news-ticker__content');
  const tickerContainer = tickerContent.parentElement;

  const contentWidth = tickerContent.scrollWidth;
  const containerWidth = tickerContainer.offsetWidth;

  const speed = 200;
  const totalDistance = contentWidth;
  const duration = totalDistance / speed;

  tickerContent.style.setProperty('--ticker-duration', `${duration}s`);
}


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
      nameForm.addEventListener('submit', function (event) {
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
function updateThemeToggleText(theme) {
  if (themeToggleButton) {
    themeToggleButton.textContent = theme === 'super-earth-mode'
      ? 'Switch to Galactic War Mode'
      : 'Switch to Super Earth Mode';
  }
}

const themeToggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'super-earth-mode') {
  document.body.classList.add('super-earth-mode');
  updateThemeToggleText(savedTheme);
} else {
  document.body.classList.remove('super-earth-mode');
  updateThemeToggleText('dark-mode');
}

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

// ==== Exercise 5: Article Draft System ====
const articleForm = document.getElementById('article-form');
const draftsList = document.getElementById('drafts-list');

function toBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function fromBase64(str) {
  return decodeURIComponent(escape(atob(str)));
}

function loadDrafts() {
  const encodedData = localStorage.getItem('articleDrafts');
  if (encodedData) {
    try {
      const jsonString = fromBase64(encodedData);
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Error decoding or parsing drafts:', error);
      return [];
    }
  }
  return [];
}

function saveDrafts(drafts) {
  const jsonString = JSON.stringify(drafts);
  const encoded = toBase64(jsonString);
  localStorage.setItem('articleDrafts', encoded);
}

function renderDrafts(drafts) {
  if (!draftsList) return;
  draftsList.innerHTML = '';
  drafts.forEach((draft) => {
    const li = document.createElement('li');
    li.textContent = `${draft.title}: ${draft.description}`;
    draftsList.appendChild(li);
  });
}

if (draftsList) {
  const drafts = loadDrafts();
  renderDrafts(drafts);

  if (articleForm) {
    articleForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const title = document.getElementById('article-title').value.trim();
      const description = document.getElementById('article-description').value.trim();

      if (title && description) {
        const newDraft = { title, description };
        drafts.push(newDraft);
        saveDrafts(drafts);
        renderDrafts(drafts);
        articleForm.reset();
        console.log('Draft saved:', newDraft);
      }

      const successMessage = document.getElementById('draft-success-message');
      if (successMessage) {
        successMessage.classList.remove('hidden');
        successMessage.textContent = 'Your dedication fuels democracy, Citizen!';
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 2500);
      }
    });
  }
}

// ==== Exercise 6: Mock API News Feed ====
function initNewsFeed() {
  if (!(window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index')) {
    return;
  }

  const apiUrl = 'https://67f56857913986b16fa47750.mockapi.io/api/news';
  const newsFeed = document.getElementById('news-feed');
  const reloadButton = document.getElementById('reload-news');
  const simulatePostButton = document.getElementById('simulate-post');

  // Fetch and display posts
  async function loadNewsFeed() {
    try {
      newsFeed.innerHTML = '<li>Loading news feed...</li>';
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const shuffledData = data.sort(() => Math.random() - 0.5);
      const firstFive = shuffledData.slice(0, 5);
  
      newsFeed.innerHTML = '';
      firstFive.forEach(post => {
        const li = document.createElement('li');
  
        const postContent = document.createElement('div');

        // Author name
        const authorText = document.createElement('strong');
        authorText.textContent = post.author;

        // Image
        const image = document.createElement('img');
        image.src = post.title;
        image.alt = 'Report Thumbnail';

        // Add to container
        postContent.appendChild(authorText);
        postContent.appendChild(image);
  
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('news-buttons');
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deletePost(post.id));
  
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editPost(post.id, post));
  
        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);
  
        li.appendChild(postContent);
        li.appendChild(buttonGroup);
  
        newsFeed.appendChild(li);
      });
  
      console.log("News Feed loaded:", firstFive);
    } catch (error) {
      console.error("Error loading news feed:", error);
      newsFeed.innerHTML = '<li>Error loading news feed.</li>';
    }
  }
  
  // Attaches form listener
  const postForm = document.getElementById('post-form');

  if (postForm) {
    postForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const authorInput = document.getElementById('post-author').value.trim();
      const titleInput = document.getElementById('post-title').value.trim();

      if (!authorInput || !titleInput) {
        alert('Please fill in both the author and image URL.');
        return;
      }

      const newPost = {
        author: authorInput,
        title: titleInput
      };

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPost)
        });

      const result = await response.json();
      console.log("New report submitted:", result);
      alert('Report successfully submitted!');

      postForm.reset();
      loadNewsFeed();
    } catch (error) {
        console.error("Error submitting report:", error);
        alert('An error occurred. Please try again.');
      }
  });
}


  // Deletes post
  async function deletePost(postId) {
    const confirmDelete = confirm('Are you sure you want to delete this report?');
    if (!confirmDelete) return;

    try {
      await fetch(`${apiUrl}/${postId}`, { method: 'DELETE' });
      console.log(`Post ${postId} deleted.`);
      alert('Report deleted successfully.');
      loadNewsFeed();
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  }

  // Edit post
  async function editPost(postId, post) {
    const newAuthor = prompt('Enter new author name:', post.author);
    const newTitle = prompt('Enter new image URL:', post.title);

    if (!newAuthor || !newTitle) {
      alert('Edit cancelled or invalid input.');
      return;
    }

    const updatedPost = { author: newAuthor, title: newTitle };

    try {
      const response = await fetch(`${apiUrl}/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost)
      });

      const result = await response.json();
      console.log(`Post ${postId} updated:`, result);
      alert('Report updated successfully.');
      loadNewsFeed();
    } catch (error) {
      console.error("Error updating report:", error);
    }
  }

  // Initial load
  loadNewsFeed();

  // Event listeners
  if (reloadButton) reloadButton.addEventListener('click', loadNewsFeed);
  if (simulatePostButton) simulatePostButton.addEventListener('click', simulatePost);
}

// ==== Exercise 8: Native JS API (IntersectionObserver) ==== //
function initFactionObserver() {
  const factionCards = document.querySelectorAll('.faction-card');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('reveal'); // trigger animation
        obs.unobserve(entry.target); // Only animates once
      }
    });
  }, {
    threshold: 0.2
  });

  factionCards.forEach(card => {
    observer.observe(card);
  });
}

// Only runs on the factions page
if (window.location.pathname.includes('factions.html')) {
  initFactionObserver();
}


// ==== Optional Future Features ==== //
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('nav ul');
// if (navToggle && navMenu) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('open');
//   });
// }
