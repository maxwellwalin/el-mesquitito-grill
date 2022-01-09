import Hero from "../components/Hero"
import Head from 'next/head'
import HomepageInfo from "../components/HomepageInfo"

export default function Home() {
  return (
    <>
      <Head>
        <title>El Mesquitito Grill | Authentic Mexican Food Restaurant in Costa Mesa, California</title>
        <meta name="description" content="El Mesquitito Grill is Costa Mesa's best stop for reasonably priced, authentic, and delicious mexican food." />
        <meta property="og:description" content="El Mesquitito Grill is Costa Mesa's best stop for reasonably priced, authentic, and delicious mexican food." />
        <meta property="og:url" content="http://www.elmesquititogrill.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://www.elmesquititogrill.com/" />
        <link rel="icon" href="/images/logo-square.jpg" />
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Head>
      <Hero />
      <HomepageInfo />
      <div className="elfsight-app-63057ee3-1444-420a-882e-55e79be0c228 yelpDiv" />
    </>
  )
}