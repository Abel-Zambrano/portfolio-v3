import projectList from "../JS/projectList";
import Thumbnail from "./Thumbnail";

export default function Projects() {
  return (
    <>
      {projectList.map(({ id, company, image, location, symbol, type }) => {
        return (
          <Thumbnail
            key={id}
            company={company}
            image={image}
            location={location}
            symbol={symbol}
            type={type}
          />
        );
      })}
    </>
  );
}
