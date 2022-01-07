import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect, Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
