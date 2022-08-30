import {configureStore} from "@reduxjs/toolkit";
import tourReducer from "./features/tourSlice";

export const store = configureStore({
    reducer:{
        tour:tourReducer,
    }
})

