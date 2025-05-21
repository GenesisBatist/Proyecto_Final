const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('name').value;
  const telefono = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (!nombre || !telefono || !email ) {
    alert("Por favor completa todos los campos antes de generar el código QR.");
    return;
  }
  // Formato vCard para contacto
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${nombre}
TEL:${telefono}
EMAIL:${email}
END:VCARD`;

  // Generar el código QR
  QRCode.toCanvas(document.createElement('canvas'), vCard, function (err, canvas) {
    if (err) return console.error(err);
    const qrDiv = document.getElementById('qrcode');
    qrDiv.innerHTML = '';
    qrDiv.appendChild(canvas);
  });
});