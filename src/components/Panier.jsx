import { useDispatch, useSelector } from "react-redux"




export default function Panier(){

const panier = useSelector((state)=> state.pizza.panier)
const dispatch = useDispatch()

    return(
        <>
            <div style={{backgroundColor:'white', height: '600px', width:'370px', position:'fixed'}}>
                    {panier.map((el,index)=>(
                        <div>
                            <p>{el.name}</p>
                            <button onClick={()=>dispatch(retirerPanier(index))}>supprimer</button>
                            <button onClick={()=>dispatch(toggleModifier(index))}>modifier</button>
                        </div>
                    ))}
                </div>
        </>
    )
}