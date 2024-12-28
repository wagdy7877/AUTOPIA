import React, { Component } from "react";

import imgbig from "../img/big.png";
import imgmedium from "../img/medium.png";
import imgsmall from "../img/small.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS animations


export default class Vehicle extends Component {

  componentDidMount() {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether the animation should happen only once
      mirror:  true, // Whether to animate out while scrolling past
    });
  }


  render() {
    return (
      <>
        <section className="vehicle container text-white text-center py-5  " data-aos='fade-up'>
          <div className="d-flex align-items-center w-100" data-aos='fade-up'>
            <div className="flex-grow-1  border border-2  border-top border-white"></div>
            <h2 className="mx-3 fw-bold txt1 ">
              VEHICLE <span className="text-white fw-bold">SIZE</span>
            </h2>
            <div className="flex-grow-1  border border-2  border-top border-white"></div>
          </div>

          <p className="mt-3 fs-5">Please Select Vehicle Size</p>

          <section class="carSize" data-aos='fade-right'>
            <div class="container">
              <div class="row my-5">
                <div class="col-md-12 m-auto text-center d-flex justify-content-center align-items-center">
                  <ul
                    class="nav nav-pills mb-3 m-auto text-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active rounded-pill mx-2"
                        id="pills-seo-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-big"
                        type="button"
                        role="tab"
                        aria-controls="pills-seo"
                        aria-selected="false"
                      >
                        BIG
                      </button>
                    </li>

                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link rounded-pill"
                        id="pills-webdesign-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-medium"
                        type="button"
                        role="tab"
                        aria-controls="pills-webdesign"
                        aria-selected="false"
                      >
                        MEDIUM
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link rounded-pill mx-2"
                        id="pills-work-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-small"
                        type="button"
                        role="tab"
                        aria-controls="pills-work"
                        aria-selected="false"
                      >
                        SMALL
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-big"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="items">
                        <div class="info w-75 rounded">
                          <img src={imgbig} class="rounded img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-medium"
                  role="tabpanel"
                  aria-labelledby="pills-seo-tab"
                  tabindex="0"
                >
                  <div class="row my-5">
                    <div class="col-md-12">
                      <div class="items">
                        <div class="info w-75 rounded rounded">
                          <img
                            src={imgmedium}
                            class="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-small"
                  role="tabpanel"
                  aria-labelledby="pills-webdesign-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="items">
                        <div class="info w-75 rounded rounded">
                          <img
                            src={imgsmall}
                            class="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5 fs-5 fw-bold  ">
                <span className="border border-2 p-3 px-5"> <FontAwesomeIcon icon={faCarSide}className="me-2" /> Cars Size Guide</span>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
}
