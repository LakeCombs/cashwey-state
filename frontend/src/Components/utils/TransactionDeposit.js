import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { createTransactionAction } from "../../redux/actions/TransactionACtion";
import { CardElement } from "@stripe/react-stripe-js";

const TransactionDeposit = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [empty, setEmpty] = useState(null);

  const createTransaction = useSelector((state) => state.createTransaction);
  const { error, success, loading } = createTransaction;

  const showModal = () => {
    setIsModalVisible(true);
    setEmpty(null);
    setAmount("");
  };

  let type;

  const DepositMoney = (e) => {
    e.preventDefault();
    if (amount === "" || amount === 0) {
      setEmpty("Please enter an amount");
    } else {
      dispatch(createTransactionAction((type = "deposit"), amount));
      if (success) {
        setIsModalVisible(false);
      }

      setEmpty(null);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setAmount("");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Deposit
      </Button>
      <Modal
        title="Deposit"
        visible={isModalVisible}
        onOk={DepositMoney}
        onCancel={handleCancel}
      >
        {empty}
        {error}
        {loading && <Loading height={"50px"} width={"50px"} />}
        <input
          type="number"
          onFocus
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <CardElement />
      </Modal>
    </>
  );
};

export default TransactionDeposit;
