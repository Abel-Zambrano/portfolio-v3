import styled from "styled-components";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiChevronRight } from "react-icons/fi";
import SubHeading from "./SubHeading";
import { device } from "../JS/device";

const MyCards = styled.div`
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
      height: 2px;
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
      height: 2px;
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
      height: 2px;
      background-color: var(--primary);
      top: -11px;
      margin-left: 200px;
    }
  }
  &.toshi {
    ::after {
      content: "";
      display: block;
      position: relative;
      min-width: 100px;
      height: 2px;
      background-color: var(--primary);
      top: -11px;
      margin-left: 100px;
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

const Summary = styled.div`
  background-color: var(--lite-bg);
  width: 800px;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 20px 10px 20px 10px;
  @media ${device.tablet} {
    width: 700px;
  }
  @media ${device.phone} {
    width: 300px;
  }
`;

const About = styled.p``;

const Contribution = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: 20px;
  .right-arrow {
    display: flex;
    align-items: flex-start;
    padding-top: 0;
    color: var(--primary);
    margin-right: 10px;
    font-size: 2rem;
  }
`;

const TechList = styled.li`
  display: flex;
  justify-content: flex-end;
  /* background-color: brown; */
  list-style: none;
  margin-bottom: 20px;
  @media ${device.phone} {
    flex-direction: column;
    align-items: flex-end;
  }

  .tech {
    margin-left: 10px;
    color: var(--primary);
  }
`;

const WebLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  .link {
    font-size: 2rem;
    color: var(--heading);
    margin-left: 12px;
    :hover {
      color: var(--primary);
    }
  }
`;

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
  contributions: string[];
};

export default function Card({
  id,
  symbol,
  company,
  image,
  location,
  url,
  github,
  tech,
  summary,
  contributions,
}: Props) {
  return (
    <MyCards key={id}>
      <Company className={symbol}>{company}</Company>
      <ImageWrapper>
        <Image
          className="my-image"
          src={image}
          width={800}
          height={500}
          alt={company}
          placeholder="blur"
          blurDataURL={image}
          priority
        />
      </ImageWrapper>
      <City>{location}</City>
      <Summary>
        <About>{summary}</About>
        <SubHeading text="What I did" />
        {contributions?.map((contribtution, i) => {
          return (
            <Contribution key={i}>
              <div className="right-arrow">
                <FiChevronRight />
              </div>
              <p>{contribtution}</p>
            </Contribution>
          );
        })}
      </Summary>
      <TechList>
        {tech?.map((e, i) => {
          return (
            <p key={i} className="tech">
              {e}
            </p>
          );
        })}
      </TechList>
      <WebLinks>
        <a
          className="link"
          href={url}
          title="visit website"
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink />
        </a>
        {github !== null ? (
          <a
            className="link"
            href={github}
            title="see code"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        ) : null}
      </WebLinks>
    </MyCards>
  );
}
