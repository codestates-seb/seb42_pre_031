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
              path="/questions"
              element={
                <AskQuestion
                  setIsSidebar={setIsSidebar}
                  setIsFooter={setIsFooter}
                />
              }
            />
            <Route path="/mypage" element={<Mypage />} />
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
