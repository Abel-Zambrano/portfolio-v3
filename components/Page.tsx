import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "../components/Sidebar";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #00E600;
        --sidebar-bg: #182434;
        --page-bg: #111A26;
        --text: #9B9797;
        --heading: #FFFFFF;

    }
    html {
    box-sizing: border-box;
    font-size: 62.5%;
    /* scroll-behavior: smooth; */ // todo: remove if not needed
    }
    body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    }
    * {
    margin: 0;
    padding: 0;
    }
    *::before,
    *::after {
    box-sizing: inherit;
    }
`;

const MyPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const PageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--page-bg);
  overflow-x: hidden;
`;

type Props = {
  children: any;
};

export default function Page({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      <MyPage>
        <Sidebar />
        <PageColumn>{children}</PageColumn>
      </MyPage>
    </>
  );
}
