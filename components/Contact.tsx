import styled from "styled-components";
import Content from "./Content";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

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

const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  background-color: red;
  overflow: hidden;
  margin-bottom: 60px;
`;

export default function Contact() {
  return (
    <MyContact id="contact">
      <MyContent title="Get in touch!">
        <ImageWrapper>
          <Image
            src="https://res.cloudinary.com/dgbnqrc5j/image/upload/v1647103690/IMG_0437_rlbgmr.jpg"
            width="300"
            height="340"
            objectFit="cover"
          />
        </ImageWrapper>
        <SocialLinks />
      </MyContent>
    </MyContact>
  );
}
