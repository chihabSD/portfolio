import styled from "styled-components";
export const FooterContainer = styled.div`
  flex-direction: column;
  padding-bottom: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

export const SocialContainer = styled.div`
  margin-top: 10px;
`;
export const ArrowUP = styled.a`
  i {
    color: red;
  }
`;
export const SocialIcon = styled.i`
  margin: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  .fa-facebook-f {
    color: rgb(9, 89, 209);
  }
  .fa-facebook-f:hover {
    color: rgb(5, 69, 165);
  }
  .fa-youtube {
    color: green;
  }
  .fa-youtube:hover {
    color: rgb(156, 19, 19);
  }
  .fa-linkedin-in {
    color: #0073b1;
  }
`;
