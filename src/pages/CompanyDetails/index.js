import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Modal } from "react-bootstrap";
import CurrencyInput from "react-currency-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faShoppingCart,
  faArrowAltCircleLeft,
  faMapMarkerAlt,
  faGlobe,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  BackButton,
  CompanyDetailsContainer,
  CompanyDetails,
  CompanyDetailsTop,
  CompanyDetailsTitle,
  CompanyDetailsSocialNetworks,
  CompanyDetailsSocialNetworksItem,
  CompanyDetailsImage,
  CompanyDetailsDescription,
  CompanyDetailsInfos,
  CompanyDetailsInfosItem,
  Button,
  VoucherModal,
  VoucherMonthBonus,
  MonthList,
  MonthItem,
  Bonus,
  TooltipRange,
  InputRange,
  LabelRangeValuesList,
  LabelRangeValue,
  DonateContainer,
  DonateTitle,
  DonateText,
  DonateValueContainer,
  DonateValueText,
  DonateInput,
} from "./styles";
import { Container, Section, Text, ButtonOutline } from "../../styles";

import companies from "../../companies";

export default function CompaniesDetail() {
  const { companySlug } = useParams();
  const [company, setCompany] = useState();

  useEffect(() => {
    setCompany(companies.find((item) => item.slug === companySlug));
  }, [companySlug]);

  const [routeSelected, setRouteSelected] = useState(window.location.pathname);
  const [show, setShow] = useState(false);
  const [rangeValue, setRangeValue] = useState(10);
  const [monthSelected, setMonthSelected] = useState(0);
  const [donateValue, setDonateValue] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (type, value) => {
    if (type === "month") {
      if (monthSelected === value) {
        setMonthSelected(0);
      } else {
        setMonthSelected(value);
      }
    } else {
      setRangeValue(value);
    }
  };

  const options = [10, 1000];
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
        <Section>
          <BackButton>
            <Link to="/companies">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </Link>
          </BackButton>
          {company && (
            <CompanyDetailsContainer>
              <CompanyDetails>
                <CompanyDetailsTop>
                  <CompanyDetailsTitle>{company.name}</CompanyDetailsTitle>
                  <CompanyDetailsSocialNetworks>
                    <CompanyDetailsSocialNetworksItem>
                      <a
                        href="https://www.facebook.com"
                        title="Acessar Facebook"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </CompanyDetailsSocialNetworksItem>
                    <CompanyDetailsSocialNetworksItem>
                      <a
                        href="https://www.instagram.com"
                        title="Acessar Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </CompanyDetailsSocialNetworksItem>
                    <CompanyDetailsSocialNetworksItem>
                      <a href="https://www.twitter.com" title="Acessar Twitter">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                      </a>
                    </CompanyDetailsSocialNetworksItem>
                    <CompanyDetailsSocialNetworksItem>
                      <a
                        href="https://api.whatsapp.com"
                        title="Acessar WhatsApp"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                    </CompanyDetailsSocialNetworksItem>
                  </CompanyDetailsSocialNetworks>
                </CompanyDetailsTop>
                <CompanyDetailsImage src={company.image} />
                <CompanyDetailsDescription>
                  {company.description}
                </CompanyDetailsDescription>
                <CompanyDetailsInfos>
                  <CompanyDetailsInfosItem>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    Endereço:{" "}
                    <a
                      href={company.address_map}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.address}
                    </a>
                  </CompanyDetailsInfosItem>
                  <CompanyDetailsInfosItem>
                    <FontAwesomeIcon icon={faGlobe} />
                    Site:{" "}
                    <a
                      href={company.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.site}
                    </a>
                  </CompanyDetailsInfosItem>
                  <CompanyDetailsInfosItem>
                    <FontAwesomeIcon icon={faPhoneSquareAlt} />
                    Telefone:{" "}
                    <a
                      href={`tel:+55${company.phone.replace(/([() -])/g, "")}`}
                    >
                      {company.phone}
                    </a>
                  </CompanyDetailsInfosItem>
                </CompanyDetailsInfos>
              </CompanyDetails>
            </CompanyDetailsContainer>
          )}
          <Button onClick={handleShow}>Gerar voucher</Button>
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
              <Text id="bonusPercentage">{`${parseFloat(
                monthSelected + (donateValue ? donateValue : 0) / 100
              ).toFixed(2)}%`}</Text>
              <Text id="bonusTotal">{`Desconto de: R$${parseFloat(
                rangeValue * (monthSelected / 100) +
                  (donateValue ? donateValue : 0) / 100
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
          <DonateContainer>
            <DonateTitle>Quero doar</DonateTitle>
            <DonateText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              scelerisque condimentum dolor et fringilla.
            </DonateText>
            <DonateValueContainer>
              <DonateValueText>Informe o valor para doação:</DonateValueText>
              <DonateInput>
                <CurrencyInput
                  prefix="R$"
                  decimalSeparator=","
                  thousandSeparator="."
                  value={donateValue}
                  onChange={(value) =>
                    setDonateValue(
                      parseFloat(
                        value
                          .replace("R$", "")
                          .replace(".", "")
                          .replace(",", ".")
                      )
                    )
                  }
                />
              </DonateInput>
            </DonateValueContainer>
          </DonateContainer>
          <ButtonOutline>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Adicionar
            ao carrinho
          </ButtonOutline>
        </VoucherModal>
      </Modal>
    </>
  );
}
