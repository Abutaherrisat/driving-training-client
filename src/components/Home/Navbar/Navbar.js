import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo-1.png";

const Navbar = () => {
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name } = loggedInUser;
  return (
    <div>
      <nav className="container navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <h4 style={{ color: "#F4CA59" }}>
              {" "}
              <img src={logo} alt="" /> Driving Training
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  style={{
                    marginLeft: "20px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    marginLeft: "20px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    marginLeft: "20px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                {name ? (
                  <h5 style={{ marginLeft: "20px",color:'white' }}>{name}</h5>
                ) : (
                  <Link
                    style={{
                      marginLeft: "20px",
                      textDecoration: "none",
                      color: "white",
                    }}
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
