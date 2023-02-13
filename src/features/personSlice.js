import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  NIF: "",
  CIN: "",
  stamp: "",
  photo: "",
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.street = payload.street;
      state.city = payload.city;
      state.NIF = payload.NIF;
      state.CIN = payload.CIN;
      state.stamp = payload.stamp;
      state.photo = payload.photo;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPerson } = personSlice.actions;

export default personSlice.reducer;
