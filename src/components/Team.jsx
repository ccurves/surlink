import React from "react";
import { team } from "../data";

const Team = () => {
  return (
    <section class="container py-5 my-md-3 my-lg-5">
      <h2 class="h1 text-center pt-1 pb-3 mb-3 mb-lg-4">Our Team</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {team.map((staff) => (
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src="assets/img/team/01.jpg"
                  class="rounded-3"
                  alt={staff.name}
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i class="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                    >
                      <i class="bx bxl-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                    >
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">{staff.name}</h3>
                <p class="fs-sm mb-0">Co-Founder &amp; CEO</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
