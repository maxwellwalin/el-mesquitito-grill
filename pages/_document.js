import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="El Mesquitito Grill is Costa Mesa's best and highest-rated Mexican restaurant. Stop by for reasonably priced, authentic, and delicious mexican food." />
          <meta name="image" property="og:image" content="https://www.elmesquititogrill.com/images/logo-square.jpg" />
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
          {/* Global Site Tag (gtag.js) - Google Analytics */ }
          <script
            async
            src={ `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}` }
          />
          <script
            dangerouslySetInnerHTML={ {
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            } }
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}