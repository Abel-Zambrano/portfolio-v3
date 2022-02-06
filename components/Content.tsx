import styled from "styled-components";
import Title from "./Title";

const MyContent = styled.div`
  width: 80%;
  height: 100%;
  border: 1px solid greenyellow; // todo: remove
`;

type Props = {
  children: any;
  title: string;
};

export default function Content({ children, title }: Props) {
  return (
    <MyContent>
      <Title title={title} />
      {children}
    </MyContent>
  );
}
