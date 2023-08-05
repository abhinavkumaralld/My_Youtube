import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
export default Store = configureStore({
  reducer: {
    Slice: Slice,
  },
});
