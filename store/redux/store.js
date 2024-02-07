import { configureStore } from "@reduxjs/toolkit";
import favorite from "./favorite";


 export const store = configureStore({
    reducer: {
        favoriteMeal : favorite
    }
 });