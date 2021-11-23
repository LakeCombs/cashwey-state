import React, { useEffect } from "react";
import styled from "styled-components";
import Level from "./Level";
import AvatarImage from "../Images/pet.jpg";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { themeColor, darkThemeColor } from "../utils/usable";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const hist = useHistory();
  const Logout = () => {
    dispatch(logout());
    useEffect(() => {
      if (!userInfo) {
        hist.push("/");
      }
    }, [userInfo]);
  };

  const { userInfo } = userLogin;

  return (
    <Container>
      <ProfileContainer>
        <Avatar src={userInfo.pic} alt="" />
        <Name>{userInfo.name}</Name>
        <Level content="Investment Mogul" />
      </ProfileContainer>
      <LinkContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Projects</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Invoices</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact Us</a>
        </ContactContainer>
        <LogOut onClick={Logout}>O</LogOut>
      </LinkContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 1.5rem;
  background-color: ${themeColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
    height: max-content !important;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Avatar = styled.img`
  height: 7rem;
  width: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;
const Name = styled.h1`
  color: white;
  font: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;
const LinkContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`;
const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;
const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
    color: white;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;
const ContactContainer = styled.div`
  width: 60%;
  background-color: rgba(0, 0, 0, 0.2);
  color: #c4c4c4;
  height: auto;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 18%;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    margin: 2rem;
  }
`;

const LogOut = styled.button`
  justify-self: center;
  align-self: center;
  height: 40px;
  width: 40px;
  padding: 5, 0, 5, 0;
  border-radius: 100%;
`;

export default Sidebar;
