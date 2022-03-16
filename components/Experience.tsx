import experienceList from "../JS/experienceList";
import Thumbnail from "./Thumbnail";

export default function Experience() {
  return (
    <>
      {experienceList.map(({ id, company, image, location }) => {
        return (
          <Thumbnail
            key={id}
            company={company}
            image={image}
            location={location}
          />
        );
      })}
    </>
  );
}
