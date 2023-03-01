import {
  Content,
  Container,
  Mainbar,
  Main1div,
  Main1h1,
  Main1div1,
  Main1div1a,
  Main2div,
  Main2div1,
  Main2div2,
  Main2div21,
  Main2div21a,
  Main2div21a1,
  Main2div21a1span,
  Main2div21a2,
  Main2div21a2L,
  Mainbarbr,
  Mainbarh2,
  Mianbarh2a,
  Mainpn,
  Mainpndiv,
  Mainpndiva,
  Mainpndiva1,
  Mainpn2,
  Mainpn2a,
  Mainpn2a1,
  Mainpnspan,
} from "../Style/Style.js";

import { MainSidebar } from "../components/Sidebar.js";
import Mainscript from "../components/Mainpage.js";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterMain from "../components/FilterMain.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "orange" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 8px;
  border: 1px solid gray;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.active ? "orange" : "lightgray")};
  }
`;

function Main({ searchInput, setIsSidebar, setIsFooter }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSidebar(true);
    setIsFooter(true);
  }, []);
  // 질문목록 불러오기
  // 페이지네이션 여기 수정하면됩니다
  useEffect(() => {
    axios
      .get(
        `http://ec2-52-79-226-32.ap-northeast-2.compute.amazonaws.com:8080/v1/questions?page=${page}&size=${size}`
      )
      .then((response) => {
        setData(response.data.data);
        setData2(response.data.data);
      });
  }, [page, size]);
  // 검색한 질문목록 불러오기
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://ec2-52-79-226-32.ap-northeast-2.compute.amazonaws.com:8080/v1/questions/search?keyword=${searchInput}&page=${page}&size=${size}`
      )
      .then((response) => {
        setFilterData(response.data.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [searchInput, page, size]);
  const [tureFalse, setTureFalse] = useState(false);

  return (
    <Container>
      <Content>
        <Mainbar>
          <Main1div>
            <Main1h1>Top Question</Main1h1>
            <Main1div1>
              <Main1div1a href="/questions">Ask Question</Main1div1a>
            </Main1div1>
          </Main1div>
          <Main2div>
            <Main2div1></Main2div1>
            <Main2div2>
              <Main2div21>
                <Main2div21a onClick={() => setTureFalse(false)}>
                  Time
                </Main2div21a>
                <Main2div21a1>
                  <Main2div21a1span>281</Main2div21a1span>"Bountied"
                </Main2div21a1>
                <Main2div21a2 onClick={() => setTureFalse(true)}>
                  Hot
                </Main2div21a2>
                <Main2div21a2>Week</Main2div21a2>
                <Main2div21a2L>Month</Main2div21a2L>
              </Main2div21>
            </Main2div2>
          </Main2div>

          {searchInput === "" ? (
            <Mainscript
              data={data}
              setData={setData}
              data2={data2}
              tureFalse={tureFalse}
            />
          ) : (
            <FilterMain filterData={filterData} setFilterData={setFilterData} />
          )}
          <Mainbarbr></Mainbarbr>
          <Mainbarh2>
            "Looking for more? Browse the "
            <Mianbarh2a>complete list of questions</Mianbarh2a>
            "or"
            <Mianbarh2a>popular tags</Mianbarh2a>
            ". Help us answer"
            <Mianbarh2a>unanswered questions</Mianbarh2a>
          </Mainbarh2>
          <script></script>
        </Mainbar>

        <Mainpn>
          {[15, 30, 50].map((s) => (
            <PageButton
              key={s}
              onClick={() => {
                setSize(s);
                setPage(1);
              }}
              active={s === size}
            >
              {s}
            </PageButton>
          ))}
          <Mainpnspan>per page</Mainpnspan>
        </Mainpn>

        <Mainpn2>
          {[...Array(10)].map((_, i) => (
            <PageButton
              key={i}
              onClick={() => setPage(i + 1)}
              active={i + 1 === page}
            >
              {i + 1}
            </PageButton>
          ))}

          <a>...</a>
          <Mainpn2a1 onClick={() => setPage(1567342)}>1567342</Mainpn2a1>
          <Mainpn2a1 onClick={() => setPage(page + 1)}>Next</Mainpn2a1>
        </Mainpn2>
      </Content>
      <MainSidebar />
    </Container>
  );
}

export default Main;
