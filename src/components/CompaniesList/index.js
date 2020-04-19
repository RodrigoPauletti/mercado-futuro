import React from "react";
import { useHistory } from "react-router-dom";

import {
  CompaniesList,
  CompaniesListItem,
  CompaniesListItemImage,
  CompaniesListItemInfos,
  CompaniesListItemTitle,
  CompaniesListItemDescription,
  Button,
} from "./styles";

export default function CompaniesListComponent({ companies }) {
  const history = useHistory();
  const handleClick = (event, route) => {
    history.push(route);
  };

  return (
    <CompaniesList>
      {companies.map((company, key) => {
        return (
          <CompaniesListItem key={key}>
            <CompaniesListItemImage src={company.image} />
            <CompaniesListItemInfos>
              <CompaniesListItemTitle>{company.name}</CompaniesListItemTitle>
              <CompaniesListItemDescription>
                {company.description}
              </CompaniesListItemDescription>
              <Button
                onClick={(ev) =>
                  handleClick(ev, `/companies/${company.slug}`, "companies")
                }
              >
                Ver detalhes
              </Button>
            </CompaniesListItemInfos>
          </CompaniesListItem>
        );
      })}
    </CompaniesList>
  );
}
