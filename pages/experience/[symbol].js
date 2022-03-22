import styled from "styled-components";
import Page from "../../components/Page";
import { useRouter } from "next/router";
import experienceList from "../../JS/experienceList";

const MyInfo = styled.div`
  height: 100vh;
  margin-top: 100px;
`;

export default function Info() {
  const router = useRouter();
  const { symbol } = router.query;
  const result = experienceList.filter(
    (experience) => experience.symbol === symbol
  );

  console.log(result);

  return (
    <Page>
      <MyInfo>
        <h1>Company {symbol}</h1>
      </MyInfo>
    </Page>
  );
}
