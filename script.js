/* =====================================================================
   CONFIGURACIÓN DE LA INVITACIÓN
   -----------------------------------------------------------------
   Este es el ÚNICO lugar que necesitas editar para reutilizar la
   plantilla con otra quinceañera. Cambia los valores de aquí abajo;
   el resto del código los toma automáticamente.
   ===================================================================== */
const configuracion = {

  // ---- Datos principales ----
  nombre: "Linda",
  fraseCelebracion: "Mis 15 años",
  fechaEvento: "2026-11-21T18:00:00", // formato: AAAA-MM-DDTHH:MM:SS (24 horas)
  fechaEventoTextoLargo: "21 de Noviembre de 2026",

  fraseCovertada: "Hay momentos en la vida que se vuelven inolvidables. Hoy quiero compartir contigo uno de los más especiales: mis quince años.",

  // ---- Ceremonia religiosa ----
  ceremonia: {
    lugar: "Parroquia Santa Bárbara",
    direccion: "Calle de ejemplo #123, Ciudad",
    hora: "6:00 p. m.",
    // Pega aquí el enlace que te da el botón "Compartir" de Google Maps
    enlaceMapa: "https://www.google.com/maps/search/?api=1&query=Parroquia+Santa+Barbara"
  },

  // ---- Recepción ----
  recepcion: {
    lugar: "Club Los Llaneros",
    direccion: "Dirección de ejemplo",
    hora: "6:00 p. m.",
    enlaceMapa: "https://maps.app.goo.gl/ALsBcwGii2uurQvv7"
  },

  codigoVestimenta: "Elegante / Formal",

  // Cambia a false si tu evento NO tiene ceremonia religiosa.
  // La tarjeta de recepción se acomodará y centrará sola.
  mostrarCeremonia: false,

  // ---- Mensaje de agradecimiento tras confirmar ----
  mensajeAgradecimiento: (nombre) =>
    `¡Gracias por confirmar, ${nombre}! Nos alegra mucho saber que nos acompañarás.`,

  // ---- Mesa de regalos ----
  mostrarMesaDeRegalos: true, // cambia a false para ocultar la sección

  // ---- Música ----
  reproducirMusica: true, // cambia a false para ocultar el botón de música

  // ---- Galería de fotos ----
  // Agrega, quita o reemplaza líneas de este arreglo para modificar la galería.
  // "src" es la ruta del archivo e "alt" es el texto alternativo (accesibilidad).
  //
  // AHORA MISMO usa fotos de muestra externas (de demostración) para que la
  // plantilla se vea completa sin fotos reales. Para usar TUS fotos, cambia
  // cada "src" por la ruta local, por ejemplo: "img/foto1.jpg"
  galeria: [
    { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", alt: "Fotografía de Valentina 1" },
    { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80", alt: "Fotografía de Valentina 2" },
    { src: "https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?auto=format&fit=crop&w=600&q=80", alt: "Fotografía de Valentina 3" },
    { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80", alt: "Fotografía de Valentina 4" },
    { src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80", alt: "Fotografía de Valentina 5" },
    { src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", alt: "Fotografía de Valentina 6" }
  ]
};

/* =====================================================================
   NOTA SOBRE LAS FOTOS DE MUESTRA
   -----------------------------------------------------------------
   Como no se proporcionaron fotografías reales, la galería de arriba
   apunta a archivos locales (img/foto1.jpg, etc.) que debes reemplazar
   por tus propias imágenes con esos mismos nombres. La imagen de la
   portada, en cambio, usa una foto de muestra externa (ver style.css,
   clase .portada-fondo) que también debes reemplazar. Toda la
   explicación detallada está en la guía de uso entregada en el chat.
   ===================================================================== */


/* =====================================================================
   1. INYECTAR LOS DATOS DE CONFIGURACIÓN EN EL HTML
   ===================================================================== */
function aplicarConfiguracion() {
  document.title = `Mis 15 años · ${configuracion.nombre}`;

  document.getElementById("nombrePortada").textContent = configuracion.nombre;
  document.getElementById("fechaPortada").textContent = configuracion.fechaEventoTextoLargo;
  document.getElementById("frasePortada").textContent = configuracion.fraseCovertada;
  document.getElementById("nombrePie").textContent = configuracion.nombre;

  document.getElementById("lugarCeremonia").textContent = configuracion.ceremonia.lugar;
  document.getElementById("direccionCeremonia").textContent = configuracion.ceremonia.direccion;
  document.getElementById("horaCeremonia").textContent = configuracion.ceremonia.hora;
  document.getElementById("mapaCeremonia").href = configuracion.ceremonia.enlaceMapa;

  document.getElementById("lugarRecepcion").textContent = configuracion.recepcion.lugar;
  document.getElementById("direccionRecepcion").textContent = configuracion.recepcion.direccion;
  document.getElementById("horaRecepcion").textContent = configuracion.recepcion.hora;
  document.getElementById("mapaRecepcion").href = configuracion.recepcion.enlaceMapa;

  document.getElementById("codigoVestimenta").textContent = configuracion.codigoVestimenta;

  // Si no hay ceremonia religiosa, ocultamos esa tarjeta y centramos la de recepción
  if (!configuracion.mostrarCeremonia) {
    document.getElementById("tarjetaCeremonia").classList.add("oculto");
    document.getElementById("tarjetasDetalle").classList.add("una-tarjeta");
  }

  // Mostrar u ocultar la mesa de regalos según configuración
  const seccionRegalos = document.getElementById("regalos");
  if (!configuracion.mostrarMesaDeRegalos) {
    seccionRegalos.classList.add("oculto");
  }

  // Mostrar u ocultar el botón de música según configuración
  const btnMusica = document.getElementById("btnMusica");
  if (!configuracion.reproducirMusica) {
    btnMusica.classList.add("oculto");
  }
}


/* =====================================================================
   2. CUENTA REGRESIVA
   ===================================================================== */
function iniciarCuentaRegresiva() {
  const fechaObjetivo = new Date(configuracion.fechaEvento).getTime();

  const elDias = document.getElementById("dias");
  const elHoras = document.getElementById("horas");
  const elMinutos = document.getElementById("minutos");
  const elSegundos = document.getElementById("segundos");
  const elReloj = document.getElementById("reloj");
  const elMensajeFinal = document.getElementById("mensajeFinalCuenta");

  function actualizarReloj() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      // Cuando llega o pasa la fecha del evento
      elReloj.hidden = true;
      elMensajeFinal.hidden = false;
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    elDias.textContent = String(dias).padStart(2, "0");
    elHoras.textContent = String(horas).padStart(2, "0");
    elMinutos.textContent = String(minutos).padStart(2, "0");
    elSegundos.textContent = String(segundos).padStart(2, "0");
  }

  actualizarReloj();
  const intervalo = setInterval(actualizarReloj, 1000);
}


/* =====================================================================
   3. GALERÍA DE FOTOS + LIGHTBOX
   ===================================================================== */
function construirGaleria() {
  const contenedor = document.getElementById("galeriaGrid");

  configuracion.galeria.forEach((foto) => {
    const item = document.createElement("div");
    item.className = "galeria-item";

    const img = document.createElement("img");
    img.src = foto.src;
    img.alt = foto.alt;
    img.loading = "lazy";

    item.appendChild(img);
    contenedor.appendChild(item);

    item.addEventListener("click", () => abrirLightbox(foto.src, foto.alt));
  });
}

function abrirLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const imagen = document.getElementById("lightboxImagen");
  imagen.src = src;
  imagen.alt = alt;
  lightbox.classList.add("abierto");
}

function cerrarLightbox() {
  document.getElementById("lightbox").classList.remove("abierto");
}

function iniciarLightbox() {
  document.getElementById("lightboxCerrar").addEventListener("click", cerrarLightbox);
  document.getElementById("lightbox").addEventListener("click", (evento) => {
    if (evento.target.id === "lightbox") cerrarLightbox();
  });
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarLightbox();
  });
}


/* =====================================================================
   4. FORMULARIO DE CONFIRMACIÓN DE ASISTENCIA
   -----------------------------------------------------------------
   IMPORTANTE: esta versión solo muestra un mensaje de agradecimiento
   en pantalla. NO envía ni guarda los datos en ningún servidor,
   base de datos ni hoja de cálculo, porque Claude Pages es hosting
   estático y no incluye backend propio.

   Para guardar de verdad las confirmaciones, revisa la guía adjunta,
   sección "Cómo conectar el formulario a Google Sheets", donde se
   explica cómo usar un servicio externo gratuito para lograrlo.
   ===================================================================== */
function iniciarFormularioConfirmacion() {
  const formulario = document.getElementById("formConfirmacion");
  const bloqueGracias = document.getElementById("confirmacionGracias");
  const mensajeGracias = document.getElementById("mensajeGracias");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombreInvitado").value.trim();

    // --- Aquí es donde, en el futuro, se enviarían los datos a un
    //     servicio externo (por ejemplo, Google Sheets). Ver guía. ---

    mensajeGracias.textContent = configuracion.mensajeAgradecimiento(nombre || "invitado");
    formulario.hidden = true;
    bloqueGracias.hidden = false;
  });
}


