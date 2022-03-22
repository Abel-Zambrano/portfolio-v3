import styled from "styled-components";
import Title from "./Title";

const MyContent = styled.div`
  width: 1200px;
  padding-top: 100px;
  margin-bottom: 200px;
`;

type Props = {
  className?: any;
  children: any;
  id: string;
  title: string;
};

export default function Content({ className, children, id, title }: Props) {
  return (
    <MyContent id={id} className={className}>
      <Title title={title} />
      {children}
    </MyContent>
  );
}
