import axios from "axios";

export function getPolyline(event) {
  return axios.get(
    `https://router.project-osrm.org/route/v1/driving/${
      event.payload.start[0].split(", ")[1]
    },${event.payload.start[0].split(", ")[0]};${
      event.payload.mid[0].split(", ")[1]
    },${event.payload.mid[0].split(", ")[0]};${
      event.payload.end[0].split(", ")[1]
    },${event.payload.end[0].split(", ")[0]}?overview=full&geometries=polyline`
  );
}
