import styled from "styled-components";
import { useState } from "react";
import { GiTriangleTarget } from "react-icons/gi";
import { useRouter } from "next/router";
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import links from "../JS/links";
import Hamburger from "./Hamburger";
import { device } from "../JS/device";
import Drawer from "./Drawer";

const MyHeader = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: var(--primary-bg);
  height: 50px;
  width: 100%;
  z-index: 1000;
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

export default function Header() {
  const router = useRouter();
  const path = router.pathname;

  const [open, setOpen] = useState(false);

  return (
    <MyHeader>
      <Container>
        {/* controls home btn scroll and link route depending on page */}
        {path === "/" ? (
          <Logo onClick={() => scroll.scrollToTop()}>
            <GiTriangleTarget />
          </Logo>
        ) : (
          <Link href="/" passHref>
            <Logo onClick={() => scroll.scrollToTop()}>
              <GiTriangleTarget />
            </Logo>
          </Link>
        )}
        <LinkList>
          {links.map(({ id, name, url }) => {
            return (
              <>
                {path === "/" ? (
                  <SmoothLink key={id} to={url} smooth={true}>
                    <LinkItem>{name}</LinkItem>
                  </SmoothLink>
                ) : (
                  <Link key={id} href={`/#${url}`}>
                    <LinkItem>{name}</LinkItem>
                  </Link>
                )}
              </>
            );
          })}
        </LinkList>
        <Hamburger open={open} setOpen={setOpen} />
      </Container>
      <Drawer open={open} setOpen={setOpen} />
    </MyHeader>
  );
}
