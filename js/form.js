/* ==========================================
       4. FORMULARIO DE CONTACTO (ENVÍO A WSP)
       ========================================== */
const formContacto = document.getElementById("form-contacto");
if (formContacto) {
  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Formatear mensaje para WhatsApp
    const textoWsp =
      `*Consulta desde el Sitio Web*%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Correo:* ${correo}%0A` +
      `*Teléfono:* ${telefono}%0A` +
      `*Mensaje:* ${mensaje}`;

    // Abrir WhatsApp con la información prellenada
    window.open(`https://wa.me/+529671666622?text=${textoWsp}`, "_blank");
    formContacto.reset();
  });
}
