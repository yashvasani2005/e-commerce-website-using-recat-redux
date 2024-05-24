import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slice/Cartslice";



export const store=configureStore({
    reducer:{
        cart:Cartslice,
    } 
})