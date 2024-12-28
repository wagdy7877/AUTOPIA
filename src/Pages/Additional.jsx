import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default class Additional extends Component {
  render() {
    return (
      <>
      
      <div className="additional">
        <div className="container">

          <div className="d-flex align-items-center w-100">
                <div className="flex-grow-1  border border-2  border-top border-white"></div>
                <h2 className="mx-3 fw-bold txt1 ">
                Additional <span className="text-white fw-bold">Services</span>
                </h2>
                <div className="flex-grow-1  border border-2  border-top border-white"></div>
          </div>
          <p className="mt-3 fs-5 text-center text-white ">Please select additional services</p>


          <div className="row my-5 ">

            <div className="col-md-3 col-sm-6 my-5" data-aos='fade-down'>
              <div className="additionalCard text-white rounded-4">
                <p className='text-center txt txtheader fs-5 p-3 fw-bold'>Interior Detailing</p>
                <p className='text-center txt  hours py-3 w-50'><FontAwesomeIcon icon={faClock} className='me-1' /> 8 Business Hours </p>
                <p className='text-center fs-5 mb-2 mt-4 fw-bold'> <span className='fw-bold fs-4'>80</span> SAR</p>
                <p className='text-center fw-bold'>Before <br /> <del className='text-danger'>1000</del>  </p>
                <div className=" box w-75 m-auto border d-flex align-items-center  justify-content-center rounded py-1 px-3">
                  Select Sevices <span className='fw-bold ms-auto fs-2'>+</span>
                </div>
                <p className='text-center txt maincolor rounded-bottom-4 fs-5 p-3 fw-bold h-auto mt-5'>More information</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 my-5" data-aos='fade-up'>
              <div className="additionalCard additionalCard2 text-white rounded-4">
                <p className='text-center txt txtheader fs-5 p-3 fw-bold'>Interior Detailing</p>
                <p className='text-center txt  hours py-3 w-50'><FontAwesomeIcon icon={faClock} className='me-1' /> 8 Business Hours </p>
                <p className='text-center fs-5 mb-2 mt-4 fw-bold'> <span className='fw-bold fs-4'>70</span> SAR</p>
                <p className='text-center fw-bold'>Before <br /> <del className='text-danger'>1000</del>  </p>
                <div className=" box w-75 m-auto border d-flex align-items-center  justify-content-center rounded py-1 px-3">
                  Select Sevices <span className='fw-bold ms-auto  fs-2'>+</span>
                </div>
                <p className='text-center txt maincolor rounded-bottom-4 fs-5 p-3 fw-bold h-auto mt-5'>More information</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 my-5" data-aos='fade-down'>
              <div className="additionalCard additionalCard3 text-white rounded-4">
                <p className='text-center txt txtheader fs-5 p-3 fw-bold'>Interior Detailing</p>
                <p className='text-center txt  hours py-3 w-50'><FontAwesomeIcon icon={faClock} className='me-1' /> 8 Business Hours </p>
                <p className='text-center fs-5 mb-2 mt-4 fw-bold'> <span className='fw-bold fs-4'>90</span> SAR</p>
                <p className='text-center fw-bold'>Before <br /> <del className='text-danger'>1000</del>  </p>
                <div className=" box w-75 m-auto border d-flex align-items-center  justify-content-center rounded py-1 px-3">
                  Select Sevices <span className='fw-bold ms-auto  fs-2'>+</span>
                </div>
                <p className='text-center txt maincolor rounded-bottom-4 fs-5 p-3 fw-bold h-auto mt-5'>More information</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 my-5" data-aos='fade-up'>
              <div className="additionalCard additionalCard4 text-white rounded-4">
                <p className='text-center txt txtheader fs-5 p-3 fw-bold'>Interior Detailing</p>
                <p className='text-center txt  hours py-3 w-50'><FontAwesomeIcon icon={faClock} className='me-1' /> 8 Business Hours </p>
                <p className='text-center fs-5 mb-2 mt-4 fw-bold'> <span className='fw-bold fs-4'>90</span> SAR</p>
                <p className='text-center fw-bold'>Before <br /> <del className='text-danger'>1000</del>  </p>
                <div className=" box w-75 m-auto border d-flex align-items-center  justify-content-center rounded py-1 px-3">
                  Select Sevices <span className='fw-bold ms-auto  fs-2'>+</span>
                </div>
                <p className='text-center txt maincolor rounded-bottom-4 fs-5 p-3 fw-bold h-auto mt-5'>More information</p>
              </div>
            </div>

          </div>


          <div className="text-center my-5 fs-5 fw-bold text-light">
               <p> <span className='maincolor'>*</span> Autopia undertakes that all prices of the services provided on our website are identical to the prices of the branches and any seasonal discounts are automatically added to our website</p>
          </div>
          
         </div>
      </div>
        
      </>
    )
  }
}
