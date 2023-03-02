import { Link, useNavigate } from "react-router-dom";
import {
  Mainpage,
  Mainpage1,
  Mainpage1link,
  Mainpage1div,
  Mainpage1div1,
  Mainpage1divh1,
  Mainpage1diva,
  Mainpage1div2,
  MainpageDiv1div21,
  Mainpage1div22,
  Mainpage1div23,
  MainpageMain,
  MainpageMain1,
  MainpageMain11,
  MainpageMain111,
  MainpageMain112,
  MainpageMain2,
  MainpageMain21,
  MainpageMain211,
  MainpageMain211btn,
  MainpageMain211sgv,
  MainpageMain211svgP,
  MainpageMain212,
  MainpageMain211btn1,
  MainpageMain211path1,
  MainpageMain211path11,
  MainpageMain211sgv11,
  MainpageMain211a,
  MainpageMain211svg,
  MainpageMain211p,
  MainpageMain22,
  MainpageMain221,
  MainpageMain221p,
  MainpageMain223,
  MainpageMain2231,
  MainpageMain2232,
  MainpageMain2232ul,
  MainpageMain2232li,
  MainpageMain2232lia,
  MainpageMain224,
  MainpageMain2241,
  MainpageMain22411,
  MainpageMain22412,
  MainpageMain22413,
  MainpageMain224131,
  MainpageMain224131a,
  MainpageMain23,
  MainpageMain231,
  MainpageMain2311,
  MainpageMain2311span,
  MainpageMain2312,
  MainpageMain2312a,
  MainpageMain2312adiv,
  MainpageMain2312div,
  MainpageMain2312diva,
  MainpageMain2312div1,
  MainpageMain2312divsp,
  MainpageMain2312divsp1,
  MainpageMain2312divsp11,
  MainpageMain2312divsp12,
  MainpageMain2312divsp13,
  MainpageMain232,
  MainpageMain2321,
  MainpageMain2321a,
  MainpageMainf,
  MainpageMainf1,
  MainpageMainf11,
  MainpageMainf11h2,
  MainpageMainf11a,
  MainpageMainf11from,
  MainpageMainf11fh2,
  MainpageMainf11fdiv,
  MainpageMainf11fbtn,
  MainpageMainf11fh21,
  MainpageMainf11fh21d,
  MainpageMainf11fh21dul,
  MainpageMainf11fh21dula,
  Mainpagecode,
  Mainpagepre,
  Mainpagespan,
} from "./../Style/MainpageD.js";
import { Main1div1, Main1div1a, MainpageMainbtn } from "./../Style/Style.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";

