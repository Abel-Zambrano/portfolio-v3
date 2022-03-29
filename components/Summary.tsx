import styled from "styled-components";
import Image from "next/image";
import { device } from "../JS/device";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    margin-bottom: 4px;
  }

  .title {
    color: var(--text);
    margin-bottom: 50px;
  }
`;

const Green = styled.span`
  color: var(--primary);
`;

const MySummary = styled.p`
  width: 450px;
  font-size: 1.4rem;
  color: var(--text);
  line-height: 20px;
  @media ${device.tablet} {
    margin-bottom: 100px;
  }
  @media ${device.phone} {
    width: 300px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  margin-top: -20px;
`;

const Pic = styled.div`
  background-color: var(--lite-bg);
  width: 280px;
  height: 300px;
  border-radius: 4px;
  margin-left: -250px;
`;
type Props = {
  className?: string;
};

export default function Summary({ className }: Props) {
  return (
    <Wrapper className={className}>
      <Column>
        <Intro>
          <h1 className="name">Abel Zambrano</h1>
          <h2 className="title">Frontend Developer</h2>
        </Intro>
        <MySummary>
          I’m a frontend developer that specializes in TypeScript, React and
          Redux. I have a BS degree in Information Technology Management and
          enjoy building complex and sacalable applications. I have worked for 2
          non-profits, <Green>Hack for LA</Green> and{" "}
          <Green>Army of Volunteers for Earth</Green>, which has helped me grow
          as a team contributer.
        </MySummary>
      </Column>
      <Container>
        <ImageWrapper>
          <Image
            src="https://res.cloudinary.com/dgbnqrc5j/image/upload/v1647103690/IMG_0437_rlbgmr.jpg"
            alt="abel zambrano"
            width={280}
            height={300}
            objectFit="cover"
          />
        </ImageWrapper>
        <Pic />
      </Container>
    </Wrapper>
  );
}
