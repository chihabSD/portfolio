import React from 'react'
import udemy from "../../assets/imgs/udemy.png";
function Certs({hideCerts}) {
    return (
        <div class="work-experience-education">
        <div className="ed-title">
          {/* <h2 onClick={hideWork}> <i class="fas fa-caret-up"></i>  Education</h2> */}
          <h2 onClick={hideCerts}>
            {" "}
            <i class="fas fa-minus"></i> Licenses & Certifications
          </h2>
        </div>
        {/* 
        <h2 onClick={hideEx} > <i class="fas fa-minus"></i>  Experience</h2> */}

        <div className="details">
          <div className="left">
            <img src={udemy} alt="LIT" style={{ width: "60px" }} />
          </div>
          <div className="right">
            <h3>MERN stack Front To Back </h3>
            <h6>
              By Udemy
              <br />
              issued Dec 2019 <br />
            </h6>
            <a
              target="_blank"
              href="https://www.udemy.com/certificate/UC-5ZVYYYE9/"
            >
              See credential
            </a>
          </div>
        </div>
        <div className="details">
          <div className="left">
            <img src={udemy} alt="LIT" style={{ width: "60px" }} />
          </div>
          <div className="right">
            <h3>Modern HTML & CSS From The Beginning (Including Sass)</h3>
            <h6>
              By Udemy
              <br />
              issued Nov 2019 <br />
            </h6>
            <a
              target="_blank"
              href="https://www.udemy.com/certificate/UC-WL3HF8YH/"
            >
              See credential
            </a>
          </div>
        </div>
      </div>
    )
}

export default Certs
