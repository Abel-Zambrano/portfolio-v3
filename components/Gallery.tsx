import styled from "styled-components";
import Content from "./Content";

const MyGallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
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
};

export default function Gallery({ title, children }: Props) {
  return (
    <MyGallery>
      <Content title={title}>
        <Wrapper>{children}</Wrapper>
      </Content>
    </MyGallery>
  );
}
