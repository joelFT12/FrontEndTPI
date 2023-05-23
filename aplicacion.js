import { Card } from './src/js/CardComponent.js';
var categorias=[
    {
    title:"Comida",
    image:"https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url:"comercio.html"
},
    {
    title:"Comida",
    image:"https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url:"comercio.html"
},
    {
    title:"Comida",
    image:"https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url:"comercio.html"
},
    {
    title:"Comida",
    image:"https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url:"comercio.html"
},
    {
    title:"Comida",
    image:"https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url:"comercio.html"
},
    {
    title:"Comida",
    image:"https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url:"comercio.html"
},
]
// fetch('https://api.example.com/cards')
//   .then(response => response.json())
//   .then(data => {
//     // Aquí puedes llamar a una función para renderizar los datos obtenidos
//     renderCards(data);
//   })
//   .catch(error => {
//     console.error('Error al obtener los datos de la API:', error);
//   });

function renderCards(categorias) {
    const container = document.getElementById('categorias-container');
    container.innerHTML = ''; // Limpia el contenedor antes de renderizar los nuevos componentes
  
    categorias.forEach(cardData => {
        const card = new Card();
        card.setAttribute('image', cardData.image);
        card.setAttribute('title', cardData.title);
        card.setAttribute('url', cardData.url);
        container.appendChild(card);
      });
  }
  renderCards(categorias);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }