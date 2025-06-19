import {createSlice} from '@reduxjs/toolkit'
import data from "../data/pizzas.json";
import { useNavigate } from "react-router-dom";

const coupon = [{ code:"XB2-22", value:10, type:"reduction" }, { code:"XB2-23", value:15, type:"reduction" }, { code:"42", value:1 ,type:"gratos", condition:2}]
const initialState = { listPizza: data, panier: [], coupon,afficherModifier:null , isModifPizzaVisible: false}
const navigate = useNavigate()
const PizzaSlice = createSlice({
    name:"gestion pizza",
    initialState,
    reducers:{
        ajouterPanier(state,action){
            const pizza = state.listPizza.find((el,i)=>i===action.payload)
            state.afficherModifier = pizza
            navigate(`/modif/${pizza.name}`)
           
        },
        retirerPanier(state,action){
            state.panier=state.panier.filter((el,i)=> i !== action.payload)
        },
        switchIngredient(state,action){
            const ingredient = state.afficherModifier[action.payload]
            ingredient.quantiter=!ingredient.quantiter
        },
        toggleModifier(state,action){
            state.afficherModifier = state.panier[action.payload]
        },
        validerModif(state){
             state.panier.push({...pizza,ingredients:pizza.ingredients.map(el=>({...el,quantiter:true}))})
        },
        setIsModifPizzaVisible: (state, action) => {
            state.isModifPizzaVisible = action.payload;
          },
    }
})
export const {ajouterPanier,retirerPanier,switchIngredient,toggleModifier,setIsModifPizzaVisible} = PizzaSlice.actions
export const PizzaReducer = PizzaSlice.reducer