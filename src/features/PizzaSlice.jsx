import {createSlice} from '@reduxjs/toolkit'
import data from "../data/pizzas.json";

const coupon = [{ code:"XB2-22", value:10, type:"reduction" }, { code:"XB2-23", value:15, type:"reduction" }, { code:"42", value:1 ,type:"gratos", condition:2}]
const initialState = { listPizza: data, panier: [], coupon, modifierPizza:null}


const PizzaSlice = createSlice({
    name:"gestion pizza",
    initialState,
    reducers:{
        ajouterPanier(state,action){
            const pizza = state.listPizza.find((el,i)=>i===action.payload)
            state.panier.push({...pizza,afficher:false,ingredients:pizza.ingredients.map(el=>({...el,quantiter:true}))})
        },
        retirerPanier(state,action){
            state.panier=state.panier.filter((el,i)=> i !== action.payload)
        },
        switchIngredient(state,action){
            const originalPizza = state.panier[action.payload.indexBis];
            if(state.modifierPizza===null){
                state.modifierPizza = {
                    ...originalPizza,
                    ingredients: originalPizza.ingredients.map(el => ({ ...el }))
                };
            }
            const ingredient = state.modifierPizza.ingredients[action.payload.index];
            ingredient.quantiter = !ingredient.quantiter;
            console.log(state.modifierPizza);
            
        },
        valider(state,action){
            state.panier[action.payload] = {...state.modifierPizza, afficher: true}
            state.modifierPizza=null
        },
        cancel(state){
            state.panier=state.panier.filter(el=>el.afficher!==false)
        }
        
    }
})
export const {ajouterPanier,retirerPanier,switchIngredient,cancel,valider} = PizzaSlice.actions
export const PizzaReducer = PizzaSlice.reducer