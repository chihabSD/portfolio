import React from 'react'
import cpl from "../../assets/imgs/cpl.png";
import arvato from "../../assets/imgs/Arvato.png";
import accenture from "../../assets/imgs/accenture.png";

function Experience({hideEx}) {
    return (
        <div class="work-experience-education">
        <div className="ed-title">
          {/* <h2 onClick={hideWork}> <i class="fas fa-caret-up"></i>  Education</h2> */}
          <h2 onClick={hideEx}>
            {" "}
            <i class="fas fa-minus"></i> Experience
          </h2>
        </div>
        {/* 
        <h2 onClick={hideEx} > <i class="fas fa-minus"></i>  Experience</h2> */}
        <div className="details">
          <div className="left">
            <img src={cpl} alt="" style={{ width: "50px" }} />
          </div>
          <div className="right">
            <h3>Community Operation Analyst</h3>
            <h6>
              Cpl- Full Time
              <br />
              May 2019- Sep-2019- ( 5 months) <br />
              Dublin, Leinster, Ireland
            </h6>
          </div>
        </div>

        <div className="details">
          <div className="left">
            <img src={arvato} alt="" style={{ width: "50px" }} />
          </div>
          <div className="right">
            <h3>Content Analyst Associate</h3>
            <h6>
              Arvato Financial Solution. Full-Time <br />
              Jul 2018-May-2019 (11 Months) <br />
              Dublin, Ireland
            </h6>
          </div>
        </div>
        <div className="details">
          <div className="left" accenture-qa>
            <img src={accenture} alt="" style={{ width: "60px" }} />
          </div>
          {/* <div className="left accenture-qa"><img src={accenture} alt="Accenture"/><p>-----</p></div> */}
          <div className="right">
            <h3>Quality Analyst</h3>
            <h6>
              Accenture. Full-Time <br />
              Mar 2018-Jul-2018 (5 Months) <br />
              Dublin, Ireland
            </h6>
          </div>
        </div>
      </div>
    )
}

export default Experience
