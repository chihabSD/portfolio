import React from "react";
import {Link} from 'react-router-dom'


function Landing() {
   
  return (
    <div className="l-container">
       
      <div className="l-inner-container">
        <p>Hi,</p>
        <h2>I'm Chihabeddine Ahmed</h2>
        {/* <p>Web developer.</p> */}
        {/* <p>Design. Code. And develop</p> */}
        <p>I'm a front and back-end developer </p>
        <div className="cta">
            {/* <Link to="/me">
           <button className="landing-btn view-p">View Portfolio</button>
            </Link> */}
            <Link to="/me">
               
          <button className="landing-btn contact-me">View my work <i class="fas fa-arrow-right"></i></button>
      
            </Link>
        </div>
       
      <div className="socials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default Landing;
