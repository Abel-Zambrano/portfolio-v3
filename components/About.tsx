import styled from "styled-components";
import Knowledge from "./Knowledge";
import Skills from "./Skills";
import Summary from "./Summary";

const MyAbout = styled.div`
  padding-top: 200px;
`;

const MySummary = styled(Summary)`
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <>
      <MyAbout id="about">
        <MySummary />
        <Knowledge />
        <Skills />
      </MyAbout>
    </>
  );
}
