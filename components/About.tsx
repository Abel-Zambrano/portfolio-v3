import styled from "styled-components";
import Content from "./Content";

const MyAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
`;
const GridAbout = styled.div`
  display: grid;
  color: white;
`;

const Intro = styled.div`
  .name {
    font-size: 2.4rem;
    font-weight: 300;
  }

  .title {
    font-size: 2rem;
    font-weight: 300;
    color: var(--text);
  }
`;

const Summary = styled.p`
  font-size: 1.4rem;
  color: var(--text);
`;

// todo: remove, this is a placeholder
const Pic = styled.div`
  background-color: gray;
  width: 500px;
  height: 300px;
`;

export default function About() {
  return (
    <MyAbout>
      <Content title="about">
        <GridAbout>
          <Intro>
            <h1 className="name">Abel Zambrano</h1>
            <h2 className="title">Web Developer</h2>
          </Intro>
          <Summary>
            I’m a web developer that specializes in frontend development for
            complex and scalable web applications. I have a BS degree in
            Information Technology Management and enjoy learning new
            technologies. I have worked for 2 non-profits, Hack for LA and Army
            of Volunteers for Earth, which has helped me grow as a team
            contributer.
          </Summary>
          <Pic />
        </GridAbout>
      </Content>
    </MyAbout>
  );
}
