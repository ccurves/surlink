import React from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <header className="header navbar navbar-expand-lg  navbar-sticky shadow-sm">
      <div className="container px-3">
        <a href="index-2.html" className="navbar-brand pe-3">
          <img src={logo} width="35" alt="Surlink" />
          Surlink
        </a>
        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <div className="offcanvas-header border-top">
            <a href="/" className="btn btn-secondary w-100">
              <i className="bx bx-log-in fs-lg me-2"></i>
              &nbsp;Get app
            </a>
          </div>
        </div>
        <div
          className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4"
          data-bs-toggle="mode"
        >
          <input type="checkbox" className="form-check-input" id="theme-mode" />
          <label
            className="form-check-label d-none d-sm-block"
            htmlFor="theme-mode"
          >
            Light
          </label>
          <label
            className="form-check-label d-none d-sm-block"
            htmlFor="theme-mode"
          >
            Dark
          </label>
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          href="/"
          className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex"
        >
          <i className="bx bx-log-in fs-lg me-2"></i>
          &nbsp;Get app
        </a>
      </div>
    </header>
  );
};

export default Navbar;
