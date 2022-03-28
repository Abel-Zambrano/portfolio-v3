import styled from "styled-components";
import { useState } from "react";
import { GiTriangleTarget } from "react-icons/gi";
import Link from "next/link";
import links from "../JS/links";
import Hamburger from "./Hamburger";
import { device } from "../JS/device";
import NavDrawer from "./NavDrawer";

const MyNavBar = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: var(--lite-bg);
  height: 50px;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid var(--primary-bg);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  font-size: 3rem;
  cursor: pointer;
  margin-left: 40px;
  @media ${device.tablet} {
    margin-left: 20px;
  }
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 40px;
  @media ${device.tablet} {
    display: none;
  }
`;

const LinkItem = styled.li`
  color: var(--heading);
  text-transform: capitalize;
  list-style: none;
  font-size: 1.8rem;
  margin-left: 50px;
  cursor: pointer;
  :hover {
    color: var(--primary);
  }
`;

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // const openHandler = () => {
  //   setOpen(!open);
  // };

  return (
    <MyNavBar>
      <Container>
        <Logo>
          {" "}
          <Link href="/">
            <GiTriangleTarget />
          </Link>
        </Logo>
        <LinkList>
          {links.map(({ id, name, url }) => {
            return (
              <Link key={id} href={url}>
                <LinkItem>{name}</LinkItem>
              </Link>
            );
          })}
        </LinkList>
        <Hamburger open={open} setOpen={setOpen} />
      </Container>
      <NavDrawer open={open} setOpen={setOpen} />
    </MyNavBar>
  );
}
