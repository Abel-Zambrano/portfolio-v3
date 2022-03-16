import styled, { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #00E600;
        --lite-bg: #182434;
        --primary-bg: #111A26;
        --dark-bg: #1a1a1a;
        --text: #cdcbcb;
        --heading: #FFFFFF;
        --black: #000000;

    }
    html {
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
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    *::before,
    *::after {
    box-sizing: inherit;
    }
    h1{
    font-size: 2.4rem;
    font-weight: 300;
    color: var(--heading);
    }
    h2 {
    font-size: 2rem;
    font-weight: 300;
    }
    p {
    color: var(--text);
    font-size: 1.4rem;
    line-height: 20px;
    }
`;

const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--primary-bg);
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
        <NavBar />
        {children}
        <Footer />
      </MyPage>
    </>
  );
}
