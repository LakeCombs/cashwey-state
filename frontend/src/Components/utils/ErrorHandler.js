import React from "react";
import styled from "styled-components";

const ErrorHandler = ({ children }) => {
  return <Container> {children}</Container>;
};

export default ErrorHandler;

const Container = styled.div`
  width: 100%;
  background-color: red;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-shadow: 2px light-gray;
`;
