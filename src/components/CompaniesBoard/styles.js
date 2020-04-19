import styled from "styled-components";

import { colors } from "../../variables";

export const CompaniesBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

export const CompaniesBoardItem = styled.div`
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

export const CompaniesBoardItemImage = styled.img.attrs(({ src }) => {
  return {
    src: `/images/${src}`,
  };
})`
  width: 100%;
  max-width: 11rem;
  padding: 1rem;
`;
