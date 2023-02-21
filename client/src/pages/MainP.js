import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(70% - 164px);
  padding: 24px 16px;
  > a {
    border: 1px solid black;
    background-color: aliceblue;
    height: 20px;
  }
`;
export default function MainP({ setIsSidebar }) {
  useEffect(() => {
    setIsSidebar(true);
  }, []);
  return (
    <Main>
      <div>메인페이지</div>
      <Link to="/question">Ask question</Link>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>

      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p>
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
    </Main>
  );
}
