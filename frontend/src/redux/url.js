import axios from "axios";

export const urlInstance = axios.create({
  baseURL: "http://localhost/api/auth",
  headers: { "Content-type": "application/json" },
});

export const urlTransactionInstance = axios.create({
  baseURL: "http://localhost/api/transaction",
});
