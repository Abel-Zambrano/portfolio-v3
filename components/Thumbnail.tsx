import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const MyThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 350px;
  height: 220px;
  transition: transform 0.3s;
  :hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: var(--heading);
  margin: 10px 0 30px 0;
`;

type Props = {
  company: string;
  location: string;
  image: string;
  symbol: string;
};

export default function Thumbnail({ company, image, symbol }: Props) {
  return (
    <MyThumbnail>
      <Title>{company}</Title>
      <Link href="/[info]" as={`/${symbol}`}>
        <Wrapper>
          <Image
            src={image}
            alt="Picture of the author"
            width={350}
            height={220}
          />
        </Wrapper>
      </Link>
    </MyThumbnail>
  );
}
