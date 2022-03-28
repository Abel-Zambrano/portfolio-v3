import styled from "styled-components";
import Content from "./Content";
import { device } from "../JS/device";

const MyGallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  background-color: var(--lite-bg);
  padding: 50px 0px 100px 0px;
  border-radius: 4px;
  @media ${device.tablet} {
    grid-template-columns: auto;
  }
`;

type Props = {
  title: string;
  children: any;
  id: string;
};

export default function Gallery({ id, title, children }: Props) {
  return (
    <MyGallery>
      <Content id={id} title={title}>
        <Wrapper>{children}</Wrapper>
      </Content>
    </MyGallery>
  );
}
