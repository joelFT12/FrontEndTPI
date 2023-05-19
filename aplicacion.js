const container = document.querySelector(".container")
const coffees = [
  { name: "imagen 1", image: "/images/icono.png" },
  { name: "imagen 2", image: "/images/icono.png" },
  { name: "imagen 3", image: "/images/icono.png" },
  { name: "imagen 4", image: "/images/icono.png" },
  { name: " imagen 5", image: "/images/icono.png" },
  { name: " imagen 6", image: "/images/icono.png" },
  { name: "imagen 7", image: "/images/icono.png"},
  { name: "imagen 8", image: "/images/icono.png" },
  { name: "imagen 9", image: "/images/icono.png"},
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }