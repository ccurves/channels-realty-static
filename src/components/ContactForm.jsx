import React from "react";

const ContactForm = () => {
  return (
    <div class="col-lg-6">
      <div class="ps-lg-5">
        <div class="card">
          <div class="card-header border-bottom text-center">
            <h3 class="card-header-title">Send us a message here.</h3>
          </div>

          <div class="card-body">
            <form>
              <div class="row gx-3">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label" for="hireUsFormFirstName">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      name="hireUsFormNameFirstName"
                      id="hireUsFormFirstName"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label" for="hireUsFormLasttName">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      name="hireUsFormNameLastName"
                      id="hireUsFormLasttName"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>

              <div class="row gx-3">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label" for="hireUsFormWorkEmail">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      name="hireUsFormNameWorkEmail"
                      id="hireUsFormWorkEmail"
                      placeholder="email@site.com"
                      aria-label="email@site.com"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label" for="hireUsFormPhone">
                      Phone <span class="form-label-secondary">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      name="hireUsFormNamePhone"
                      id="hireUsFormPhone"
                      placeholder="+234(xxx)xxx-xx-xx"
                      aria-label="+234(xxx)xxx-xx-xx"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label" for="hireUsFormDetails">
                  Message
                </label>
                <textarea
                  class="form-control form-control-lg"
                  name="hireUsFormNameDetails"
                  id="hireUsFormDetails"
                  placeholder="Tell us about your ..."
                  aria-label="Tell us about your ..."
                  rows="4"
                ></textarea>
              </div>

              <div class="">
                <button type="submit" class="btn btn-primary btn-lg">
                  Send message
                </button>
              </div>

              <div class="text-center">
                <p class="form-text">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
