import React from "react";

import { Container, Section } from "../../styles";
import { FooterText } from "./styles";

function Footer() {
  return (
    <Container>
      <Section>
        <FooterText>
          © Copyright 2020 Time 25 - MegaHack COVID-19 - Todos os direitos
          reservados.
        </FooterText>
      </Section>
    </Container>
  );
}

export default Footer;
