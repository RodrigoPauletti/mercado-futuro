import React from "react";

import CompaniesBoard from "../../components/CompaniesBoard";

import {
  HomeContainer,
  HomeTitleContainer,
  HomeBannerContainer,
  HomeBanner,
} from "./styles";
import {
  Container,
  Section,
  Subsection,
  Title,
  Subtitle,
  Text,
  Button,
} from "../../styles";

function Home() {
  const scrollPage = (target) => {
    const element = document.getElementById(target);
    window.scrollTo(0, element.offsetTop - 100);
  };

  return (
    <>
      <Container>
        <HomeContainer>
          <Section>
            <div className="row">
              <HomeTitleContainer className="col-lg-6 col-12">
                <Title>
                  <span>Programe</span> suas compras futuras, ajude e valorize
                  os <span>pequenos negócios</span> e faça seu dinheiro render{" "}
                  <span>mais que na poupança</span>
                </Title>
                <Button onClick={() => scrollPage("companies")}>
                  Empresas
                </Button>
              </HomeTitleContainer>
              <HomeBannerContainer className="col-lg-6">
                <HomeBanner />
              </HomeBannerContainer>
            </div>
          </Section>
        </HomeContainer>
        <Section id="companies">
          <Subsection>
            <Subtitle>Empresas</Subtitle>
            <Text>
              Adquira seu voucher pré-pago com bônus em um dos negócios
              parceiros
            </Text>
          </Subsection>
          <CompaniesBoard />
        </Section>
      </Container>
    </>
  );
}

export default Home;
