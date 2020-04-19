import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {
  Menu,
  Logo,
  MenuList,
  MenuListItem,
  MenuListMobile,
  VouchersCountContainer,
  VouchersCountText,
} from "./styles";

function Header({ vouchersCount }) {
  const [routeSelected, setRouteSelected] = useState(window.location.pathname);

  const handleClick = (event, route) => {
    setRouteSelected(route);
  };

  return (
    <Menu>
      <Link to="/" onClick={(ev) => handleClick(ev, "/")}>
        <Logo />
      </Link>
      {/* <a href="http://bit.ly/mercado-futuro" rel="noopener noreferrer">
          <Logo />
        </a> */}
      <MenuList>
        <MenuListItem>
          <Link
            className={routeSelected === "/" ? "active" : null}
            to="/"
            onClick={(ev) => handleClick(ev, "/")}
          >
            Início
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link
            className={
              routeSelected.indexOf("/companies") !== -1 ? "active" : ""
            }
            to="/companies"
            onClick={(ev) => handleClick(ev, "/companies")}
          >
            Empresas
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link
            className={routeSelected === "/about" ? "active" : ""}
            to="/about"
            onClick={(ev) => handleClick(ev, "/about")}
          >
            Sobre
          </Link>
        </MenuListItem>
        <MenuListItem>
          <VouchersCountContainer>
            <FontAwesomeIcon icon={faShoppingCart} />
            <VouchersCountText>{vouchersCount}</VouchersCountText>
          </VouchersCountContainer>
        </MenuListItem>
      </MenuList>
      <MenuListMobile>
        <FontAwesomeIcon icon={faBars} />
      </MenuListMobile>
    </Menu>
  );
}

export default Header;
