import "../styles/globals.css";
import Layout from "../components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      {/*<MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx"></MoralisProvider>*/}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  );
}

export default MyApp;
