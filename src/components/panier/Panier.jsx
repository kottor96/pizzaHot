import { useDispatch, useSelector } from "react-redux";
import {
  validerCommande,
  ajouterCoupon,
  retirerPanier,
  selectTotalPanier,
} from "../../features/pizzaSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./panier.css";

export default function Panier() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.pizza.panier);
  const promoReduction = useSelector((state) => state.pizza.reduction);
  const promoGratos = useSelector((state) => state.pizza.gratos);
  const local = useLocation();
  const { total, gratos, total_sansReduc } = useSelector((state) =>
    selectTotalPanier(state)
  );
  const [coupon, setCoupon] = useState("");

  const error = useSelector((state) => state.pizza.error);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "370px",
      }}
    >
      <h5 style={{ fontWeight: "bolder" }}>Panier d'achat</h5>
      <div
        style={{
          backgroundColor: "rgb(245, 247, 249)",
          width: "89%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ marginBottom: "0" }}>Livraison à</p>
        <p style={{ marginBottom: "0" }}>Blablabla</p>
        <p
          style={{
            backgroundColor: "rgb(200, 16, 46)",
            color: "white",
            padding: "4px",
            borderRadius: "3px",
            marginBottom: "0",
          }}
        >
          Livraison à partir de 17h00
        </p>
      </div>
      <p
        style={{
          marginTop: "0",
          fontSize: "13px",
          cursor: "pointer",
          opacity: "0.7",
          width: "89%",
          marginLeft: "auto",
          marginRight: "auto",
          borderBottom: "1px black dashed",
          marginTop: "2%",
          paddingBottom: "10px",
        }}
      >
        Modifier l'adresse?
      </p>
      {panier.map((el, index) =>
        el.afficher ? (
          <div
            className="btnPanier"
            key={index}
            style={{ width: "89%", marginLeft: "auto", marginRight: "auto" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold" }}>{el.name}</p>
                <div style={{ marginTop: "8px", fontSize: "12px" }}>
                  sans :{" "}
                  {el.ingredients
                    .filter((ingredient) => ingredient.quantiter === false)
                    .map((ingredient) => ingredient.name)
                    .join(" - ")}
                </div>
              </div>
              <p style={{ fontWeight: "400" }}>
                {" "}
                <strong>{el.price}€</strong>
              </p>{" "}
              <br />
            </div>
            {local.pathname === "/" ? (
              <div
                style={{
                  marginBottom: "2%",
                  display: "flex",
                  justifyContent: "end",
                  borderBottom: "1px black dashed",
                  paddingBottom: "10px",
                  marginBottom: "5%",
                }}
              >
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "red",
                    fontWeight: "200",
                    fontSize: "12px",
                  }}
                  onClick={() => dispatch(retirerPanier(index))}
                >
                  supprimer
                </button>
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "black",
                    fontWeight: "200",
                    fontSize: "12px",
                  }}
                  onClick={() => navigate(`/modif/${index}`)}
                >
                  modifier
                </button>
              </div>
            ) : null}
          </div>
        ) : null
      )}
      <div
        style={{
          marginTop: "10%",
          textAlign: "center",
          border: "1px dashed black",
          padding: "0 10px 0 10px",
          opacity: "0.6",
          width: "89%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p>Code</p>
        <input
          type="text"
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
          border='none'
        />
        <button
          style={{
            backgroundColor: "rgb(128, 187, 1)",
            color: "white",
            border: "none",
            height: "30px",
            borderRadius: "10px",
          }}
          onClick={() => {
            dispatch(ajouterCoupon(coupon)), setCoupon("");
          }}
        >
          Valider
        </button>
        {error !== null && <p>{error}</p>}
      </div>
      <div
        style={{
          backgroundColor: "rgb(245, 247, 249)",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {gratos &&
            promoGratos &&
            promoGratos.condition <= panier.length &&
            gratos.price && <p>-{Number(gratos.price).toFixed(2)} €</p>}
          {promoReduction && promoReduction.value && (
            <p>-{(total_sansReduc * promoReduction.value).toFixed(2)} €</p>
          )}
          <p>Total</p>
          <p>{Number(total).toFixed(2)} €</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => {navigate("/merci" ),validerCommande}}
          style={{
            width: "370px",
            backgroundColor: "rgb(128, 187, 1)",
            border: "none",
            height: "50px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "7px",
            }}
          >
            <p
              style={{
                backgroundColor: "rgb(76, 111, 1)",
                padding: "0 10px 0 10px",
                color: "white",
                fontSize: "20px",
              }}
            >
              1
            </p>
            <p style={{ color: "white", fontSize: "20px", marginLeft: "4%" }}>
              Commander
            </p>
            <p style={{ color: "white", fontSize: "20px" }}>
              {total.toFixed(2)} €
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
