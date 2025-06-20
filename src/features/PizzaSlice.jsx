import {createSlice} from '@reduxjs/toolkit'
import data from "../data/pizzas.json";

const coupon = [{ code:"XB2-22", value:0.1, type:"reduction" }, { code:"XB2-23", value:0.15, type:"reduction" }, { code:"42", value:1 ,type:"gratos", condition:2}]
const initialState = { listPizza: data, panier: [], coupon, modifierPizza:null,reduction:null,gratos:null}

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
            if (!state.modifierPizza){
                state.panier[action.payload] = {...state.panier[action.payload],afficher:true}
            }else{
                state.panier[action.payload] = {...state.modifierPizza, afficher: true}
            }
            state.modifierPizza=null
        },
        cancel(state){
            state.panier=state.panier.filter(el=>el.afficher!==false)
        },
        ajouterCoupon(state,action){
            let coupon = state.coupon.find(coupon=> coupon.code === action.payload)
            if (coupon) {
                if (coupon.type === "reduction") {
                    state.reduction.push(coupon)
                } else if (coupon.type === "gratos"){
                    state.gratos === coupon
                }
            }
        }
    }
})
export const {ajouterPanier,retirerPanier,switchIngredient,cancel,valider} = PizzaSlice.actions
export const PizzaReducer = PizzaSlice.reducer

export const selectTotalPanier = (state) => {
    let totalPizza =  state.pizza.panier
        .filter(pizza=> pizza.afficher === true)
        .reduce((total, pizza) => total + pizza.price, 0)
    let totalReduction = totalPizza * (1 - state.pizza.reduction!=null?state.pizza.reduction.value:0)
    let gratos = state.pizza.gratos
    let pizzaGratos = state.pizza.panier.sort(function(a,b){
        a.price-b.price
    })[0];
    let totalReduc = totalReduction - (gratos !== null && state.pizza.panier.length > gratos.condition ? pizzaGratos.price : 0)
    return { total: totalReduc , gratos: pizzaGratos }
};