(() => {
  "use strict";

  const INTERVALO = 10000;

  const FRASES = {
    "webmeji-fantasma": [
      "Hola, somos sprites creados por el área de TI.",
      "Error desconocido. Ni nosotros sabemos qué pasó.",
      "No tengas miedo, solo soy un proceso en segundo plano.",
      "El servidor está escuchando.",
      "¿Ya levantaste tu Ticket?."
    ],
    "webmeji-vampiro": [
      "No hay sistema.",
      "¿Ya reiniciaste?",
      "Error 404: técnico no encontrado.",
      "El servidor tiene vida propia.",
      "Tu contraseña me da escalofríos.",
      "Se cayó el sistema y nadie sabe por qué.",
      "El ticket sigue abierto desde el más allá.",
      "Reinicia el equipo y quizá sobrevivas."
    ]
  };

  const estados = {};

  const estilos = document.createElement("style");
  estilos.textContent = `
    .webmeji-container {
      overflow: visible !important;
    }

    .webmeji-dialogo {
      position: absolute !important;
      left: 50% !important;
      bottom: calc(100% + 12px) !important;
      top: auto !important;
      right: auto !important;
      transform: translateX(-50%) !important;
      width: max-content !important;
      max-width: 240px !important;
      box-sizing: border-box !important;
      padding: 9px 12px !important;
      border: 1px solid #d6dce5 !important;
      border-radius: 12px !important;
      background: #fff !important;
      color: #202938 !important;
      box-shadow: 0 4px 16px rgba(0, 0, 0, .18) !important;
      font: 12px/1.4 Arial, sans-serif !important;
      text-align: center !important;
      white-space: normal !important;
      overflow-wrap: anywhere !important;
      z-index: 2147483647 !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: auto !important;
      cursor: pointer !important;
      transition: opacity .2s ease !important;
    }

    .webmeji-dialogo.visible {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .webmeji-dialogo::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      border: 7px solid transparent;
      border-top-color: #fff;
      transform: translateX(-50%);
    }
  `;
  document.head.appendChild(estilos);

  function programarFrase(id, espera = INTERVALO) {
    const estado = estados[id];
    if (!estado) return;

    clearTimeout(estado.temporizador);
    estado.globo.classList.remove("visible");

    estado.temporizador = setTimeout(() => {
      const frases = FRASES[id];
      let indice;

      do {
        indice = Math.floor(Math.random() * frases.length);
      } while (frases.length > 1 && indice === estado.ultimoIndice);

      estado.ultimoIndice = indice;
      estado.globo.textContent = frases[indice];
      estado.globo.classList.add("visible");

      estado.temporizador = setTimeout(() => {
        estado.globo.classList.remove("visible");
        programarFrase(id, INTERVALO);
      }, INTERVALO);
    }, espera);
  }

  function ocultarYEsperar(id) {
    programarFrase(id, INTERVALO);
  }
  function iniciarPersonaje(id) {
    const personaje = document.getElementById(id);
    if (!personaje || estados[id]) return false;

    const contenedor = personaje.closest(".webmeji-container");
    if (!contenedor) return false;

    const globo = document.createElement("div");
    globo.className = "webmeji-dialogo";
    globo.setAttribute("role", "status");
    globo.setAttribute("aria-live", "polite");
    globo.title = "Toca para ocultar el mensaje";

    contenedor.appendChild(globo);

    estados[id] = {
      globo,
      ultimoIndice: -1,
      temporizador: null
    };

    personaje.style.cursor = "pointer";

    personaje.addEventListener("click", (evento) => {
      evento.stopPropagation();
      ocultarYEsperar(id);
    });

    globo.addEventListener("click", (evento) => {
      evento.stopPropagation();
      ocultarYEsperar(id);
    });

    programarFrase(id, INTERVALO);
    return true;
  }

  function iniciar() {
    for (const id of Object.keys(FRASES)) {
      if (iniciarPersonaje(id)) continue;

      const detector = setInterval(() => {
        if (iniciarPersonaje(id)) {
          clearInterval(detector);
        }
      }, 500);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar, { once: true });
  } else {
    iniciar();
  }
})();



