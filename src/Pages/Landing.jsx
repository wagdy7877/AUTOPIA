import React, { Component } from "react";
import image1 from "../img/7548d1f7dd8840d24cdf5c0d006ddc2e.jpg";

export default class extends Component {
  render() {
    return (
      <>
        <div className="landing mb-3" data-aos='zoom-in'>
          <div className="container">
            <div className="img row align-items-center">
            <div className="container">
                <div className="row">
                <div className="col-1"></div>
                  <div className="col-3 ">
                    <div className="box rounded p-4 text-center fw-bold text-black">
                      <h1 className="fw-bold fs-1">THE YEARS END OF OFFERS</h1>
                    </div>
                  </div>
                  <div className="col-3"></div>
                  <div className="col-4">
                    <p className="fs-2 text-white text-center fw-bold">DISCOUNTS UP TO <br /> <span className="fs-1 discounts">40%</span> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