/* =====================================================================
   5. BOTÓN DE MÚSICA
   ===================================================================== */
function iniciarMusica() {
  const boton = document.getElementById("btnMusica");
  const audio = document.getElementById("audioFondo");
  const icono = document.getElementById("iconoMusica");

  boton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {
        // Si el navegador bloquea la reproducción, no interrumpimos la experiencia.
      });
      boton.classList.add("sonando");
      icono.textContent = "❚❚";
      boton.setAttribute("aria-label", "Pausar música");
    } else {
      audio.pause();
      boton.classList.remove("sonando");
      icono.textContent = "♪";
      boton.setAttribute("aria-label", "Reproducir música");
    }
  });
}


/* =====================================================================
   6. AGREGAR AL CALENDARIO (genera un archivo .ics)
   ===================================================================== */
function generarArchivoICS() {
  const inicio = new Date(configuracion.fechaEvento);
  const fin = new Date(inicio.getTime() + 4 * 60 * 60 * 1000); // dura 4 horas por defecto

  const formatoICS = (fecha) =>
    fecha.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const contenido = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:Mis 15 años - ${configuracion.nombre}`,
    `DTSTART:${formatoICS(inicio)}`,
    `DTEND:${formatoICS(fin)}`,
    `LOCATION:${configuracion.recepcion.lugar}, ${configuracion.recepcion.direccion}`,
    `DESCRIPTION:Celebración de los 15 años de ${configuracion.nombre}. Código de vestimenta: ${configuracion.codigoVestimenta}.`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([contenido], { type: "text/calendar;charset=utf-8" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = `Mis15Anos-${configuracion.nombre}.ics`;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
}

function iniciarBotonCalendario() {
  document.getElementById("btnCalendario").addEventListener("click", generarArchivoICS);
}


/* =====================================================================
   7. PÉTALOS DECORATIVOS (animación de fondo, sutil)
   ===================================================================== */
function iniciarPetalos() {
  const contenedor = document.getElementById("petalos");
  const simbolos = ["❀", "✿", "❁"];
  const cantidad = 14;

  for (let i = 0; i < cantidad; i++) {
    const petalo = document.createElement("span");
    petalo.className = "petalo";
    petalo.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.fontSize = 0.8 + Math.random() * 0.8 + "rem";
    petalo.style.animationDuration = 8 + Math.random() * 10 + "s";
    petalo.style.animationDelay = Math.random() * 10 + "s";
    contenedor.appendChild(petalo);
  }
}


/* =====================================================================
   8. NAVEGACIÓN DE PUNTOS (resalta la sección visible)
   ===================================================================== */
function iniciarNavegacionPuntos() {
  const puntos = document.querySelectorAll(".punto");
  const secciones = Array.from(puntos).map((p) =>
    document.getElementById(p.dataset.seccion)
  );

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const id = entrada.target.id;
          puntos.forEach((p) => {
            p.classList.toggle("activo", p.dataset.seccion === id);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  secciones.forEach((seccion) => {
    if (seccion) observador.observe(seccion);
  });
}


/* =====================================================================
   INICIALIZACIÓN GENERAL
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  aplicarConfiguracion();
  iniciarCuentaRegresiva();
  construirGaleria();
  iniciarLightbox();
  iniciarFormularioConfirmacion();
  iniciarMusica();
  iniciarBotonCalendario();
  iniciarPetalos();
  iniciarNavegacionPuntos();
});
