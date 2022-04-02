import type { AppProps } from "next/app";
import Script from "next/script";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";

// loading bar and spinner for routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LJ5F3C3HBH"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LJ5F3C3HBH');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
