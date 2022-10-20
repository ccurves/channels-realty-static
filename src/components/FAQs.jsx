import React from "react";

const FAQs = () => {
  return (
    <div className="col-lg-6">
      <div class="container content-space-2 content-space-b-lg-3">
        <div className="w-lg-75 mx-lg-auto">
          <div className="d-grid gap-10">
            <div class="d-grid gap-3">
              <h2>Frequently Asked Questions</h2>
              <a class="" role="button">
                Do you have questions you want answers to?
              </a>

              <div
                class="accordion accordion-flush accordion-lg"
                id="accordionFAQBasics"
              >
                <div class="accordion-item">
                  <div class="accordion-header" id="headingBasicsOne">
                    <a
                      class="accordion-button"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBasicsOne"
                      aria-expanded="true"
                      aria-controls="collapseBasicsOne"
                    >
                      Lorem ipsum dolor amet consectetur
                    </a>
                  </div>
                  <div
                    id="collapseBasicsOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingBasicsOne"
                    data-bs-parent="#accordionFAQBasics"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia distinctio qui corporis repellendus explicabo, at
                      odio perspiciatis recusandae excepturi minima.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-header" id="headingBasicsTwo">
                    <a
                      class="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBasicsTwo"
                      aria-expanded="false"
                      aria-controls="collapseBasicsTwo"
                    >
                      Can I cancel at anytime?
                    </a>
                  </div>
                  <div
                    id="collapseBasicsTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingBasicsTwo"
                    data-bs-parent="#accordionFAQBasics"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia distinctio qui corporis repellendus explicabo, at
                      odio perspiciatis recusandae excepturi minima.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-header" id="headingBasicsThree">
                    <a
                      class="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBasicsThree"
                      aria-expanded="false"
                      aria-controls="collapseBasicsThree"
                    >
                      How do I get a receipt for my purchase?
                    </a>
                  </div>
                  <div
                    id="collapseBasicsThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingBasicsThree"
                    data-bs-parent="#accordionFAQBasics"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia distinctio qui corporis repellendus explicabo, at
                      odio perspiciatis recusandae excepturi minima.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-header" id="headingBasicsFour">
                    <a
                      class="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBasicsFour"
                      aria-expanded="false"
                      aria-controls="collapseBasicsFour"
                    >
                      Which license do I need?
                    </a>
                  </div>
                  <div
                    id="collapseBasicsFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingBasicsFour"
                    data-bs-parent="#accordionFAQBasics"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia distinctio qui corporis repellendus explicabo, at
                      odio perspiciatis recusandae excepturi minima.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-header" id="headingBasicsFive">
                    <a
                      class="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBasicsFive"
                      aria-expanded="false"
                      aria-controls="collapseBasicsFive"
                    >
                      How do I get access to a land I purchased?
                    </a>
                  </div>
                  <div
                    id="collapseBasicsFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingBasicsFive"
                    data-bs-parent="#accordionFAQBasics"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia distinctio qui corporis repellendus explicabo, at
                      odio perspiciatis recusandae excepturi minima.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-header" id="headingBasicsSix">
                    <a
                      class="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBasicsSix"
                      aria-expanded="false"
                      aria-controls="collapseBasicsSix"
                    >
                      Upgrade License Type
                    </a>
                  </div>
                  <div
                    id="collapseBasicsSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingBasicsSix"
                    data-bs-parent="#accordionFAQBasics"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia distinctio qui corporis repellendus explicabo, at
                      odio perspiciatis recusandae excepturi minima.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
