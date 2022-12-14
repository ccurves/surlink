import React from "react";

const FAQ = () => {
  return (
    <section class="container py-5 mb-lg-2">
      <div class="row py-2 py-md-4 py-lg-5">
        <div class="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
          <h2 class="pb-3 mb-1 mb-lg-3">
            Any questions? <br class="d-none d-md-inline" />
            Check out the FAQs
          </h2>
          <p class="fs-lg pb-3 mb-2 mb-lg-3">
            Still have unanswered questions and need to get in touch?
          </p>
          <div class="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
            <div class="col">
              <div class="card card-hover">
                <div class="card-body pb-3">
                  <i class="bx bxs-phone-call d-block fs-2 text-primary mb-2 py-1"></i>
                  <p class="fs-sm mb-2">Still have questions?</p>
                  <a href="#" class="btn btn-link stretched-link px-0">
                    Call us
                    <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card-hover">
                <div class="card-body pb-3">
                  <i class="bx bx-message-rounded-dots d-block fs-2 text-success mb-2 py-1"></i>
                  <p class="fs-sm mb-2">Still have questions?</p>
                  <a
                    href="#"
                    class="btn btn-link text-success stretched-link px-0"
                  >
                    Chat with us
                    <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 offset-xl-1">
          <div class="accordion" id="faq">
            <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h2 class="accordion-header" id="q1-heading">
                <button
                  class="accordion-button shadow-none rounded-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q1"
                  aria-expanded="true"
                  aria-controls="q1"
                >
                  Is any of my personal information stored in the App?
                </button>
              </h2>
              <div
                id="q1"
                class="accordion-collapse collapse show"
                aria-labelledby="q1-heading"
                data-bs-parent="#faq"
              >
                <div class="accordion-body fs-sm pt-0">
                  <p>
                    Nunc duis id aenean gravida tincidunt eu, tempor
                    ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                    Aliquet pretium cursus adipiscing gravida et consequat
                    lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                    lectus non. Massa cursus molestie lorem scelerisque
                    pellentesque. Nisi, enim, arcu purus gravida adipiscing
                    euismod montes, duis egestas. Vehicula eu etiam quam
                    tristique tincidunt suspendisse ut consequat.
                  </p>
                  <p class="mb-0">
                    Ornare senectus fusce dignissim ut. Integer consequat in eu
                    tortor, faucibus et lacinia posuere. Turpis sit viverra
                    lorem suspendisse lacus aliquam auctor vulputate. Quis
                    egestas aliquam nunc purus lacus, elit leo elit facilisi.
                    Dignissim amet adipiscing massa integer.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h2 class="accordion-header" id="q2-heading">
                <button
                  class="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q2"
                  aria-expanded="false"
                  aria-controls="q2"
                >
                  What formats can I download my transaction history in?
                </button>
              </h2>
              <div
                id="q2"
                class="accordion-collapse collapse"
                aria-labelledby="q2-heading"
                data-bs-parent="#faq"
              >
                <div class="accordion-body fs-sm pt-0">
                  <p>
                    Nunc duis id aenean gravida tincidunt eu, tempor
                    ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                    Aliquet pretium cursus adipiscing gravida et consequat
                    lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                    lectus non. Massa cursus molestie lorem scelerisque
                    pellentesque. Nisi, enim, arcu purus gravida adipiscing
                    euismod montes, duis egestas. Vehicula eu etiam quam
                    tristique tincidunt suspendisse ut consequat.
                  </p>
                  <p class="mb-0">
                    Ornare senectus fusce dignissim ut. Integer consequat in eu
                    tortor, faucibus et lacinia posuere. Turpis sit viverra
                    lorem suspendisse lacus aliquam auctor vulputate. Quis
                    egestas aliquam nunc purus lacus, elit leo elit facilisi.
                    Dignissim amet adipiscing massa integer.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h2 class="accordion-header" id="q5-heading">
                <button
                  class="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q5"
                  aria-expanded="false"
                  aria-controls="q5"
                >
                  Can I create my own password that is easy for me to remember?
                </button>
              </h2>
              <div
                id="q5"
                class="accordion-collapse collapse"
                aria-labelledby="q5-heading"
                data-bs-parent="#faq"
              >
                <div class="accordion-body fs-sm pt-0">
                  <p>
                    Nunc duis id aenean gravida tincidunt eu, tempor
                    ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                    Aliquet pretium cursus adipiscing gravida et consequat
                    lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                    lectus non. Massa cursus molestie lorem scelerisque
                    pellentesque. Nisi, enim, arcu purus gravida adipiscing
                    euismod montes, duis egestas. Vehicula eu etiam quam
                    tristique tincidunt suspendisse ut consequat.
                  </p>
                  <p class="mb-0">
                    Ornare senectus fusce dignissim ut. Integer consequat in eu
                    tortor, faucibus et lacinia posuere. Turpis sit viverra
                    lorem suspendisse lacus aliquam auctor vulputate. Quis
                    egestas aliquam nunc purus lacus, elit leo elit facilisi.
                    Dignissim amet adipiscing massa integer.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 rounded-3 shadow-sm">
              <h2 class="accordion-header" id="q6-heading">
                <button
                  class="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q6"
                  aria-expanded="false"
                  aria-controls="q6"
                >
                  What happens if I forget or lose my password?
                </button>
              </h2>
              <div
                id="q6"
                class="accordion-collapse collapse"
                aria-labelledby="q6-heading"
                data-bs-parent="#faq"
              >
                <div class="accordion-body fs-sm pt-0">
                  <p>
                    Nunc duis id aenean gravida tincidunt eu, tempor
                    ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                    Aliquet pretium cursus adipiscing gravida et consequat
                    lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                    lectus non. Massa cursus molestie lorem scelerisque
                    pellentesque. Nisi, enim, arcu purus gravida adipiscing
                    euismod montes, duis egestas. Vehicula eu etiam quam
                    tristique tincidunt suspendisse ut consequat.
                  </p>
                  <p class="mb-0">
                    Ornare senectus fusce dignissim ut. Integer consequat in eu
                    tortor, faucibus et lacinia posuere. Turpis sit viverra
                    lorem suspendisse lacus aliquam auctor vulputate. Quis
                    egestas aliquam nunc purus lacus, elit leo elit facilisi.
                    Dignissim amet adipiscing massa integer.
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

export default FAQ;
