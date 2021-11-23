import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavComponent from "../Home/NavComponent";
import { useHistory, Link } from "react-router-dom";
import mage from "../Images/cwfil.gif";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userAction";
import { themeColor, darkThemeColor } from "../utils/usable";
import ErrorHandler from "../utils/ErrorHandler";
import Loading from "../utils/Loading";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const hist = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const [errMsg, setErrMsg] = useState(error);

  useEffect(() => {
    if (userInfo) {
      hist.push("/dashboard");
    }
  }, [hist, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrMsg("Enter your email and password");
    } else {
      dispatch(login(email, password));
      hist.push("/dashboard");
    }
    console.log(errMsg);
  };

  return (
    <div>
      <NavComponent />
      <HeroSign>
        <SignAnim>
          <Signmage src={mage} />
        </SignAnim>
        <SignText>
          <MainTextHolder>
            <BigText>Sign In</BigText>
            <SubText>
              Welcome User, kindly fill in your details to go ahead
            </SubText>
            {error && <ErrorHandler>{errMsg}</ErrorHandler>}
            {loading && <Loading height={"30px"} width={"30px"} />}

            <InputField
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputField
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Taker onClick={submitHandler}>Submit</Taker>

            <AlterText>
              Don't have an account?
              <Link to="/signup">Sign Up</Link>
            </AlterText>
            <AlterText>
              <i>Forgot Password?</i>
              <Link to="/">click here</Link>
            </AlterText>
          </MainTextHolder>
        </SignText>
      </HeroSign>
    </div>
  );
};

export default SignIn;

const HeroSign = styled.div`
  width: 80%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto;
  background: ${themeColor};
  border-radius: 20px;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 80%;
    flex-direction: column-reverse;
  }
`;
const SignAnim = styled.div`
  width: 40%;
  height: 400px;
  background: ${darkThemeColor};
  display: flex;
  jusfiy-content: center;
  align-items: center;
  border-radius: 20px;
`;
const Signmage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const SignText = styled.div`
  width: 40%;
  background: none;
  display: flex;
  jusfiy-content: center;
  align-items: center;
  border-radius: 20px;
`;
const MainTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const BigText = styled.div`
  font-size: 30px;
  font-family: Poppins;
  font-weight: bold;
  color: white;
`;
const SubText = styled.div`
  font-size: 16px;
  color: white;
`;
const InputField = styled.input`
  height: 40px;
  width: 80%;
  border-radius: 5px;
  border: none;
  padding-left: 20px;
  margin-top: 10px;
  color: black;
  &:focus {
    border: none;
    outline: none;
  }
`;
const Taker = styled.button`
  width: 120px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
  background: white;
  color: black;
  font-family: Poppins;
  margin-top: 20px;
  box-shadow: 0 0 3px lightgrey;

  :hover {
    background: green;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 2px lightgrey;
  }
`;
const AlterText = styled.div`
  font-size: 15px;
  color: white;
  margin-top: 10px;
`;
