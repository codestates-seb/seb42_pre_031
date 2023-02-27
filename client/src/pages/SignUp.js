import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = styled.div`
  display: flex;

  height: 900px;
  justify-content: center;
  flex-direction: row;
`;
const Explanation = styled.div`
  width: 400px;
`;

const Block = styled.div`
  display: flex;
  margin-top: 300px;
  flex-direction: column;
`;
const ExTitle = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
`;
const ExDetail = styled.span`
  font-size: 0.8rem;
  margin-top: 20px;
`;

const SocialSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 350px;
  height: 20%;
  margin-top: 100px;
  font-size: 0.7rem;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 450px;
  background-color: white;
  border-radius: 5%;
  box-shadow: -1px 1px 10px 2px #dcdcdc;
  font-size: 0.7rem;
  font-weight: 300;
  .signup-error-alert {
    display: flex;
    margin-left: 40px;
    color: red;
  }
`;

const SocialButton = styled.button`
  width: 100%;
  margin: 0.5em;
  height: 40px;
  border-radius: 7px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontcolor};
  font-size: 1em;
  border-color: #dcdcdc;
`;
const Button = styled.button`
  background-color: #2d7fff;
  border: none;
  width: 80%;
  height: 40px;
  margin-left: 35px;
  border-radius: 4px;
  text-align: c enter;
  color: white;
  font-size: 1.2em;
  font-weight: 300;
  cursor: pointer;
`;
const Input = styled.input`
  margin-left: 35px;
  width: 70%;
  height: 5%;
  padding: 8px 32px 8px 9px;
  border: 1px solid #babfc4;
  font-size: 16px;
  line-height: 300;
  border-radius: 4px;
`;

const Div = styled.div`
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 5px;
  margin-left: 35px;
`;
const Span = styled.div`
  margin: 10px 0 10px 35px;
  width: 80%;
  font-size: 14px;
  color: #6a737c;
`;
function SignUp({ setIsSidebar, setIsFooter }) {
  const [nickName, setNickName] = useState("");
  const [confirmNickName, setConfirmNickName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setIsSidebar(false);
    setIsFooter(false);
  }, []);

  // 유효성검사코드
  //TODO:  전부 작성하고 요청보낼때 코드 추가하기
  const signUpSubmit = async (e) => {
    e.preventDefault();
    if (nickName === "") {
      setConfirmNickName("Display name cannot be empty.");
    } else {
      setConfirmNickName("");
    }
    if (email === "") {
      setConfirmEmail("Email cannot be empty.");
    } else {
      setConfirmEmail("");
    }
    if (password === "") {
      setConfirmPassword("Password cannot be empty.");
    } else {
      setConfirmPassword("");
    }

    await signUp(email, password);
  };

  const navigate = useNavigate();
  // 회원가입 요청 axios
  const signUp = async (email, password) => {
    try {
      const response = await axios.post(
        "http://ec2-13-125-254-178.ap-northeast-2.compute.amazonaws.com:8080/v1/members",
        {
          memberName: "mem",
          memberEmail: email,
          memberPW: password,
          nickName: nickName,
          aboutMe: "aasdasdasdasdasda",
        }
      );

      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <Main>
      <Explanation>
        <Block>
          <ExTitle>Join the Stack Overflow community</ExTitle>
          <ExDetail>Get unstuck - ask a question</ExDetail>
          <ExDetail>Unlock new privileges like voting and commenting</ExDetail>
          <ExDetail>Save your favorite tags, filters, and jobs</ExDetail>
          <ExDetail>Earn reputation and badges</ExDetail>
        </Block>
      </Explanation>

      <Explanation>
        <SocialSignupContainer>
          <SocialButton color="white">Sign up with Google</SocialButton>
          <SocialButton color="#23262A" fontcolor="white">
            Sign up with GitHub
          </SocialButton>
          <SocialButton color="#293D83" fontcolor="white">
            Sign up with Facebook
          </SocialButton>
        </SocialSignupContainer>
        <SignupContainer>
          <form onSubmit={signUpSubmit}>
            <Div>Display name</Div>
            <Input
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            ></Input>
            <div className="signup-error-alert">{confirmNickName}</div>
            <Div>Email</Div>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <div className="signup-error-alert">{confirmEmail}</div>
            <Div>Password</Div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <div className="signup-error-alert">{confirmPassword}</div>
            <Span>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </Span>
            <Button type="submit">Sign up</Button>
          </form>
        </SignupContainer>
      </Explanation>
    </Main>
  );
}

export default SignUp;
