document.addEventListener("DOMContentLoaded", function () {
    const logos = [
      { element: ".html", percent: 80 }, // HTML
      // Agrega más logos aquí si los necesitas
      // { element: ".css", percent: 70 },
      // { element: ".js", percent: 60 },
    ];
  
    const observerOptions = {
      root: null, // Observa en relación con el viewport
      threshold: 0.5, // Activa cuando al menos el 50% del elemento es visible
    };
  
    const animateProgressBar = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circle = entry.target.querySelector(".progress-ring__circle");
          const percentageElement = entry.target.querySelector(".percentage");
          const radius = circle.r.baseVal.value;
          const circumference = 2 * Math.PI * radius;
  
          // Configuración inicial del círculo
          circle.style.strokeDasharray = `${circumference} ${circumference}`;
          circle.style.strokeDashoffset = circumference;
  
          const logo = logos.find((logo) => entry.target.classList.contains(logo.element.substring(1)));
          const offset = circumference - (logo.percent / 100) * circumference;
  
          // Inicia la animación
          setTimeout(() => {
            circle.style.strokeDashoffset = offset;
          }, 300);
  
          // Muestra el porcentaje
          percentageElement.textContent = `${logo.percent}%`;
  
          // Una vez animado, dejamos de observar
          observer.unobserve(entry.target);
        }
      });
    };
  
    // Inicializamos el IntersectionObserver
    const observer = new IntersectionObserver(animateProgressBar, observerOptions);
  
    // Observamos cada logo
    document.querySelectorAll(".logo").forEach((logoElement) => observer.observe(logoElement));
  });
  