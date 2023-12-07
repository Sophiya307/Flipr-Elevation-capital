
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Image1 from "./assests/img1.jpg";
import Image2 from "./assests/img2.jpg";
import Image3 from "./assests/img3.jpg";
import logo from "./assests/logo.jpeg";
import logo1 from "./assests/logo1.jpg";
import logo2 from "./assests/logo2.jpg";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Home = () => {
  const mainContent = (
    <div className="container">
      <div className="row">
        <div className="nv-1 navbar col-11  d-flex justify-content py-4 align-items-center" >
           
          <Link to="/" >
          <img src={logo} alt="hello" />
          </Link>
          <Link to="/portfolio" className="link-nav">PORTFOLIO</Link>
          <Link to="/team" className="link-nav">TEAM</Link>
          <Link to="/careers" className="link-nav">CAREERS</Link>
          <Link to="/summit" className="link-nav">SUMMIT</Link>
          <Link to="/stairway" className="link-nav">STAIRWAY</Link>
        </div>
      </div>

      <div>
        <h1 className="h1-home">FROM DAY ONE.</h1>
        <p className="p-home text-justify my-4">
          It is never too early to reach out to us. Our partnership with
          founders in realizing their vision starts from Day One.
        </p>
      </div>
    </div>
  );

  const mainContent_2 = (
    <div className="container">
      <div className="row">
        <div className="nv-2 navbar col-11  d-flex justify-content py-4 align-items-center">
          <Link to="/">
          <img src={logo1} alt="hello" />
          </Link>
          
          <Link to="/portfolio" className="link-nav2">PORTFOLIO</Link>
          <Link to="/team" className="link-nav2">TEAM</Link>
          <Link to="/careers" className="link-nav2">CAREERS</Link>
          <Link to="/summit" className="link-nav2">SUMMIT</Link>
          <Link to="/stairway" className="link-nav2">STAIRWAY</Link>
        </div>
      </div>

      <div>
        <h1 className="h1-home2">ONE OF ONE.</h1>
        <p className="p-home2 text-justify my-4">
        With us, founders are One of One, not one of many. We do not make competing investments.
        </p>
      </div>
    </div>
  );
  
  const mainContent3 = (
    <div className="container3">
      <div className="row">
        <div className=" nv-3 navbar col-11  d-flex justify-content py-4 align-items-center">
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
        <h1 className="h1-home3">ALL IN.</h1>
        <p className="p-home3 text-justify my-4">
        We build long lasting personal relationships by giving individual time and attention to every founder.
        </p>
      </div>
    </div>
  );

  return (
    <div> 
    <div className="container1">
      <p className="p-header sticky-top">
        Mapping a Billion: Understanding the Indian Fintech User
      </p>

      <main className="d-flex position-relative ">
        <div className="flex-grow-1 ">{mainContent}</div>

        <div className="position-absolute top-0 end-0 m-3">
          <button className="btn-1">PITCH</button>
        </div>
        <div>
          
          </div>

        <div className="col-6">
          <div >
            <img src={Image1} alt="hello" className="img-fluid h-100" />
          </div>

        
        </div>
      </main>
    </div>

<div>

<main className="container2 d-flex position-relative ">
  <div className="flex-grow-1 ">{mainContent_2}</div>

  <div className="position-absolute top-0 end-0 m-3">
    <button className="btn-1">PITCH</button>
  </div>
  <div>
    
    </div>

  <div className="col-6">
    <div >
      <img src={Image2} alt="hello" className="img-fluid h-100" />
    </div>

  
  </div>
</main>
</div>

<div>

<main className="container3 d-flex position-relative ">
  <div className="flex-grow-1 ">{mainContent3}</div>

  <div className="position-absolute top-0 end-0 m-3">
    <button className="btn-1">PITCH</button>
  </div>
  <div>
    
    </div>

  <div className="col-6">
    <div >
      <img src={Image3} alt="hello" className="img-fluid h-100" />
    </div>

  
  </div>
</main>
</div>

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
    
  );
};

export default Home;
