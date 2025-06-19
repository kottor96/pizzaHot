import {createSlice} from '@reduxjs/toolkit'
import data from "../data/pizzas.json";

const coupon = [{ code:"XB2-22", value:10, type:"reduction" }, { code:"XB2-23", value:15, type:"reduction" }, { code:"42", value:1 ,type:"gratos", condition:2}]
const initialState = { listPizza: data, panier: [], coupon}


const PizzaSlice = createSlice({
    name:"gestion pizza",
    initialState,
    reducers:{
        ajouterPanier(state,action){
            const pizza = state.listPizza.find((el,i)=>i===action.payload)
            state.panier.push({...pizza,ingredients:pizza.ingredients.map(el=>({...el,quantiter:true}))})
        },
        retirerPanier(state,action){
            state.panier=state.panier.filter((el,i)=> i !== action.payload)
        },
        switchIngredient(state,action){
            const pizaLocal = state.panier[action.payload.indexBis]
            const ingredient = pizaLocal.ingredients[action.payload.index]
            ingredient.quantiter=!ingredient.quantiter
        },
        
    }
})
export const {ajouterPanier,retirerPanier,switchIngredient} = PizzaSlice.actions
export const PizzaReducer = PizzaSlice.reducer