import React, { Component } from 'react'

export default class Booking extends Component {
  render() {
    return (
      <>
      <div className="booking my-5">
        <div className="container">


          <div className="d-flex align-items-center w-100">
            <div className="flex-grow-1 border border-2 border-top border-white"></div>
            <h2 className='text-white mx-3 fw-bold'> <span className='txt1'>BOKING</span> INFORMATION</h2>
            <div className="flex-grow-1 border border-2 border-top border-white"></div>
          </div>

          <form className="mt-5" >
            <div className="row ">

              <div className="col-md-6">
                <div className="items text-white">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name="fname" className='form-control text-white bg-transparent my-3 py-3' placeholder='First Name'  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="items text-white">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name="lname" className='form-control text-white bg-transparent my-3 py-3' placeholder='Last Name'  />
                </div>
              </div>

            </div>

            <div className="row align-items-center mb-3">
 
              <div className="col-md-6 col-8">
                <div className="items text-white">
                  <label htmlFor="number">Phone Number Name</label>
                  <input type="number" id="number" name="number" className='form-control text-white bg-transparent my-3 py-3' placeholder='xxxxxxxxxxx'  />
                </div>
              </div>

              <div className="col-md-6 col-4 ">
                <div className="items text-white">
                  <button className='fw-bold btn btn-success btnotp fs-5 px-4 py-3'>OTP</button>
                </div>
              </div>

            </div>

            <div className="row align-items-end ">

            <div className="col-md-6">
              <div className="items text-white">
                <label htmlFor="fname">Email</label>
                <input type="email" id="email" name="email" className='form-control text-white bg-transparent my-3 py-3' placeholder='Email'  />
              </div>
            </div>

            <div className="col-md-4 col-8">
              <div className="items text-white">
                <input type="text" id="lname" name="lname" className='form-control text-white bg-transparent my-3 py-3' placeholder='Discount coupon'  />
              </div>
            </div>

            <div className="col-md-2 col-4">
              <div className="items text-white">
              <input type="submit"  name="submit" className='form-control btn btn-success fw-bold maincolor bg-transparent my-3 p-3 border-success' value='Apply'  />
              </div>
            </div>

            </div>

          </form>


        </div>
      </div>
        
      </>
    )
  }
}
