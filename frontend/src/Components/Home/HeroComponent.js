import React from "react";
import styled from "styled-components";
import bgpx from "../Images/cw3.png";

const HeroComponent = () => {
  return (
    // <div>
    //   <h1>Hello Universe</h1>
    //   <h2>This is CashWey Production Project</h2>
    // </div>
    <HeroBody>
      <HeroBg>
        <HeroContainer>
          <HeroContentContainer1></HeroContentContainer1>
          <HeroContentContainer2>
            <HeroImg src={bgpx} alt="" />
            <TextHero2>Welcome</TextHero2>
          </HeroContentContainer2>
        </HeroContainer>
      </HeroBg>
    </HeroBody>
  );
};

export default HeroComponent;

const HeroBody = styled.div`
  width: 100%;
  height: 80vh;
  // position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroBg = styled.div`
  // position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // padding: 20px;
`;

const HeroContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  @media Screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const HeroContentContainer1 = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
`;
const HeroContentContainer2 = styled.div`
  height: 100%;
  width: 100%;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextHero2 = styled.h1`
  // font-size: 20px;
  font-family: Popppins;
  font-weight: bold;
  color: white;
`;
const HeroImg = styled.img`
  width: 75%;
  height: 75%;
  object-fit: contain;
`;
