import Hero from "../components/Hero"
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>El Mesquitito Grill | Authentic Mexican Food Restaurant in Costa Mesa, California</title>
        <meta name="description" content="El Mesquitito Grill is Costa Mesa, CA's best stop for reasonably priced, authentic, and delicious mexican food." />
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Head>
      <Hero />
      <div className='homepageInfo'>
        <div className="infoCol">
          <p className="infoColTitle">LOCATION</p>
          <a href="http://maps.apple.com/?q=el+mesquitito+grill+costa+mesa" target="_blank" rel="noreferrer">
            <p>2590 NEWPORT BLVD</p>
            <p>SUITE D</p>
            <p>COSTA MESA, CA 92627</p>
          </a>
        </div>
        <div className="infoCol">
          <p className="infoColTitle">GET IN TOUCH</p>
          <a href="tel:9496452226" className="infoContact">
            <p>(949) 645-2226</p>
          </a>
          <a href="mailto:elmesquititogrill@gmail.com" className="infoContact">
            <p>elmesquititogrill@gmail.com</p>
          </a>
        </div>
        <div className="infoCol">
          <p className="infoColTitle">HOURS</p>
          <div className="infoHours">
            <p>MON-SAT: 9 AM - 8 PM</p>
            <p>SUN: 9 AM - 5 PM</p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="elfsight-app-63057ee3-1444-420a-882e-55e79be0c228 yelpDiv"></div>
    </div>
  )
}