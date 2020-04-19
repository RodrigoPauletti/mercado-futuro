import styled from "styled-components";

import { colors } from "../../variables.js";

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
  &.active,
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 5px ${colors.white};
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
  font-size: 2.6rem;
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
