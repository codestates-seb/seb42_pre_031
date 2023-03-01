import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/LeftSidebar";
import Main from "./pages/Main";
import Login from "./pages/Login";

import SignUp from "./pages/SignUp";
import HeaderLogout from "./components/HeaderLogout";
import { useEffect, useState } from "react";
import AskQuestion from "./pages/AskQuestion";
import Mypage from "./pages/MyPage";
import LogOut from "./pages/LogOut";
import MainpageD from "./pages/MainpageD";
import ProfileEdit from "./pages/ProfileEdit";
import AnswerEdit from "./pages/AnswerEdit";
import EditQuestion from "./pages/EditQuestion";
import axios from "axios";
import { useParams } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const Dev = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: none;
  /* max-width: 1264px; */
  padding-top: 50px;
  /* position: relative; */
  justify-content: center;
`;

const SideToggle = styled.div``;
const FootToggle = styled.div``;
function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isFooter, setIsFooter] = useState(true);
  // 로그인 상태에 헤더변경 // 마이페이지 접근 가능 여부
  const [isLogin, setIsLogin] = useState(false);

  // 검색 기능 인풋창
  const [searchInput, setSearchInput] = useState("");

  // 유저 정보 받아오기
  // FIXME: 아이디 부분 로그인 상태의 아이디로 수정해야댐
  // 현재 로그인 중인 사용자 아이디
  const token = localStorage.getItem("access_token");
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ec2-52-79-226-32.ap-northeast-2.compute.amazonaws.com:8080/v1/members/1",
        { headers: { Authorization: token } }
      )
      .then((response) => {
        setUserInfo(response.data.data);
        console.log(response);
      });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {token ? (
          <Header setSearchInput={setSearchInput} userInfo={userInfo} />
        ) : (
          <HeaderLogout setSearchInput={setSearchInput} />
        )}
        <Dev className="ddd">
          <SideToggle style={{ display: isSidebar ? "block" : "none" }}>
            <Sidebar userInfo={userInfo} />
          </SideToggle>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  searchInput={searchInput}
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />

            <Route
              path="/login"
              element={
                <Login
                  setIsLogin={setIsLogin}
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <SignUp setIsSidebar={setIsSidebar} setIsFooter={setIsFooter} />
              }
            />
            <Route
              path="/logout"
              element={
                <LogOut setIsSidebar={setIsSidebar} setIsFooter={setIsFooter} />
              }
            />
            <Route
              path="/questions"
              element={
                <AskQuestion
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
            <Route
              path="/editquestion/:id"
              element={
                <EditQuestion
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
            <Route
              path="/users/:id"
              element={
                <Mypage setIsSidebar={setIsSidebar} setIsFooter={setIsFooter} />
              }
            />
            <Route
              // {`/question/${a.questionId}`}
              path="/question/:id"
              element={
                <MainpageD
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
            <Route
              path="/editmypage/:id"
              element={
                <ProfileEdit
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
            <Route
              path="/editanswer/:id"
              element={
                <AnswerEdit
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
            <Route
              path="/error"
              element={
                <ErrorPage
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
          </Routes>
        </Dev>
        <FootToggle style={{ display: isFooter ? "block" : "none" }}>
          <Footer />
        </FootToggle>
      </div>
    </BrowserRouter>
  );
}

export default App;
