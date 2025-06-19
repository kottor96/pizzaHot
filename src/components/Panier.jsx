import { useDispatch, useSelector } from "react-redux";
import { retirerPanier } from "../features/pizzaSlice";
import {useLocation,useNavigate} from 'react-router-dom'

export default function Panier() {
  const panier = useSelector((state) => state.pizza.panier);
  const dispatch = useDispatch();
  const local = useLocation();
  const navigate = useNavigate();
  
  return (
    <div style={{ backgroundColor: "white", height: "600px", width: "370px", position: "fixed" }}>
      {panier.map((el, index) =>
        el.afficher ? (
          <div className="btnPanier" key={index}>
            <p>
              {el.name} : <br />
              retirer
              {el.name} {el.ingredients
                .filter(ingredient => ingredient.quantiter === false)
                .map(ingredient => ingredient.name)
                .join(' - ')
              }
            </p>
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