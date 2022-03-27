import Header from "./Header";
import Head from 'next/head';
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                <meta name="description" content="El Mesquitito Grill is Costa Mesa's best and highest-rated Mexican restaurant. Stop by for reasonably priced, authentic, and delicious mexican food." />
                <meta name="image" property="og:image" content="%PUBLIC_URL%/images/logo-square.jpg" />
                <meta property="og:description" content="El Mesquitito Grill is Costa Mesa's best and highest-rated Mexican restaurant. Stop by for reasonably priced, authentic, and delicious mexican food." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content="https://www.elmesquititogrill.com/" />
                <meta httpEquiv="content-language" content="en-us" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="icon" href="/images/logo-square.jpg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main>{ children }</main>
            <Footer />
        </>
    )
}
