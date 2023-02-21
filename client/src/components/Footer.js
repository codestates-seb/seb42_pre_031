import { Link } from "react-router-dom";
import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* height: 300px; */
  /* z-index: 300; */
  color: white;
  background-color: rgb(36, 38, 41);
  bottom: 0;
  left: 0;
  /* position: absolute; */

  .footer-box {
    display: flex;
    padding: 24px;
    width: 100%;
    justify-content: space-around;
    > a {
      > img {
        width: 32px;
        height: 32px;
      }
    }
  }
  .footer-nav {
    display: flex;
    width: 50%;
    justify-content: space-between;
    > ul {
      display: flex;
      flex-direction: column;
      > h5 {
        margin-top: 0;
      }
    }
  }
  .footer-socialtag {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
  }
  .social-list {
    display: flex;
    justify-content: space-around;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <div className="footer-box">
        <Link to="/">
          <img src="purelogo.png" />
        </Link>
        <div className="footer-nav">
          <ul>
            <h5>STACK OVERFLOW</h5>
            <li>Question</li>
            <li>Help</li>
          </ul>
          <ul>
            <h5>PRODUCTS</h5>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
          <ul>
            <h5>COMPANY</h5>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            <h5>STACK EXCHANGE NETWORK</h5>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </div>
        <ul className="footer-socialtag">
          <div className="social-list">
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </div>
          <div>
            <p>
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under CC BY-SA. rev 2023.2.17.43248
            </p>
          </div>
        </ul>
      </div>
    </Foot>
  );
}
