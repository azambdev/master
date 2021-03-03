import React from "react";
import logotrans from "../mylogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
           <div className="container">
      
        <a className="navbar-brand" href="#"> <img src={logotrans} className="logo" alt="logo..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color:"#fff" }}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">about me</Link>
            </li>

            <li className="nav-item">
              <Link  smooth={true} to="services" offset={-100}  className="nav-link" href="#">services</Link>
            </li>

            <li className="nav-item">
              <Link  smooth={true} to="experience" offset={-110}  className="nav-link" href="#">experience</Link>
            </li>

            <li className="nav-item">
              <Link  smooth={true} to="portfolio" offset={-110}  className="nav-link" href="#">portfolio</Link>
            </li>

            <li className="nav-item">
              <Link  smooth={true} to="contact" offset={-110}   className="nav-link" href="#">contact</Link>
            </li>
         
          </ul>
        
        </div>
           </div>
      </nav>
    )
}

export default Navbar
