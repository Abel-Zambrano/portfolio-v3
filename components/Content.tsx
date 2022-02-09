import styled from "styled-components";
import Title from "./Title";

const MyContent = styled.div`
  width: 90%;
  max-width: 1200px;
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
