import React, { useState } from "react";
import { Modal, Button } from "antd";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { createTransactionAction } from "../../redux/actions/TransactionACtion";

const TransactionWithdraw = () => {
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

  const WithdrawMoney = (e) => {
    e.preventDefault();
    if (amount === "" || amount === 0) {
      setEmpty("Please enter an amount");
    } else {
      dispatch(createTransactionAction((type = "withdraw"), amount));
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
        Withdraw
      </Button>
      <Modal
        title="Withdraw"
        visible={isModalVisible}
        onOk={WithdrawMoney}
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
      </Modal>
    </>
  );
};

export default TransactionWithdraw;
