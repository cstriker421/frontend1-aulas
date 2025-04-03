# Helldivers 2 Fan Wiki

## Description
The **Helldivers 2 Fan Wiki** is a small, user-friendly fan project designed to provide quick, clear, and detailed information about *Helldivers 2*. Built as part of a Front-End Web Development course, this site serves as a testing ground for applying web technologies as they are learned.

It features dynamic elements, structured content, and a clear navigation system — all themed around the Helldivers universe and its iconic Super Earth aesthetic.

---

## Features

### ✅ Implemented
- Responsive, multi-page layout (`index`, `about`, `factions`, `weapons`, `enemies`)
- Custom color palette and typography inspired by *Helldivers 2*
- Dynamic footer with auto-updating year
- Favicon support (custom icon via `/assets/icons/`)
- Featured article on the homepage (randomly selected from local JSON)
- JSON exercise integration (object ↔ string ↔ object)
- Content styling for accessibility and readability

### 🧪 In Progress / Planned
- Search functionality
- Collapsible article sections
- External API integration (e.g., game stats or news)
- Fully responsive mobile design
- User comment/contribution system
- Light/dark mode toggle
- Admin tools for future content editing

---

## Tech Stack
- HTML5
- CSS3 (custom, no frameworks)
- JavaScript (vanilla)
- JSON for local data loading

---

## Getting Started

### 🖥 Local Testing
1. Download or clone the repository.
2. Run using a local development server:
   - **Recommended:** Use Live Server in VS Code.
   - Or run with Python: `python -m http.server`
3. Visit `http://localhost:8000` in your browser.

> **Note:** Fetching JSON (`data.json`) will not work via `file://` due to a CORS error — a local server is required.

---

## License
This project is for **educational use only** and is not affiliated with or endorsed by Arrowhead Game Studios or Sony. All game assets referenced are the property of their respective owners.

---

## Future Development Ideas
- Add dark/light mode toggle
- Enable user profiles and save/load preferences
- Add backend for article management (Node.js or Firebase)
- Embed video showcases or gameplay tips