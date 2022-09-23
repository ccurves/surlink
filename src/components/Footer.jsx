import React from "react";
import logo from "../assets/img/Surlinhorizontallogo.png";
import appStoreLight from "../assets/img/market/appstore-light.svg";
import appStoreDark from "../assets/img/market/appstore-dark.svg";
import googleplayLight from "../assets/img/market/googleplay-light.svg";
import googleplayDark from "../assets/img/market/googleplay-dark.svg";

const Footer = () => {
  return (
    <div>
      <footer class="footer pt-5 pb-4 pb-lg-5">
        <div class="container text-center pt-lg-3">
          <div class="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
            <img src={logo} class="me-2" width="200" alt="logo" />
            {/* <span class="fs-4">Surlink</span> */}
          </div>
          <ul class="nav justify-content-center pt-3 pb-4 pb-lg-5">
            <li class="nav-item">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="/#features" class="nav-link">
                Features
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                Docs
              </a>
            </li>
          </ul>
          <div class="d-flex flex-column flex-sm-row justify-content-center">
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3">
              <img
                src={appStoreLight}
                class="light-mode-img"
                width="124"
                alt="App Store"
              />
              <img
                src={appStoreDark}
                class="dark-mode-img"
                width="124"
                alt="App Store"
              />
            </a>
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 mb-3">
              <img
                src={googleplayLight}
                class="light-mode-img"
                width="139"
                alt="Google Play"
              />
              <img
                src={googleplayDark}
                class="dark-mode-img"
                width="139"
                alt="Google Play"
              />
            </a>
          </div>
          <div class="d-flex justify-content-center pt-4 mt-lg-3">
            <a href="#" class="btn btn-icon btn-secondary btn-facebook mx-2">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="btn btn-icon btn-secondary btn-instagram mx-2">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="btn btn-icon btn-secondary btn-twitter mx-2">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" class="btn btn-icon btn-secondary btn-youtube mx-2">
              <i class="bx bxl-youtube"></i>
            </a>
          </div>
          <p class="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
            <span class="opacity-80">&copy; All rights reserved. </span> Surlink
          </p>
        </div>
      </footer>
      <a href="#top" class="btn-scroll-top" data-scroll>
        <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
        <i class="btn-scroll-top-icon bx bx-chevron-up"></i>
      </a>
    </div>
  );
};

export default Footer;
