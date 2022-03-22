import styled from "styled-components";
import Page from "../../components/Page";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import experienceList from "../../JS/experienceList";

//

export default function Info() {
  const router = useRouter();
  const { symbol } = router.query;
  const result = experienceList.filter(
    (experience) => experience.symbol === symbol
  );

  console.log(result);

  return (
    <Page>
      <Card
        id={result[0].id}
        symbol={result[0].symbol}
        company={result[0].company}
        image={result[0].image}
        location={result[0].location}
        url={result[0].url}
        github={result[0].github}
        tech={result[0].tech}
        summary={result[0].summary}
        contributions={result[0].contributions}
      />
    </Page>
  );
}
