import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Profilelabel = styled.div`
  font-size: 15px;
  padding: 0px 2px;
  font-weight: 700;
`;
const Editdiv = styled.div`
  width: 100%;
`;
const Fromdiv = styled.div`
  margin: 0px 0px 8px;
  font-size: 21px;
`;

const Changediv = styled.div`
  padding: 24px;
  margin: 0px 0px 48px;
  border: 1px solid #babfc3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
const Profilediv = styled.div`
  margin: 0px 0px 24px;
  padding: 0px;
  border-bottom: 1px solid #babfc3;
  flex-direction: column;
`;

const Mypagediv = styled.div`
  margin: 0px 0px 16px;
  display: flex;
`;
const Leftdiv = styled.div`
  margin: 0px 0px 48px;
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.div`
  top: 0;
  display: grid;
  grid-template-columns: 1fr 7.3fr;
  margin: 0 auto;
  width: 100%;
`;

const RightContainer = styled.div`
  background-color: #ffffff;
  font-size: 13px;
  padding: 24px;
  /* border-left: 1px solid #BABFC3; */
`;

const Barnav = styled.div`
  margin: -2px;
  padding: 2px 0px;
  display: flex;
`;
const ProfileNav = styled.div`
  margin: 2px;
  padding: 6px 12px;
  border-radius: 70px;
  :hover {
    background-color: #f1f2f3;
  }
`;
const ActivityNav = styled.div`
  margin: 2px;
  padding: 6px 12px;
  border-radius: 70px;
  color: white;
  :hover {
    background-color: rgb(204, 110, 44);
  }
  background-color: #f48225;
`;
const Navul = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  list-style: none;
  padding-left: 0px;
`;
const Navli = styled.li`
  padding: 6px 48px 6px 12px;
  font-size: 13px;
  border-radius: 70px;
`;
const Navcheck = styled.li`
  padding: 6px 48px 6px 12px;
  font-size: 13px;
  border-radius: 70px;
  background-color: #f48225;
  color: white;
`;
const Navdiv = styled.nav`
  margin: 0px 32px 0px 0px;
  background-color: white;
`;
const Navlism = styled.li`
  padding: 6px 12px;
  font-size: 11px;
  border-radius: 70px;
  font-weight: 700;
`;
const H1 = styled.h1`
  font-weight: 500;
  font-size: 27px;
`;
export const ProfilImg = styled.img`
  width: 164px;
  height: 164px;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: black;
`;
const InputText = styled.input`
  padding: 7.8px 9.1px;
  margin: 7px 0px 0px 0px;
  margin-bottom: 20px;
  width: 400px;
`;
const InputBox = styled.input`
  padding: 7.8px 9.1px;
  margin: 7px 0px 0px 0px;
  margin-bottom: 20px;
  width: 750px;
  height: 300px;
`;
export const SocialButton = styled.button`
  width: 120px;
  height: 34px;
  padding: 10.4px;
  margin: 4px 0px;
  border-radius: 5px;
  border: solid rgb(186, 191, 196);
  border-width: 1px;
  padding: 0.8em;
`;
export const LoginButton = styled(SocialButton)`
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

export const CancleButton = styled(SocialButton)`
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

const ProfileEdit = ({ setIsSidebar, setIsFooter }) => {
  const [displayName, setDisplayName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsSidebar(true);
    setIsFooter(true);
  }, []);

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://ec2-43-201-115-211.ap-northeast-2.compute.amazonaws.com:8080/v1/members/1",
        {
          nickName: displayName,
          aboutMe: aboutMe,
          memberName: fullName,
        }
      );
      console.log(response);
      navigate("/mypage");
    } catch (error) {
      console.log(error);
    }
  };

  //ssss

  return (
    <MainContainer>
      <RightContainer>
        <div>
          <Mypagediv>
            <Barnav>
              <ProfileNav>Profile</ProfileNav>
              <ProfileNav>Activity</ProfileNav>
              <ActivityNav>Settings</ActivityNav>
            </Barnav>
          </Mypagediv>

          <Leftdiv>
            <Navdiv>
              <Navul>
                <Navlism>PERSONAL INFORMATION</Navlism>
                <Navcheck>Edit profile</Navcheck>
                <Navli>Delete profile</Navli>
                <Navli></Navli>
                <Navlism>EMAIL SETTINGS</Navlism>
                <Navli>Edit email settings</Navli>
                <Navli>Tag watching & ignoring</Navli>
                <Navli>Community digests</Navli>
                <Navli>Question subscriptions</Navli>
                <Navli></Navli>
                <Navlism>SITE SETTINGS</Navlism>
                <Navli>preferences</Navli>
                <Navli>Flair</Navli>
                <Navli>Hide communities</Navli>
                <Navli></Navli>
                <Navlism>ACCESS</Navlism>
                <Navli>Your Collectives</Navli>
                <Navli>Your logins</Navli>
                <Navli></Navli>
                <Navlism>APPS & INTEGRATIONS</Navlism>
                <Navli>Authorized applications</Navli>
              </Navul>
            </Navdiv>

            <Editdiv>
              <Profilediv>
                <H1>Edit your profile</H1>
              </Profilediv>

              <Fromdiv>Public information</Fromdiv>

              <Changediv>
                <Profilelabel>Profile image</Profilelabel>
                <ProfilImg></ProfilImg>
                <Profilelabel>Display name</Profilelabel>
                <InputText
                  type={"text"}
                  value={displayName}
                  onChange={handleDisplayNameChange}
                ></InputText>
                <Profilelabel>Location</Profilelabel>
                <InputText type={"text"}></InputText>
                <Profilelabel>Title</Profilelabel>
                <InputText
                  type={"text"}
                  placeholder="No title has been set"
                ></InputText>
                <Profilelabel>About me</Profilelabel>
                <InputBox
                  type={"text"}
                  value={aboutMe}
                  onChange={handleAboutMeChange}
                ></InputBox>
              </Changediv>

              <Profilelabel>Private information</Profilelabel>
              <Changediv>
                <Profilelabel>Full name</Profilelabel>
                <InputText
                  type={"text"}
                  value={fullName}
                  onChange={handleFullNameChange}
                ></InputText>
              </Changediv>

              <LoginButton onClick={handleSubmit}>Save Profile</LoginButton>
              <CancleButton>Cancle</CancleButton>
            </Editdiv>
          </Leftdiv>
        </div>
      </RightContainer>
    </MainContainer>
  );
};

export default ProfileEdit;
