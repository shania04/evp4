// Inicialización del carrusel
document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector("#carruselEjemplo");
  
    if (carrusel) {
      new bootstrap.Carousel(carrusel, {
        interval: 3000, // Cambiar imagen cada 3 segundos
        ride: "carousel",
      });
    }
  });
