import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { ajouterPanier } from "../features/PizzaSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Panier from "../components/panier/Panier";
import BtnPanier from "../components/btnPanier";

export default function Home() {
  const navigate = useNavigate();
  const listPizza = useSelector((state) => state.pizza.listPizza);
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.pizza.panier);

  return (
    <>
      <div
        id="home"
        style={{
          width: "100%",
          height: "auto",
          padding: "0 5vw",
          boxSizing:"border-box",
          display: "flex",
          backgroundColor: "rgb(245, 247, 249)",
          paddingBottom: "10%",
        }}
      >
        <div id="catalogue"
          style={{
            width: "66%",
            backgroundColor: "rgb(245, 247, 249)",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "5.9%",
          }}
        >
          {listPizza.map((element, index) => (
            <div
              id="pizzaCard"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3%",
                margin: "0 auto 30px auto",
                backgroundColor: "white",
                width: "260px",
                position: "relative",
                borderRadius: "5%",
              }}
              key={index}
            >
              <div
                className="pizza-image-container"
                style={{
                  position: "relative",
                  width: "260px",
                  height: "200px",
                }}
              >
                <img
                  style={{
                    height: "200px",
                    width: "260px",
                    marginBottom: "0",
                    display: "block",
                    borderTopLeftRadius: "5%",
                    borderTopRightRadius: "5%",
                  }}
                  src={element.image}
                  alt=""
                />
                <div
                  style={{ display: "flex" }}
                  className="pizza-ingredients-overlay"
                >
                  {element.ingredients.map((ingredient, idx) => (
                    <span style={{ margin: "0", fontSize: "13px" }} key={idx}>
                      {ingredient.name} <br />
                    </span>
                  ))}
                </div>
              </div>
              <p style={{ margin: "0" }}>
                <strong> {element.name}</strong>
              </p>
              <br />

              <p style={{ marginLeft: "auto", marginRight: "3%" }}>
                à partir de
                <strong> €{element.price} </strong>
                <button
                  onClick={() => {
                    dispatch(ajouterPanier(index)),
                      navigate(`/modif/${panier.length}`);
                  }}
                  style={{
                    backgroundColor: "rgb(199, 1, 26)",
                    color: "white",
                    border: "none",
                    height: "40px",
                    width: "40px",
                    borderRadius: "10px",
                  }}
                >
                  +
                </button>
              </p>
            </div>
          ))}
        </div>
        <div
          id="panierHome"
          style={{
            position: "sticky",
            top: "6%",
            width: "34%",
            height: "100%",
            display: "flex",
            padding: "2% 0 0 2%",
            marginTop: "3.9%",
            marginBottom: "30px",
          }}
        >
          <Panier />
        </div>
      </div>
      <BtnPanier/>
    </>
  );
}
