# Helldivers 2 Fan Wiki

## Description
The **Helldivers 2 Fan Wiki** is a growing, user-friendly fan project built as part of a Front-End Web Development course.  
It aims to provide quick, clear, and detailed information about *Helldivers 2*, while serving as an evolving platform to apply and demonstrate web development techniques.

The site features dynamic elements, clean navigation, and multiple interactive exercises — all wrapped in a *Super Earth*-inspired aesthetic that honours the game’s propaganda style.

---

## Features

### ✅ Implemented
- Responsive, multi-page layout (`index`, `about`, `factions`, `weapons`, `enemies`)
- Custom color palette and typography inspired by *Helldivers 2*
- Dynamic footer with auto-updating year
- **Theme toggle** between:
  - Default dark *Galactic War* mode (yellow/black, dark custom background)
  - *Super Earth Armed Forces* mode (blue/white, light custom background)
- **LocalStorage**:
  - Saves theme preference between sessions
  - Stores and displays user-entered name (via form on the "About" page)
- Favicon support (`/assets/icons/`)
- Featured article on homepage, randomly selected from local `data.json`
- JSON exercises:
  - Object ↔️ JSON string conversion
  - External `data.json` fetching and DOM injection
- Clean and accessible design with high contrast for readability
- Smooth transitions between themes
- Structured code with future scalability in mind
- Splide.js Carousel on homepage with progress bar and rotating "Featured Articles"
- Chart.js pie chart displaying galactic control by faction, responsive to theme changes
- Canvas-based tactical training simulation on "About" page with animated glitch scanner
- Live news ticker via external API (HelldiversTrainingManual)
- User-submittable news feed powered by mock API (create, edit, delete reports)
- Faction cards animate into view using IntersectionObserver (no external libs)

### 🧩 In Progress / Planned
- Site-wide search functionality
- Collapsible sections for articles (expand/collapse)
- Fully responsive mobile layout (media queries, mobile-first)
- Admin panel for article management
- Improved user profile handling with localStorage
- Optional backend integration (Node.js or Firebase)

---

## Tech Stack
- **HTML5** — Semantic structure
- **CSS3** — Custom styling, transitions, and theming (no frameworks)
- **JavaScript** — DOM manipulation, fetch API, event handling
- **JSON** — Local data for homepage features
- **localStorage** — Theme and user data persistence

---

## Getting Started

### 🖥 Local Testing
1. Download or clone the repository.
2. Launch using a local development server:
   - **Recommended:** VS Code Live Server extension.
   - Alternative: Python `http.server`  
     Run: `python -m http.server`
3. Open `http://localhost:8000` in your browser.

> **Important:**  
> Fetching `data.json` **requires a local server** — browsers block JSON fetches via `file://` for security (CORS).

## Requirements

1. JS Object conversion to JSON and vice versa:
  - 

---

## License
This project is for **educational use only** and is not affiliated with or endorsed by *Arrowhead Game Studios*, *Sony Interactive Entertainment*, or any official *Helldivers 2* property.  
All referenced game assets remain the property of their respective owners.

---

## Future Development Ideas
- Add dark/light mode toggle ✅ *(Implemented!)*
- Enable user profiles and save/load preferences ✅ *(Partially implemented: name and theme storage)*
- Add backend for article management (Node.js, Firebase)
- Embed videos and images
- Improve mobile responsiveness
- Expand JSON and API integrations for dynamic content

---

## Notes
> This wiki is a living project and will continue to evolve as new lessons are learned.  
> "Managed Democracy is non-negotiable. Spread managed democracy across the galaxy!"