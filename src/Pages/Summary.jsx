import React, { Component } from 'react'

export default class Summary extends Component {
  render() {
    return (
      <>
      
      <div className="summary my-5">
        <div className="container">

            <div className="d-flex align-items-center">
                <div className="flex-grow-1 border border-2 border-top border-white"></div>
                <h2 className="fw-bold text-white mx-3">SUMMARY <span className='maincolor'>&</span> EMPHASIS</h2>
                <div className="flex-grow-1 border border-2 border-top border-white"></div>
            </div>

            <div className="row mt-5">
                 <div className="col-sm-6  my-3">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Service</div>
                                <div className="col-6 text-end"> <i class="fa-regular fa-user fs-1"></i>  </div>
                            </div>
                        </div>
                 </div>
                 <div className="col-sm-6 my-3 ">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Car Size <br /> <p className='fw-bold mt-3 '>Small</p></div>
                                <div className="col-6 text-end"><i class="fa-solid fa-car-rear fs-1"></i> </div>
                            </div>
                        </div>
                 </div>
            </div>


            <div className="row">
                 <div className="col-sm-6  my-3">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Location</div>
                                <div className="col-6 text-end"> <i class="fa-solid fa-location-dot fs-1"></i> </div>
                            </div>
                        </div>
                 </div>
                 <div className="col-sm-6 my-3 ">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Additional Services</div>
                                <div className="col-6 text-end"><i class="fa-solid fa-hands-holding fs-1" ></i></div>
                            </div>
                        </div>
                 </div>
            </div>

            <div className="row">
                 <div className="col-sm-6  my-3">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Date And Time</div>
                                <div className="col-6 text-end"> <i class="fa-solid fa-calendar-days fs-1"></i></div>
                            </div>
                        </div>
                 </div>
                 <div className="col-sm-6 my-3 ">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Executional Time <br /> <p className='fw-bold maincolor mt-3 '>5 Hours</p> </div>
                                <div className="col-6 text-end"><i class="fa-regular fa-clock fs-1"></i></div>
                            </div>
                        </div>
                 </div>
            </div>

            <div className="row">
                 <div className="col-sm-6  my-3">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Discount Code <br /> <p className='fw-bold maincolor mt-3 '>Discount Coupon Was Not Applied</p></div>
                                <div className="col-6 text-end"> <i class="fa-solid fa-ticket fs-1"></i> </div>
                            </div>
                        </div>
                 </div>
                 <div className="col-sm-6 my-3 ">
                        <div className="items bgcard p-3">
                            <div className="row text-white ">
                                <div className="col-6 ">Total Price <br /> <p className='fw-bold maincolor mt-3 '>5 SAR</p></div>
                                <div className="col-6 text-end"><i class="fa-solid fa-money-bills fs-1"></i></div>
                            </div>
                        </div>
                 </div>
            </div>


        </div>
        </div>
        
      </>
    )
  }
}
