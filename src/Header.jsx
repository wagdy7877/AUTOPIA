import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class extends Component {
  render() {
    return (
      <>
        <header
          className="header d-flex justify-content-center align-items-center py-5">
          <div className="container ms-0 text-center ">
            <div className="row">
              <div className="col-6  d-flex flex-column justify-content-center align-items-start">
                <div className="logo w-75 ">
                  <h1 className="m-0 " style={{ fontSize: "35px", fontWeight: "bold" }}>
                    AUTOPIA
                  </h1>
                  <span style={{ fontSize: "35px" ,fontWeight: "bold" }} >اوتوبيا</span>
                </div>
              </div>
              <div className="col-6 fw-bold d-flex flex-column justify-content-center align-items-end">
                <div className="hotline ">
                  <p className="text-white" style={{ fontSize: "20px" }}>
                    HOTLINE NUMBER
                  <i className="fas fa-phone-alt ms-2 fs-4 phoneicon"></i>
                    </p>
                  <span style={{ fontSize: "20px" }}>9200 35 406</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
