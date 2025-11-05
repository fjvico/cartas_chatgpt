document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbwF9JEJysVFy8ktHtpFdIMpwx8Ip-hOHFFTTXHfbfaSyVsg-pdkOZyk8DdD_ODZpd0/exec", {
    method: "POST",
    mode: "cors",
    body: new FormData(this)
  })
  .then(() => {
    document.getElementById("form-msg").innerText = "Mensaje enviado. Gracias.";
    this.reset();
  })
  .catch(() => {
    document.getElementById("form-msg").innerText = "Error al enviar. Intenta más tarde.";
  });
});
