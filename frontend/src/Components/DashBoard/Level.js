import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils/usable";

const Level = ({
  content,
  clean = false,
  glow = false,
  save = false,
  withdraw = false,
}) => {
  return (
    <Div glow={glow} save={save} withdraw={withdraw} clean={clean}>
      {content}
    </Div>
  );
};
const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background: ${themeColor};
  cursor: pointer;

  ${({ clean }) =>
    clean &&
    `
   color: ${themeColor};
   border: 0.05rem solid ${themeColor};
  background-color : transparent;
  `}
  ${({ glow }) =>
    glow &&
    `
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  font-weight: normal;
   color: #2f233d;
  background-color: rgba(109, 134, 245, 0.192);
  `}

  ${({ save }) =>
    save &&
    `
  background-color: #70e00041;
  color: #70e000;
  // cursor: default;
  `}
  ${({ withdraw }) =>
    withdraw &&
    `
  background-color: #ff595e41;
  color: #ff595e;
  // cursor: default;
  `}
`;
export default Level;
