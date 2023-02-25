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

function Main({ setIsSidebar, setIsFooter, data, setData }) {
  useEffect(() => {
    setIsSidebar(true);
    setIsFooter(true);
  }, []);
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

          {/* 내용 map으로 뿌리기 전  */}
          <Mainscript data={data} setData={setData} />

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
