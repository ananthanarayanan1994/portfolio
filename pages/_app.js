import Layout from "../components/Layout/Layout";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
