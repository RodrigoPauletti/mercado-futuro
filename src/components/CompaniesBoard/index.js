import React from "react";
import { useHistory } from "react-router-dom";

import companies from "../../companies";

import {
  CompaniesBoard,
  CompaniesBoardItem,
  CompaniesBoardItemImage,
} from "./styles";

export default function CompaniesBoardComponent(props) {
  const history = useHistory();
  const handleClick = (event, route, itemLink) => {
    history.push(route);
    setMenuItemActived(itemLink);
  };

  const setMenuItemActived = (itemLink) => {
    const menuItems = document.querySelectorAll("li a");
    menuItems.forEach((item) => {
      if (item.href.indexOf(itemLink) !== -1) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  return (
    <CompaniesBoard>
      {companies.map((company, index) => {
        return (
          <CompaniesBoardItem
            onClick={(ev) =>
              handleClick(ev, `/companies/${company.slug}`, "companies")
            }
            key={index}
          >
            <CompaniesBoardItemImage
              src={company.image}
              alt={company.name}
              title={company.name}
            />
          </CompaniesBoardItem>
        );
      })}
    </CompaniesBoard>
  );
}
