import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./State/authSlice";

const stote = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default stote;
