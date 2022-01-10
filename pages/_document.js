import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}
export default AppDocument