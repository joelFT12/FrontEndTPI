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
        width: 300px;
        border-radius: 4px;
        padding: 10px;
        text-align: center;
        cursor: pointer; 
        background-color:#728d87;
        box-shadow: 5px 3px 10px #927a7a;
        transition: all 0.3s;
      }
    .card:hover{
      background-color:#a061d3;
    }
      .card-image {
        border-radius: 4px;
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
  
      .card-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
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