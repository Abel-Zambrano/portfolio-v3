import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  text-align: center;
  background-color: var(--color-jetblack);
  bottom: 0;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: var(--heading);
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Text>&copy; Abel Zambrano 2022</Text>
    </StyledFooter>
  );
}
