import styled from "styled-components";
import Content from "./Content";
import Knoweldge from "./Knowledge";
import Skills from "./Skills";
import Summary from "./Summary";

const MySummary = styled(Summary)`
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <>
      <Content id="about" title="About Me">
        <MySummary />
        <Knoweldge />
        <Skills />
      </Content>
    </>
  );
}
