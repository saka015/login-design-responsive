import React from "react";
import google from "../assets/google.svg";
import login from "../assets/login.svg";
import styled from "styled-components";

const Login = () => {
  const Main = styled.div`
    display: flex;
    background-color: whitesmoke;
    border-radius: 20px;
    margin: 2rem;
    height: 90vh;
  `;

  const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: black;
  `;

  const Label = styled.p`
    font-size: 14px;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 10px;
  `;

  const Flex = styled.div`
    display: flex;
  `;

  const Small = styled.p`
    font-size: 0.7rem;
  `;

  const Light = styled.p`
    font-size: 0.8rem;
    color: gray;
    opacity: 0.8;
  `;

  const Left = styled.div`
    flex: 7;
  `;

  const Right = styled.div`
    flex: 3;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 5rem;
  `;

  const Input = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    display: inline-block;
    margin-top: 15px;
    margin-left: 2rem;
  `;
  const More = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
    margin-top: 5px;
  `;

  const Login = styled.button`
    font-weight: bold;
    background-color: black;
    color: white;
    width: 80%;
    border: none;
    border-radius: 50px;
    padding: 12px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 15px;
    margin-left: 2.5rem;
    /* margin-right: 10px; */
    margin-top: 2rem;
  `;
  const Google = styled.button`
    display: flex;
    background-color: whitesmoke;
    color: black;
    width: 80%;
    border: none;
    border-radius: 50px;
    padding: 12px;
    cursor: pointer;
    margin-bottom: 10px;
    margin-left: 2.5rem;
    /* margin-right: 10px; */
    font-weight: bold;
  `;

  const IMG = styled.img`
    margin-left: auto;
    margin-right: -45px;
  `;

  const P = styled.p`
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    text-align: center;
  `;

  const Signup = styled.div`
    font-size: 12px;
    bottom: 0;
    text-align: center;
    margin-top: 6rem;
  `;

  const Inputtag = styled.input`
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    color: gray;
    padding: 10px 5px;
    font-size: 15px;
  `;

  const Bold = styled.p`
    font-weight: 500;
  `;

  const LoginImg = styled.img`
    margin-top: 7rem;
    margin-left: 6rem;
  `;

  return (
    <Main>
      <Left>
        <LoginImg className="login-img" src={login} width="500" alt="" />
      </Left>
      <Right>
        <Title>Welcome back!</Title>
        <Label>Please enter your details</Label>

        <Input>
          <label htmlFor="email">Email</label>
          <br />
          <Inputtag type="email" />
        </Input>

        <br />
        <Input>
          <label htmlFor="password">Password</label>
          <br />
          <Inputtag type="password" />
        </Input>
        <More>
          <Light>Forgot Password?</Light>
        </More>
        <Login>Log In</Login>
        <Google>
          <IMG src={google} width="20px" alt="" />
          <P>Log in with Google</P>
        </Google>
        <Signup>
          Don't have an account? <strong> Sign Up</strong>
        </Signup>
      </Right>
    </Main>
  );
};

export default Login;
