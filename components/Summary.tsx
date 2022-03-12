import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
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
`;

// todo: remove, this is a placeholder
const Pic = styled.div`
  background-color: gray;
  width: 400px;
  height: 300px;
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
          <h2 className="title">Web Developer</h2>
        </Intro>
        <MySummary>
          I’m a web developer that specializes in frontend development for
          complex and scalable web applications. I have a BS degree in
          Information Technology Management and enjoy learning new technologies.
          I have worked for 2 non-profits, <Green>Hack for LA</Green> and{" "}
          <Green>Army of Volunteers for Earth</Green>, which has helped me grow
          as a team contributer.
        </MySummary>
      </Column>
      {/* <Image
        src="https://res.cloudinary.com/dgbnqrc5j/image/upload/v1647103690/IMG_0437_rlbgmr.jpg"
        alt="abel zambrano"
        width={100}
        height={300}
      /> */}
      <Pic />
    </Wrapper>
  );
}
