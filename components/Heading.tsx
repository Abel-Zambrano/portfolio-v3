import styled from "styled-components";

const MyHeading = styled.h1`
  border-left: 4px solid var(--primary);
  padding-left: 20px;
  margin: 80px 0 20px 0;
`;

type Props = {
  className?: string;
  text: string;
};

export default function Heading({ className, text }: Props) {
  return <MyHeading className={className}>{text}</MyHeading>;
}
