import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import projectReducer from "./projectCard"

export const store = configureStore({
    reducer: {
        user: userReducer,
        proyect: projectReducer
    }
})