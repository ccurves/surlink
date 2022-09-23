import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Team from "../components/Team";

const About = () => {
  return (
    <div>
      <main className="page-wrapper">
        <Navbar />

        <section class="position-relative pt-5 pb-4 pb-md-5">
          <div
            class="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
            // style="background-image: url(assets/img/about/hero-bg.svg);"
          >
            <div class="d-lg-none" style={{ height: "960px" }}></div>
            <div class="d-none d-lg-block" style={{ height: "768px" }}></div>
          </div>

          <div class="container position-relative zindex-5 pt-5">
            <div class="row">
              <div class="col-lg-6">
                <nav
                  class="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4"
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="/">
                        <i class="bx bx-home-alt fs-lg me-1"></i>Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>

                <h1 class="pb-2 pb-md-3">About Surlink</h1>
                <p
                  class="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
                  style={{ maxWidth: "526px" }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore aut doloribus debitis consequatur illum inventore?
                  Minus voluptas assumenda atque veniam.
                </p>
              </div>

              <div class="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
                <div class="row row-cols-2 gx-3 gx-lg-4">
                  <div class="col pt-lg-5 mt-lg-1">
                    <img
                      src="https://images.pexels.com/photos/4439585/pexels-photo-4439585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="d-block rounded-3 mb-3 mb-lg-4"
                      alt="Image"
                    />
                    <img
                      src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="d-block rounded-3"
                      alt="Image"
                    />
                  </div>
                  <div class="col">
                    <img
                      src="https://images.pexels.com/photos/4563785/pexels-photo-4563785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="d-block rounded-3 mb-3 mb-lg-4"
                      alt="Image"
                    />
                    <img
                      src="https://images.pexels.com/photos/6196694/pexels-photo-6196694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="d-block rounded-3"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default About;
