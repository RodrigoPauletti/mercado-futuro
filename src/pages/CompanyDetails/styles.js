import styled from "styled-components";

import { colors } from "../../variables";

import { Button as ButtonDefault } from "../../styles";

export const BackButton = styled.div`
  font-size: 2rem;
  width: 100%;
  svg {
    color: ${colors.primary};
  }
  a {
    text-decoration: none;
  }
`;

export const CompanyDetailsContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyDetailsTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CompanyDetailsTitle = styled.h1`
  color: ${colors.primary};
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const CompanyDetailsSocialNetworks = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: ${colors.primary};
    font-size: 1.7rem;
    margin-right: 0.5rem;
  }
  a {
    text-decoration: none;
  }
`;

export const CompanyDetailsSocialNetworksItem = styled.p`
  margin: 0;
`;

export const CompanyDetailsImage = styled.img.attrs(({ src }) => {
  return {
    src: `/images/${src}`,
  };
})`
  width: 100%;
  max-width: 15rem;
  padding: 1rem;
  margin: 0 auto;
`;

export const CompanyDetailsDescription = styled.p`
  /* margin: 0; */
`;

export const CompanyDetailsInfos = styled.div`
  /* margin-left: 1.5rem; */
`;

export const CompanyDetailsInfosItem = styled.p`
  svg {
    font-size: 1.3rem;
    width: 2rem !important;
  }
  a {
    color: ${colors.primary};
  }
  &:hover a {
    opacity: 0.8;
  }
`;

export const Button = styled(ButtonDefault)`
  margin: 0;
  &:hover {
    background: transparent;
  }
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
  @media (max-width: 525px) {
    flex-direction: column;
    #bonusTotal {
      width: 100%;
      margin: 0;
      text-align: center;
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

export const DonateContainer = styled.div`
  margin: 2rem 0 0;
`;

export const DonateTitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

export const DonateText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const DonateValueContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  @media (max-width: 525px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const DonateValueText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const DonateInput = styled.div`
  margin-left: 0.5rem;
  input {
    color: ${colors.primaryDark};
    width: 100%;
    max-width: 300px;
    padding: 0.5rem 1rem;
    border: 2px solid ${colors.primaryDark};
    border-radius: 10px;
  }
  @media (max-width: 525px) {
    margin-left: 0;
  }
`;
