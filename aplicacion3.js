import { Card } from './src/componentes/CardComponent.js';
import { paginacion } from './src/componentes/paginacion.js';
import { Desplegable } from './src/componentes/desplegable.js'
var categorias = [
  {
    title: "Comida",
    image: "https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url: "comercio.html"
  },
  {
    title: "Comida",
    image: "https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url: "comercio.html"
  },
  {
    title: "Comida",
    image: "https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url: "comercio.html"
  },
  {
    title: "Comida",
    image: "https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url: "comercio.html"
  },
  {
    title: "Comida",
    image: "https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url: "comercio.html"
  },
  {
    title: "Bebida",
    image: "https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54",
    url: "comercio.html"
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
async function traerdatos() {
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
  let dataSql = fetch(`http://localhost:8080/ParcialTPI/comercio/${idTipoComercio}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error al obtener los datos de la API:', error);
    })
  return dataSql
}

const cardsPorPagina = 6;
var paginaActual = 1;

function renderCards(categorias, sitios, page) {
  const desplegableC = document.getElementById('desplegable')
  const container = document.getElementById('categorias-container');
  let sucursales = []
  container.innerHTML = ''; // Limpia el contenedor antes de renderizar los nuevos componentes

  desplegableC.innerHTML='';

  categorias.forEach(img => {
    img.image = "https://img.freepik.com/vector-gratis/hamburguesa-realista-aislada_1284-12692.jpg?w=740&t=st=1684813116~exp=1684813716~hmac=91061849a0f3a7e06b62ee956c7cd46d1758371ae59973813af273f277a7dd54"
  })

  const startIndex = (page - 1) * cardsPorPagina;
  const endIndex = startIndex + cardsPorPagina;
  const cardsToRender = categorias.slice(startIndex, endIndex);

  console.log(categorias)
  cardsToRender.forEach(cardData => {
    const card = new Card();
    card.setAttribute('image', cardData.image);
    card.setAttribute('title', cardData.producto.nombre);
    card.setAttribute('url', `producto.html?parametro=${cardData.producto.idComercio}`);
    container.appendChild(card);
  });

 

  sitios.forEach(sitio => {
    sucursales.push(sitio.nombre)
  })
  const desp = new Desplegable();
  desp.setAttribute('items', sucursales)
  desplegableC.appendChild(desp)

   //Renderizar la paginacion
   const paginacion1 = new paginacion();
   paginacion1.setAttribute("current-page", paginaActual);
   paginacion1.setAttribute(
     "total-pages",
     Math.ceil(categorias.length / cardsPorPagina)
   );
   paginacion1.addEventListener("page-change", (event) => {
     handlePageChange(event.detail);
   });
   const footer = document.getElementById("footer")
   footer.innerHTML = "";
   footer.appendChild(paginacion1);
}

function handlePageChange(page) {

  paginaActual = page;
  renderCards(datalocal.productoComercioList, datalocal.sucursalList, paginaActual);
  const pagination = document.querySelector("paginacion-component");
  pagination.setAttribute("current-page", paginaActual);

}

datalocal = await traerdatos()
renderCards(datalocal.productoComercioList, datalocal.sucursalList, paginaActual);
