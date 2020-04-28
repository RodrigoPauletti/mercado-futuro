import styled from "styled-components";

import { colors } from "../../variables";

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
  @media (max-width: 1100px) {
    padding: 1rem 0.75rem 0.5rem;
  }
`;

export const VouchersCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VouchersCountText = styled.p`
  background: ${colors.primary};
  margin: 0 0 0 0.5rem;
  padding: 0 0.6rem;
  color: ${colors.light};
  border-radius: 30px;
`;
