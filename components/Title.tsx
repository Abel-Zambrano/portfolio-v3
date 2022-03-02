import styled from "styled-components";

const MyTitle = styled.h2`
  text-transform: capitalize;
  color: var(--heading);
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  padding: 14px;
  height: 60px;
  margin-bottom: 40px;
`;

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <MyTitle>{title}</MyTitle>;
}
