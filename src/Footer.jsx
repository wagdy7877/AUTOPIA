import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>

        <footer className="text-center text-lg-start  text-white pt-3 mt-5">


        <section className="mt-5">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
                    <div className=" maincolor">

                        <h1 className="text-center fw-bold mb-4">
                            <h1 className="m-0 " style={{ fontSize: "35px", fontWeight: "bold" }}>
                                AUTOPIA
                            </h1>
                            <span style={{ fontSize: "35px" ,fontWeight: "bold" }} >اوتوبيا</span>
                        </h1>
                   </div>

                    <p>
                    We are a premium 360 auto detailing studio, offering industry  leading services, products, and expertise in car care.
                    </p>
                    <p>
                    <i className="fa-solid fa-location-dot maincolor"></i> Location
                    </p>
                    <p>
                    7846 King Saud Road,Southern State District, Dhahran, Saudi Arabia
                    </p>

                    <p className='text-black social'>
                      
                        <a href="" className="me-4 text-reset text-center p-2">
                            <i className="fab fa-snapchat"></i>
                        </a>
                        <a href="" className="me-4 text-reset text-center  p-2">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="" className="me-4 text-reset text-center  p-2">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset text-center  p-2">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                    </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
                <h5 className="text-uppercase fw-bold mb-4">
                    Company
                </h5>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Home</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">About Us</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Services</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Booking</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Contact Us</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Franchise</a>
                </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-5">
                <h5 className="text-uppercase fw-bold mb-4">
                    Services
                </h5>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Polishing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Thermal Insulation</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Nanoceramics</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Paint Protection Films</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Other Related Services </a>
                </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-5 ">
                <h5 className="text-uppercase fw-bold mb-4">Help</h5>
                <p>
                    <a href="#" className="text-reset text-decoration-none">FQA</a>
                </p>
                <p>
                    <a href="#" className="text-reset text-decoration-none">Privacy Policy</a>
                </p>
                <p>
                    <a href="#" className="text-reset text-decoration-none">Terms & Conditions </a>
                </p>
                </div>
            </div>
            </div>
        </section>

      
        </footer>
        
      </>
    )
  }
}
