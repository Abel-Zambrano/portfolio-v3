import styled from "styled-components";
import Image from "next/image";

const MyExpCard = styled.div`
  margin-bottom: 200px;
`;

const Company = styled.h2`
  color: var(--heading);
  margin-bottom: 20px;
  &.hfla {
    ::after {
      content: "";
      display: block;
      position: relative;
      min-width: 500px;
      height: 1px;
      background-color: var(--primary);
      top: -11px;
      margin-left: 110px;
    }
  }
  &.aovfe {
    ::after {
      content: "";
      display: block;
      position: relative;
      min-width: 500px;
      height: 1px;
      background-color: var(--primary);
      top: -11px;
      margin-left: 255px;
    }
  }
  &.anjs {
    ::after {
      content: "";
      display: block;
      position: relative;
      min-width: 500px;
      height: 1px;
      background-color: var(--primary);
      top: -11px;
      margin-left: 200px;
    }
  }
`;

const ImageWrapper = styled.div`
  .my-image {
    border-radius: 4px;
  }
`;

const City = styled.h2`
  color: var(--heading);
  margin: 20px 0 20px 0;
`;

const Summary = styled.p`
  background-color: var(--sidebar-bg);
  width: 788px;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 10px 6px 10px 6px;
`;

const TechList = styled.li`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  color: var(--heading);
  margin-bottom: 20px;

  .tech {
    margin-left: 10px;
  }
`;

const WebLinks = styled.div``;

type Props = {
  id: number;
  symbol: string;
  company: string;
  image: string;
  location: string;
  url: string;
  github?: string | null;
  tech: string[];
  summary: string;
};

export default function ExpCard({
  id,
  symbol,
  company,
  image,
  location,
  url,
  github,
  tech,
  summary,
}: Props) {
  return (
    <MyExpCard key={id}>
      <Company className={symbol}>{company}</Company>
      <ImageWrapper>
        <Image className="my-image" src={image} width={800} height={500} />
      </ImageWrapper>
      <City>{location}</City>
      <Summary>{summary}</Summary>
      <TechList>
        {tech.map((e) => {
          return <p className="tech">{e}</p>;
        })}
      </TechList>
      <WebLinks>
        {url}
        {github}
      </WebLinks>
    </MyExpCard>
  );
}
