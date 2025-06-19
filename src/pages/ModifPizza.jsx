import { useSelector } from "react-redux";
import Panier from "../components/Panier";


export default function ModifPizza(){
    const ModifPizza = useSelector((state)=>state.afficherModifier)
    return(
        <section>
            <div>
                <div><img src={ModifPizza.image} alt={ModifPizza.name} /></div>
                <div>
                    <Panier/>
                </div>
            </div>
        </section>
    )
}