// MODO DAY N NIGHT
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll(".toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      body.classList.toggle("light");
      if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  });
});

// TEXTO ANIMADO
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".typed")) {
    new Typed(".typed", {
      strings: [
        "Una solución legal.",
        "Asesoría especializada.",
        "Representación profesional.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
  }
});
