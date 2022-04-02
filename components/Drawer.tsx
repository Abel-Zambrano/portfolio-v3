import styled from "styled-components";
import { device } from "../JS/device";
import links from "../JS/links";
import Link from "next/link";

const MyDrawer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: calc(100vh - 50px);
  z-index: 1000;
  position: absolute;
  color: white;
  background-color: var(--lite-bg);
  top: 50px;
  right: -500px;
  transition: right 0.2s ease-in-out;

  &.open {
    @media ${device.tablet} {
      top: 50px;
      right: 0;
    }
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

type Props = {
  open: boolean;
  setOpen: any;
};

export default function Drawer({ open, setOpen }: Props) {
  return (
    <MyDrawer className={`${open ? "open" : ""}`}>
      <List>
        {links.map(({ id, name, url }) => {
          return (
            <Link key={id} href={url} passHref>
              <ListItem onClick={() => setOpen(!open)}>{name}</ListItem>
            </Link>
          );
        })}
      </List>
    </MyDrawer>
  );
}
