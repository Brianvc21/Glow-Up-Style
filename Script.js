function matchProfile(name) {
  alert(`¡Has hecho match con ${name}! Ahora puedes enviarle un mensaje.`);
}

function sendMessage(name) {
  const message = prompt(`Escribe un mensaje para ${name}:`);
  if (message) {
    alert(`Mensaje enviado a ${name}: "${message}"`);
  }
}

