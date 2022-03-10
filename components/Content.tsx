import styled from "styled-components";
import Title from "./Title";

const MyContent = styled.div`
  width: 90%;
  max-width: 1200px;
`;

type Props = {
  className?: any;
  children: any;
  title: string;
};

export default function Content({ className, children, title }: Props) {
  return (
    <MyContent className={className}>
      <Title title={title} />
      {children}
    </MyContent>
  );
}
