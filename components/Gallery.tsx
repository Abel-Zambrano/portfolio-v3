import styled from "styled-components";
import Content from "./Content";

const MyGallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: var(--lite-bg);
  width: 1200px;
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
    <MyGallery>
      <Content id={id} title={title}>
        <Wrapper>{children}</Wrapper>
      </Content>
    </MyGallery>
  );
}
