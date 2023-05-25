import { html, render } from '../lib/lit-html.js';

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = '¡Hola, mundo!';
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = html`
    <style>
    .navbar {
      display          : flex;
      align-items      : center;
      justify-content  : space-between;
      background-color : #FFA700;
      padding          : 0.5em 4.5em;
      }

  .navbar-title {
      font-weight    : bold;
      font-size      : 1.3rem;
      color          : white;
      letter-spacing : 0.1rem;
      border         : 1px solid white;
      padding        : 4px 15px;
      }

  .navbar-links {

      }

  .navbar-link {
      text-decoration : none;
      color           : white;
      }

  .install {

      }

  .navbar-links > a:first-child {
      margin-right : 1.5rem;
      }


  @media (max-width : 767px) {

      .navbar-title{
          padding        : 4px 10rem;
      }
      .navbar {
          flex-direction : column;

          }

      .navbar-links {
          margin-top : 1.2rem;
          padding    : 5px 10px;

          }

      .navbar-link {
          display          : block;
          padding          : 5px 4rem;
          border: 1px solid white;
          color: white ;
          }

      .navbar-links > a:first-child {
          margin-right  : 0;
          margin-bottom : 1em;
          }

      .install{
          background-color: white;
          color: #FFA700;
          
      }


      }
    
    </style>
    <div class="navbar">
    <span class="navbar-title">DeliveryApp</span>
    <div class="navbar-links">
      <a class="navbar-link" href="/">Inicio</a>
      <a class="navbar-link" href="/instalar">Instalar</a>
    </div>
  </div>
    `;
    render(template, this.shadowRoot);
  }

  handleClick() {
    this.data = '¡Hiciste clic!';
    this.render();
  }
}

customElements.define('nav-bar', Navbar);
