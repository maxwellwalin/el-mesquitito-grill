import Hero from "../components/Hero"
import Head from 'next/head'
import HomepageInfo from "../components/HomepageInfo"
import { ElfsightWidget } from 'react-elfsight-widget'

export default function Home() {
  return (
    <>
      <Head>
        <title>El Mesquitito Grill | Authentic Mexican Restaurant in Costa Mesa, California</title>
        <meta property="og:url" content="http://www.elmesquititogrill.com/" />
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Head>
      <Hero />
      <HomepageInfo />
      <ElfsightWidget widgetID="63057ee3-1444-420a-882e-55e79be0c228" />
    </>
  )
}