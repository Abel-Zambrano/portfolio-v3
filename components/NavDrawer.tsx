import styled from "styled-components";
import { device } from "../JS/device";
import links from "../JS/links";
import Link from "next/link";

const MyNavDrawer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: calc(100vh - 50px);
    z-index: 1000;
    position: absolute;
    top: 50px;
    right: 0;
    color: white;
    background-color: var(--lite-bg);
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-evenly;
  list-style: none;
  color: var(--heading);
  text-transform: capitalize;
  font-size: 1.6rem;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

export default function NavDrawer() {
  return (
    <MyNavDrawer>
      <List>
        {links.map(({ id, name, url }) => {
          return (
            <Link key={id} href={url}>
              <ListItem>{name}</ListItem>
            </Link>
          );
        })}
      </List>
    </MyNavDrawer>
  );
}
