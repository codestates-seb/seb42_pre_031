import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import writepen from "../images/writepen.png";

const AskQ = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px 24px 16px;
  width: 60%;
  height: 100%;
  top: 60px;
  justify-content: space-between;

  > h1 {
    text-align: start;
  }
  .question-explain {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 24px;
    border: 1px solid rgb(205, 225, 242);
    background-color: rgb(237, 244, 250);
    text-align: start;
    > p {
      text-align: start;
    }
    > ul {
      list-style: disc;
    }
  }
  .ask-title {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(235, 236, 237);
    text-align: start;
    margin-top: 20px;
    padding: 12px;
    > div {
      font-size: 13px;
    }
    > h4 {
      margin: 0;
    }
    > input {
      height: 30px;
      outline: none;
      border: 1px solid rgb(235, 236, 237);
      &:focus {
        border: 1px solid rgb(65, 149, 247);
        outline: none;
      }
    }
  }
  .good-title {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(235, 236, 237);
    text-align: start;
    margin-top: 20px;
  }
  .good-title-pen {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    > img {
      width: 70px;
      height: 70px;
    }
  }
  .good-title-title {
    border-bottom: 1px solid rgb(235, 236, 237);
    background-color: rgb(248, 249, 249);
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 15px;
    > h4 {
      margin: 0;
    }
  }
  .good-title-contents {
    display: flex;
    flex-direction: column;
  }
  .good-title-box {
    display: flex;
    padding: 12px;
  }
  .ask-problem {
    display: flex;
    flex-direction: column;
    /* border: 1px solid rgb(235, 236, 237); */
    text-align: start;
    margin-top: 20px;
    padding: 12px;
    > div {
      font-size: 13px;
    }
    > h4 {
      margin: 0;
    }
    > input {
      height: 20px;
      outline: none;
      border: 1px solid rgb(235, 236, 237);
      &:focus {
        border: 1px solid rgb(65, 149, 247);
        outline: none;
      }
    }
  }
  .ask-form {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 255px;

    > img {
      width: auto;
      height: 50px;
    }
    > input {
      width: 100%;
      background: none;
      outline: none;
      border: none;
      padding: 10px;
    }
  }
  .ask-form:focus-within {
    outline: none;
    border: 2px solid rgb(65, 149, 247);
  }
  .expect-form {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 255px;
  }
  .ask-expect {
    display: flex;
    flex-direction: column;
    /* border: 1px solid rgb(235, 236, 237); */
    text-align: start;
    margin-top: 20px;
    padding: 12px;
    > div {
      font-size: 13px;
    }
    > h4 {
      margin: 0;
    }
  }

  .tags-gen {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(235, 236, 237);
    text-align: start;
    margin-top: 20px;
    padding: 12px;
    > div {
      font-size: 13px;
    }
    > h4 {
      margin: 0;
    }
    > input {
      height: 20px;
      outline: none;
      border: 1px solid rgb(235, 236, 237);

      &:focus {
        border: 1px solid rgb(65, 149, 247);
        outline: none;
      }
    }
  }
  .tags-write-form {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 40px;
    justify-content: center;
    > img {
      width: auto;
      height: 50px;
    }
    > input {
      width: 100%;
      background: none;
      outline: none;
      border: none;
    }
  }
  .tags-write-form:focus-within {
    outline: none;
    border: 2px solid rgb(65, 149, 247);
  }
  .post-question {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(72, 115, 153);
    border-radius: 5px;
    height: 40px;
    width: 150px;
    background-color: rgb(65, 149, 247);
    color: white;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      background-color: rgb(48, 116, 198);
    }
  }
  .ql-container {
    box-sizing: border-box;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-weight: 400;
    color: #565759;
    min-height: 15rem;
    margin: 0px;
    position: relative;
  }
  .ql-editor {
    min-height: 15rem;
  }
  @media screen and (max-width: 600px) {
    .ql-container {
      font-size: 1.125rem;
    }
  }
`;
export default function AskQuestion({ setIsSidebar, setIsFooter }) {
  const navigate = useNavigate();
  useEffect(() => {
    setIsSidebar(false);
    setIsFooter(true);
  }, []);
  // 타이틀모달
  const [isGoodTitle, setIsGoodTitle] = useState(false);
  // 타이틀 인풋 클릭 시 모달
  const goodTitleHandler = () => {
    setIsGoodTitle(true);
  };
  // Title 인풋
  const [questionTitle, setQuestionTitle] = useState("");
  // 질문 본문 인풋
  const [questionContent, setQuestionContent] = useState("");

  // 시도 인풋
  const [questionTry, setQuestionTry] = useState("");

  //FIXME: 태그 인풋

  //에디터 모듈
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
  const token = localStorage.getItem("access_token");
  const membertoken = localStorage.getItem("member_token");
  // 질문 내역 POST 요청 >> 구현 완료
  //FIXME 아이디 부분에 로그인한 유저 아이디로 들어가야함
  const questionSubmit = async (e) => {
    e.preventDefault();
    if (!questionTitle) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!questionContent) {
      alert("게시글을 입력해주세요");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/v1/questions`,

        {
          memberId: membertoken,
          questionTitle: questionTitle,
          questionContents: questionContent,
          questionTrial: questionTry,
        },
        { headers: { Authorization: token } }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <AskQ>
      <h1>Ask a public question</h1>
      <div className="question-explain">
        <h2>Writing a good question</h2>
        <p>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
        </p>
        <ul>
          <h5>Steps</h5>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      {isGoodTitle ? (
        <div className="good-title">
          <div className="good-title-title">
            <h4>Writing a good title</h4>
          </div>
          <div className="good-title-box">
            <div className="good-title-pen">
              <img src={writepen} />
            </div>
            <div className="good-title-contents">
              <p>Your title should summarize the problem.</p>
              <p>
                You might find that you have a better idea of your title after
                writing out the rest of the question.
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="ask-title">
        <h4>Title</h4>
        <div>
          Be specific and imagine you’re asking a question to another person.
        </div>
        <input
          onClick={goodTitleHandler}
          placeholder="e.g Is there an R function for finding the index of an element in a vector?"
          onChange={(e) => setQuestionTitle(e.target.value)}
        ></input>
      </div>
      <div className="ask-problem">
        <h4>What are the details of your problem?</h4>
        <div>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </div>

        <ReactQuill
          className="text-left"
          name="content"
          theme="snow"
          modules={modules}
          onChange={(e) => setQuestionContent(e)}
        />
      </div>
      <div className="ask-expect">
        <h4>What did you try and what were you expecting?</h4>
        <div>
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </div>
        <ReactQuill
          className="text-left"
          name="content"
          theme="snow"
          modules={modules}
          onChange={(e) => setQuestionTry(e)}
        />
      </div>
      <div className="tags-gen">
        <h4>Tags</h4>
        <div>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </div>
        <div className="tags-write-form">
          <input placeholder="e.g (ajax iphone string"></input>
        </div>
      </div>
      <button onClick={questionSubmit} className="post-question">
        Post your question
      </button>
    </AskQ>
  );
}

// TODO: 인풋창 정리
// 에디터 인풋이 target.value 를 못읽음?
