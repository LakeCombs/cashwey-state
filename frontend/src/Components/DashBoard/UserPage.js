import React from "react";
import styled from "styled-components";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";

const UserPage = () => {
  return (
    <Container>
      <Sidebar />
      <MainPage />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to-bottom, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export default UserPage;
