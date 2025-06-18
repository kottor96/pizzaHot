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
                            <a className="nav-link disabled">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Entrées</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link active">Pizza</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Spécialités</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Boissons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Desserts</a>
                        </li>
                    </ul>
                    <div className="d-flex gap-2">
                        <ul className="navbar-nav">
                            <a className="nav-link text-light" id="connect">Se connecter</a>
                            <a className="nav-link text-light">fr<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg></a>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}