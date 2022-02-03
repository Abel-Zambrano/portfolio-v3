import styled from "styled-components";
import Image from "next/image";

const MySidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  height: 100%;
  background-color: var(--sidebar-bg);
`;

const AboutSection = styled.div`
  border: 1px solid gray; // todo: remove
  display: flex;
  flex-direction: column;
  height: 400px;
`;

const Name = styled.h1`
  color: var(--heading);
  font-size: 2.4rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;

  .image {
    border-radius: 50%;
  }
`;

const About = styled.p`
  color: var(--text);
  font-size: 1.6rem;
`;

const LinksSection = styled.div`
  border: 1px solid gray; // todo: remove
  display: flex;
  flex-direction: column;
  height: 300px;
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
          Hi, my name is Abel Zambrano and I’m a web developer that specializes
          in front end technologies.
        </About>
      </AboutSection>
      <LinksSection></LinksSection>
    </MySidebar>
  );
}
