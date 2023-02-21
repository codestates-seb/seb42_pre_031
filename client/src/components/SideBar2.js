import {
  Sidebar2div,
  Sidebar2ul,
  Sidebar2li,
  Sidebar2h2,
  Sidebar2a,
} from "../Style/StyleSidebar2";

function Sidebar2() {
  return (
    <Sidebar2div>
      <Sidebar2h2>Custom Filters</Sidebar2h2>
      <Sidebar2ul>
        <Sidebar2li>
          <Sidebar2a>Create a custom filter</Sidebar2a>
        </Sidebar2li>
      </Sidebar2ul>
    </Sidebar2div>
  );
}

export { Sidebar2 };
