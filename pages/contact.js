import { useState } from "react";
import Head from "next/head";

// commented out code will be reintroduced once required information is provided by El Mesquitito Grill for email API set up

export default function Contact() {
    // const [formdata, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    // });

    const [contacted, setContacted] = useState(false);

    // const [loadingEmail, setLoadingEmail] = useState(false);

    // const [messageFailed, setMessageFailed] = useState([false, ""]);

    // const form = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        setContacted(true)

        // setLoadingEmail(true)

        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formdata)
        // }).then((res) => {
        //     if (res.status === 200) {
        //         setLoadingEmail(false)
        //         setContacted(true)
        //         setFormData({
        //             name: '',
        //             email: '',
        //             subject: '',
        //             message: ''
        //         })
        //     }
        // }).catch(err => setMessageFailed([true, err]));
    };

    // const handleChange = (event) => {
    //     setContacted(false);
    //     setFormData({
    //         ...formdata,
    //         [event.currentTarget.name]: event.currentTarget.value,
    //     });
    // };
    return (
        <>
            <Head>
                <title>El Mesquitito Grill | Contact Us | Authentic Mexican Restaurant</title>
                <meta name="description" content="Contact us, El Mesquitito Grill, about catering opportunities, private events, or any suggestions or critiques. We are happy to hear from you!" />
                <meta property="og:description" content="Contact us, El Mesquitito Grill, about catering opportunities, private events, or any suggestions or critiques. We are happy to hear from you!" />
                <meta property="og:url" content="http://www.elmesquititogrill.com/contact" />
            </Head>
            <form onSubmit={submitHandler}>
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
            {contacted ? <div className="alert alert-success mt-4">Your message has been sent. Expect a response within 3 business days. Thank you!</div> : null}
            </form>
        </>
    )
}
