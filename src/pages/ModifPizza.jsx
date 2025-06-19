import { useSelector } from "react-redux";

export default function ModifPizza(){
    const ModifPizza = useSelector((state)=>state.afficherModifier)
    return(
        <section>
            <div>
                <div><img src={ModifPizza.image} alt={ModifPizza.name} /></div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}