function MainpageD() {
  const VOTEPLUS_URL = `${process.env.REACT_APP_SERVER}/v1/questions/`;
  const VOTEMINUS_URL = `${process.env.REACT_APP_SERVER}/v1/questions/`;
  const ANSWERVOTEPLUS_URL = `${process.env.REACT_APP_SERVER}/v1/answers/`;
  const ANSWERVOTEMINUS_URL = `${process.env.REACT_APP_SERVER}/v1/answers/`;

  function answerVotePlus(answerId) {
    axios.patch(
      ANSWERVOTEPLUS_URL + answerId + "/votePlus",
      {},
      { headers: { Authorization: token } }
    );
  }
  function answerVoteMinus(answerId) {
    axios.patch(
      ANSWERVOTEMINUS_URL + answerId + "/voteMinus",
      {},
      { headers: { Authorization: token } }
    );
  }
  function votePlus(e) {
    axios.patch(
      VOTEPLUS_URL + id + "/votePlus",
      {},
      { headers: { Authorization: token } }
    );
  }
  function voteMinus(e) {
    axios.patch(
      VOTEMINUS_URL + id + "/voteMinus",
      {},
      { headers: { Authorization: token } }
    );
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("access_token");
  const membertoken = localStorage.getItem("member_token");

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/v1/questions/${id}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [data]);

  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/v1/questions/${id}/answers`)
      .then((response) => {
        setAnswers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [answers]);

  const [newAnswer, setNewAnswer] = useState("");
  const answerHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER}/v1/questions/${id}/answers/`,
        {
          memberId: membertoken,
          contents: newAnswer,
        },
        { headers: { Authorization: token } }
      );
      alert("답변등록완료");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  // 글삭제 기능 // 글을 지우는걸 먼저 확인하고 권한이 있는지 없는지 확인
  const questionDelete = async (select) => {
    if (Number(data.memberId) === Number(membertoken)) {
      if (window.confirm("삭제하시겠습니까?")) {
        try {
          await axios.delete(
            `${process.env.REACT_APP_SERVER}/v1/questions/${id}`,
            { headers: { Authorization: token } }
          );
          alert("질문삭제완료");
          navigate("/");
        } catch (error) {
          console.log(error);
          navigate("/error");
        }
      }
    } else {
      alert("권한이 없습니다.");
    }
  };
  // select 는 답변id 번호
  // 클릭했을떄 memberId 를 받아와야한다.
  // 해당 답변의 멤버아이디호출
  const answerDelete = async (select) => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_SERVER}/v1/answers/${select}`,
          { headers: { Authorization: token } }
        );
        alert("답변삭제완료");
      } catch (error) {
        console.log(error);
        navigate("/error");
      }
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "custom-color",
            ],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
  };
  return (
    <Mainpage>
      <Mainpage1>
        <Mainpage1link></Mainpage1link>
        <Mainpage1div>
          <Mainpage1div1>
            <Mainpage1divh1>
              <Mainpage1diva>{data.questionTitle}</Mainpage1diva>
            </Mainpage1divh1>
            <Main1div1>
              <Main1div1a href="/questions"> Ask Question</Main1div1a>
            </Main1div1>
          </Mainpage1div1>
          <Mainpage1div2>
            <MainpageDiv1div21>
              <span>Asked</span>
              <time>{data.createdAt}</time>
            </MainpageDiv1div21>
            <Mainpage1div22>
              <span>Modified</span>
              <a>today</a>
            </Mainpage1div22>
            <Mainpage1div23>
              <span>Viewed</span>3 times
            </Mainpage1div23>
          </Mainpage1div2>
          <MainpageMain>
            <MainpageMain1>
              <MainpageMain11>
                <MainpageMain111>
                  <MainpageMain112></MainpageMain112>
                </MainpageMain111>
              </MainpageMain11>
              <MainpageMain2>
                <MainpageMain21>
                  <MainpageMain211>
                    <MainpageMain211btn>
                      <MainpageMain211sgv>
                        <MainpageMain211svgP
                          onClick={votePlus}
                          d="M2 25h32L18 9 2 25Z"
                        ></MainpageMain211svgP>
                      </MainpageMain211sgv>
                    </MainpageMain211btn>

                    <MainpageMain212>{data.voteQCount}</MainpageMain212>
                    <MainpageMain211btn>
                      <MainpageMain211sgv>
                        <MainpageMain211svgP
                          onClick={voteMinus}
                          d="M2 11h32L18 27 2 11Z"
                        ></MainpageMain211svgP>
                      </MainpageMain211sgv>
                    </MainpageMain211btn>

                    <MainpageMain211a>
                      <MainpageMain211svg>
                        <MainpageMain211p d="M3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></MainpageMain211p>
                      </MainpageMain211svg>
                    </MainpageMain211a>

                    <MainpageMain211a>
                      <MainpageMain211svg>
                        <MainpageMain211p d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"></MainpageMain211p>
                      </MainpageMain211svg>
                    </MainpageMain211a>
                  </MainpageMain211>
                </MainpageMain21>
                <MainpageMain22>
                  <MainpageMain221>
                    <form>
                    <MainpageMain221p
                      dangerouslySetInnerHTML={{
                        __html: data.questionContents,
                      }}
                    ></MainpageMain221p>
                    </form>
                  </MainpageMain221>
                  <MainpageMain223>
                    <MainpageMain2231>
                      <MainpageMain2232>
                        <MainpageMain2232ul>
                          <MainpageMain2232li>
                            <MainpageMain2232lia>
                              apache-spark
                            </MainpageMain2232lia>
                          </MainpageMain2232li>
                          <MainpageMain2232li>
                            <MainpageMain2232lia>pyspark</MainpageMain2232lia>
                          </MainpageMain2232li>
                        </MainpageMain2232ul>
                      </MainpageMain2232>
                    </MainpageMain2231>
                  </MainpageMain223>

                  <MainpageMain224>
                    <MainpageMain2241>
                      <MainpageMain22411>
                        <MainpageMain22412>
                          <MainpageMain22413>
                            <MainpageMain224131>
                              <MainpageMain224131a>Share</MainpageMain224131a>
                            </MainpageMain224131>
                            <MainpageMain224131>
                              <MainpageMain224131a href={`/editquestion/${id}`}>
                                Edit
                              </MainpageMain224131a>
                            </MainpageMain224131>
                            <MainpageMain224131>
                              <MainpageMain224131a>Follow</MainpageMain224131a>
                            </MainpageMain224131>
                            <MainpageMain224131>
                              <MainpageMainbtn onClick={questionDelete}>
                                delete
                              </MainpageMainbtn>
                            </MainpageMain224131>
                          </MainpageMain22413>
                        </MainpageMain22412>
                      </MainpageMain22411>

                      <MainpageMain23>
                        <MainpageMain231>
                          <MainpageMain2311>
                            asked
                            <MainpageMain2311span>
                              44 secs ago
                            </MainpageMain2311span>
                          </MainpageMain2311>
                          <MainpageMain2312>
                            <MainpageMain2312a>
                              <MainpageMain2312adiv>
                                <div>IMG</div>
                              </MainpageMain2312adiv>
                            </MainpageMain2312a>
                          </MainpageMain2312>
                          <MainpageMain2312div>
                            <MainpageMain2312diva>
                              yukarishere
                            </MainpageMain2312diva>
                            <MainpageMain2312divsp></MainpageMain2312divsp>
                            <MainpageMain2312div1>
                              <MainpageMain2312divsp>
                                1903
                              </MainpageMain2312divsp>
                              <MainpageMain2312divsp1>
                                <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                <MainpageMain2312divsp12>
                                  4
                                </MainpageMain2312divsp12>
                              </MainpageMain2312divsp1>
                              <MainpageMain2312divsp1>
                                <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                <MainpageMain2312divsp12>
                                  8
                                </MainpageMain2312divsp12>
                              </MainpageMain2312divsp1>
                              <MainpageMain2312divsp1>
                                <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                <MainpageMain2312divsp12>
                                  8
                                </MainpageMain2312divsp12>
                              </MainpageMain2312divsp1>
                              <MainpageMain2312divsp1>
                                <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                <MainpageMain2312divsp12>
                                  5
                                </MainpageMain2312divsp12>
                              </MainpageMain2312divsp1>
                              <MainpageMain2312divsp13>
                                4 bronze badges
                              </MainpageMain2312divsp13>
                            </MainpageMain2312div1>
                          </MainpageMain2312div>
                        </MainpageMain231>
                      </MainpageMain23>
                    </MainpageMain2241>
                  </MainpageMain224>
                </MainpageMain22>

                <MainpageMain232>
                  <MainpageMain2321>
                    <MainpageMain2321a>Add a comment</MainpageMain2321a>
                  </MainpageMain2321>
                </MainpageMain232>
              </MainpageMain2>
            </MainpageMain1>

            <MainpageMainf11fh21>
              <MainpageMainf>
                <MainpageMainf1> Trial</MainpageMainf1>
                <MainpageMainf11
                  dangerouslySetInnerHTML={{
                    __html: data.questionTrial,
                  }}
                ></MainpageMainf11>
              </MainpageMainf>
              <MainpageMainf11h2>
                Know someone who can answer? Share a link to this
                <MainpageMainf11a>question</MainpageMainf11a>
                via
                <MainpageMainf11a>email</MainpageMainf11a>,
                <MainpageMainf11a>Twitter</MainpageMainf11a>
                or
                <MainpageMainf11a>Facebook</MainpageMainf11a>
              </MainpageMainf11h2>

              <div>
                <h3>Answer</h3>
                {answers.map((answer) => (
                  <div key={answer.answerId}>
                    <MainpageMain1>
                      <MainpageMain11>
                        <MainpageMain111>
                          <MainpageMain112></MainpageMain112>
                        </MainpageMain111>
                      </MainpageMain11>
                      <MainpageMain2>
                        <MainpageMain21>
                          <MainpageMain211>
                            <MainpageMain211btn>
                              <MainpageMain211sgv>
                                <MainpageMain211svgP
                                  onClick={() =>
                                    answerVotePlus(answer.answerId)
                                  }
                                  d="M2 25h32L18 9 2 25Z"
                                ></MainpageMain211svgP>
                              </MainpageMain211sgv>
                            </MainpageMain211btn>

                            <MainpageMain212>
                              {answer.voteACount}
                            </MainpageMain212>
                            <MainpageMain211btn>
                              <MainpageMain211sgv>
                                <MainpageMain211svgP
                                  onClick={() =>
                                    answerVoteMinus(answer.answerId)
                                  }
                                  d="M2 11h32L18 27 2 11Z"
                                ></MainpageMain211svgP>
                              </MainpageMain211sgv>
                            </MainpageMain211btn>

                            <MainpageMain211a>
                              <MainpageMain211svg>
                                <MainpageMain211p d="M3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></MainpageMain211p>
                              </MainpageMain211svg>
                            </MainpageMain211a>

                            <MainpageMain211a>
                              <MainpageMain211svg>
                                <MainpageMain211p d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"></MainpageMain211p>
                              </MainpageMain211svg>
                            </MainpageMain211a>
                          </MainpageMain211>
                        </MainpageMain21>
                        <MainpageMain22>
                          <MainpageMain221>
                            <MainpageMain221p
                              dangerouslySetInnerHTML={{
                                __html: answer.contents,
                              }}
                            ></MainpageMain221p>
                          </MainpageMain221>
                          <MainpageMain223>
                            <MainpageMain2231>
                              <MainpageMain2232>
                                <MainpageMain2232ul>
                                  <MainpageMain2232li>
                                    <MainpageMain2232lia>
                                      apache-spark
                                    </MainpageMain2232lia>
                                  </MainpageMain2232li>
                                  <MainpageMain2232li>
                                    <MainpageMain2232lia>
                                      pyspark
                                    </MainpageMain2232lia>
                                  </MainpageMain2232li>
                                </MainpageMain2232ul>
                              </MainpageMain2232>
                            </MainpageMain2231>
                          </MainpageMain223>

                          <MainpageMain224>
                            <MainpageMain2241>
                              <MainpageMain22411>
                                <MainpageMain22412>
                                  <MainpageMain22413>
                                    <MainpageMain224131>
                                      <MainpageMain224131a>
                                        Share
                                      </MainpageMain224131a>
                                    </MainpageMain224131>
                                    <MainpageMain224131>
                                      <MainpageMain224131a
                                        href={`/editanswer/${answer.answerId}`}
                                      >
                                        Edit
                                      </MainpageMain224131a>
                                    </MainpageMain224131>
                                    <MainpageMain224131>
                                      <MainpageMain224131a>
                                        Follow
                                      </MainpageMain224131a>
                                    </MainpageMain224131>
                                    <MainpageMain224131>
                                      <MainpageMainbtn
                                        onClick={() =>
                                          answerDelete(answer.answerId)
                                        }
                                      >
                                        delete
                                      </MainpageMainbtn>
                                    </MainpageMain224131>
                                  </MainpageMain22413>
                                </MainpageMain22412>
                              </MainpageMain22411>

                              <MainpageMain23>
                                <MainpageMain231>
                                  <MainpageMain2311>
                                    asked
                                    <MainpageMain2311span>
                                      44 secs ago
                                    </MainpageMain2311span>
                                  </MainpageMain2311>
                                  <MainpageMain2312>
                                    <MainpageMain2312a>
                                      <MainpageMain2312adiv>
                                        <div>IMG</div>
                                      </MainpageMain2312adiv>
                                    </MainpageMain2312a>
                                  </MainpageMain2312>
                                  <MainpageMain2312div>
                                    <MainpageMain2312diva>
                                      yurkaishere
                                    </MainpageMain2312diva>
                                    <MainpageMain2312divsp></MainpageMain2312divsp>
                                    <MainpageMain2312div1>
                                      <MainpageMain2312divsp>
                                        1903
                                      </MainpageMain2312divsp>
                                      <MainpageMain2312divsp1>
                                        <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                        <MainpageMain2312divsp12>
                                          4
                                        </MainpageMain2312divsp12>
                                      </MainpageMain2312divsp1>
                                      <MainpageMain2312divsp1>
                                        <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                        <MainpageMain2312divsp12>
                                          8
                                        </MainpageMain2312divsp12>
                                      </MainpageMain2312divsp1>
                                      <MainpageMain2312divsp1>
                                        <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                        <MainpageMain2312divsp12>
                                          8
                                        </MainpageMain2312divsp12>
                                      </MainpageMain2312divsp1>
                                      <MainpageMain2312divsp1>
                                        <MainpageMain2312divsp11></MainpageMain2312divsp11>
                                        <MainpageMain2312divsp12>
                                          5
                                        </MainpageMain2312divsp12>
                                      </MainpageMain2312divsp1>
                                      <MainpageMain2312divsp13>
                                        4 bronze badges
                                      </MainpageMain2312divsp13>
                                    </MainpageMain2312div1>
                                  </MainpageMain2312div>
                                </MainpageMain231>
                              </MainpageMain23>
                            </MainpageMain2241>
                          </MainpageMain224>
                        </MainpageMain22>

                        <MainpageMain232>
                          <MainpageMain2321>
                            <MainpageMain2321a>Add a comment</MainpageMain2321a>
                          </MainpageMain2321>
                        </MainpageMain232>
                      </MainpageMain2>
                    </MainpageMain1>
                  </div>
                ))}
              </div>
              <MainpageMainf11from>
                <MainpageMainf11fh2> Your Answer </MainpageMainf11fh2>

                <ReactQuill
                  className="text-left"
                  name="content"
                  theme="snow"
                  modules={modules}
                  onChange={(e) => setNewAnswer(e)}
                />
                <MainpageMainf11fdiv>
                  <MainpageMainf11fbtn onClick={answerHandler}>
                    Post Your Answer
                  </MainpageMainf11fbtn>
                </MainpageMainf11fdiv>
              </MainpageMainf11from>

              <MainpageMainf11fh21>
                <MainpageMainf11fh21d>
                  Not the answer you're looking for? Browse other questions
                  tagged
                  <MainpageMainf11fh21dul>
                    <MainpageMain2232li>
                      <MainpageMain2232lia>apache-spark</MainpageMain2232lia>
                      <MainpageMain2232lia>pyspark</MainpageMain2232lia>
                    </MainpageMain2232li>
                  </MainpageMainf11fh21dul>
                  or
                  <MainpageMainf11fh21dula>
                    ask your own question
                  </MainpageMainf11fh21dula>
                  .
                </MainpageMainf11fh21d>
              </MainpageMainf11fh21>
            </MainpageMainf11fh21>
          </MainpageMain>
        </Mainpage1div>

        <script></script>
      </Mainpage1>
    </Mainpage>
  );
}

export default MainpageD;
