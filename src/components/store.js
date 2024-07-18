import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer,
  },
});

export default store;
