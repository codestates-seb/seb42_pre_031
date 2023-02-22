import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/LeftSidebar";
import Main from "./pages/Main";
import Login from "./pages/Login";
import TagPage from "./pages/TagPage";
import SignUp from "./pages/SignUp";
import HeaderLogout from "./components/HeaderLogout";
import { useEffect, useState } from "react";
import AskQuestion from "./pages/AskQuestion";
import Mypage from "./pages/Mypage";
import LogOut from "./pages/LogOut";
import MainpageD from "./pages/MainpageD";

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

  return (
    <BrowserRouter>
      <div className="App">
        {isLogin === true ? <Header /> : <HeaderLogout />}
        <Dev className="ddd">
          <SideToggle style={{ display: isSidebar ? "block" : "none" }}>
            <Sidebar />
          </SideToggle>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main setIsSidebar={setIsSidebar} setIsFooter={setIsFooter} />
              }
            />
            <Route path="/tag" element={<TagPage />} />
            <Route
              path="/login"
              element={
                <Login setIsSidebar={setIsSidebar} setIsFooter={setIsFooter} />
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
              path="/users"
              element={
                <Mypage setIsSidebar={setIsSidebar} setIsFooter={setIsFooter} />
              }
            />
            <Route path="/question" element={<MainpageD />} />
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
