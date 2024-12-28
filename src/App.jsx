import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Landing from "./Pages/Landing";
import Vehicle from "./Pages/Vehicle";
import Services from "./Pages/Services";
import Additional from "./Pages/Additional";
import Branch from "./Pages/Branch";
import Booking from "./Pages/Booking";
import Summary from "./Pages/Summary";
import Payment from "./Pages/Payment";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        {/* <Landing />
        <Vehicle />
        <Services />
        <Additional/>
        <Branch/>
        <Booking/>
        <Summary/>
        <Payment/>
        <Footer/> */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Vehicle />
                <Services />
                <Additional />
                <Branch />
                <Booking />
                <Summary />
                <Payment />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Services />
                <Additional />
              </>
            }
          />

          <Route
            path="/booking"
            element={
              <>
               <Branch />
               <Booking />
                <Summary />
                <Payment />
              </>
            }
          />

          <Route
            path="/franchise"
            element={
              <>
               <Vehicle />
              </>
            }
          />

          <Route
            path="/meadia"
            element={
              <>
               <Summary />
              </>
            }
          />
          <Route
            path="/FAQ"
            element={
              <>
               <Payment />
              </>
            }
          />
          <Route
            path="/contactUs"
            element={
              <>
                  <Booking />
                  <Summary />
              </>
            }
          />


        </Routes>
        <Footer />
      </>
    );
  }
}
