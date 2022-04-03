import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { device } from "../JS/device";

const MyThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
  @media ${device.tablet} {
    margin-top: 100px;
  }
`;

const Wrapper = styled.div`
  width: 350px;
  height: 220px;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
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
  type: string;
};

export default function Thumbnail({ type, company, image, symbol }: Props) {
  return (
    <MyThumbnail>
      <Title>{company}</Title>
      <Link href={`/${type}/[symbol]`} as={`/${type}/${symbol}`} passHref>
        <Wrapper>
          <Image
            src={image}
            alt="Picture of the author"
            width={350}
            height={220}
            placeholder="blur"
            blurDataURL={image}
            priority
          />
        </Wrapper>
      </Link>
    </MyThumbnail>
  );
}
