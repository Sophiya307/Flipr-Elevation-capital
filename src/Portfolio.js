import React, { useState } from "react";
// import styled from "styled-components";
import { MarsCondensed } from "google-fonts";
import { useEffect } from "react";
import googleFonts from "google-fonts";
import styled, { createGlobalStyle } from "styled-components";
import logo2 from "./assests/logo2.jpg";
import "./Portfolio.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mars+Condensed&display=swap');
  
`;

const Page = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const toggleHover = () => {
    setHovered(!hovered);
  };
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };
  //   const data =
  const [data, setData] = useState([
    {
      title: "ABLE JOBS",
      description: "Building the future of employability",
      founders: ["Ravish Agarwal", "Swatantra Kumar", "Siddharth Srivastav"],
      stage: "Seed",
      image:
        "https://i.pinimg.com/originals/c8/7d/a2/c87da286ae871ab73041b893b8050b68.jpg",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Acko",
      description: "Helping millions seamlessly buy insurance",
      founders: ["Ruchi Deepak", "Varun Dua"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Airblack",
      description: "Skilling the next 100M people towards a livelihood",
      founders: ["Vaibhav Raj Gupta", "Videt Jaiswal"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Anar",
      description:
        "Building the go-to B2B networking platform for Indian SMBs to turbocharge their growth",
      founders: ["Nishank Jain", "Sanjay Bhat"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "ABLE JOBS",
      description: "Building the future of employability",
      founders: ["Ravish Agarwal", "Swatantra Kumar", "Siddharth Srivastav"],
      stage: "Seed",
      image:
        "https://i.pinimg.com/originals/c8/7d/a2/c87da286ae871ab73041b893b8050b68.jpg",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Acko",
      description: "Helping millions seamlessly buy insurance",
      founders: ["Ruchi Deepak", "Varun Dua"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Airblack",
      description: "Skilling the next 100M people towards a livelihood",
      founders: ["Vaibhav Raj Gupta", "Videt Jaiswal"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Anar",
      description:
        "Building the go-to B2B networking platform for Indian SMBs to turbocharge their growth",
      founders: ["Nishank Jain", "Sanjay Bhat"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "ABLE JOBS",
      description: "Building the future of employability",
      founders: ["Ravish Agarwal", "Swatantra Kumar", "Siddharth Srivastav"],
      stage: "Seed",
      image:
        "https://i.pinimg.com/originals/c8/7d/a2/c87da286ae871ab73041b893b8050b68.jpg",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Acko",
      description: "Helping millions seamlessly buy insurance",
      founders: ["Ruchi Deepak", "Varun Dua"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Airblack",
      description: "Skilling the next 100M people towards a livelihood",
      founders: ["Vaibhav Raj Gupta", "Videt Jaiswal"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Anar",
      description:
        "Building the go-to B2B networking platform for Indian SMBs to turbocharge their growth",
      founders: ["Nishank Jain", "Sanjay Bhat"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "ABLE JOBS",
      description: "Building the future of employability",
      founders: ["Ravish Agarwal", "Swatantra Kumar", "Siddharth Srivastav"],
      stage: "Seed",
      image:
        "https://i.pinimg.com/originals/c8/7d/a2/c87da286ae871ab73041b893b8050b68.jpg",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Acko",
      description: "Helping millions seamlessly buy insurance",
      founders: ["Ruchi Deepak", "Varun Dua"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Airblack",
      description: "Skilling the next 100M people towards a livelihood",
      founders: ["Vaibhav Raj Gupta", "Videt Jaiswal"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    {
      title: "Anar",
      description:
        "Building the go-to B2B networking platform for Indian SMBs to turbocharge their growth",
      founders: ["Nishank Jain", "Sanjay Bhat"],
      stage: "Seed",
      image: "https://images4.penguinrandomhouse.com/cover/9780375896965",
      isHovered: false,
      // Add other properties for each object as needed
    },
    // Add more objects in the data array as required
  ]);

  const filteredData = selectedFilter
    ? data.filter((item) => item.stage === selectedFilter)
    : data;
  const handleMouseEnter = (index) => {
    const newData = [...data];
    newData[index].isHovered = true;
    setData(newData);
  };

  const handleMouseLeave = (index) => {
    const newData = [...data];
    newData[index].isHovered = false;
    setData(newData);
  };
  const mainContent4 = (
    <div className="container3">
      <div className="row">
        <div className="nv-3 navbar col-11  d-flex justify-content py-4 align-items-center">
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
        <h1 className="h1-home-portfolio ">
          PROUD PARTNERS TO
          <br />
          CATEGORY DEFINING
          <br />
          COMPANIES.
          <br />
          <span className="body-span">FROM THE START.</span>
        </h1>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container-portfolio">
      <div className="container1">
        <p className="p-header sticky-top">
          Mapping a Billion: Understanding the Indian Fintech User
        </p>

        <main className="d-flex position-relative com ">
          <div className="flex-grow-1 ">{mainContent4}</div>

          <div className="position-absolute top-0 end-0 m-3">
            <button className="btn-1">PITCH</button>
          </div>
          <div></div>

          <div className="col-6 container3 ">
            <div></div>
          </div>
        </main>
      </div>
      <div className="row">
        <div className="portfolio-list p-5 d-flex align-items-center ">
                 
            <div className="mx-7">
            <p className="portfolio-top">Filter By</p>
          </div>
              <div>
                <button
                  style={{
                    ...buttonStyle.base,
                    ...(hoveredButton === "All" && buttonStyle.hover),
                  }}
                  onMouseEnter={() => setHoveredButton("All")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handleFilterClick(null)}
                >
                  All
                </button>
              </div>

              <button
                style={{
                  ...buttonStyle.base,
                  ...(hoveredButton === "Consumer Brands" && buttonStyle.hover),
                }}
                onMouseEnter={() => setHoveredButton("Consumer Brands")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleFilterClick("Consumer Brands")}
                
              >
                Consumer Brands
              </button>
              <button
                style={{
                  ...buttonStyle.base,
                  ...(hoveredButton === "Consumer Tech" && buttonStyle.hover),
                }}
                onMouseEnter={() => setHoveredButton("Consumer Tech")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleFilterClick("Consumer Tech")}
              >
                Consumer Tech
              </button>
              <button
                style={{
                  ...buttonStyle.base,
                  ...(hoveredButton === "Crypto/Web3" && buttonStyle.hover),
                }}
                onMouseEnter={() => setHoveredButton("Crypto/Web3")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleFilterClick("Consumer Brands")}
              >
                Crypto/Web3
              </button>
              <button
                style={{
                  ...buttonStyle.base,
                  ...(hoveredButton === "Enterprise/Saas/B2B" && buttonStyle.hover),
                }}
                onMouseEnter={() => setHoveredButton("Enterprise/Saas/B2B")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleFilterClick("Consumer Tech")}
              >
                Enterprise/Saas/B2B
              </button>
              <button
                style={{
                  ...buttonStyle.base,
                  ...(hoveredButton === "Fintech" && buttonStyle.hover),
                }}
                onMouseEnter={() => setHoveredButton("Fintech")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleFilterClick("Fintech")}
              >
                Fintech
              </button>
              <button
                style={{
                  ...buttonStyle.base,
                  ...(hoveredButton === "Logistics" && buttonStyle.hover),
                }}
                onMouseEnter={() => setHoveredButton("Logistics")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleFilterClick("Logistics")}
              >
                Logistics
              </button>
              {/* Add other filter buttons as needed */}
            </div>
          
      </div>

      <div className="p-5">
        {filteredData.map((item, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              background: item.isHovered
                ? `url(${item.image}) center/cover`
                : "none",
              transition: "background 0.5s ease-in-out",
              display: "flex",
              height: "150px",
              textAlign: "center",
              padding: "10px",

              //   fontFamily: "'Mars Condensed', sans-serif",
            }}
          >
            <div
              style={{
                // Optional: Add borders to visualize the division
                paddingTop: "40px",
                alignItems: "center", // Vertically center align content

                textAlign: "center", // Optional: Center the content
                color: item.isHovered ? "white" : "black", // Optional: Text color
                flex: 4,
                fontFamily: "'Mars Condensed', sans-serif",
                fontSize: "3.3vw",
                // height: "100vh", // Set height to utilize vertical space
                fontFamily: "'Mars Condensed', sans-serif",
                fontSize: "3.3vw",
                alignItems: "center",
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                // Optional: Add borders to visualize the division
                textAlign: "center", // Optional: Center the content
                color: "black", // Optional: Text color
                flex: 3,
                color: item.isHovered ? "white" : "black",
                paddingTop: "60px",
                alignItems: "center",
                fontSize: "15px",
              }}
            >
              <div>{item.description}</div>
            </div>
            <div
              style={{
                // Optional: Add borders to visualize the division
                textAlign: "center", // Optional: Center the content
                color: item.isHovered ? "white" : "black", // Optional: Text color
                alignItems: "center",
                flex: 2,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "gray",
                  }}
                >
                  Founders
                </p>
                <div>
                  {item.founders.map((founder, founderIndex) => (
                    <div
                      style={{
                        fontSize: "15px",
                        color: item.isHovered ? "white" : "black",
                      }}
                      key={founderIndex}
                    >
                      {founder}
                    </div>
                  ))}
                  {/* <div
                  style={{
                    fontSize: "15px",
                    color: "black",
                  }}
                >
                  racindra ravichandra
                </div> */}
                </div>
                {/* <div
                style={{
                  fontSize: "15px",
                  color: "black",
                }}
              >
                ashwin
              </div> */}
                {/* <div
                style={{
                  fontSize: "15px",
                  color: "black",
                }}
              >
                svantra kumar
              </div> */}
              </div>
            </div>
            <div
              style={{
                // Optional: Add borders to visualize the division
                textAlign: "center", // Optional: Center the content
                color: "black", // Optional: Text color
                alignItems: "center",
                flex: 4,
                display: "flex",
              }}
            >
              <div
                style={{
                  textAlign: "center", // Optional: Center the content
                  color: "black", // Optional: Text color
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    color: "gray",
                  }}
                >
                  Stage
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: item.isHovered ? "white" : "black",
                  }}
                >
                  <p>{item.stage}</p>
                </p>
              </div>
              <div
                style={{
                  textAlign: "center", // Optional: Center the content
                  color: "black", // Optional: Text color
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <img
                  src="https://pic.onlinewebfonts.com/thumbnails/icons_402171.svg"
                  alt="Icon" // Add alt text for accessibility
                  style={{
                    width: "100px", // Set width as needed
                    height: "70px", // Set height as needed
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
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
const buttonStyle = {
  base: {
    border: "none",
    backgroundColor: "white",
    cursor: "pointer",
    padding: "10px",
    margin: "5px",
    
    transition: "background-color 0.3s, color 0.3s",
  },
  hover: {
    
    backgroundColor:"#3283FF",
    color: "black",
  },
};
export default Page;
