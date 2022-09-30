import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./MoviesSlice/MoviesSlice";
const store = configureStore({
  reducer: {
    infoMovies: MoviesReducer,
  },
});

export default store;
