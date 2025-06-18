import {createSlice} from '@reduxjs/toolkit'
import data from "../data/package.json";

const PizzaSlice = createSlice({
    name:"gestion pizza",
    initialState:'',
    reducers:{
        
    }
})

export const PizzaReducer = PizzaSlice.reducer