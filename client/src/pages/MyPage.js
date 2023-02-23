import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserBox = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  /* justify-content: space-between; */
  position: relative;
  width: 100%;
  max-width: 1100px;
  padding: 24px 16px;
  background: none;
  /* font-size: 13px; */
  color: rgb(35, 38, 41);
  // 상단 유저 정보
  .user-top {
    display: flex;
    height: 150px;
  }
  .user-nickname {
    font-size: 30px;
  }
  .user-id-info {
    display: flex;
    align-items: center;
    > img {
      width: 100px;
      height: 100px;
    }
  }
  .user-sign-info {
    display: flex;
  }
  .user-info-edit {
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: 20px;
    top: 30px;
    width: 200px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(207, 210, 213);
      padding: 5px;
      width: 82px;
      height: 20px;
      font-size: 12px;
      color: rgb(108, 115, 123);
      text-align: center;
    }
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(207, 210, 213);
      padding: 5px;
      width: 82px;
      height: 20px;
      font-size: 12px;
      color: rgb(108, 115, 123);
      text-align: center;
    }
  }
  //////
  .user-info-tab {
    padding-top: 20px;
    display: flex;
    width: 300px;

    > ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      > li {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        width: 45px;
        height: 17px;
        padding: 6px 12px;
      }
      > .user-activity {
        background-color: rgb(229, 135, 62);
        color: white;
      }
    }
  }
  // 요약 본문
  .user-contents {
    display: flex;
    margin-top: 20px;
  }
  // 유저 페이지 네비게이션
  .user-nav {
    display: flex;
    height: 100%;
    margin-right: 32px;
  }
  .user-nav-move {
    display: flex;
    text-align: start;
    height: 40%;
    flex-direction: column;
    position: sticky;
    > li {
      padding: 6px 48px 6px 12px;
      border-radius: 20px;
      margin-bottom: 3px;
    }
    > .summary-tab {
      background-color: rgb(241, 242, 243);
    }
  }
  // 유저 네비게이션 오른쪽 내용 박스
  .user-summary-box {
  }
  .user-summary {
  }
  .user-summary-title {
  }
  .summary-cards {
    display: flex;
    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid rgb(207, 210, 213);
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 12px;
      margin: 8px;
      > p {
        color: rgb(108, 115, 123);
      }
    }
  }
  .badge-reco {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(72, 115, 153);
    border-radius: 5px;
    padding: 10px;
    height: 30px;
    width: 222px;
    background-color: rgb(65, 149, 247);
    color: white;
    font-size: 15px;
    &:hover {
      background-color: rgb(48, 116, 198);
    }
  }
  .answers-top {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    > div {
      display: flex;
      flex-wrap: wrap;
      > a {
        border: 1px solid rgb(207, 210, 213);
        padding: 3px;
        color: rgb(108, 115, 123);
      }
      > :first-child {
        border-radius: 5px 0px 0px 5px;
        background-color: rgb(228, 229, 231);
      }
      > :last-child {
        border-radius: 0px 5px 5px 0px;
      }
    }
  }
  .summary-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border: 1px solid rgb(207, 210, 213);
    border-radius: 10px;
  }
  .user-feed {
    margin: 20px 0px 10px 0px;
    cursor: pointer;
    color: rgb(87, 149, 270);
  }

  .feed-modal {
    top: 40%;
    left: 40%;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 400px;
    height: 160px;
    padding: 20px;
    background-color: white;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    > .feed-modal-top {
      display: flex;
      width: 100%;
      > div {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 30px;
        cursor: pointer;
      }
      > h2 {
        margin-top: 0;
      }
    }
  }
