import styled from "styled-components";
import Image from "next/image";

const MySidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: var(--sidebar-bg);
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  padding: 0 20px 0 20px;
`;

const Name = styled.h1`
  color: var(--heading);
  font-size: 2.4rem;
  font-weight: 300;
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
  color: var(--text);
  font-size: 1.6rem;
  text-align: center;
`;

const LinksSection = styled.div`
  border: 1px solid gray; // todo: remove
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-top: 40px;
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
      <LinksSection></LinksSection>
    </MySidebar>
  );
}
