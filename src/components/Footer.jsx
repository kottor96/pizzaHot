import "../App.css";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        style={{
          backgroundColor: "rgb(35, 31, 32)",
          height: "auto",
          padding: "5% 15% 0 15%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "33%" }}
          >
            <h6 style={{ color: "white", marginBottom: "10%" }}>
              A propos de Pizza Hut
            </h6>
            <p style={{ color: "white" }}>Magasins</p>
            <p style={{ color: "white" }}>La marque Pizza Hut</p>
            <p style={{ color: "white" }}>Emplois</p>
          </div>
          <div style={{ width: "33%" }}>
            <h6 style={{ color: "white", marginBottom: "10%" }}>
              Commandez en ligne
            </h6>
            <p style={{ color: "white" }}>Magasins</p>
            <p style={{ color: "white" }}>La marque Pizza Hut</p>
            <p style={{ color: "white" }}>Emplois</p>
          </div>
          <div style={{ width: "33%" }}>
            <h6 style={{ color: "white", marginBottom: "10%" }}>Contact</h6>
            <p style={{ color: "white" }}>Magasins</p>
            <p style={{ color: "white" }}>La marque Pizza Hut</p>
            <p style={{ color: "white" }}>Emplois</p>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", marginTop: "6%" }}>
          <div style={{ width: "50%", color: "grey" }}>
            <span>Ceci est un exercice, gang</span>
          </div>
          <div
            style={{
              width: "50%",
              color: "white",
              display: "flex",
              fontSize: "11px",
              gap: "3%",
            }}
          >
            <p>© 2025 Pizza Hot Training Template</p>
            <a href="#">Conditions de ventes</a>
            <a href="#">Conditions générales</a>
            <a href="#">Conditions de confidentialité</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
}
