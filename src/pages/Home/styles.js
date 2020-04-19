import styled from "styled-components";

import { colors } from "../../variables";

import bgImage from "../../assets/images/bg.png";
import homeBanner from "../../assets/images/home-banner.svg";

export const HomeContainer = styled.div`
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

export const HomeTitleContainer = styled.div`
  text-align: left;
  @media (max-width: 1024px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
  }
`;

export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Button = styled.button.attrs({
  type: "button",
})`
  background: ${colors.primary};
  color: ${colors.light};
  padding: 0.5rem 1.8rem;
  margin-top: 5rem;
  font-size: 1rem;
  font-weight: 700;
  border: 2px solid transparent;
  border-radius: 5rem;
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.primary};
    background: ${colors.light};
    border: 2px solid ${colors.primary};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1024px) {
    margin: 2rem auto 0;
  }
`;

export const HomeBanner = styled.img.attrs({
  src: homeBanner,
})`
  width: 100%;
`;
