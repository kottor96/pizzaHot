import { useSelector,useDispatch } from "react-redux";
import  './Home.css'
import { ajouterPanier, retirerPanier, toggleModifier, vider } from "../features/pizzaSlice";
import Panier from "../components/Panier";

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const listPizza = useSelector((state)=> state.pizza.listPizza)
    const dispatch = useDispatch()
    const deplacer = useSelector((state)=>state.pizza.voyage)
    useEffect(()=>{
        navigate(deplacer)
        dispatch(vider())
    },[deplacer])
    
    
    
    
    return(

    <>
        <div style={{width:'100%', height:'auto', padding:'0 10% 0 10%', display:'flex', backgroundColor:'rgb(245, 247, 249)', paddingBottom:'10%'}}>
            <div style={{width:'66%', backgroundColor:'wheat', height:'100%', display:'flex', flexWrap:'wrap'}}>
                {listPizza.map((element, index) =>
                    <div id="pizzaCard" style={{display:'flex', flexDirection:'column', gap:'3%', margin:'0 auto 30px auto', backgroundColor:'white', width:'260px', position: 'relative', overflow: 'hidden'}} key={index}>
                        <div className="pizza-image-container" style={{position: 'relative', width: '260px', height: '200px'}}>
                          <img style={{height:'200px', width:'260px', marginBottom:'0', display: 'block'}} src={element.image} alt="" />
                          <div style={{display:'flex'}} className="pizza-ingredients-overlay">
                            {element.ingredients.map((ingredient, idx) =>
                              <span style={{margin:'0', fontSize:'13px'}} key={idx}>{ingredient.name} <br /></span> 
                            )}
                          </div>
                        </div>
                        <p style={{margin:'0'}}><strong> {element.name}</strong></p><br />

                        <p style={{marginLeft:'auto', marginRight:'3%'}}>à partir de <strong>€{element.price}</strong> <button onClick={()=>{dispatch(ajouterPanier(index))}} style={{backgroundColor:'rgb(199, 1, 26)', color:'white', border:'none', height:'40px', width:'40px', borderRadius:'10px'}} >+</button></p>
                    </div>
                )}
            </div>
            <div style={{width:'33%', height:'100%', display:'flex',padding:'2% 0 0 2%'}}>
                <Panier/>
            </div>
        </div>
    </>)
}