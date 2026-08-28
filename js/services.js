document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // 1. Cargar tema guardado y ajustar logos
  const savedTheme = localStorage.getItem("theme");
  const logoNegro = document.getElementById("negro");
  const logoBlanco = document.getElementById("blanco");

  function actualizarLogos(esClaro) {
    if (logoNegro && logoBlanco) {
      if (esClaro) {
        logoNegro.style.display = "block";
        logoBlanco.style.display = "none";
      } else {
        logoNegro.style.display = "none";
        logoBlanco.style.display = "block";
      }
    }
  }

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    actualizarLogos(true);
  } else {
    actualizarLogos(false);
  }

  // 2. Manejo de modo claro / oscuro en los botones
  const toggleBtns = document.querySelectorAll(".toggle");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      const esClaro = body.classList.contains("light-mode");
      if (esClaro) {
        localStorage.setItem("theme", "light");
        actualizarLogos(true);
      } else {
        localStorage.setItem("theme", "dark");
        actualizarLogos(false);
      }
    });
  });

  /* ==========================================
     3. LÓGICA DEL MODAL DE SERVICIOS
     ========================================== */
  const modal = document.getElementById("modal-servicio");
  const modalCloseBtn = document.getElementById("modal-close");

  if (modal) {
    const cards = document.querySelectorAll(".card-servicio-completa");
    const modalTitle = document.getElementById("modal-title");
    const modalIcon = document.getElementById("modal-icon");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-description");
    const modalWspBtn = document.getElementById("modal-wsp-btn");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const titulo = card.getAttribute("data-titulo");
        const icono = card.getAttribute("data-icono");
        const imagen = card.getAttribute("data-img");
        const desc = card.getAttribute("data-desc");

        modalTitle.textContent = titulo;
        modalIcon.className = `fa-solid ${icono}`;
        modalImg.src = imagen;
        modalImg.alt = titulo;
        modalDesc.textContent = desc;

        const mensajeWsp = encodeURIComponent(
          `Hola, requiero información y asesoría sobre: ${titulo}`,
        );
        modalWspBtn.href = `https://wa.me/+529671666622?text=${mensajeWsp}`;

        modal.classList.add("active");
      });
    });

    modalCloseBtn.addEventListener("click", () =>
      modal.classList.remove("active"),
    );

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
      }
    });
  }
});
