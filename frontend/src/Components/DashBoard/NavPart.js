import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const NavPart = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <NavBarContainer>
      <Text>
        Welcome ,<span>{userInfo.name}</span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for Investment" />
      </InputContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  margin-right: 60px;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
const Text = styled.h1`
  span {
    font-weight: 400;
    font-size: 24px;
    font-style: italic;
    color: #484258;
    margin-left: 5px;
    @media screen and (min-width: 320px) and (max-width: 1024px) {
      margin-top: 1rem;
    }
  }
`;
const InputContainer = styled.nav`
  display: flex;
`;
const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  padding-left: 1rem;
  background-color: #dce4ff;
  display: flex;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;
export default NavPart;
