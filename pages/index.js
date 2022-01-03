import { Element } from "react-scroll"
import Hero from "../components/Hero"
import Head from 'next/head'
import styled from "styled-components"

export default function Home() {
  return (
    <div>
      <Head>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Head>
      <Hero />
      <Element name='reviews'>
      </Element>
      <div className="elfsight-app-63057ee3-1444-420a-882e-55e79be0c228 yelpDiv"></div>
    </div>
  )
}