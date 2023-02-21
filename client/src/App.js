import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import MainP from "./pages/MainP";
import TagPage from "./pages/TagPage";
import MyPage from "./pages/MyPage";
import HeaderLogout from "./components/HeaderLogout";
import { useEffect, useState } from "react";
import AskQuestion from "./pages/AskQuestion";

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
// 이게 컨텐츠 가운데
//푸터는 밖에

const SideToggle = styled.div``;
function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  // 그러면 감싸는거 없어서 오류날텐데
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderLogout />
        <Dev className="ddd">
          <SideToggle style={{ display: isSidebar ? "block" : "none" }}>
            <Sidebar />
          </SideToggle>
          <Routes>
            <Route
              exact
              path="/"
              element={<MainP setIsSidebar={setIsSidebar} />}
            />
            <Route path="/tag" element={<TagPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route
              path="/question"
              element={<AskQuestion setIsSidebar={setIsSidebar} />}
            />
          </Routes>
        </Dev>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
