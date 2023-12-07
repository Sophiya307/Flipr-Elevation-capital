
import React from "react";
import { useState } from "react";
import logo2 from "./assests/logo2.jpg";
import lead1 from "./assests/lead1.jpg"
import lead2 from "./assests/lead2.jpg"
import lead3 from "./assests/lead3.jpg"
import lead4 from "./assests/lead4.jpg"
import location_image from "./assests/location.jpg"
import "./Team.css";
import "./Summit.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { MarsCondensed } from "google-fonts";
import googleFonts from "google-fonts";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export const Summit = () => {


    const mainContent = (
        <div className="container">
          <div className="row">
            <div className="nv navbar col-11  d-flex justify-content py-4 align-items-center">
                <Link to="/">
                <img src={logo2} alt="hello" />
                </Link>
              
              <Link to="/portfolio" className="link-nav">PORTFOLIO</Link>
              <Link to="/team" className="link-nav">TEAM</Link>
              <Link to="/careers" className="link-nav">CAREERS</Link>
              <Link to="/summit" className="link-nav">SUMMIT</Link>
              <Link to="/stairway" className="link-nav">STAIRWAY</Link>
            </div>
          </div>
    
          <div>
            <h1 className="h1-home-team-summit">
            <span className="body-span">INSIGHTS</span> ON TECH, STARTUPS AND MORE
            </h1>
          </div>
        </div>
      );
  return (
    <div>
        <div>
        <section className="team-section-1">
        <div className="container1">
        <p className="p-header sticky-top">
          Mapping a Billion: Understanding the Indian Fintech User
        </p>

        <main className="d-flex position-relative bg-team">
          <div className="flex-grow-1 ">{mainContent}</div>

          <div className="position-absolute top-0 end-0 m-3">
            <button className="btn-1">PITCH</button>
          </div>
          <div></div>

          <div className="col-6">
            
          </div>
        </main>
      </div>

      

      <div >
      {/* <div>{renderCards()}</div> */}
    </div>

        </section>
     
<section className="team-section-2">
    <div className="footer-team col-8 text-white ">
        <h3 className="footer-text">ABOVE. BEYOND. TOGETHER.</h3>
        <div>
            <p className="p-head1 p-2">Sign up for updates</p>
            <input  className="input" type="text" placeholder="Your Email address"/>
            <button className="input-btn" >Sign Up</button>
        </div>
       
        <div className="container4">
        <div className="row justify-content-space-between ">
          <div className="col-md-3 p-3">
            <p className="p-head">Delhi-NCR, India</p>
            <p>1502, 15th Floor, One Horizon, Sector 43, DLF Phase V, Golf Course Road, Gurgaon 122002</p>
          </div>
          <div className="col-md-3 p-3">
            <p className="p-head">Bengaluru, India</p>
            <p>No. 23, 6th Floor, Leela Collonnade, HAL Old Airport Rd, Bengaluru 560008</p>
          </div>
          <div className="col-md-3 p-3">
            <p className="p-head">Salt Lake City, USA</p>
            <p>341 South Main Street, Suite 500, Salt Lake City, Utah 84111</p>
          </div>
        </div>
      </div>
        
        
    </div>

</section>
    
    </div>
    </div>
  )
}
