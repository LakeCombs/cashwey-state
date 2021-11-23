import React from "react";
import styled from "styled-components";
import Inform from "./Inform";
import Investment from "./Investment";
import Savings from "./Savings";
import NavPart from "./NavPart";
import Invoice from "./Invoice";
import Channel from "./Channel";
import Recommend from "./Recommend";

const MainPage = () => {
  return (
    <Container>
      <NavPart />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Investment />
            <Inform />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Savings</TitleText>
            <Savings />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <InvoiceContainer>
              <TitleText>Recent Transaction</TitleText>
              <Invoice />
            </InvoiceContainer>
            <Channel />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Recommended Investments</TitleText>
            <Recommend />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  margin: 1rem 2rem;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    height: 100%;
  }
`;
const TitleText = styled.h3`
  height: 15%;
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 42%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    height: max-content;
    width: 100%;
    flex-direction: column;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  margin-right: 50px;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;
const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainPage;
