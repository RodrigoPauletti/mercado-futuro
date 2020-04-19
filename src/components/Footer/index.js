import React from "react";

import { FooterText } from "./styles";
import { Container, Section } from "../../styles";

function Footer() {
  return (
    <Container>
      <Section>
        <FooterText>
          © Copyright 2020 Time 4 - HackaTrouble - Todos os direitos reservados.
        </FooterText>
      </Section>
    </Container>
  );
}

export default Footer;
