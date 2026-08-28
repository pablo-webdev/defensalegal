/* ==========================================
       3. LÓGICA DE GALERÍA (LIGHTBOX)
       ========================================== */
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const items = document.querySelectorAll(".item-galeria");
  const lbImg = document.getElementById("lb-img");
  const lbCaption = document.getElementById("lb-caption");
  const lbClose = document.getElementById("lb-close");
  const lbPrev = document.getElementById("lb-prev");
  const lbNext = document.getElementById("lb-next");
  let currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;

    const item = items[currentIndex];
    lbImg.src = item.getAttribute("data-src");
    lbCaption.textContent = item.getAttribute("data-caption");
  }

  items.forEach((item, idx) => {
    item.addEventListener("click", () => {
      showImage(idx);
      lightbox.classList.add("active");
    });
  });

  lbClose.addEventListener("click", () => lightbox.classList.remove("active"));
  lbPrev.addEventListener("click", () => showImage(currentIndex - 1));
  lbNext.addEventListener("click", () => showImage(currentIndex + 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") lightbox.classList.remove("active");
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });
}
