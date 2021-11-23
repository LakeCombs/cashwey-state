import { TransactionConstants } from "../constants/TransactionConstants";
const {
  GET_TRANSACTION_REQUEST,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAILED,

  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILED,
} = TransactionConstants;

export const GetTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION_REQUEST:
      return { loading: true };
    case CREATE_TRANSACTION_SUCCESS:
      return {
        loading: false,
        transaction: action.payload,
        success: true,
      };

    case CREATE_TRANSACTION_FAILED:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const CreateTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TRANSACTION_REQUEST:
      return { loading: true };
    case GET_TRANSACTION_SUCCESS:
      return {
        loading: false,
        transaction: action.payload,
        success: true,
      };
    case GET_TRANSACTION_FAILED:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
