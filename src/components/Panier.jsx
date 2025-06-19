import { useDispatch, useSelector } from "react-redux";
import { retirerPanier } from "../features/pizzaSlice";
import {useLocation,useNavigate} from 'react-router-dom'

export default function Panier() {
  const panier = useSelector((state) => state.pizza.panier);
  const dispatch = useDispatch();
  const local = useLocation();
  const navigate = useNavigate();
  console.log(panier);
  
  return (
    <div style={{ backgroundColor: "white", height: "600px", width: "370px", position: "fixed" }}>
      {panier.map((el, index) =>
        el.afficher ? (
          <div className="btnPanier" key={index}>
            <p>{el.name}</p>
            {local.pathname === '/' && (
              <>
                <button onClick={() => dispatch(retirerPanier(index))}>supprimer</button>
                <button onClick={() => navigate(`/modif/${index}`)}>modifier</button>
              </>
            )}
          </div>
        ) : null
      )}
    </div>
  );
}