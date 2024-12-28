import React, { Component } from "react";

export default class Branch extends Component {
  render() {
    return (
      <>
        <div className="branch my-5">
          <div className="container">

            <div className="d-flex align-items-center w-100">
              <div className="flex-grow-1  border border-2  border-top border-white"></div>
              <h2 className="mx-3 fw-bold txt1 text-white text-uppercase">
                <span className="maincolor">Choose </span>time <span className="maincolor"> &</span>  branch
              </h2>
              <div className="flex-grow-1  border border-2  border-top border-white"></div>
            </div>

            <div className="row mt-5">

              <div className="col-md-6">
                <div className="items text-white">
                  <label htmlFor="City" >Choose The Region</label>
                  <input type="text" name="city" placeholder="City" id="City" className="form-control my-3 bg-transparent py-3 text-white" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="items text-white">
                  <label htmlFor="branch" >Choose The Branch</label>
                  <input type="text" name="branch" id="branch" placeholder="Choose The Branch" className="form-control my-3 bg-transparent py-3 text-white" />
                </div>
              </div>

         

            </div>


          </div>
        </div>
      </>
    );
  }
}
