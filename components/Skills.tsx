import styled from "styled-components";
import Heading from "./Heading";
import skills from "../JS/skills";
import Image from "next/image";

const MySkills = styled.div``;

const List = styled.ul`
  /* background-color: var(--black); // todo: change color */
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  width: 100%;
  height: 200px;
`;

const Logo = styled.li`
  list-style: none;
  width: 75px;
  height: 75px;
`;

export default function Skills() {
  return (
    <MySkills>
      <Heading text="Skills" />
      <List>
        {skills.map(({ id, name, url }) => {
          return (
            <Logo key={id}>
              <Image
                src={url}
                alt={name}
                width={50}
                height={50}
                objectFit="contain"
              />
            </Logo>
          );
        })}
      </List>
    </MySkills>
  );
}
