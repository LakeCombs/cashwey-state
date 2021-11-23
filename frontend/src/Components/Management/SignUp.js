import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavComponent from "../Home/NavComponent";
import mage from "../Images/fly.gif";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import ErrorHandler from "../utils/ErrorHandler";
import Loading from "../utils/Loading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const hist = useHistory();
  const dispatch = useDispatch();

  const userRegistration = useSelector((state) => state.userRegistration);
  const { loading, userInfo, error } = userRegistration;

  useEffect(() => {
    if (userInfo) {
      hist.push("dashboard");
    }
  }, [hist, userInfo]);

  const Register = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
  };

  return (
    <div>
      <NavComponent />
      <HeroSign>
        <SignText>
          <MainTextHolder>
            <BigText>Sign Up</BigText>
            <SubText>Welcome, Let us be your guide to greater height</SubText>
            {error && <ErrorHandler>{error} </ErrorHandler>}
            {loading && <Loading height={"30px"} width={"30px"} />}
            {message && <ErrorHandler>{message} </ErrorHandler>}
            <form onSubmit={Register}>
              {" "}
              <InputField
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <InputField
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputField
                type="password"
                placeholder="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </form>
            <Taker onClick={Register}>Submit</Taker>
            <AlterText>
              <i> Already have an account ?</i> <Link to="/login">Sign In</Link>
            </AlterText>
            <AlterText>
              We are always{" "}
              <Link to="/">
                <i>here</i>
              </Link>{" "}
              to guide
            </AlterText>
          </MainTextHolder>
        </SignText>
        <SignAnim>
          <Signmage src={mage} />
        </SignAnim>
      </HeroSign>
    </div>
  );
};

export default SignUp;

const HeroSign = styled.div`
  width: 80%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto;
  background: darkgreen;
  border-radius: 20px;
`;
const SignAnim = styled.div`
  width: 40%;
  height: 400px;
  background: white;
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
