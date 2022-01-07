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
      <Head>
        <title>El Mesquitito Grill | Authentic Mexican Food Restaurant in Costa Mesa, California</title>
        <meta name="description" content="El Mesquitito Grill is Costa Mesa, CA's best stop for reasonably priced, authentic, and delicious mexican food." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
