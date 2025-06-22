import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

export default function BtnPanier(){
    const panier = useSelector((state)=>state.pizza.panier)
    const navigate = useNavigate()
    console.log(panier);
    
    return(
        <button className='btn_panier' onClick={()=>navigate('/panier')}>
            <p style={{margin:"0"}}>{panier.length}</p>
            <p style={{margin:"0"}}>panier</p>
        </button>
    )
}