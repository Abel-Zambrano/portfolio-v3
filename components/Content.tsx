import styled from "styled-components";
import Title from "./Title";
import { device } from "../JS/device";

const MyContent = styled.div`
  width: 1200px;
  padding-top: 100px;
  margin-bottom: 200px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 700px;
  }
  @media ${device.phone} {
    display: flex;
    flex-direction: column;
  }
`;

type Props = {
  className?: any;
  children: any;
  id?: string;
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
