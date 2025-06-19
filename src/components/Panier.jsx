import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { retirerPanier, toggleModifier } from "../features/pizzaSlice" 

export default function Panier(){

const panier = useSelector((state)=> state.pizza.panier)
const [isModifPizzaVisible, setIsModifPizzaVisible] = useState(true) 
const dispatch = useDispatch()

    return(
        <>
            <div style={{backgroundColor:'white', height: '600px', width:'370px', position:'fixed'}}>
                    {panier.map((el,index)=>
                        {!isModifPizzaVisible ? (<div className="btnPanier" key={index}>
                            <p>{el.name}</p>
                            <button onClick={()=>dispatch(retirerPanier(index))}>supprimer</button>
                            <button onClick={()=>dispatch(toggleModifier(index))}>modifier</button>
                        </div>) : null}
                    )}
                </div>
              


        </>
    )
}