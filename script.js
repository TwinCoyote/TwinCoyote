// Seleccionamos los elementos necesarios
const container = document.querySelector(".logos");
const progressBars = document.querySelectorAll(".skill-per"); // Tus barras de progreso
let bol = false; // Bandera para que solo se ejecute una vez

// Escuchamos el evento scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > container.offsetTop - 650 && bol === false) {
    bol = true; // Marcamos que ya se ejecutó
    progressBars.forEach((bar) => {
      let count = 0; // Inicia el contador en 0
      const percentage = parseInt(bar.getAttribute("per")); // Obtenemos el porcentaje desde el atributo
      bar.style.transition = `width ${percentage * 30}ms`; // Animación suave
      bar.style.width = `${percentage}%`; // Aplicamos el ancho a la barra

     // Llamamos a la función para iniciar el conteo
    });
  }
});
