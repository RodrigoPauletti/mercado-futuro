import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faChartBar } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Section,
  Subsection,
  Title,
  Subtitle,
  Text,
} from "../../styles";
import {
  AboutContainer,
  AboutBanner,
  AboutImage,
  AboutItems,
  AboutItem,
  AboutItemIcon,
  AboutItemInfos,
  AboutItemTitle,
  AboutItemDescriptionList,
  AboutItemDescription,
} from "./styles";

function About() {
  return (
    <Container>
      <AboutContainer>
        <Section>
          <div className="row">
            <div className="col-lg-6 col-12 text-lg-left text-center">
              <Title>
                Seu investimento <span>agora</span> pode garantir o{" "}
                <span>futuro</span> desses pequenos negócios!
              </Title>
            </div>
            <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
              <AboutBanner />
            </div>
          </div>
        </Section>
      </AboutContainer>
      <Section>
        <Subsection>
          <Subtitle>Sobre o Mercado Futuro</Subtitle>
          <Text>
            Plataforma em que os pequenos negócios podem levantar saldo para
            capital através da venda de vouchers pré-pagos com bonificação aos
            seus clientes.
          </Text>
        </Subsection>
        <div className="row mt-5">
          <div className="col-lg-6 col-12">
            <Text>Por que escolher um mercado futuro?</Text>
            <AboutItems>
              <AboutItem>
                <AboutItemIcon>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </AboutItemIcon>
                <AboutItemInfos>
                  <AboutItemTitle>Para os clientes:</AboutItemTitle>
                  <AboutItemDescriptionList>
                    <AboutItemDescription>
                      Ajudar e valorizar os negócios locais;
                    </AboutItemDescription>
                    <AboutItemDescription>
                      Programar compras futuras;
                    </AboutItemDescription>
                    <AboutItemDescription>
                      Ganhar bônus superiores ao rendimento da poupança em suas
                      compras.
                    </AboutItemDescription>
                  </AboutItemDescriptionList>
                </AboutItemInfos>
              </AboutItem>
              <AboutItem>
                <AboutItemIcon>
                  <FontAwesomeIcon icon={faChartBar} />
                </AboutItemIcon>
                <AboutItemInfos>
                  <AboutItemTitle>Para as empresas:</AboutItemTitle>
                  <AboutItemDescriptionList>
                    <AboutItemDescription>
                      Acesso a dinheiro rápido, menos burocrático e mais barato
                      que em bancos.
                    </AboutItemDescription>
                  </AboutItemDescriptionList>
                </AboutItemInfos>
              </AboutItem>
            </AboutItems>
          </div>
          <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
            <AboutImage />
          </div>
        </div>
      </Section>
    </Container>
  );
}

export default About;
