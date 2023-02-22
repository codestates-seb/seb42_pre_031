import {
  SideBar3alldiv,
  SideBar31div,
  SideBar31adiv,
  SideBar31h2,
  SideBar31a,
  SideBar32div,
  SideBar321div,
  SideBar321script,
  SideBar33,
  SideBar34,
  SideBar34p,
  SideBar341,
  SideBar341svg,
  SideBar34path,
  SideBar34path1,
  SideBar34pa,
  SideBar34pasgv,
  SideBar34papath,
  SideBar35,
  SideBar351,
  SideBar351h,
  SideBar351a,
  SideBar36,
  SideBar361,
  SideBar362,
  SideBar36btn,
} from "../Style/StyleSidebar3";
function Sidebar3th() {
  return (
    <SideBar3alldiv>
      <SideBar31div>
        <SideBar31adiv>
          <SideBar31h2>Watched Tags</SideBar31h2>
          <SideBar31a>edit</SideBar31a>
        </SideBar31adiv>
      </SideBar31div>
      <SideBar32div>
        <SideBar321div>
          <SideBar321script>
            <SideBar33 href="/questions/tagged/template"></SideBar33>
          </SideBar321script>
        </SideBar321div>
        <SideBar33></SideBar33>
        <SideBar34>
          <SideBar341>
            <SideBar341svg aria-hidden="true">
              <SideBar34path d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"></SideBar34path>
              <SideBar34path1 d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></SideBar34path1>
            </SideBar341svg>
          </SideBar341>
          <SideBar34p>Watch tags to curate your list of questions.</SideBar34p>
          <SideBar34pa>
            <SideBar34pasgv>
              <SideBar34papath d="M9.06 3C4 3 1 9 1 9s3 6 8.06 6C14 15 17 9 17 9s-3-6-7.94-6ZM9 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2Z"></SideBar34papath>
            </SideBar34pasgv>
            Watch a tag
          </SideBar34pa>
        </SideBar34>

        {/* 여기쯤에서 나뉘어야함 */}

        <SideBar35>
          <SideBar351>
            <SideBar351h>Ignored Tags</SideBar351h>
            <SideBar351a href="/users/tag-notifications/21216556#ignored-1">
              edit
            </SideBar351a>
          </SideBar351>
        </SideBar35>
        <SideBar36>
          <SideBar361></SideBar361>
          <SideBar362></SideBar362>
          <SideBar36btn>Add an ignored tag</SideBar36btn>
        </SideBar36>
      </SideBar32div>
    </SideBar3alldiv>
  );
}

export { Sidebar3th };
