import Header from "./Header";
import Head from 'next/head';
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>El Mesquitito Grill</title>
                <meta name="description" content="El Mesquitito Grill, Costa Mesa's best stop for reasonably priced, authentic mexican food." />
                <link rel="icon" href="/images/logo-square.jpg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
