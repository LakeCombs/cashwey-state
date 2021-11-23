import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  UserLoginReducer,
  UserRegistrationReducer,
  UserUpdateReducer,
} from "./redux/reducers/authReducer";
import {
  GetTransactionReducer,
  CreateTransactionReducer,
} from "./redux/reducers/TransactionReducer";

const allReducers = combineReducers({
  userLogin: UserLoginReducer,
  userRegistration: UserRegistrationReducer,
  userUpdate: UserUpdateReducer,
  getTransactions: GetTransactionReducer,
  createTransaction: CreateTransactionReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk, logger];
const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
