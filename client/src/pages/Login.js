import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 800px;
  box-sizing: border-box;
`;

const Content = styled.div`
  min-width: 300px;
  width: 15%;
  margin: 0 auto;
  padding-top: 5%;
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

const InputForm = styled.div`
  background-color: white;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 5px;
  width: 100%;
  padding: 20px;
`;

const InputLable = styled.div`
  padding: 5px;
  p {
    font-weight: bold;
    font-size: 1rem;
    padding: 10px 0;
  }
  input {
    width: 100%;
    padding: 10px 0;
    &:focus {
      box-shadow: 0 0 5px 5px rgba(28, 107, 138, 0.3);
    }
  }
  span {
    color: #999;
    font-size: 12px;
    margin-top: 10px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    a {
      margin-top: 10px;
      color: #0074cc;
      text-decoration: none;
      font-size: 12px;
    }
  }
`;

const LoginButton = styled.button`
  background-color: #0a95ff;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 10px 0;
  color: white;
  cursor: pointer;
`;

const SignupGuide = styled.div`
  text-align: center;
  font-size: 12px;
  margin: 40px 0;
  p {
    margin: 20px 0;
  }
  a {
    color: #0074cc;
    text-decoration: none;
  }
`;

function Login({ setIsSidebar, setIsFooter }) {
  useEffect(() => {
    setIsSidebar(false);
    setIsFooter(false);
  }, []);

  // const emailRegex =
  //   /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  // async function getLogin() {
  //   if (!emailRegex.test(account.email)) {
  //     Alert('error', 'The email is not a valid email address.');
  //   } else if (account.password.length < 4) {
  //     Alert('error', 'Please enter at least 4 characters for the password.');
  //   } else {

  //
  //
  //     }
  //   }
  // }

  return (
    <Container>
      <Content>
        <SocialSignupContainer>
          <SocialButton color="white">Log in with Google</SocialButton>
          <SocialButton color="#23262A" fontcolor="white">
            Log in with GitHub
          </SocialButton>
          <SocialButton color="#293D83" fontcolor="white">
            Log in with Facebook
          </SocialButton>
        </SocialSignupContainer>
        <InputForm>
          <InputLable>
            <p>Email</p>
            <input name="password" type="text" />
          </InputLable>
          <InputLable>
            <div>
              <p>Password</p>
              <a href="/signup">Forgot password?</a>
            </div>
            <input name="password" type="password" />
          </InputLable>
          <LoginButton>Log in</LoginButton>
        </InputForm>
        <SignupGuide>
          <p>
            Don’t have an account?<a href="/"> Sign up</a>
          </p>
          <p>
            Are you an employer?<a href="/"> Sign up on Talen</a>
          </p>
        </SignupGuide>
      </Content>
    </Container>
  );
}

export default Login;
