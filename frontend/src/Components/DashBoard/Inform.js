import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { themeColor, hoverEffect, cardShadow } from "../utils/usable";
import Level from "./Level";
import { createTransactionAction } from "../../redux/actions/TransactionACtion";
import TransactionWithdraw from "../utils/TransactionWithdraw";
import TransactionDeposit from "../utils/TransactionDeposit";

const Inform = () => {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>
              {/* <ModalScreen /> */}
              <TransactionDeposit />
            </Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>Among 20%</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>
              <TransactionWithdraw />
            </Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>Among 20%</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Level content="A level Investor" glow />
            <Level content="Branding" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
};

const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 0.8rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 400ms ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 80%;
  }
`;
const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 0.7rem;
`;
const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
  justify-content: space-around;
  width: 90%;
  `}
`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  color: black;
`;
const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;

export default Inform;
