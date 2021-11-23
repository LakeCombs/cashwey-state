import React from "react";
import styled from "styled-components";
import { hoverEffect, cardShadow } from "../utils/usable";
import Level from "./Level";
import Pet from "../Images/p.jpg";
import Pet1 from "../Images/p1.jpg";

const Invoice = () => {
  return (
    <InvoiceContainer>
      <CardContent>
        <Invoices>
          <Info>
            <Avatar>
              <img src={Pet1} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Adesola Olamilekan</Title>
              <SubTitle>Software Developer</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Level content="Save" save />
            <Price>$4,200</Price>
          </Container>
        </Invoices>
        <Invoices>
          <Info>
            <Avatar>
              <img src={Pet} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Joshua Erute</Title>
              <SubTitle>Realtor</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Level content="Withdraw" withdraw />
            <Price>$3,800.7</Price>
          </Container>
        </Invoices>
      </CardContent>
    </InvoiceContainer>
  );
};

const InvoiceContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 160%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    margin: 2rem 0;
  }
`;
const Invoices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;
const Price = styled.div``;

export default Invoice;
