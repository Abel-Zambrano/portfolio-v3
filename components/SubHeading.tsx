import styled from "styled-components";

const MySubHeading = styled.h2`
  border-left: 4px solid var(--primary);
  color: var(--heading);
  padding-left: 20px;
  margin: 80px 0 20px 0;
`;

type Props = {
  className?: string;
  text: string;
};

export default function SubHeading({ className, text }: Props) {
  return <MySubHeading className={className}>{text}</MySubHeading>;
}
