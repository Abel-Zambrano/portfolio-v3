import styled from "styled-components";
import Heading from "./Heading";
import skills from "../JS/skills";
import { device } from "../JS/device";

const MySkills = styled.div``;

const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  width: 100%;
  height: 200px;
  @media ${device.phone} {
    height: auto;
    grid-template-columns: auto auto;
  }
`;

const IconWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 4rem;
  width: 150px;
  @media ${device.phone} {
    margin-top: 60px;
  }

  .name {
    color: var(--heading);
    margin-top: 20px;
  }

  &.javascript {
    color: rgb(240, 219, 78);
  }
  &.typescript {
    color: rgb(0, 122, 205);
  }
  &.html {
    color: rgb(229, 77, 38);
  }
  &.css {
    color: rgb(49, 99, 168);
  }
  &.react {
    color: rgb(96, 213, 250);
  }
  &.redux {
    color: rgb(111, 79, 182);
  }
  &.nextjs {
    color: rgb(255, 255, 255);
  }
  &.styled-components {
    color: rgb(255, 255, 255);
  }
  &.sass {
    color: rgb(193, 109, 152);
  }
  &.git {
    color: rgb(223, 92, 64);
  }
  &.mongodb {
    color: rgb(71, 138, 76);
  }
  &.mysql {
    color: rgb(65, 101, 171);
  }
  &.nodejs {
    color: rgb(102, 155, 79);
  }
  &.python {
    color: rgb(64, 109, 155);
  }
`;

export default function Skills() {
  return (
    <MySkills>
      <Heading text="Skills" />
      <List>
        {skills.map(({ id, name, icon }) => {
          return (
            <IconWrapper key={id} className={name}>
              {icon}
              <p className="name">{name}</p>
            </IconWrapper>
          );
        })}
      </List>
    </MySkills>
  );
}
