import React from 'react'
import lit from "../../assets/imgs/lit.png";
import school from "../../assets/imgs/school.png";

function Education({hideWork}) {

    return (
        <div class="work-experience-education">
        <div className="ed-title">
          <h2 onClick={hideWork}>
            {" "}
            <i class="fas fa-minus"></i> Education
          </h2>
        </div>
        <div className="details">
          <div className="left">
            <img src={lit} alt="LIT" style={{ width: "50px" }} />
          </div>
          <div className="right">
            <h3>Limerick Institute of Technology</h3>
            <h6>
              Bsc in Computing <br />
              Sep 2012 - May-2015- 3 Years <br />
              Thurles, Tipperary, Ireland
            </h6>
          </div>
        </div>

        <div className="details">
          <div className="left">
            <img src={school} alt="LIT" style={{ width: "50px" }} />
          </div>
          <div className="right">
            <h3>Carlow Vocational School</h3>
            <h6>
              Leaving Cert <br />
              Sept 2008 - May -2012 <br />
              Carlow , Ireland
            </h6>
          </div>
        </div>
      </div>
    )
}

export default Education
