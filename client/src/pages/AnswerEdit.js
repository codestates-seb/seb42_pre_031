import { useEffect, useState } from "react";
import {
  UNSAFE_DataRouterStateContext,
  useNavigate,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ReactQuill from "react-quill";

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  padding: 24px;
  width: 1080px;
  justify-content: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const TopContain = styled.div`
  background-color: #fdf7e2;
  border: 1px solid;
  border-radius: 3px;
  border-color: white;
  padding: 2%;
  margin-bottom: 20px;
`;
const Top = styled.h6`
  margin: 10px;
`;

const Answer = styled.div`
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
const Answeredit = styled.input`
  padding: 7.8px 9.1px;
  margin: 7px 0px 0px 0px;
  margin-bottom: 20px;
  width: 750px;
  height: 300px;
`;

const InputText = styled.input`
  padding: 7.8px 9.1px;
  margin: 7px 0px 0px 0px;
  margin-bottom: 20px;
  width: 600px;
`;

const Summary = styled.div`
  margin-top: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  margin: 10px;
`;

const SaveEdit = styled.button`
  padding: 10px;
  color: white;
  text-decoration: none;
  background-color: #379fef;
  border-radius: 3px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: hsl(200, 100%, 30%);
  }
`;
const CancelBtn = styled.button`
  color: #379fef;
  padding: 10px 15px;
  border: none;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 300px;
`;
const SideContain = styled.div`
  box-shadow: 2px 2px 2px 1px #e7e7e7;
  margin-bottom: 20px;
`;

const SideTitle = styled.div`
  display: flex;
  background-color: #fbf3d5;
  padding: 3%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid;
  border-color: #f1e5bc;
  color: #3b4045;
`;

const Explain = styled.div`
  padding: 5px 70px 5px 20px;
  background-color: #faf5e6;
  border: 1px solid;
  border-color: white;
  display: flex;
`;

const Ul = styled.ul`
  padding: 1%;
`;

const Li = styled.li`
  display: flex;
  white-space: nowrap;
  margin: 10px 0;
  font-size: 0.5rem;
  padding-right: 10px;
  list-style: inside;
`;

function AnswerEdit({ setIsSidebar, setIsFooter }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("access_token");
  // 수정 완료 버튼
  // 네비게이트를 이용하려면 이동하는곳의 엔드포인트가 해당 답글이 있는 질문세부페이지
  const handleEditAnswer = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://ec2-52-79-226-32.ap-northeast-2.compute.amazonaws.com:8080/v1/answers/${id}`,
        {
          answerId: id,
          contents: answer,
        },
        { headers: { Authorization: token } }
      );
      // navigate("/question/1");
      window.history.back();
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  useEffect(() => {
    setIsSidebar(true);
    setIsFooter(true);
  }, []);

  // 해당 페이지 답변 받아오는 api
  // 답변을 가져와야하는데 주소 엔드포인트는 답글의 아이디라 접근못함
  // id 부분에 들어가는건 질문의 아이디
  // 가져오는건 모든 답변
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://ec2-52-79-226-32.ap-northeast-2.compute.amazonaws.com:8080/v1/answers/${id}`
      )
      .then((response) => {
        setAnswer(response.data.data.contents);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [id]);

  // 에디터 모듈
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
    <Main>
      <Container>
        <Content>
          <TopContain>
            <Top>
              We welcome edits that make the post easier to understand and more
              valuable for readers. Because community members review edits,
              please try to make the post substantially better than how you
              found it, for example, by fixing grammar or adding additional
              resources and hyperlinks.
            </Top>
          </TopContain>

          <Answer>
            <Title name="title">Rev</Title>
            <Title name="title">페이지</Title>
            <Answeredit></Answeredit>
            <Title name="title">Answer</Title>

            <ReactQuill
              className="text-left"
              name="content"
              theme="snow"
              modules={modules}
              value={answer}
              onChange={(e) => setAnswer(e)}
            />
            <Summary>
              <Title>Edit Summary</Title>
              <InputText
                type={"text"}
                placeholder="briefly explain your change (corrected spelling, fixed grammar, improved formatting)"
              ></InputText>
            </Summary>
            <Buttons>
              <SaveEdit name="saveEdit" onClick={handleEditAnswer}>
                Save Edits
              </SaveEdit>
              <CancelBtn name="cancel">Cancel</CancelBtn>
            </Buttons>
          </Answer>
        </Content>
        <Side>
          <SideContain>
            <SideTitle name="Title">How to Edit</SideTitle>
            <Explain>
              <Ul>
                <Li>Correct minor typos or mistakes</Li>
                <Li>Clarify meaning without changing it</Li>
                <Li>Add related resources or links</Li>
                <Li>Always respect the author’s intent</Li>
                <Li>Don’t use edits to reply to the author</Li>
              </Ul>
            </Explain>
          </SideContain>
          <SideContain>
            <SideTitle name="Title">How to Format</SideTitle>
            <Explain>
              <Ul>
                <Li></Li>
                <Li></Li>
                <Li></Li>
              </Ul>
            </Explain>
          </SideContain>
        </Side>
      </Container>
    </Main>
  );
}

export default AnswerEdit;
