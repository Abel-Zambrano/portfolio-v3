import styled from "styled-components";
import Page from "../../components/Page";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import projectList from "../../JS/projectList";
import { device } from "../../JS/device";

const MyInfo = styled.div`
  padding-top: 160px;
  padding-top: 160px;
  @media ${device.tablet} {
    width: 700px;
  }
  @media ${device.phone} {
    width: 300px;
  }
`;

export default function Symbol() {
  const router = useRouter();
  const { symbol } = router.query;
  const result = projectList.filter((project) => project.symbol === symbol);

  return (
    <Page>
      <MyInfo>
        <Card
          id={result[0]?.id}
          symbol={result[0]?.symbol}
          company={result[0]?.company}
          image={result[0]?.image}
          location={result[0]?.location}
          url={result[0]?.url}
          github={result[0]?.github}
          tech={result[0]?.tech}
          summary={result[0]?.summary}
          contributions={result[0]?.contributions}
        />
      </MyInfo>
    </Page>
  );
}
