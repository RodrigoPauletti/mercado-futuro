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

export default function CompaniesDetails({
  vouchersCount,
  setVouchersCount,
  handleVouchersCount,
}) {
  const { companySlug } = useParams();
  const [company, setCompany] = useState();

  useEffect(() => {
    setCompany(companies.find((item) => item.slug === companySlug));
    handleVouchersCount(vouchersCount);
  }, [companySlug, handleVouchersCount, vouchersCount]);

  const [show, setShow] = useState(false);
  const [rangeValue, setRangeValue] = useState(10);
  const [monthSelected, setMonthSelected] = useState(0);
  const [donateValue, setDonateValue] = useState(0);
  const minimumDonateValue = "R$5,00";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (type, value) => {
    if (type === "month") {
      setMonthSelected(value);
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

  const formatPrice = (price) => {
    return parseFloat(
      price.replace("R$", "").replace(".", "").replace(",", ".")
    );
  };

  const handleBlur = (value) => {
    if (formatPrice(value) > 0 && formatPrice(value) < 5) {
      value = minimumDonateValue;
    }
    setDonateValue(formatPrice(value));
  };

  const addToCart = () => {
    handleClose();
    setVouchersCount(vouchersCount + 1);
  };

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
              <Text id="bonusPercentage">{`${parseInt(
                monthSelected + (donateValue ? 1 : 0)
              )}%`}</Text>
              <Text id="bonusTotal">{`Você vai pagar R$${parseFloat(
                rangeValue -
                  rangeValue * (monthSelected / 100) -
                  (donateValue ? 0.1 : 0)
              ).toFixed(2)} pelo seu voucher de R$${rangeValue}.
              `}</Text>
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
              Faça uma doação para ajudar no combate ao Covid-19 e ganhe um
              bônus extra no seu voucher.
            </DonateText>
            <DonateValueContainer>
              <DonateValueText>Informe o valor para doação:</DonateValueText>
              <DonateInput>
                <CurrencyInput
                  prefix="R$"
                  decimalSeparator=","
                  thousandSeparator="."
                  value={donateValue}
                  onChange={(value) => {
                    setDonateValue(formatPrice(value));
                  }}
                  onBlur={(ev) => handleBlur(ev.target.value)}
                />
              </DonateInput>
            </DonateValueContainer>
            <Text>Valor mínimo de R$5,00.</Text>
          </DonateContainer>
          <ButtonOutline onClick={addToCart}>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Adicionar
            ao carrinho
          </ButtonOutline>
        </VoucherModal>
      </Modal>
    </>
  );
}
