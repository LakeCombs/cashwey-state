import React, { useEffect } from "react";
import styled from "styled-components";
import { themeColor, hoverEffect, cardShadow } from "../utils/usable";
import Pet from "../Images/p.jpg";
import Pet1 from "../Images/p1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../redux/actions/TransactionACtion";

const Savings = () => {
  const dispatch = useDispatch();
  const getTransactions = useSelector((state) => state.getTransactions);
  const { success: createdTac } = getTransactions;
  const createTransaction = useSelector((state) => state.createTransaction);
  const { transaction } = createTransaction;

  useEffect(() => {
    dispatch(getTransaction());
  }, [createdTac, dispatch]);

  return (
    <YourProject>
      <Project>
        <Avatar>
          <img src={Pet} alt="" />
        </Avatar>
        <Detail>
          <Title>Providus Bank</Title>
          <SubTitle> {transaction?.length} transactions</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={Pet1} alt="" />
        </Avatar>
        <Detail>
          <Title>UBA</Title>
          <SubTitle> {transaction?.length} transactions</SubTitle>
        </Detail>
      </Project>
      <AllProjects>See all</AllProjects>
    </YourProject>
  );
};

const YourProject = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    height: max-content;
    margin-top: 1rem;
    width: 75%;
  }
`;
const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.div`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Savings;
