import { createSlice } from "@reduxjs/toolkit";

export const ApplicationsSlice = createSlice({
  name: "applications",
  initialState: {
    applications: [
      {
        key: 1,
        latFrom: 59.84660399,
        lngFrom: 30.29496392,
        latTo: 59.82934196,
        lngTo: 30.42423701,
      },
      {
        key: 2,
        latFrom: 59.82934196,
        lngFrom: 30.42423701,
        latTo: 59.82761295,
        lngTo: 30.41705607,
      },
      {
        key: 3,
        latFrom: 59.83567701,
        lngFrom: 30.38064206,
        latTo: 59.84660399,
        lngTo: 30.29496392,
      },
    ],
    isLoading: false,
  },
  reducers: {
    getApplicationsFetch: (state) => {
      state.isLoading = true;
    },
    getApplicationsSuccess: (state, action) => {
      state.applications = action.payload;
      state.isLoading = false;
    },
    getApplicationsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getApplicationsFetch,
  getApplicationsSuccess,
  getApplicationsFailure,
} = ApplicationsSlice.actions;

export default ApplicationsSlice.reducer;
