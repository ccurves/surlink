import React from "react";
import mapImg from "../assets/img/features/map.png";
import cardImg from "../assets/img/features/card.png";
import { Explore, Payments, Security, SupportAgent } from "@mui/icons-material";
// import PaymentsIcon from "@mui/icons-material/Payments";

const Features = () => {
  return (
    <section
      id="features"
      class="container pt-lg-2 pt-xl-3 pb-3 pb-xl-5 mt-n2 mt-sm-0 mb-2 mb-md-4 mb-lg-5"
    >
      <div class="row pb-xl-3">
        <div class="col-lg-5 d-none d-lg-block">
          <div class="position-relative" style={{ maxWidth: "260px" }}>
            <img src={mapImg} alt="Phone" />
            <div
              class="rellax position-absolute top-0"
              data-rellax-vertical-scroll-axis="x"
              data-rellax-horizontal-speed="0.75"
              data-disable-parallax-down="lg"
              style={{ maxWidth: "260px", right: "-2.75rem" }}
            >
              <img src={cardImg} alt="Card" />
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <h2 class="h1 text-center text-md-start mb-4">App Features</h2>
          <p class="fs-lg text-muted text-center text-md-start mb-4 mb-xl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
          <div class="row row-cols-1 row-cols-sm-2 pt-2 pt-sm-3 pt-xl-2">
            <div class="col pb-2 pb-xl-0 mb-4 mb-xl-5">
              <div class="d-flex align-items-start pe-xl-3">
                <div class="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                  <Payments sx={{ width: 34, height: 34, color: "#139595" }} />
                </div>
                <div class="ps-4 ps-sm-3 ps-md-4">
                  <h3 class="h5 pb-1 mb-2">Easy Payments</h3>
                  <p class="mb-0">
                    Id mollis consectetur congue egestas egestas suspendisse
                    blandit justo.
                  </p>
                </div>
              </div>
            </div>

            <div class="col pb-2 pb-xl-0 mb-4 mb-xl-5">
              <div class="d-flex align-items-start ps-xl-3">
                <div class="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                  <Security sx={{ width: 34, height: 34, color: "#139595" }} />
                </div>
                <div class="ps-4 ps-sm-3 ps-md-4">
                  <h3 class="h5 pb-1 mb-2">Data Security</h3>
                  <p class="mb-0">
                    Augue pulvinar justo, fermentum fames aliquam accumsan
                    vestibulum non.
                  </p>
                </div>
              </div>
            </div>

            <div class="col pb-2 pb-xl-0 mb-4 mb-xl-5">
              <div class="d-flex align-items-start pe-xl-3">
                <div class="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                  <Explore sx={{ width: 34, height: 34, color: "#139595" }} />
                </div>
                <div class="ps-4 ps-sm-3 ps-md-4">
                  <h3 class="h5 pb-1 mb-2">Location Based</h3>
                  <p class="mb-0">
                    Mattis urna ultricies non amet, purus in auctor non. Odio
                    vulputate ac nibh.
                  </p>
                </div>
              </div>
            </div>

            <div class="col pb-2 pb-xl-0 mb-4 mb-xl-5">
              <div class="d-flex align-items-start ps-xl-3">
                <div class="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                  <SupportAgent
                    sx={{ width: 34, height: 34, color: "#139595" }}
                  />
                </div>
                <div class="ps-4 ps-sm-3 ps-md-4">
                  <h3 class="h5 pb-1 mb-2">Support 24/7</h3>
                  <p class="mb-0">
                    A elementum, imperdiet enim, pretium etiam facilisi in
                    aenean quam mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
