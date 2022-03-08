import styled from "styled-components";
import Content from "./Content";

const MyGallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  title: string;
  children: any;
  id: string;
};

export default function Gallery({ id, title, children }: Props) {
  return (
    <MyGallery id={id}>
      <Content title={title}>
        <Wrapper>{children}</Wrapper>
      </Content>
    </MyGallery>
  );
}
