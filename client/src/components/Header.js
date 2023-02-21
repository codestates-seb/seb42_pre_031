import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  background-color: rgb(248, 249, 249);
  border-top: 3px solid rgb(229, 135, 62);
  left: 0;
  top: 0;
  box-shadow: 10px 2px 2px 1px rgba(234, 234, 234, 0.5);
  z-index: 100;
  .head-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    max-width: 1264px;
  }

  .head-wrap > a {
    cursor: pointer;
    text-decoration: none;
    display: flex;
  }
  .head-logo {
    width: 150px;
    height: 30px;
    padding-right: 20px;
  }
  .icon-set {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 14%;
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(72, 115, 153);
      border-radius: 5px;
      height: 30px;
      width: 60px;
      background-color: rgb(227, 236, 243);
      color: rgb(72, 115, 153);
      font-size: 15px;
      &:hover {
        background-color: rgb(185, 210, 232);
      }
    }
    > img {
      width: 20px;
      height: 20px;
      filter: opacity(0.5) drop-shadow(0 0 0 grey);
    }
  }
  .top-search-bar {
    display: flex;
    align-items: center;
    border: 2px solid rgb(235, 236, 237);
    border-radius: 5px;
    width: 50%;
    height: 30px;
    background-color: white;
    padding-left: 10px;
    > img {
      width: 20px;
      height: 20px;
      filter: opacity(0.5) drop-shadow(0 0 0 grey);
    }
    > input {
      border: none;
      width: 100%;
      background: none;
      outline: none;
    }
  }
  .top-search-bar:focus-within {
    outline: none;
    border: 2px solid red;
  }
  .my-icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6%;
  }
  .my-icon {
    width: 30px;
    height: 30px;
  }
`;
export default function Header() {
  return (
    <Head>
      <div className="head-wrap">
        <Link to="/">
          <img className="head-logo" src="logo.png" />
        </Link>
        <div className="top-search-bar">
          <img src="search.png" />
          <input placeholder="Search..."></input>
        </div>
        <Link to="/mypage" className="my-icon-wrap">
          <img className="my-icon" src="logo192.png" />
        </Link>
        <div className="icon-set">
          <img src="inbox.png" />
          <img src="trophy.png" />
          <img src="question.png" />
          <Link to="/logout">Log out</Link>
        </div>
      </div>
    </Head>
  );
}

// 반응형 구현 시 인풋창이 아이콘 하나로 변하며
// 클릭 시에 검색 가능 모달창이 뜨도록한다.
