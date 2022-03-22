import projectsList from "../JS/projectsList";
import Card from "./Card";

export default function Projects() {
  return (
    <>
      {projectsList.map(
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
            <Card
              key={id}
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
    </>
  );
}
