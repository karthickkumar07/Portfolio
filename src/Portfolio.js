import React from "react";
import "./Portfolio.css";
import Projects from "./Components/Projects";
import Experience from "./Experience";
const Portfolio = () => {
  return (
    <div>
      <div className="nav">
        <a href="">
          karthick Portfolio
          <img
            width="20px"
            height="20px"
            src="https://lh3.googleusercontent.com/proxy/zEu_KHyXJ-W7JhvNQjbWlWv9s2IaBpOFUpTaHNOdgO_lSz8rDjgkaFINALp3zROt29D7Mt67XOizYU_2M1QoksPqufnV8CxdYg5u8SBdskFSSXF8mnzvcIURiLrYaiVgEMIs2NQINvGVJeo"
            alt=""
          />
        </a>
        <a href=""> Btech IT Graduate</a>
        <a href="https://github.com/karthickkumar07">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/karthick71198">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/karthick-kumar-b49a77129/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </a>
        <div className="nav-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">Projects</a>

          <a href="#contact">Skills</a>
        </div>
      </div>

      <div className="div a" id="home">
        <h2>
          Welcome to <span style={{ color: "black" }}> Karthick</span> Kumar
          Portfolio Come And Explore
        </h2>

        <br />
      </div>
      <div className="div b" id="about">
        <h2>My Projects ~ Scroll Down</h2>
      </div>
      <div className="div c">
        <Projects />
      </div>

      <div className="div d" id="contact">
        <h2> My Experinece ~ Scroll Down </h2>
      </div>
      <div className=" e">
        <Experience />
      </div>
    </div>
  );
};

export default Portfolio;
