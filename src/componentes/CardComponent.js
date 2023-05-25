import { html, render } from '../lib/lit-html.js';

export class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.image="";
    this.title="";
    this.url="";
    this.handleClick = this.handleClick.bind(this);
  }
  static get observedAttributes() {
    return ['image', 'title','url'];
  }
  
  attributeChangedCallback(nameAtr, oldValue, newValue) {
    if (oldValue === newValue) {
        return; 
      }
    switch (nameAtr) {
      case "image":
        this.image = newValue;
        break;

      case "title":
        this.title = newValue;
        break;
      case "url":
        this.url = newValue;
        break;
    }
}
  connectedCallback() {
    this.render();
  }

  render() {
    const template = html`
    <style> 
    
    .card {
      margin           : 0 2em;
      overflow         : hidden;
      width            : 12rem;
      height           : 14rem;
      border-radius    : 10px;
      padding          : 1.5em 1em 1.6em;
      text-align       : center;
      cursor           : pointer;
      background-color : white;
      box-shadow       : rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      transition       : all 0.3s;
      }

  .card:hover {
      box-shadow : rgba(50, 50, 93, 0.25) 0px 15px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

      }

  .card-image {
      width         : 100%;
      height        : 85%;
      margin-bottom : 10px;
      object-fit    : cover;

      }

  .card-title {
      font-size     : 1.1rem;
      font-weight   : bold;
      margin-bottom : 10px;
      color         : #1D2530;
      padding-top   : .5em;
      }
    
    </style>
    <div class="card" @click="${this.handleClick}">
        <img class="card-image" src="${this.image}" alt="Card Image" />
        <div class="card-title">${this.title}</div>
      </div>
    `;
    render(template, this.shadowRoot);
  }

  handleClick() {
    window.location.href = this.url;
  }
}

customElements.define('card-component', Card);
export default Card;