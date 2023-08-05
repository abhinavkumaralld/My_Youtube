import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Myslice",
  initialState: {
    isSideBar: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      if (state.isSideBar) state.isSideBar = false;
      else state.isSideBar = true;
    },
  },
});

export const { toggleSideBar } = Slice.actions;
export default Slice.reducer;
