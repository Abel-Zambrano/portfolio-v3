import styled from "styled-components";
import Content from "./Content";
import Knoweldge from "./Knowledge";
import Skills from "./Skills";
import Summary from "./Summary";

const MyAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
  margin-bottom: 200px;
`;

const MySummary = styled(Summary)`
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <MyAbout>
      <Content title="about me">
        <MySummary />
        <Knoweldge />
        <Skills />
      </Content>
    </MyAbout>
  );
}
