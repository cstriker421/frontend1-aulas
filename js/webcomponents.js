// components/webcomponents.js
class UserCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.classList.add('user-card');
  
      const name = this.getAttribute('name') || 'Unknown';
      const age = this.getAttribute('age') || 'N/A';
  
      wrapper.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: 'Nunito', sans-serif;
            margin-bottom: 1rem;
          }
  
          .user-card {
            border: 2px solid var(--mustard-yellow);
            background-color: rgba(10,10,10,0.85);
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 0 10px var(--mustard-yellow);
            color: var(--mustard-yellow);
          }
  
          body.super-earth-mode .user-card {
            background-color: rgba(255,255,255,0.9);
            border-color: var(--seaf-blue);
            box-shadow: 0 0 10px var(--seaf-blue);
            color: var(--jet-black);
          }
  
          h4 {
            margin: 0;
            font-size: 1.2rem;
          }
  
          small {
            display: block;
            margin-top: 0.25rem;
            font-size: 0.9rem;
            color: var(--gray);
          }
        </style>
        <h4>${name}</h4>
        <small>Age: ${age}</small>
        <slot></slot>
      `;
  
      shadow.appendChild(wrapper);
    }
  }
  
  customElements.define('user-card', UserCard);  