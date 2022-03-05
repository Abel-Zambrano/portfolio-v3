import styled from "styled-components";
import Content from "./Content";
import experienceList from "../JS/experienceList";
import ExpCard from "./ExpCard";

const MyExperience = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
  margin-top: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Experience() {
  return (
    <MyExperience>
      <Content title="Experience">
        <Wrapper>
          {experienceList.map(
            ({
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
            }) => {
              return (
                <ExpCard
                  id={id}
                  symbol={symbol}
                  company={company}
                  image={image}
                  location={location}
                  url={url}
                  github={github}
                  tech={tech}
                  summary={summary}
                  contributions={contributions}
                />
              );
            }
          )}
        </Wrapper>
      </Content>
    </MyExperience>
  );
}
