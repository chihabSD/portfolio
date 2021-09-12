import React from "react";
import {
  FooterContainer,
  ArrowUP,
  SocialContainer,
  SocialIcon,
} from "../../styles/footerStyle";

const index = () => {
  return (
    <FooterContainer>
      <ArrowUP href="#">
        <i className="fas fa-angle-double-up"></i>
      </ArrowUP>
      <SocialContainer>
        <SocialIcon className="fab fa-facebook-f"></SocialIcon>
        <SocialIcon className="fab fa-youtube"></SocialIcon>
        <SocialIcon className="fab fa-linkedin-in"></SocialIcon>
        <SocialIcon className="fab fa-github"></SocialIcon>
      </SocialContainer>
    </FooterContainer>
  );
};

export default index;
