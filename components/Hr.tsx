import styled from "styled-components";

const MyHr = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 230, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  margin-bottom: 100px;
`;

export default function Hr() {
  return <MyHr />;
}
