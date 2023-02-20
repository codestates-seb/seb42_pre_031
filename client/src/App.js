import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import styled from "styled-components";
import { Main } from './MainPage/Main'

const Dev = styled.div`
  display: flex;
  background-color: aliceblue;
`;
function App() {
  return (
    <BrowserRouter>
    <Main/>
      <div className="App">
        <Dev>
          <p>hi</p>
        </Dev>
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
