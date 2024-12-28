import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-regular-svg-icons";
import { faShield } from '@fortawesome/free-solid-svg-icons';

import tabby from '../img/tabby.jpg'
import tmara from '../img/tmara.png'

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS animations



export default class Services extends Component {


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
        <section className="services my-5">
          <div className="container">

            <div className="d-flex align-items-center w-100" data-aos='fade-down'>
              <div className="flex-grow-1  border border-2  border-top border-white"></div>
              <h2 className="fs-1 mx-3 text-white  fw-bold">
                Packages <span className=" fw-bold txt1"> & </span>
                Services
              </h2>
              <div className="flex-grow-1 border border-2 border-top border-white"></div>
            </div>

            <div className="row text-center d-flex justify-content-center" data-aos='fade-left'>
              <div className="col-md-2 col-6">
                <div className="box text-center p-5 rounded-4 text-white my-5">
                  <FontAwesomeIcon icon={faPaste} className="fs-1" />
                  <p>Thermal Insulation</p>
                </div>
              </div>

              <div className="col-md-2 col-6">
                <div className="box text-center p-5 rounded-4 text-white my-5">
                  <FontAwesomeIcon icon={faPaste} className="fs-1" />
                  <p>Polishing</p>
                </div>
              </div>

              <div className="col-md-2 col-6">
                <div className="box text-center p-5 rounded-4 text-white my-5">
                  <FontAwesomeIcon icon={faPaste} className="fs-1" />
                  <p>paint protection films</p>
                </div>
              </div>

              <div className="col-md-2 col-6">
                <div className="box text-center p-5 rounded-4 text-white my-5">
                  <FontAwesomeIcon icon={faPaste} className="fs-1" />
                  <p>nanoceramics</p>
                </div>
              </div>

              <div className="col-md-2 col-6">
                <div className="box text-center p-5 rounded-4 text-white my-5">
                  <FontAwesomeIcon icon={faPaste} className="fs-1" />
                  <p>Packges</p>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="row">
                <div className="col-md-4 mb-5" data-aos='fade-right'>
                  <div className="items">
                    <div class="card ">
                      <div class="card-img-top imgcard1"></div>
                      <div class="card-body text-white p-0">
                        <p class="card-text px-3 pt-3">
                          <p> <span className="txtcard"> <FontAwesomeIcon icon={faShield} /> </span>    1year warranty or 20000 km whichever first.</p>
                          <div className="border my-2">
                            <div className="d-flex justify-content-around align-items-center">
                              <p>Before <br /> <del className="text-danger">400</del></p>
                              <p><span className="fs-4 fw-bold">800</span> SAR</p>
                              <p className="fs-2">+</p>
                            </div>
                          </div>
                            <div className="d-flex justify-content-around align-items-center">
                              <p className="me-3">4 installments </p>
                              <img  src={tabby} className="img-fluid me-0" alt="" />
                              <img src={tmara} className="img-fluid" alt="" />
                            </div>
                        </p>
                            <div className="info text-center w-100 py-2">
                            More information
                            </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-5" data-aos='fade-up'>
                  <div className="items">
                    <div class="card ">
                      <div class="card-img-top imgcard2"></div>
                      <div class="card-body text-white p-0">
                        <p class="card-text px-3 pt-3">
                          <p> <span className="txtcard"> <FontAwesomeIcon icon={faShield} /> </span>    1year warranty or 20000 km whichever first.</p>
                          <div className="border my-2">
                            <div className="d-flex justify-content-around align-items-center">
                              <p>Before <br /> <del className="text-danger">1400</del></p>
                              <p><span className="fs-4 fw-bold">1200</span> SAR</p>
                              <p className="fs-2">+</p>
                            </div>
                          </div>
                            <div className="d-flex justify-content-around align-items-center">
                              <p className="me-3">4 installments </p>
                              <img  src={tabby} className="img-fluid me-0" alt="" />
                              <img src={tmara} className="img-fluid" alt="" />
                            </div>
                        </p>
                            <div className="info text-center w-100 py-2">
                            More information
                            </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-5" data-aos='fade-left'>
                  <div className="items">
                    <div class="card ">
                      <div class="card-img-top imgcard3"></div>
                      <div class="card-body text-white p-0">
                        <p class="card-text px-3 pt-3">
                          <p> <span className="txtcard"> <FontAwesomeIcon icon={faShield} /> </span>    1year warranty or 20000 km whichever first.</p>
                          <div className="border my-2">
                            <div className="d-flex justify-content-around align-items-center">
                              <p>Before <br /> <del className="text-danger">1000</del></p>
                              <p><span className="fs-4 fw-bold">800</span> SAR</p>
                              <p className="fs-2">+</p>
                            </div>
                          </div>
                            <div className="d-flex justify-content-around align-items-center">
                              <p className="me-3">4 installments </p>
                              <img  src={tabby} className="img-fluid me-0" alt="" />
                              <img src={tmara} className="img-fluid" alt="" />
                            </div>
                        </p>
                            <div className="info text-center w-100 py-2">
                            More information
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
