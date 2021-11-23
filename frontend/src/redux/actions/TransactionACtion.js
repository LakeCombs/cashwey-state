import axios from "axios";

import { TransactionConstants } from "../constants/TransactionConstants";
const {
  GET_TRANSACTION_REQUEST,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAILED,

  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILED,
} = TransactionConstants;

export const getTransaction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TRANSACTION_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/transaction/", config);
    dispatch({
      type: GET_TRANSACTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSACTION_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTransactionAction =
  (type, amount) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_TRANSACTION_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/transaction",
        { type, amount },
        config
      );

      dispatch({
        type: CREATE_TRANSACTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_TRANSACTION_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
