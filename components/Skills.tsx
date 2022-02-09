import styled from "styled-components";
import Heading from "./Heading";

const MySkills = styled.div``;

const Wrapper = styled.div`
  background-color: var(--black);
  width: 100%;
  height: 200px;
`;

export default function Skills() {
  return (
    <MySkills>
      <Heading text="Skills" />
      <Wrapper></Wrapper>
    </MySkills>
  );
}
