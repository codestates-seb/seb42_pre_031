import { Link } from "react-router-dom";
import styled from "styled-components";

const Headout = styled.header`
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
    width: 100%;
    align-items: center;
    max-width: 1264px;
  }

  .head-wrap > a {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .head-logo {
    width: 150px;
    height: 30px;
  }
  .icon-set {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 14%;
    > .login-button {
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
    .signup-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(72, 115, 153);
      border-radius: 5px;
      height: 30px;
      width: 60px;
      background-color: rgb(65, 149, 247);
      color: white;
      font-size: 15px;
      &:hover {
        background-color: rgb(48, 116, 198);
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
    width: 64%;
    height: 30px;
    background-color: white;
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
  .products {
    font-size: 13px;
    color: rgb(103, 109, 113);
  }
  .head-info {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-around;
  }
`;

export default function HeaderLogout() {
  return (
    <Headout>
      <div className="head-wrap">
        <Link to="/">
          <img className="head-logo" src="logo.png" />
        </Link>
        <div className="head-info">
          <div className="products">About</div>
          <div className="products">Products</div>
          <div className="products">For Teams</div>
        </div>
        <div className="top-search-bar">
          <img src="search.png" />
          <input placeholder="Search..."></input>
        </div>
        <div className="icon-set">
          <Link to="/login" className="login-button">
            Log in
          </Link>
          <Link to="/signup" className="signup-button">
            Sign up
          </Link>
        </div>
      </div>
    </Headout>
  );
}
