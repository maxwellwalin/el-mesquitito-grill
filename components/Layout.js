import Header from "./Header";
import Head from 'next/head';
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>El Mesquitito Grill | Authentic Mexican Food Restaurant in Costa Mesa, California</title>
                <meta name="description" content="El Mesquitito Grill is Costa Mesa, CA's best stop for reasonably priced, authentic, and delicious mexican food." />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                <link rel="icon" href="/images/logo-square.jpg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
