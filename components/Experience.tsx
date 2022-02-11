import styled from "styled-components";
import Content from "./Content";

const MyExperience = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
  margin-top: 200px;
`;

export default function Experience() {
  return (
    <MyExperience>
      <Content title="Experience">hello</Content>
    </MyExperience>
  );
}
