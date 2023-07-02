import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

//& hem store olusturur hemde farkli reducer lari birlestirir
const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production", //&devTools u kapatmak icin kullanilan degisken
});

export default store;
