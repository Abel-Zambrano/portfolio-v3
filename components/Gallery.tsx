import styled from "styled-components";
import Content from "./Content";

const MyGallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 400px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: var(--lite-bg);
  padding: 50px 40px 100px 40px;
  border-radius: 4px;
  grid-column-gap: 30px;
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
