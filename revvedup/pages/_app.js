import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link href="http://corvetteinformed.com/css/new.css" rel="stylesheet" />
      <Component {...pageProps} />
      <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      ></script>
      <script src="/js/new.js"></script>
    </>
  );
}

export default MyApp;
