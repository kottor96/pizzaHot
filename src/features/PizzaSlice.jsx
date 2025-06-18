import {createSlice} from '@reduxjs/toolkit'
import data from "../data/pizzas.json";

const coupon = [{ code:"XB2-22", value:10, type:"reduction" }, { code:"XB2-23", value:15, type:"reduction" }, { code:"42", value:1 ,type:"gratos", condition:2}]
const initialState = { listPizza: data, pannier: [], coupon }

const PizzaSlice = createSlice({
    name:"gestion pizza",
    initialState,
    reducers:{
        ajouterPanier(state,action){
            const pizza = state.listPizza.find((el)=>el.nom)
        }
    }
})
export const {ajouterPanier} = PizzaSlice.actions
export const PizzaReducer = PizzaSlice.reducer