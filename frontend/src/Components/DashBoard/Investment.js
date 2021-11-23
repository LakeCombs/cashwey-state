import React, { useEffect } from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { cardShadow, themeColor } from "../utils/usable";
import { hoverEffect } from "../utils/usable";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../redux/actions/TransactionACtion";

const Investment = () => {
  const dispatch = useDispatch();
  const createTransaction = useSelector((state) => state.createTransaction);
  const { loading, transaction, error, success } = createTransaction;
  const getTransaction = useSelector((state) => state.getTransaction);
  console.log(getTransaction);

  console.log(transaction);
  const withdrawTransaction = [];
  const depositTransaction = [];

  for (let i = 0; i < (transaction && transaction.length); i++) {
    const element = transaction[i];
    if (transaction[i].type === "withdraw") {
      withdrawTransaction.push(transaction[i].amount);
    } else if (transaction[i].type === "deposit") {
      depositTransaction.push(transaction[i].amount);
    }
  }

  console.log(withdrawTransaction);
  console.log(depositTransaction);

  let TotalDeposit = 0;
  let TotalWithdraw = 0;

  for (let deposit = 0; deposit < depositTransaction.length; deposit++) {
    TotalDeposit += depositTransaction[deposit];
  }

  for (let withdraw = 0; withdraw < withdrawTransaction.length; withdraw++) {
    TotalWithdraw += withdrawTransaction[withdraw];
  }

  console.log(TotalDeposit);
  console.log(TotalWithdraw);

  let balance;
  if (TotalDeposit > TotalWithdraw) {
    balance = TotalDeposit - TotalWithdraw;
  } else if (TotalDeposit === TotalWithdraw) {
    balance = 0;
  } else {
    balance = "Sorry, you don't have any balance ";
  }

  useEffect(() => {}, [success]);
  return (
    <InvestCard>
      <CardContent>
        {" "}
        <Chart>
          <IoStatsChart />
        </Chart>
        <InvestText>Balance</InvestText>
        <Invested>${balance}</Invested>
        <InvestTrack>+25% since last month</InvestTrack>
      </CardContent>
    </InvestCard>
  );
};
const InvestCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  transition: 400ms ease-in-out;
  color: white;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 80%;
  }
`;
const CardContent = styled.div`
  margin: 1rem;
`;
const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;
const InvestText = styled.h3`
  text-align: center;
  font-weight: bold;
  padding: 0.4rem 0;
  color: white;
`;
const Invested = styled.h2`
  text-align: center;
  color: white;
`;
const InvestTrack = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  color: white;
`;
export default Investment;
