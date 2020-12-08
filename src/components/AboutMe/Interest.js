import React from 'react'
import social from "../../assets/imgs/social.jpg"
function Interest({hideSkill}) {
    return (
        <div class="work-experience-education">
      <div className="ed-title">
        <h2 onClick={hideSkill}>
          {" "}
          <i class="fas fa-minus"></i> Interests
        </h2>
      </div>

      <div className="details">
      <div className="left"><img src={social} alt="" style={{width:"50px"}}/></div>
        <div className="right">
          <h3>Socials</h3>
          <h6>
            Football, Movies, Gym and Socializing with friends
          </h6>
        </div>
      </div>

    </div>
    )
}

export default Interest
