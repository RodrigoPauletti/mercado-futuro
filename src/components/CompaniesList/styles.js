import styled from "styled-components";

import { colors } from "../../variables";

import { Button as ButtonPrimary } from "../../styles";

export const CompaniesList = styled.div`
  width: 100%;
`;

export const CompaniesListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem;
  margin: 1rem 0 0;
  border: 1px solid ${colors.mediumGray};
  border-width: 0 0 1px 0;
  &:first-child {
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
`;

export const CompaniesListItemInfos = styled.div`
  margin-left: 1.5rem;
`;

export const CompaniesListItemTitle = styled.h1`
  color: ${colors.primary};
  font-size: 2rem;
  font-weight: bold;
`;

export const CompaniesListItemDescription = styled.p`
  margin: 0;
`;

export const Button = styled(ButtonPrimary)`
  margin-top: 1rem;
  &:hover {
    background: transparent;
  }
`;
