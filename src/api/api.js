export function getPolyline(event) {
  return fetch(
    `https://router.project-osrm.org/route/v1/driving/${event.payload.lngFrom},${event.payload.latFrom};${event.payload.lngTo},${event.payload.latTo}?overview=full&geometries=polyline`
  );
}
