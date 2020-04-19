import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Section,
  Subsection,
  Title,
  Subtitle,
  Text,
  Button,
  ButtonOutline,
} from "../../styles";
import {
  HomeContainer,
  HomeBanner,
  CompaniesList,
  CompaniesListItem,
  CompaniesListItemImage,
  VoucherModal,
  VoucherMonthBonus,
  MonthList,
  MonthItem,
  Bonus,
  TooltipRange,
  InputRange,
  LabelRangeValuesList,
  LabelRangeValue,
} from "./styles";

import { Modal } from "react-bootstrap";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const scrollPage = (target) => {
    const element = document.getElementById(target);
    window.scrollTo(0, element.offsetTop - 100);
  };

  const [rangeValue, setRangeValue] = useState(10);
  const [monthSelected, setMonthSelected] = useState(0);

  const handleChange = (type, value) => {
    if (type === "month") {
      setMonthSelected(value);
    } else {
      setRangeValue(value);
    }
  };

  const options = [10, 1000];
  const companies = [
    { name: "Myob", image: "myob.png" },
    { name: "Belimo", image: "belimo.png" },
    { name: "Life Groups", image: "life-groups.png" },
    { name: "Lilly", image: "lilly.png" },
    { name: "Citrus", image: "citrus.png" },
    { name: "Trustly", image: "trustly.png" },
    { name: "Oldendorff", image: "oldendorff.png" },
    { name: "Grabyo", image: "grabyo.png" },
  ];
  const months = [
    "Maio 2020",
    "Junho 2020",
    "Julho 2020",
    "Agosto 2020",
    "Setembro 2020",
    "Outubro 2020",
    "Novembro 2020",
    "Dezembro 2020",
  ];

  return (
    <>
      <Container>
        <HomeContainer>
          <Section>
            <div className="row">
              <div className="col-lg-6 col-12 text-lg-left text-center">
                <Title>
                  <span>Programe</span> suas compras futuras, ajude e valorize
                  os <span>pequenos negócios</span> e faça seu dinheiro render{" "}
                  <span>mais que na poupança</span>
                </Title>
                <Button onClick={() => scrollPage("companies")}>
                  Empresas
                </Button>
              </div>
              <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
                <HomeBanner />
              </div>
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
          <CompaniesList>
            {companies.map((company, index) => {
              return (
                <CompaniesListItem onClick={handleShow} key={index}>
                  <CompaniesListItemImage
                    src={company.image}
                    alt={company.name}
                    title={company.name}
                  />
                </CompaniesListItem>
              );
            })}
          </CompaniesList>
        </Section>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <VoucherModal>
          <Text>1. Escolha o mês para poder usar seu voucher</Text>
          <VoucherMonthBonus>
            <MonthList>
              {months.map((month, index) => {
                return (
                  <MonthItem
                    className={monthSelected === index + 1 ? "active" : ""}
                    onClick={() => handleChange("month", index + 1)}
                    key={index}
                  >
                    {month}
                  </MonthItem>
                );
              })}
            </MonthList>
            <Bonus>
              <FontAwesomeIcon icon={faGem} />
              <Text>Bônus</Text>
              <Text id="bonusPercentage">{`${parseInt(monthSelected)}%`}</Text>
              <Text id="bonusTotal">{`Desconto de: R$${parseFloat(
                rangeValue * (monthSelected / 100)
              ).toFixed(2)}`}</Text>
            </Bonus>
          </VoucherMonthBonus>
          <Text>2. Escolha um valor para seu voucher</Text>
          <TooltipRange options={options} rangeValue={rangeValue}>
            {`R$${rangeValue}`}
          </TooltipRange>
          <InputRange
            name="range"
            values={options}
            title={rangeValue}
            value={rangeValue}
            onChange={(event) =>
              handleChange("price", parseInt(event.target.value))
            }
          />
          <LabelRangeValuesList>
            {options.map((option, index) => {
              return (
                <LabelRangeValue
                  key={index}
                  onClick={() => handleChange("price", option)}
                >
                  {`R$${option}`}
                </LabelRangeValue>
              );
            })}
          </LabelRangeValuesList>
          <ButtonOutline>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Adicionar
            ao carrinho
          </ButtonOutline>
        </VoucherModal>
      </Modal>
    </>
  );
}

export default Home;
