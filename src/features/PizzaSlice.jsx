import {createSlice} from '@reduxjs/toolkit'
import data from "../data/pizzas.json";

const coupon = [{ code:"XB2-22", value:10, type:"reduction" }, { code:"XB2-23", value:15, type:"reduction" }, { code:"42", value:1 ,type:"gratos", condition:2}]
const initialState = { listPizza: data, panier: [], coupon,afficherModifier:null }

const PizzaSlice = createSlice({
    name:"gestion pizza",
    initialState,
    reducers:{
        ajouterPanier(state,action){
            const pizza = state.listPizza.find((el)=>el.name===action.payload)
            state.panier.push({...pizza,ingredients:pizza.ingredients.map(el=>({...el,quantiter:true}))})
        },
        retirerPanier(state,action){
            state.panier=state.panier.filter((el,i)=> i !== action.payload)
        },
        switchIngredient(state,action){
            const ingredient = pizzaBis[action.payload.indexBis]
            ingredient.quantiter=!ingredient.quantiter
        },
        toggleModifier(state){
            state.afficherModifier = state.panier
        }
    }
})
export const {ajouterPanier,retirerPanier,switchIngredient,toggleModifier} = PizzaSlice.actions
export const PizzaReducer = PizzaSlice.reducer