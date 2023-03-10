import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import search from "../images/search.png";
import inbox from "../images/inbox.png";
import question from "../images/question.png";
import trophy from "../images/trophy.png";
import star from "../images/star.png";

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

  .head-wrap > div {
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
export default function Header({ setSearchInput, userInfo }) {
  const membertoken = localStorage.getItem("member_token");

  const navigate = useNavigate();
  const logoLinkHandler = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <Head>
      <div className="head-wrap">
        <div onClick={logoLinkHandler}>
          <img className="head-logo" src={logo} />
        </div>
        <div className="top-search-bar">
          <img src={search} />
          <input
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
        </div>
        <Link to={`/users/${membertoken}`} className="my-icon-wrap">
          <img className="my-icon" src={star} />
        </Link>
        <div className="icon-set">
          <img src={inbox} />
          <img src={trophy} />
          <img src={question} />
          <Link to="/logout">Log out</Link>
        </div>
      </div>
    </Head>
  );
}

// ????????? ?????? ??? ???????????? ????????? ????????? ?????????
// ?????? ?????? ?????? ?????? ???????????? ???????????????.
