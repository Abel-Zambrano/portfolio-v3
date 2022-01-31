import styled from "styled-components";

const MySidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background-color: var(--sidebar-bg);
`;

const Name = styled.h1`
  color: var(--heading);
`;

export default function Sidebar() {
  return (
    <MySidebar>
      <Name>Abel Zambrano</Name>
    </MySidebar>
  );
}
