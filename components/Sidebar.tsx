import styled from "styled-components";
import Image from "next/image";
import links from "../JS/links";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const MySidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  height: 100%;
  background-color: var(--lite-bg);
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  padding: 0 20px 0 20px;
`;

const Name = styled.h2`
  color: var(--heading);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;

  .image {
    border-radius: 50%;
  }
`;

const About = styled.p`
  text-align: center;
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  margin-top: 40px;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-transform: capitalize;
  font-size: 1.4rem;
  margin-top: 40px;
  line-height: 40px;
`;

const LinkItem = styled.li`
  list-style: none;
  color: var(--text);
  margin-left: 16px;

  :hover {
    color: var(--heading);
  }
`;

export default function Sidebar() {
  return (
    <MySidebar>
      <AboutSection>
        <Name>Abel Zambrano</Name>
        <ImageWrapper>
          <Image
            className="image"
            src="/az.png"
            alt="portflio picture"
            width={200}
            height={200}
            objectFit="cover"
            priority
          />
        </ImageWrapper>
        <About>
          I’m a web developer that specializes in front end technologies.
        </About>
      </AboutSection>
      <LinksSection>
        <SocialLinks />
        <LinkList>
          {links.map(({ id, name, url }) => {
            return (
              <Link href={url}>
                <LinkItem key={id}>{name}</LinkItem>
              </Link>
            );
          })}
        </LinkList>
      </LinksSection>
    </MySidebar>
  );
}
