import { configureStore } from "@reduxjs/toolkit";
import { PizzaReducer } from "../features/pizzaSlice";


const store = configureStore({
    reducer:{
        pizza: PizzaReducer
    }
})

export default store