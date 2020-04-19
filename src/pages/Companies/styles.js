import styled from "styled-components";

import bgImage from "../../assets/images/bg.png";

export const CompaniesContainer = styled.div`
  background: url(${bgImage}) center top no-repeat;
  width: 100%;
  height: 96vh;
  background-size: contain;
  & section {
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }
  @media (max-width: 1280px) {
    height: 90vh;
  }
  @media (max-width: 1024px) {
    background: none;
    height: auto;
  }
`;
