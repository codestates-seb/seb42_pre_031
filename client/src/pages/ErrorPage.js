import styled from "styled-components";
import { Link } from "react-router-dom";
import bb from "../images/bb.png";
import { useEffect } from "react";

const Errorcontain = styled.div`
  width: 100%;
  height: 100vh;

  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-position: left;
  background-position-x: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  .Title {
    margin: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    > img {
      width: 300px;
      height: 300px;
      border-radius: 20px;
    }

    h1 {
      font-size: 27px;
      font-weight: 450;
      margin-bottom: 4px;
    }
    .second {
      margin-bottom: 19px;
      font-size: 19px;
    }
    .content {
      p {
        font-size: 15px;

        margin-bottom: 15px;
      }
      a {
      }
    }
  }
`;

function ErrorPage({ setIsSidebar, setIsFooter }) {
  useEffect(() => {
    setIsSidebar(false);
    setIsFooter(false);
  });

  return (
    <Errorcontain>
      <div className="Title">
        <img src={bb} />
        <div>
          <h1>Page not found</h1>
          <div className="second">
            <p>
              We&apos;re sorry, we couldn&apos;t find the page you requested.
            </p>
          </div>
          <div className="content">
            <p>
              Try&nbsp;
              <Link>searching for similar questions</Link>
            </p>
            <p>
              Browse our&nbsp;
              <Link>recent questions</Link>
            </p>
            <p>
              Browse our &nbsp;
              <Link>popular tags</Link>
            </p>
            <p>
              If you feel something is missing that should be here,
              <a href="https://stackoverflow.com/contact">contact us.</a>
            </p>
          </div>
        </div>
      </div>
    </Errorcontain>
  );
}

export default ErrorPage;
