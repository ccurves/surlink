import React from "react";
import phoneImg from "../assets/img/hero/phoneMap.png";
import manImg from "../assets/img/hero/man.png";
import appStoreLight from "../assets/img/market/appstore-light.svg";
import appStoreDark from "../assets/img/market/appstore-dark.svg";
import googleplayLight from "../assets/img/market/googleplay-light.svg";
import googleplayDark from "../assets/img/market/googleplay-dark.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden pt-2 pt-md-4 pt-lg-5">
      <div className="container pt-1 pt-sm-0">
        <div className="row align-items-center">
          <div className="col-md-7 order-md-2 mb-3 mb-sm-2 mb-md-0">
            <div className="parallax" style={{ maxWidth: "746px" }}>
              <div className="parallax-layer" data-depth="0.1">
                <img src={phoneImg} alt="Phone" />
              </div>
              {/* <div className="parallax-layer" data-depth="0.1">
                <img src={manImg} alt="Phone" style={{ maxWidth: "246px" }} />
              </div> */}
            </div>
          </div>

          <div className="col-md-5 order-md-1">
            <h1 className="display-4 mb-ms-4">You search. We find. We link.</h1>
            <p
              className="fs-xl pb-2 mb-4 mb-xl-5"
              style={{ maxWidth: "450px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              corrupti provident quasi voluptatem iusto officiis.
            </p>

            <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
              <a
                href="#"
                class="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3"
              >
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
            <div class="position-relative d-inline-flex align-items-center justify-content-center justify-content-md-start mt-auto pt-3 pt-md-4 pb-xl-2">
              <a
                href="#features"
                class="btn btn-icon btn-light bg-white stretched-link rounded-circle me-3"
                data-scroll
                data-scroll-offset="120"
              >
                <i class="bx bx-chevron-down"></i>
              </a>
              <span class="fs-sm">Discover more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
