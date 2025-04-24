// ==== Exercise 10: Web Components ==== //
class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          font-family: 'Nunito', sans-serif;
          padding: 1rem;
          margin: 1rem;
          border-radius: 8px;
          border: 2px solid var(--mustard-yellow);
          box-shadow: 0 0 10px var(--mustard-yellow);
          background-color: rgba(10, 10, 10, 0.85);
          color: var(--mustard-yellow);
          transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        :host(.light-mode) .card {
          background-color: rgba(255, 255, 255, 0.95);
          color: var(--jet-black);
          border-color: var(--seaf-blue);
          box-shadow: 0 0 10px var(--seaf-blue);
        }

        ::slotted(p) {
          margin-top: 0.5rem;
          font-size: 0.95rem;
        }
      </style>
      <div class="card">
        <p><strong>Name:</strong> <span id="name"></span></p>
        <p><strong>Age:</strong> <span id="age"></span></p>
        <slot></slot>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['name', 'age'];
  }

  connectedCallback() {
    this.updateCard();
    this.observeTheme();
  }

  attributeChangedCallback() {
    this.updateCard();
  }

  updateCard() {
    this.shadowRoot.getElementById('name').textContent = this.getAttribute('name');
    this.shadowRoot.getElementById('age').textContent = this.getAttribute('age');
  }

  observeTheme() {
    const updateTheme = () => {
      if (document.body.classList.contains('super-earth-mode')) {
        this.classList.add('light-mode');
      } else {
        this.classList.remove('light-mode');
      }
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
}

customElements.define('user-card', UserCard);
