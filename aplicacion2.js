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
    title:"Bebida",
    image:"https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url:"comercio.html"
},
]
// Obtener la URL actual
var url = new URL(window.location.href);

// Obtener los parámetros de la URL
var params = new URLSearchParams(url.search);

// Obtener el valor de un parámetro específico
var idTipoComercio = params.get('parametro');

// Utilizar el valor del parámetro
console.log(idTipoComercio);
let datalocal
async function traerdatos(){
    // var dataSql = []
    // fetch('http://localhost:8080/ParcialTPI/comercio')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Aquí puedes llamar a una función para renderizar los datos obtenidos
    //     dataSql.push(data)
    //   })
    //   .catch(error => {
    //     console.error('Error al obtener los datos de la API:', error);
    //   });
    // //   console.log(dataSql)
    let dataSql=fetch(`http://localhost:8080/ParcialTPI/tipocomercio/${idTipoComercio}`)
        .then(response => response.json())
        .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
              })
    return dataSql
}


function renderCards(categorias) {
    const container = document.getElementById('categorias-container');
    container.innerHTML = ''; // Limpia el contenedor antes de renderizar los nuevos componentes
  
  categorias.forEach(img=>{
    img.image="https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54"
  })
  categorias.sort(function(a, b) {
    const primero = a.comercio.nombre.toUpperCase();
    const segundo = b.comercio.nombre.toUpperCase();

    if (primero < segundo) {
      return -1;
    }
    if (primero > segundo) {
      return 1;
    }

    return 0;
  });
  console.log(categorias)
    categorias.forEach(cardData => {
        const card = new Card();
        card.setAttribute('image', cardData.image);
        card.setAttribute('title', cardData.comercio.nombre);
        card.setAttribute('url', `producto.html?parametro=${cardData.comercio.idComercio}`);
        container.appendChild(card);
      });
  }
datalocal= await traerdatos()
  renderCards(datalocal.comercioTipoComercioList);
  