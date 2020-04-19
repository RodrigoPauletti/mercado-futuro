import styled from "styled-components";

import { colors } from "../../variables.js";

import bgImage from "../../assets/images/bg.png";
import aboutBanner from "../../assets/images/about-banner.svg";
import aboutImage from "../../assets/images/about.svg";

export const AboutContainer = styled.div`
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

export const AboutBanner = styled.img.attrs({
  src: aboutBanner,
})`
  width: 100%;
`;

export const AboutImage = styled.img.attrs({
  src: aboutImage,
})`
  width: 100%;
`;

export const AboutItems = styled.div`
  margin-top: 4rem;
`;

export const AboutItem = styled.div`
  display: flex;
  justify-content: flex-start;
  &:not(:first-child) {
    margin-top: 5rem;
  }
`;

export const AboutItemInfos = styled.div`
  padding-left: 1rem;
`;

export const AboutItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 1rem;
  color: ${colors.primary};
  font-size: 1.3rem;
  border: 2px solid ${colors.primary};
  border-radius: 5rem;
`;

export const AboutItemTitle = styled.div`
  color: ${colors.secondary};
  font-size: 1.2rem;
  font-weight: 700;
`;

export const AboutItemDescriptionList = styled.ul`
  margin: 0;
  padding: 0 0 0 1rem;
`;

export const AboutItemDescription = styled.li``;
