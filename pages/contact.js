import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>El Mesquitito Grill | Contact Us | Authentic Mexican Restaurant</title>
                <meta name="description" content="Contact us, El Mesquitito Grill, about catering opportunities, private events, or any suggestions or critiques. We are happy to hear from you!" />
                <meta property="og:description" content="Contact us, El Mesquitito Grill, about catering opportunities, private events, or any suggestions or critiques. We are happy to hear from you!" />
                <meta property="og:url" content="http://www.elmesquititogrill.com/contact" />
            </Head>
            <form>
                <h1>Get In Touch</h1>
                <input name="name" type="text" className="feedback-input" placeholder="Name" required />
                <input name="email" type="email" className="feedback-input" placeholder="Email" required />
                <select name="category" type="text" className="feedback-input" required>
                    <option value="" default>Choose a subject...</option>
                    <option>Catering</option>
                    <option>Feedback</option>
                    <option>Other</option>
                </select>
                <textarea name="text" className="feedback-input" placeholder="Message" required></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </>
    )
}
