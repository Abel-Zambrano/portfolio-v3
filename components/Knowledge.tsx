import styled from "styled-components";
import Heading from "./Heading";
import { device } from "../JS/device";

const MyKnowledge = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  @media ${device.phone} {
    width: 300px;
  }
`;

const Text = styled.p`
  width: 800px;
  @media ${device.phone} {
    width: 300px;
  }
`;

export default function Knoweldge() {
  return (
    <MyKnowledge>
      <Heading text="What I Do" />
      <Text>
        I have over 1.5 years experience building dynamic and responsive web
        applications. The technologies I enjoy using the most are React,
        Typescript and Redux. Below are my skills and technologies that I’ve
        worked with.
      </Text>
    </MyKnowledge>
  );
}
