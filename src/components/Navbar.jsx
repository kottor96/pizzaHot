import logo from "../assets/logo/ph-logo-white.webp";
import { NavLink } from "react-router-dom";
import '../App.css'

export default function Navbar(params) {
    return(
        <nav id="navbar" style={{position:'fixed', width:'100%'}} className="navbar bg-danger navbar-expand-lg" data-bs-theme='dark'>
            <div className="container justify-content-center" >
                <div className="navbar-brand">
                    <img src={logo} alt="logo pizza hut" />
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div className="navbar-collapse collapse" id="navbarText">
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
                    
                    <ul className="navbar-nav d-flex gap-2 align-items-end" >
                        <a className="nav-link text-light p-2" id="connect">Se connecter</a>
                        <a className="nav-link text-light">fr<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg></a>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}