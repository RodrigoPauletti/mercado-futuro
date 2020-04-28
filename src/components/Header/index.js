import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  Menu,
  Logo,
  MenuList,
  MenuListMobile,
  MenuListItemsMobile,
} from "./styles";

import MenuListItems from "../MenuListItems";

function Header({ vouchersCount }) {
  const [routeSelected, setRouteSelected] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (event, route) => {
    setRouteSelected(route);
    setMenuOpen(false);
  };

  return (
    <Menu>
      <Link to="/" onClick={(ev) => handleClick(ev, "/")}>
        <Logo />
      </Link>
      <MenuList>
        <MenuListItems vouchersCount={vouchersCount} />
      </MenuList>
      <MenuListMobile>
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </MenuListMobile>
      <MenuListItemsMobile className={menuOpen ? "menuOpen" : ""}>
        <MenuListItems
          vouchersCount={vouchersCount}
          setMenuOpen={setMenuOpen}
        />
      </MenuListItemsMobile>
    </Menu>
  );
}

export default Header;