`;

export default function Mypage({ setIsSidebar, setIsFooter }) {
  const [feedModal, setFeedModal] = useState(false);

  const feedOpener = () => {
    setFeedModal(true);
  };
  const feedCloser = () => {
    setFeedModal(false);
  };

  useEffect(() => {
    setIsSidebar(true);
    setIsFooter(true);
  });
  return (
    <UserBox>
      <div className="user-top">
        <div className="user-id-info">
          <img src="star.png" />
          <div>
            <div className="user-nickname">UserName(유저이름api)</div>
            <ul className="user-sign-info">
              <li>Member for 7 days(가입일api)</li>
              <li>Last seen this week</li>
              <li>Visited 6 days, 3 consecutive</li>
            </ul>
          </div>
        </div>
        <div className="user-info-edit">
          <Link to="/editmypage">Edit profile</Link>
          <div>Profiles</div>
        </div>
      </div>
      <div className="user-info-tab">
        <ul>
          <li>Profile</li>
          <li className="user-activity">Activity</li>
          <li>Saves</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="user-contents">
        <nav className="user-nav">
          <ul className="user-nav-move">
            <li className="summary-tab">Summary</li>
            <li>Answers</li>
            <li>Questions</li>
            <li>Tags</li>
            <li>Articles</li>
            <li>Badges</li>
            <li>Following</li>
            <li>Bounties</li>
            <li>Reputation</li>
            <li>All actions</li>
            <li>Responses</li>
            <li>Votes</li>
          </ul>
        </nav>
        <section className="user-summary-box">
          <div className="user-summary">
            <div className="user-summary-title">
              <h2>Summary</h2>
            </div>
            <div className="user-summary-contents">
              <ul>
                <li className="summary-cards">
                  <div>
                    <h4>Reputation is how the community thanks you</h4>
                    <p>
                      When users upvote your helpful posts, you'll earn
                      reputation and unlock new privileges.
                    </p>
                    <p>Learn more about reputation and privileges</p>
                  </div>
                  <div>
                    <h4>Earn badges for helpful actions</h4>
                    <p>
                      Badges are bits of digital flair that you get when you
                      participate in especially helpful ways.
                    </p>
                    <div className="badge-reco">
                      Take the Tour and earn your first badge
                    </div>
                  </div>
                  <div>
                    <h4>Measure your impact</h4>
                    <p>
                      Your posts and helpful actions here help hundreds or
                      thousands of people searching for help.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="answers-top">
                    <h3>Answers</h3>
                    <div>
                      <a>Score</a>
                      <a>Activity</a>
                      <a>Newest</a>
                    </div>
                  </div>
                  <div className="summary-item">내용</div>
                </li>
                <li>
                  <div className="answers-top">
                    <h3>Questions</h3>
                    <div>
                      <a>Score</a>
                      <a>Activity</a>
                      <a>Newest</a>
                      <a>Views</a>
                    </div>
                  </div>
                  <div className="summary-item">내용</div>
                </li>
                <li>
                  <div>
                    <h3>Tags</h3>
                  </div>
                  <div className="summary-item">
                    You have not participated in any tags
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Reputation</h3>
                  </div>
                  <div className="summary-item">
                    You have no recent reputation changes.
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Badges</h3>
                  </div>
                  <div className="summary-item">
                    You have not earned any badges
                  </div>
                </li>
                <li>
                  <div className="answers-top">
                    <h3>Followed posts</h3>
                    <div>
                      <a>Score</a>
                      <a>Activity</a>
                      <a>Newest</a>
                      <a>Added</a>
                    </div>
                  </div>
                  <div className="summary-item">
                    You are not following any posts.
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Accounts</h3>
                  </div>
                  <div className="summary-item">Stack Overflow</div>
                </li>
                <li>
                  <div className="answers-top">
                    <h3>Active bounties (0)</h3>
                    <div>
                      <a>Active</a>
                      <a>Offered</a>
                      <a>Earned</a>
                    </div>
                  </div>
                  <div className="summary-item">
                    You have no active bounties
                  </div>
                </li>
                <li>
                  <div className="answers-top">
                    <h3>Articles</h3>
                    <div>
                      <a>Score</a>
                      <a>Activity</a>
                      <a>Newest</a>
                      <a>Views</a>
                    </div>
                  </div>
                  <div className="summary-item">
                    You have not created any articles.
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Votes cast</h3>
                  </div>
                  <div className="summary-item">
                    You have not cast any votes
                  </div>
                </li>
                <div className="user-feed" onClick={feedOpener}>
                  User feed
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {feedModal ? (
        <div className="feed-modal">
          <div className="feed-modal-top">
            <h2>Subscribe to RSS</h2>
            <div onClick={feedCloser}>x</div>
          </div>
          <div>
            <h4>User feed</h4>
            <p>
              To subscribe to this RSS feed, copy and paste this URL into your
              RSS reader.
            </p>
          </div>
        </div>
      ) : null}
    </UserBox>
  );
}
// Edit profile 은 수정페이지 라우터연결
// 유저 Answer, Questions 기록 api
