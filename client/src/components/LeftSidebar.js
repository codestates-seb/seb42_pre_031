import { Link } from "react-router-dom";
import styled from "styled-components";
import info from "../images/info.png";
import star from "../images/star.png";
import bag from "../images/bag.png";

const LeftBar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 164px;
  height: 100%;
  z-index: 20;
  background-color: white;
  border-right: 1px solid rgb(235, 236, 237);

  .tag_mypage {
    display: flex;
    flex-direction: column;
    color: rgb(133, 140, 148);
    > a {
      height: 26px;
      display: flex;
      align-items: center;
      color: black;
      padding-left: 20px;
    }
    > a:focus {
      background-color: rgb(241, 242, 243);
      font-weight: bold;
      color: black;
      border-right: 3px solid rgb(229, 135, 62);
    }
  }
  .side-move {
    position: fixed;
    padding-top: 30px;
    text-align: start;
    width: 159px;
    padding-left: 5px;
  }
  .side-home {
    display: flex;
    > a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 26px;
      color: rgb(133, 140, 148);
    }
    > a:focus {
      background-color: rgb(241, 242, 243);
      font-weight: bold;
      color: black;
      border-right: 3px solid rgb(229, 135, 62);
    }
  }
  .side-collective {
    color: rgb(133, 140, 148);
    > p {
      display: flex;
      align-items: center;
    }
  }
  .side-teams {
    color: rgb(133, 140, 148);
    > p {
      display: flex;
      align-items: center;
    }
  }
  .exco {
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > img {
      width: 25px;
      height: 25px;
    }
  }
  .cft {
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > img {
      width: 15px;
      height: 15px;
    }
  }
  .info-icon {
    width: 15px;
    height: 15px;
    filter: opacity(0.5) drop-shadow(0 0 0 grey);
  }
  .col {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
  }
  .tea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
  }
`;
export default function LeftSidebar({ userInfo }) {
  const membertoken = localStorage.getItem("member_token");
  return (
    <LeftBar>
      <div className="side-move">
        <div className="side-home">
          <Link to="/">Home</Link>
        </div>
        <div className="tag_mypage">
          <p>PUBLIC</p>
          <a>Tags</a>
          <Link to={`/users/${membertoken}`}>Users</Link>
        </div>
        <div className="side-collective">
          <div className="col">
            <p>COLLECTIVES</p>
            <img className="info-icon" src={info} />
          </div>
          <p className="exco">
            <img src={star} /> Explore Collectives
          </p>
        </div>
        <div className="side-teams">
          <div className="tea">
            <p>TEAMS</p>
            <img className="info-icon" src={info} />
          </div>
          <p className="cft">
            <img src={bag} /> Create free Team
          </p>
        </div>
      </div>
    </LeftBar>
  );
}

// ????????? ????????? ??????????????? ??????????????? none
