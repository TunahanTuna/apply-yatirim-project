import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: 0,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Store Fonksiyonları
  },
});
export const {} = dataSlice.actions;
export default dataSlice.reducer;
