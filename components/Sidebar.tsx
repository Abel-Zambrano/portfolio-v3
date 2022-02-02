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
  background-color: gray; // todo: remove
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
`;

const Name = styled.h1`
  color: var(--heading);
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

const LinksSection = styled.div`
  background-color: gray; // todo: remove
  display: flex;
  flex-direction: column;
  width: 100%;
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
      </AboutSection>
      <LinksSection></LinksSection>
    </MySidebar>
  );
}
