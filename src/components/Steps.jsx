import React from "react";
import frame from "../assets/img/screen/phone-frame.png";
import screen from "../assets/img/screen/phone-screen.png";
import screen01 from "../assets/img/screen/signup.png";
import screen02 from "../assets/img/screen/verify.png";
import screen03 from "../assets/img/screen/mapScreen.png";
import screen04 from "../assets/img/screen/services.png";

const Steps = () => {
  return (
    <section class="position-relative bg-secondary py-5">
      <div class="container mt-3 pt-md-2 pt-lg-4 pb-2 pb-md-4 pb-lg-5">
        <h2 class="h1 text-center pb-2 pb-md-0 mb-4 mb-md-5">
          How Does It Work?
        </h2>
        <div class="position-relative mx-5">
          <button
            type="button"
            id="prev-screen"
            class="btn btn-prev btn-icon position-absolute top-50 start-0 ms-n5 translate-middle-y"
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <button
            type="button"
            id="next-screen"
            class="btn btn-next btn-icon position-absolute top-50 end-0 me-n5 translate-middle-y"
          >
            <i class="bx bx-chevron-right"></i>
          </button>

          <div class="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33 zindex-5">
            <div
              class="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
              style={{
                maxWidth: "328px",
                backgroundImage: `url(${frame})`,
              }}
            ></div>
          </div>

          <div class="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33">
            <div
              class="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
              style={{
                maxWidth: "328px",
                backgroundImage: `url(${screen})`,
              }}
            ></div>
          </div>

          <div
            class="swiper mobile-app-slider"
            data-swiper-options='{
              "slidesPerView": 1,
              "centeredSlides": true,
              "loop": true,
              "tabs": true,
              "pagination": {
                "el": "#swiper-progress",
                "type": "progressbar"
              },
              "navigation": {
                "prevEl": "#prev-screen",
                "nextEl": "#next-screen"
              },
              "breakpoints": {
                "768": { "slidesPerView": 3 }
              }
            }'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide" data-swiper-tab="#text-1">
                <img
                  src={screen01}
                  class="d-block mx-auto"
                  width="328"
                  alt="Screen"
                />
              </div>

              <div class="swiper-slide" data-swiper-tab="#text-2">
                <img
                  src={screen02}
                  class="d-block mx-auto"
                  width="328"
                  alt="Screen"
                />
              </div>

              <div class="swiper-slide" data-swiper-tab="#text-3">
                <img
                  src={screen03}
                  class="d-block mx-auto"
                  width="328"
                  alt="Screen"
                />
              </div>

              <div class="swiper-slide" data-swiper-tab="#text-4">
                <img
                  src={screen04}
                  class="d-block mx-auto"
                  width="328"
                  alt="Screen"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center pt-4 mt-2 mt-md-3">
          <div class="swiper-tabs col-xl-6 col-lg-7 col-md-8 text-center">
            <div id="text-1" class="swiper-tab active">
              <h3 class="h4 pb-1 mb-2">Step 1. Create an account</h3>
              <p class="mb-0">
                Consequat ut cras nisl, enim purus in facilisi. Ipsum amet,
                lectus malesuada risus sollicitudin accumsan. Id sem elit vel
                vel lectus risus senectus.
              </p>
            </div>

            <div id="text-2" class="swiper-tab">
              <h3 class="h4 pb-1 mb-2">Step 2. Complete KYC</h3>
              <p class="mb-0">
                Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
                Arcu sociis tristique quisque hac in consectetur condimentum.
              </p>
            </div>

            <div id="text-3" class="swiper-tab">
              <h3 class="h4 pb-1 mb-2">
                Step 3. Search for Service renders close to you
              </h3>
              <p class="mb-0">
                Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                Pellentesque volutpat ligula est. Mattis fermentum, at nec
                lacus.
              </p>
            </div>

            <div id="text-4" class="swiper-tab">
              <h3 class="h4 pb-1 mb-2">Step 4. Select a Service Renderer</h3>
              <p class="mb-0">
                A sed lorem felis, pulvinar pharetra. At tempus, vel sed
                faucibus amet sit elementum sed erat. Id nunc blandit pharetra
                facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="swiper-progress"
        class="swiper-pagination bottom-0"
        style={{ top: "auto" }}
      ></div>
    </section>
  );
};

export default Steps;
