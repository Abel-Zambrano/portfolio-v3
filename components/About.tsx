import styled from "styled-components";
import Content from "./Content";

const MyAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
`;
const Wrapper = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: space-evenly;
  color: white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  .name {
    font-size: 2.4rem;
    font-weight: 300;
    margin-bottom: 4px;
  }

  .title {
    font-size: 2rem;
    font-weight: 300;
    color: var(--text);
    margin-bottom: 50px;
  }
`;

const Green = styled.span`
  color: var(--primary);
`;

const Summary = styled.p`
  width: 450px;
  font-size: 1.4rem;
  color: var(--text);
`;

// todo: remove, this is a placeholder
const Pic = styled.div`
  background-color: gray;
  width: 400px;
  height: 300px;
`;

export default function About() {
  return (
    <MyAbout>
      <Content title="about">
        <Wrapper>
          <Column>
            <Intro>
              <h1 className="name">Abel Zambrano</h1>
              <h2 className="title">Web Developer</h2>
            </Intro>
            <Summary>
              I’m a web developer that specializes in frontend development for
              complex and scalable web applications. I have a BS degree in
              Information Technology Management and enjoy learning new
              technologies. I have worked for 2 non-profits,{" "}
              <Green>Hack for LA</Green> and{" "}
              <Green>Army of Volunteers for Earth</Green>, which has helped me
              grow as a team contributer.
            </Summary>
          </Column>
          <Pic />
        </Wrapper>
      </Content>
    </MyAbout>
  );
}
