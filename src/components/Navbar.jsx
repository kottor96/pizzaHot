import logo from "../assets/logo/ph-logo-white.webp";
import { NavLink } from "react-router-dom";

export default function Navbar(params) {
    return(
        <nav className="navbar bg-danger navbar-expand">
            <div className="navbar-brand">
                <img src={logo} alt="logo pizza hut" />
            </div>
            <div className="navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            </div>
        </nav>
    )
}