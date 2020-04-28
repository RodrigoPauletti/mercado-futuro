import styled from "styled-components";

import { colors } from "../../variables";

import { Button as ButtonPrimary } from "../../styles";

export const CompaniesList = styled.div`
  width: 100%;
`;

export const CompaniesListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin: 1rem 0 0;
  border: 1px solid ${colors.mediumGray};
  border-width: 0 0 1px 0;
  &:first-child {
    padding-top: 0;
    margin-top: 0;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    padding-top: 0;
    margin-top: 0;
  }
`;

export const CompaniesListItemImage = styled.img.attrs(({ src }) => {
  return {
    src: `/images/${src}`,
  };
})`
  width: 100%;
  max-width: 15rem;
  padding: 1rem;
  @media (max-width: 1100px) {
    max-width: 8rem;
  }
`;

export const CompaniesListItemInfos = styled.div`
  margin-left: 1.5rem;
  @media (max-width: 1100px) {
    margin: 0;
    text-align: center;
  }
`;

export const CompaniesListItemTitle = styled.h1`
  color: ${colors.primary};
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 1100px) {
    font-size: 1.3rem;
  }
`;

export const CompaniesListItemDescription = styled.p`
  margin: 0;
  @media (max-width: 1100px) {
    font-size: 0.9rem;
  }
`;

export const Button = styled(ButtonPrimary)`
  margin-top: 1rem;
  &:hover {
    background: transparent;
  }
`;
