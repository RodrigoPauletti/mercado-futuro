import React from "react";

import CompaniesListComponent from "../../components/CompaniesList";

import companies from "../../companies";

import { Container, Section } from "../../styles";

function Companies() {
  return (
    <Container>
      <Section>
        <CompaniesListComponent companies={companies} />
      </Section>
    </Container>
  );
}

export default Companies;
