import { createSlice } from "@reduxjs/toolkit";

export const ApplicationsSlice = createSlice({
  name: "applications",
  initialState: {
    defaultCoordinates: [
      {
        key: "Маршрут 1",
        start: ["59.84660399, 30.29496392"],
        mid: ["59.82934196, 30.42423701"],
        end: ["59.83567701, 30.38064206"],
      },
      {
        key: "Маршрут 2",
        start: ["59.82934196, 30.42423701"],
        mid: ["59.82761295, 30.41705607"],
        end: ["59.84660399, 30.29496392"],
      },
      {
        key: "Маршрут 3",
        start: ["59.83567701, 30.38064206"],
        mid: ["59.84660399, 30.29496392"],
        end: ["59.82761295, 30.41705607"],
      },
    ],
    routeCoordinates: [],
    markerCoordinates: [],
  },
  reducers: {
    getRouteCoordinates: (state, action) => {
      state.routeCoordinates = action.payload;
    },
    getMarkerCoordinates: (state, action) => {
      state.markerCoordinates = [
        [
          action.payload.start[0].split(", ")[0],
          action.payload.start[0].split(", ")[1],
        ],
        [
          action.payload.end[0].split(", ")[0],
          action.payload.end[0].split(", ")[1],
        ],
        [
          action.payload.mid[0].split(", ")[0],
          action.payload.mid[0].split(", ")[1],
        ],
      ];
    },
  },
});

export const { getRouteCoordinates, getMarkerCoordinates } =
  ApplicationsSlice.actions;

export default ApplicationsSlice.reducer;
