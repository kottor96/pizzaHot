import logo from "../assets/logo/ph-logo-white.webp";
import { NavLink } from "react-router-dom";

export default function Navbar(params) {
    return(
        <nav className="navbar bg-danger navbar-expand" data-bs-theme='dark'>
            <div className="container justify-content-center">

                <div className="navbar-brand">
                    <img src={logo} alt="logo pizza hut" />
                </div>
                <div className="navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link disabled">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled">Entrées</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link active">Pizza</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled">Spécialités</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled">Boissons</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled">Desserts</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex gap-2">
                        <a>Se connecter</a>
                        <a>fr<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}