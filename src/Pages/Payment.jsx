import React, { Component } from 'react'
import tabby from '../img/tabby.jpg'
import tmara from '../img/tmara.png'

export default class Payment extends Component {
  render() {
    return (
      <div>
        <div className="payment my-5">
            <div className="container">

                <div className="d-flex align-items-center">
                    <div className="flex-grow-1 border border-2 border-top border-white"></div>
                    <h2 className="fw-bold text-white mx-3">PAYMENT <span className='maincolor'>METHOD</span></h2>
                    <div className="flex-grow-1 border border-2 border-top border-white"></div>
                </div>

               <div className="methoud mt-5">
                    <div class="alert my-4  d-flex justify-content-between align-items-center text-white" >
                        <div className="right">
                            <input type="radio" id="payment1" name="payment1" />
                            <label htmlFor="payment1" className='fs-5'>Master Card/ Visa / Apple pay</label>
                        </div>
                        <div className="left ">
                            <i class="fa-solid fa-credit-card fs-1"></i>
                        </div>
                    </div>

                    <div class="alert my-4  d-flex justify-content-between align-items-center text-white" >
                        <div className="right">
                            <input type="radio" id="payment2" name="payment1" />
                            <label htmlFor="payment2" className='fs-5'>Tabby</label>
                        </div>
                        <div className="left ">
                            <img src={tabby} className='img-fluid ' style={{width:"70px" }} alt="" />
                        </div>
                    </div>

                    <div class="alert my-4  d-flex justify-content-between align-items-center text-white" >
                        <div className="right">
                            <input type="radio" id="payment3" name="payment1" />
                            <label htmlFor="payment3" className='fs-5'>Tamara</label>
                        </div>
                        <div className="left ">
                        <img src={tmara} className='img-fluid ' style={{width:"70px"}} alt="" />
                        </div>
                    </div>

                    <div class="alert my-4  d-flex justify-content-between align-items-center text-white" >
                        <div className="right">
                            <input type="radio" id="payment4" name="payment1" />
                            <label htmlFor="payment4" className='fs-5'>Payment At The Branch</label>
                        </div>
                        <div className="left ">
                        <i class="fa-solid fa-money-bills fs-1"></i>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <button className="btn btn-success fw-bold px-5 p-3 text-black">Confirm Booking & Payment</button>
                    </div>  

               </div>

            </div>
        </div>
      </div>
    )
  }
}
