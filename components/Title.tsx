import styled from "styled-components";
import Hr from "../components/Hr";

const MyTitle = styled.h2`
  text-transform: capitalize;
  color: var(--heading);
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  /* padding-top: 50px; */
`;

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <>
      <MyTitle>{title}</MyTitle>
      <Hr />
    </>
  );
}
