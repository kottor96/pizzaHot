import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { cancel, switchIngredient, valider } from "../features/PizzaSlice";
import Panier from "../components/panier/Panier";
import "./modifPanier.css";

export default function ModifPizza() {
  const panier = useSelector((state) => state.pizza.panier);

  const { recup } = useParams();
  const indexPage = parseInt(recup);
  const dispatch = useDispatch();
  const pizzaBis = useSelector((state) => state.pizza.modifierPizza);
  const pizza = pizzaBis ?? panier[indexPage];
  const navigate = useNavigate();
  useEffect(() => {
    if (!pizza) {
      navigate("/");
    }
  }, [pizza]);

  return (
    <section>
      <div id="modifPizza" style={{minHeight:"75vh"}}>
        <div id="modif1">
          <div className="back">
            <button
              className="retour"
              onClick={() => {
                dispatch(cancel()), navigate(-1);
              }}
            >
              Retour
            </button>
          </div>
          {pizza ? (
            <div>
              <div className="image">
                <img
                  style={{ borderRadius: "5px", marginBottom: "5%" }}
                  src={pizza.image}
                  alt={pizza.name}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    color: "rgb(200, 16, 46)",
                    fontWeight: "bold",
                  }}
                >
                  Ingrédients:
                </p>
                {pizza.ingredients.map((el, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0 12.5% 0 12.5%",
                    }}
                    key={index}
                  >
                    <p style={{ fontWeight: "bold" }}>{el.name}</p>
                    <button
                      id="RetireIng"
                      onClick={() => {
                        dispatch(
                          switchIngredient({ index, indexBis: indexPage })
                        );
                      }}
                    >
                      {el.quantiter ? "Retirer" : "Annuler"}
                    </button>
                  </div>
                ))}
              </div>
              <button
                id="valid"
                onClick={() => {
                  dispatch(valider(indexPage)), navigate("/");
                }}
              >
                Valider
              </button>
            </div>
          ) : null}
        </div>
        <div id="modif2">
          <Panier />
        </div>
      </div>
    </section>
  );
}
