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

function Main({ searchInput, setIsSidebar, setIsFooter }) {
  useEffect(() => {
    setIsSidebar(true);
    setIsFooter(true);
  }, []);
  // 질문목록 불러오기
  // 페이지네이션 여기 수정하면됩니다
  const ALL_URL =
    "http://ec2-13-125-254-178.ap-northeast-2.compute.amazonaws.com:8080/v1/questions?page=1&size=15";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(ALL_URL).then((response) => {
      setData(response.data.data);
    });
  }, []);
  // 검색한 질문목록 불러오기
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://ec2-13-125-254-178.ap-northeast-2.compute.amazonaws.com:8080/v1/questions/search?keyword=${searchInput}&page=1&size=15`
      )
      .then((response) => {
        setFilterData(response.data.data);
        console.log(response);
      });
  }, [searchInput]);

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
                <Main2div21a>Interesting</Main2div21a>
                <Main2div21a1>
                  <Main2div21a1span>281</Main2div21a1span>"Bountied"
                </Main2div21a1>
                <Main2div21a2>Hot</Main2div21a2>
                <Main2div21a2>Week</Main2div21a2>
                <Main2div21a2L>Month</Main2div21a2L>
              </Main2div21>
            </Main2div2>
          </Main2div>
          {searchInput === "" ? (
            <Mainscript data={data} setData={setData} />
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
          <Mainpndiva>15</Mainpndiva>
          <Mainpndiva1>30</Mainpndiva1>
          <Mainpndiva1>50</Mainpndiva1>
          <Mainpnspan>per page</Mainpnspan>
        </Mainpn>
        <Mainpn2>
          <Mainpn2a>1</Mainpn2a>
          <Mainpn2a1>2</Mainpn2a1>
          <Mainpn2a1>3</Mainpn2a1>
          <Mainpn2a1>4</Mainpn2a1>
          <Mainpn2a1>5</Mainpn2a1>
          <a>...</a>
          <Mainpn2a1>1567342</Mainpn2a1>
          <Mainpn2a1> Next</Mainpn2a1>
        </Mainpn2>
      </Content>
      <MainSidebar />
    </Container>
  );
}

export default Main;
