import {
  Main3div,
  Main3div1,
  Main3div2,
  Main3div3,
  Main3div31,
  Main3div31div,
  Main3div31divspan,
  Main3div31divspan1,
  Main3div4,
  Main3div4h3,
  Main3div4h3a,
  Main4div,
  Main4div1,
  Main4div1ul,
  Main4div1ulli,
  Main4div1ullia,
  Main4div2,
  Main4div21,
  Main4div21a,
  Main4div21adiv,
  Main4div21adivimg,
  Main4div22,
  Main4div221,
  Main4div221a,
  Main4div23ul,
  Main4div23ulli,
  Main4div23ullispan,
  Main4div2time,
  Main4div2timea,
  Main4div2timeaspan,
} from "../Style/Style.js";
import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Mainscript({ data, setData }) {
  const Q_URL =
    "http://ec2-43-201-115-211.ap-northeast-2.compute.amazonaws.com:8080/v1/questions/1";
  const VOTE_URL =
    "http://ec2-43-201-115-211.ap-northeast-2.compute.amazonaws.com:8080/v1/questions/1/voteQ";
  const ALL_URL =
    "http://ec2-43-201-115-211.ap-northeast-2.compute.amazonaws.com:8080/v1/questions?page=1&size=3";

  const [Numall, Setnumall] = useState([]);

  // const Tdata = () => {
  //   axios.get(Q_URL).then((response)=>{Setmember(response.data.data)})
  // }
  // useEffect(() => {
  //   axios.get(ALL_URL).then((response) => {
  //     setData(response.data.data);
  //   });
  // }, []);

  return (
    <>
      {data.map(function (a) {
        return (
          <Main3div key={a.questionId}>
            <Main3div1>
              {console.log(data.questionId)}
              <Main3div2>
                <Main3div3>
                  <Main3div31>
                    <Main3div31div>
                      {/* <div>
                {[All].map(function(){
                  return(
                    <h1>{All.questionTitle}</h1>
                  )
                })}
                </div> */}
                      <Main3div31divspan>{a.voteQCount}</Main3div31divspan>
                      <Main3div31divspan1>votes</Main3div31divspan1>
                    </Main3div31div>
                    <Main3div31div>
                      <Main3div31divspan>0</Main3div31divspan>
                      <Main3div31divspan1>answer</Main3div31divspan1>
                    </Main3div31div>
                    <Main3div31div>
                      <Main3div31divspan>0</Main3div31divspan>
                      <Main3div31divspan1>answer</Main3div31divspan1>
                    </Main3div31div>
                  </Main3div31>
                  <Main3div4>
                    <Main3div4h3>
                      <Main3div4h3a>
                        <Link to={`/question/${a.questionId}`}>
                          {a.questionTitle}
                        </Link>
                      </Main3div4h3a>
                    </Main3div4h3>
                    <Main4div>
                      <Main4div1>
                        <Main4div1ul>
                          <Main4div1ulli>
                            <Main4div1ullia>I`m Glad</Main4div1ullia>
                          </Main4div1ulli>
                          <Main4div1ulli>
                            <Main4div1ullia>to be with</Main4div1ullia>
                          </Main4div1ulli>
                          <Main4div1ulli>
                            <Main4div1ullia>SEB-PRE-031</Main4div1ullia>
                          </Main4div1ulli>
                        </Main4div1ul>
                      </Main4div1>
                      <Main4div2>
                        <Main4div21>
                          <Main4div21a>
                            <Main4div21adiv>
                              <Main4div21adivimg src="https://www.gravatar.com/avatar/cb1a28030a6da0e72693e36c77eb3cd6?s=32&d=identicon&r=PG"></Main4div21adivimg>
                            </Main4div21adiv>
                          </Main4div21a>
                        </Main4div21>
                        <Main4div22>
                          <Main4div221>
                            <Main4div221a> Gert Arnold</Main4div221a>
                          </Main4div221>
                          <Main4div23ul>
                            <Main4div23ulli>
                              <Main4div23ullispan>104k</Main4div23ullispan>
                            </Main4div23ulli>
                          </Main4div23ul>
                        </Main4div22>
                        <Main4div2time>
                          <Main4div2timea>
                            "Modified"
                            <Main4div2timeaspan>
                              {a.createdAt}
                            </Main4div2timeaspan>
                          </Main4div2timea>
                        </Main4div2time>
                      </Main4div2>
                    </Main4div>
                  </Main3div4>
                </Main3div3>
              </Main3div2>
            </Main3div1>
          </Main3div>
        );
      })}
    </>
  );
}

export default Mainscript;
