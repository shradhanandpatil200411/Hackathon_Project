import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../Store/sidebarSlice";

export const Store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
