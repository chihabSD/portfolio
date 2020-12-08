import React from "react";
import code from "../../assets/imgs/code.png";
import social from "../../assets/imgs/social.png";
import langs from "../../assets/imgs/langs.png";
function Skills({ hideSkills }) {
  return (
    <div class="work-experience-education">
      <div className="ed-title">
        <h2 onClick={hideSkills}>
          {" "}
          <i class="fas fa-minus"></i> Skills and Languages
        </h2>
      </div>

      <div className="details">
        <div className="left"><img src={code} alt="" style={{width:"50px"}}/></div>
        <div className="right">
          <h3>Tools & Technologies </h3>
          <h6>
            HTML, CSS, Sass
            <br />
            Node.js
            <br />
            React.js Vue.js
            <br />
            MongoDB, MySQL
            <br />
            Git, DevOps (Heroku, Netlify and others )
          </h6>
        </div>
      </div>

      <div className="details">
        <div className="left"><img src={social} alt="" style={{width:"50px"}}/></div>
        <div className="right">
          <h3>Other Skills </h3>
          <h6>
            Self-confidence, edger to learn, problem solver, excellent working
            with others <br /> or individually to complete any task given.{" "}
            <br />
          </h6>
        </div>
      </div>
      <div className="details">
        <div className="left"><img src={langs} alt="" style={{width:"50px"}}/></div>
        {/* <div className="left" accenture-qa></div> */}
        <div className="right">
          <h3>Languages that I speak</h3>
          <h6>
            English - fluent <br />
            Arabic - mother tongue <br />
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Skills;
