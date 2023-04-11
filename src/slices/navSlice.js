import { createSlice } from "@reduxjs/toolkit";

const inicialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  inicialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;
