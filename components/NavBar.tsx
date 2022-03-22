import styled from "styled-components";
import { GiTriangleTarget } from "react-icons/gi";
import Link from "next/link";
import links from "../JS/links";

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
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  font-size: 3rem;
  cursor: pointer;
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
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
  return (
    <MyNavBar>
      <Container>
        <Link href="/">
          <Logo>
            <GiTriangleTarget />
          </Logo>
        </Link>
        <LinkList>
          {links.map(({ id, name, url }) => {
            return (
              <Link key={id} href={url}>
                <LinkItem>{name}</LinkItem>
              </Link>
            );
          })}
        </LinkList>
      </Container>
    </MyNavBar>
  );
}
