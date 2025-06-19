import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import Panier from "../components/Panier";
import { cancel, switchIngredient, valider } from "../features/pizzaSlice";



export default function ModifPizza(){
    const panier = useSelector((state)=>state.pizza.panier)
    
    const {recup} = useParams()
    const indexPage = parseInt(recup);
    const dispatch = useDispatch()
    const pizza = panier[indexPage]
    const navigate = useNavigate()
    useEffect(()=>{
        if(!pizza){
            navigate('/')
        }
    },[pizza])
     
    return(
        <section>
            <button onClick={()=>{dispatch(cancel()),navigate(-1)}}>retour</button>
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
                    <button onClick={()=>{dispatch(valider(indexPage)),navigate('/')}}>valider</button>
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