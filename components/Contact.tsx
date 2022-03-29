import styled from "styled-components";
import Content from "./Content";
import SocialLinks from "./SocialLinks";

const MyContact = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MyContent = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Contact() {
  return (
    <MyContact id="contact">
      <MyContent title="Get in touch!">
        <SocialLinks />
      </MyContent>
    </MyContact>
  );
}
