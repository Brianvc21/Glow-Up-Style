const map = L.map('map').setView([-9.189967, -75.015152], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const cosmetologists = [
  {
    name: 'María López',
    lat: -12.046374,
    lng: -77.042793,
    details: 'Especialista en maquillaje profesional. Contacto: 987654321',
    photo: 'https://via.placeholder.com/100'
  },
  {
    name: 'Juan Pérez',
    lat: -6.7714,
    lng: -79.8415,
    details: 'Barbero y estilista. Contacto: 987123456',
    photo: 'https://via.placeholder.com/100'
  },
  // Agregar más cosmetólogas en distintos departamentos
];

cosmetologists.forEach(cosmetologist => {
  L.marker([cosmetologist.lat, cosmetologist.lng])
    .addTo(map)
    .bindPopup(
      `<strong>${cosmetologist.name}</strong><br>
      ${cosmetologist.details}<br>
      <img src="${cosmetologist.photo}" style="width: 100px; border-radius: 10px;">`
    );
});
