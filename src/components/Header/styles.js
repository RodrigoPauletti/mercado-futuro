import styled from "styled-components";

import { colors } from "../../variables.js";

import logoMercadoFuturo from "../../assets/images/logo-mercado-futuro.png";

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
