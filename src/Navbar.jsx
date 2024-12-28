import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>

        <nav className="navbar navbar-expand-lg navbar-dark my-3">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto fw-bold text-white">
                <NavLink className="nav-link NavLink" to="/">OUR STORY</NavLink>
                <NavLink className="nav-link NavLink" to="/services">SERVICES</NavLink>
                <NavLink className="nav-link NavLink" to="/booking">BOOKING ONLINE</NavLink>
                <NavLink className="nav-link NavLink" to="/franchise">FRANCHISE</NavLink>
                <NavLink className="nav-link NavLink" to="/meadia">MEDIA CENTER</NavLink>
                <NavLink className="nav-link NavLink" to="/FAQ">FAQ</NavLink>
                <NavLink className="nav-link NavLink" to="/contactUs">CONTACT US</NavLink>
                {/* <a class="nav-link fs-6 " href="">ع</a> */}
            </div>
            </div>
        </div>
        </nav>
        
      </>
    )
  }
}
