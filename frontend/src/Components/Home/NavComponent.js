import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const NavComponent = ({ toggle }) => {
  return (
    // <div>
    //   <h1>Hello Teenagers</h1>
    // </div>
    // <Holder>
    //   <Logo />
    //   <NavList>
    //     <Label>About Us</Label>
    //     <Label>Our Community</Label>
    //     <Label>Plans</Label>
    //     <Label>Updates</Label>
    //   </NavList>
    //   <MenuIcon />
    //   <LogButton>Welcome In</LogButton>
    // </Holder>
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">CashWey</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLInks to="/about">About Us</NavLInks>
          </NavItem>
          <NavItem>
            <NavLInks to="/dicover">Discover</NavLInks>
          </NavItem>
          <NavItem>
            <NavLInks to="/services">Plans</NavLInks>
          </NavItem>
          <NavItem>
            <NavLInks to="/signup">Opportunities</NavLInks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Welcome In</NavBtnLink>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
};

export default NavComponent;

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 0 0 1px lightgrey;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1180px;
`;

const NavLogo = styled(LinkR)`
  color: darkgreen;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: poiner;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: none;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLInks = styled(LinkS)`
  color: lightgreen;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  transition: all ease-out 300ms;

  :hover {
    color: green;
    transform: scale(1.05);
  }
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 200ms;
  text-decoration: none;

  &:hover {
    transition: all ease-out 300ms;
    background: #fff;
    color: #010606;
    font-weight: bold;
    box-shadow: 1px 2px green;
  }
`;

// const Holder = styled.div`
//   width: 100%;
//   height: 13vh;
//   // background-color: green;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   box-shadow: 0 0 0 2px lightgreen;
//   position: sticky;
//   top: 0;

//   @media Screen and (max-width: 768px) {
//     diplay: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
// `;

// const NavList = styled.div`
//   width: auto;
//   display: flex;
//   justify- content: space-evenly;
// `;
// const Label = styled.div`
//   font-family: Poppins;
//   font-weight: bold;
//   margin-left: 15px;
//   transition: all ease-out 300ms;
//   :hover {
//     color: green;
//     transform: scale(1.01);
//   }
//   @media Screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// const MenuIcon = styled.div`
//   @media Screen and (min-width: 1024px) {
//     display: none;
//   }
//   @media Screen and (max-width: 768px) {
//     margin: 0 20px;
//     width: 50px;
//     height: 50px;
//     border-radius: 5px;
//     object-fit: contain;
//     background-color: darkgreen;
//   }
// `;
// const LogButton = styled.div`
//   width: 120px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   box-shadow: 0 0 2px green;
//   font-weight: bold;
//   font-family: Poppins;
//   border-radius: 10px;
//   transition: all ease-out 300ms;
//   :hover {
//     background-color: darkgreen;
//     color: white;
//     border-radius: 20px;
//     box-shadow: none;
//     transform: scale(1.06);
//   }
//   @media Screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// const Logo = styled.div`
//   margin: 0 20px;
//   width: 100px;
//   height: 50px;
//   border-radius: 5px;
//   object-fit: contain;
//   background-color: darkgreen;

//   @media Screen and (max-width: 768px) {
//     margin: 0 20px;
//     width: 80px;
//     height: 40px;
//     border-radius: 5px;
//     object-fit: contain;
//     background-color: darkgreen;
//   }
// `;
