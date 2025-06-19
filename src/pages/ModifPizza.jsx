import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";


export default function ModifPizza(){
    const panier = useSelector((state)=>state.pizza.panier)
    const {index} = useParams()
    const pizza = panier[index]
    const navigate = useNavigate()
    useEffect(()=>{
        if(!pizza){
            navigate('/')
        }
    },[pizza])
     
    return(
        <section>
            {pizza
            ?   <div>
                    <div><img src={pizza.image} alt={pizza.name} /></div>
                    <div>
                        {pizza.ingredients.map((el,index)=>(
                            <div>
                                <p>{el.name}</p>
                                <button></button>
                            </div>
                        ))}
                    </div>
                </div>
            :
            null
            }
            
        </section>
    )
}