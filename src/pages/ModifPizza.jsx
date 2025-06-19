import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import Panier from "../components/Panier";
import { switchIngredient } from "../features/pizzaSlice";



export default function ModifPizza(){
    const panier = useSelector((state)=>state.pizza.panier)
    
    const {recup} = useParams()
    const indexPage = parseInt(recup);
    const dispatch = useDispatch()
    const pizza = panier[indexPage]
    console.log(recup);
    const navigate = useNavigate()
    useEffect(()=>{
        if(!pizza){
            navigate('/')
        }
    },[pizza])
     
    return(
        <section>
            <button onClick={()=>{navigate(-1)}}>retour</button>
            {pizza
            ?   <div>
                    <div><img src={pizza.image} alt={pizza.name} /></div>
                    <div>
                        {pizza.ingredients.map((el,index)=>(
                            <div key={index}>
                                <p>{el.name}</p>
                                <button onClick={()=>{dispatch(switchIngredient({index,indexBis:indexPage}))}}>{el.quantiter?"Retirer":"Annuler"}</button>
                            </div>
                        ))}
                    </div>
                </div>
            :
            null
            }
            <div>
                <Panier/>
            </div>
        </section>
    )
}