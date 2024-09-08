import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-sm">
                <div className="site-info">
                  <span className="mai-call text-secondary">
                    <FaPhoneAlt />
                    +00 123 4455 6666
                  </span>

                  <span className="divider">|</span>
                  <span className="mai-mail text-secondary">
                    <IoMail />
                    mail@example.com
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-sm text-secondary">
                <div className="social-mini-button fs-5 d-flex justify-content-evenly">
                  <Link to="/" aria-label="Facebook">
                    <FaFacebookSquare className="text-secondary" />
                  </Link>
                  <Link to="/" aria-label="Instagram">
                    <FaInstagramSquare className="text-secondary" />
                  </Link>
                  <Link to="/" aria-label="Twitter">
                    <FaTwitter className="text-secondary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-0">
          <div className="container d-flex justify-content-between">
            {/* Brand */}
            <a className="navbar-brand fs-3" href="#">
              <span className="text-bold text-primary fs-2">One</span>-Health
            </a>

            {/* Search Form */}
            <form action="#" className="d-flex flex-grow-1 mx-5">
              <div
                className="input-group input-navbar"
                style={{ border: "1px solid black" }}
              >
                <div className="input-group-prepend">
                  <span
                    className="bg-none fs-4 text-primary p-2"
                    id="icon-addon1"
                  >
                    <span className="mai-search">
                      <CiSearch />
                    </span>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control fs-5 p-0"
                  placeholder="Enter keyword.."
                  aria-label="Username"
                  aria-describedby="icon-addon1"
                  style={{ borderLeft: "1px solid black" }}
                />
              </div>
            </form>
            {/* Toggler Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupport"
              aria-controls="navbarSupport"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarSupport">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link to="/doctors" className="nav-link">
                    Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/News" className="nav-link">
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary ml-lg-3" href="#">
                    Login / Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
