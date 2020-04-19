import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Menu, Logo, MenuList, MenuListItem, MenuListMobile } from "./styles";

function Header() {
  const [routeSelected, setRouteSelected] = useState(window.location.pathname);

  function handleClick(event, route) {
    setRouteSelected(route);
  }

  return (
    <>
      <Menu>
        <a
          href="http://bit.ly/megahack-covid19-economia"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
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
              className={(routeSelected === "/about" ? "active" : "") + " new"}
              to="/about"
              onClick={(ev) => handleClick(ev, "/about")}
            >
              Sobre
            </Link>
          </MenuListItem>
        </MenuList>
        <MenuListMobile>
          <FontAwesomeIcon icon={faBars} />
        </MenuListMobile>
      </Menu>
    </>
  );
}

export default Header;
