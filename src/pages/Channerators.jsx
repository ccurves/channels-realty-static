import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img2 from "../assets/img/29.jpg";
import NewsLetterSub from "../components/NewsLetterSub";
import SocialShare from "../components/SocialShare";

const Channerators = () => {
  return (
    <>
      <Navbar />
      <main id="content" role="main">
        <div class="bg-primary rounded-2 ">
          <div class="position-relative zi-2">
            <div class="d-md-flex">
              <div class="container d-md-flex align-items-md-center min-vh-md-100 text-center content-space-3 content-space-t-md-4 content-space-t-lg-3">
                <div class="w-lg-75 mx-lg-auto">
                  <div class="mb-7">
                    <h1 class="display-1 text-white mb-3">#Chanerators</h1>
                    <p class="lead text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda consectetur fugit, doloremque quo dicta aliquid
                      illo enim ipsum vitae ut?
                    </p>
                  </div>
                  <button className="btn btn-light text-primary">
                    Join the movement
                  </button>
                  <div className="mt-4">
                    <p className="card-title text-white">
                      Share on all platforms
                    </p>
                    <SocialShare />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="container content-space-2 content-space-lg-3">
            <div class="row justify-content-lg-between align-items-md-center">
              <div class="col-md-6 col-lg-5 order-md-2 mb-10 mb-md-0 ms-0">
                <div class="ms-2">
                  <img
                    class="img-fluid rounded-2"
                    src={img2}
                    alt="Image Description"
                  />
                </div>
              </div>

              <div class="col-md-6 col-lg-5 order-md-1">
                <div class="mb-4">
                  <h4 className="display-5">Who is a Channerator?</h4>
                </div>

                <figure>
                  <blockquote class="blockquote blockquote-md">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut quasi ab aliquam dolore at et atque sunt blanditiis
                    corrupti assumenda!
                  </blockquote>
                </figure>
                <button className="btn btn-primary mt-5">
                  Join the movement
                </button>
              </div>
            </div>
          </div>
        </div>
        <NewsLetterSub />
      </main>
      <Footer />
    </>
  );
};

export default Channerators;
