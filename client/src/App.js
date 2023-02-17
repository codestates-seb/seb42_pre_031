import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Dev = styled.div`
  display: flex;
  background-color: aliceblue;
`;
function App() {
  return (
    <BrowserRouter>
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
