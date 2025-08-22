import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Inject CSS styles directly */}
      <style>{`
        .nav-link {
          color: #393a3d;
          text-decoration: none;
          font-weight: 380;
          transition: color 0.2s;
        }
        .nav-link:hover, .nav-link:focus {
          color: #387ed1;
          text-decoration: none;
        }
        .navbar-brand {
          color: #666666;
          font-weight: bold;
          transition: color 0.2s;
        }
        .navbar-brand:hover, .navbar-brand:focus {
          color: #387ed1;
        }
      `}</style>

      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              style={{ width: "25%" }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
