import styled, { createGlobalStyle } from "styled-components";

import { fonts, colors } from "./variables.js";

import logoMercadoFuturo from "./assets/images/logo-mercado-futuro.png";
import homeBgImage from "./assets/images/bg.png";
import homeBanner from "./assets/images/home-banner.svg";
import aboutImage from "./assets/images/about.svg";
import aboutBanner from "./assets/images/about-banner.svg";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 1.9rem 0 0;
    box-sizing: border-box;
    height: 100%;
  }
  body {
    ${fonts.primary};
    color: ${colors.gray};
    background: ${colors.background};
  }
  #root {
    height: 100%;
  }
  .fade.modal.show {
    padding: 0 .5rem;
  }
  .modal-dialog, .modal-content {
    margin: 0;
    padding: 0;
  }
  .modal-dialog {
    max-width: initial;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background: transparent;
    border: 0;
    width: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Home = styled.div`
  background: url(${homeBgImage}) center top no-repeat;
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  padding: 1.3rem;
  @media (max-width: 320px) {
    max-width: 250px;
    padding: 1.3rem 10px;
  }
  @media (min-width: 769px) {
    margin-top: 50px;
  }
  @media (max-width: 1024px) {
    max-width: 1280px;
  }
`;

export const Subsection = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.light};
  margin: 0;
  font-size: 2.5rem;
  text-align: left;
  font-weight: 700;
  & span {
    color: ${colors.primaryLight};
  }
  @media (max-width: 1024px) {
    color: ${colors.primary};
    text-align: center;
  }
  @media (max-width: 769px) {
    font-size: 30px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.h2`
  color: ${colors.secondary};
  margin: 0;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  margin: 2rem 0;
`;

export const Text = styled.p`
  margin: 0;
  &#bonusPercentage,
  &#bonusTotal {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    &#bonusPercentage,
    &#bonusTotal {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonDefault = styled.button.attrs({
  type: "button",
})`
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5rem;
  transition: 0.3s all ease;
  &:focus {
    outline: none;
  }
  @media (max-width: 1024px) {
    margin: 2rem auto 0;
  }
`;

export const Button = styled(ButtonDefault)`
  background: ${colors.primary};
  color: ${colors.light};
  margin-top: 5rem;
  padding: 0.5rem 1.8rem;
  border: 2px solid transparent;
  &:hover {
    color: ${colors.primary};
    background: ${colors.light};
    border-color: ${colors.primary};
    cursor: pointer;
  }
`;

export const ButtonOutline = styled(ButtonDefault)`
  background: ${colors.light};
  color: ${colors.primaryDark};
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
  border: 2px solid ${colors.primaryDark};
  &:hover {
    background: ${colors.primaryDark};
    color: ${colors.light};
    border-color: transparent;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  background-color: ${colors.light};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 15rem 0.5rem 10rem;
  font-size: 1rem;
  margin: 0 auto;
  min-height: 3.75rem;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1040;
  @media (max-width: 1100px) {
    padding: 0.5rem 2rem;
  }
`;

export const Logo = styled.img.attrs({
  src: logoMercadoFuturo,
})`
  width: 100%;
  max-width: 80px;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  align-items: center;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const MenuListItem = styled.li`
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  a {
    color: ${colors.gray};
    position: relative;
    font-weight: 300;
    &.active {
      font-weight: 700;
    }
    &.active,
    &:hover {
      color: ${colors.primary};
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

export const MenuListMobile = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  color: ${colors.primary};
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    display: flex;
  }
`;

export const HomeBanner = styled.img.attrs({
  src: homeBanner,
})`
  width: 100%;
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

export const CompaniesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

export const CompaniesListItem = styled.div`
  background: ${colors.light};
  height: 10.7rem;
  flex: 1 0 21%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid ${colors.lightGray};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex: 1 0 50%;
  }
  @media (max-width: 465px) {
    flex: 1 0 100%;
  }
`;

export const CompaniesListItemImage = styled.img.attrs(({ src }) => {
  return {
    src: `/images/${src}`,
  };
})`
  width: 100%;
  max-width: 15rem;
  padding: 2rem;
`;

export const VoucherModal = styled.div`
  background: ${colors.primary};
  color: ${colors.light};
  position: relative;
  width: 100%;
  max-width: 850px;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 0 auto;
  @media (max-width: 465px) {
    padding: 1.5rem 0.8rem;
  }
`;

export const VoucherMonthBonus = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 1rem 0;
  }
`;

export const MonthList = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const MonthItem = styled.div`
  background: ${colors.primaryDark};
  padding: 1.5rem;
  margin: 0 1rem 1rem 0;
  flex: 1 0 46%;
  max-width: 200px;
  text-align: center;
  border-radius: 0.7rem;
  transition: 0.3s box-shadow ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${colors.primaryDark};
  }
  &:nth-child(7),
  &:last-child {
    margin: 0 1rem 0 0;
  }
  @media (max-width: 1024px) {
    margin: 0 0.5rem 0.5rem 0;
    padding: 0.5rem 0.8rem;
    flex: 1 0 23%;
    &:nth-child(7),
    &:last-child {
      margin: 0 0.5rem 0.5rem 0;
    }
  }
  @media (max-width: 725px) {
    flex: 1 0 50%;
  }
  @media (max-width: 465px) {
    flex: 1 0 32%;
  }
`;

export const Bonus = styled.div`
  background: ${colors.primaryDark};
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  max-width: 400px;
  font-size: 3.7rem;
  padding: 2rem 0;
  @media (max-width: 1024px) {
    background: transparent;
    width: 100%;
    max-width: initial;
    font-size: 1.5rem;
    flex-direction: row;
    padding: 1rem 0;
    & p {
      margin-left: 1rem;
    }
  }
`;

export const TooltipRange = styled.div`
  left: ${(props) => {
    const val = props.rangeValue ? props.rangeValue : 10;
    const min = props.options[0] ? props.options[0] : 10;
    const max = props.options[1] ? props.options[1] : 1000;
    const newVal = Number(((val - min) * 100) / (max - min));
    return `calc(${newVal}% + (${8 - newVal * 0.15}px) - 20px)`;
  }};
  position: relative;
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputRange = styled.input.attrs((props) => ({
  type: "range",
  min: props.values[0],
  max: props.values[props.values.length - 1],
}))`
  margin: 0;
  height: 4px;
  background: ${colors.light};
  border-radius: 10px;
  outline: none;
  appearance: none;
  width: 100%;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    background: ${colors.primaryDark};
    border-radius: 100%;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const LabelRangeValuesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 0;
`;

export const LabelRangeValue = styled.p`
  color: ${colors.light};
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const Footer = styled.p`
  padding: 1.5rem 2rem;
  text-align: center;
`;
