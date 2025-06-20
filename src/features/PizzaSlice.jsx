import {createSlice,createSelector} from '@reduxjs/toolkit'
import data from "../data/pizzas.json";

const coupon = [{ code:"XB2-22", value:0.1, type:"reduction" }, { code:"XB2-23", value:0.15, type:"reduction" }, { code:"42", value:1 ,type:"gratos", condition:2}]
const initialState = { listPizza: data, panier: [], coupon, modifierPizza:null,reduction:null,gratos:null,error:null}

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
                state.error = null
                if (coupon.type === "reduction") {
                    state.reduction = coupon
                } else if (coupon.type === "gratos"){
                    state.gratos = coupon
                }
            } else {
                state.error = "code mauvais"
            }
        }
    }
})
export const {ajouterPanier,retirerPanier,switchIngredient,cancel,valider,ajouterCoupon} = PizzaSlice.actions
export const PizzaReducer = PizzaSlice.reducer

const selectPanier = (state) => state.pizza.panier;
const selectReduction = (state) => state.pizza.reduction;
const selectGratos = (state) => state.pizza.gratos;

export const selectTotalPanier = createSelector(
  [selectPanier, selectReduction, selectGratos],
  (panier, reduction, gratos) => {
    const pizzasValides = panier.filter(pizza => pizza.afficher === true);
    const totalPizza = pizzasValides.reduce((total, pizza) => total + pizza.price, 0);
    const totalReduction = totalPizza * (1 - (reduction != null ? reduction.value : 0));
    const pizzaGratos = pizzasValides.length > 0
      ? [...pizzasValides].sort((a,b) => a.price - b.price)[0]
      : null;
    const totalReduc = (gratos !== null && pizzasValides.length >= gratos.condition && pizzaGratos)
      ? totalReduction - pizzaGratos.price
      : totalReduction;
    return { total: totalReduc, total_sansReduc:totalPizza , gratos: pizzaGratos };
  }
);
