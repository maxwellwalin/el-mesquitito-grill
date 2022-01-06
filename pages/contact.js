export default function Contact() {
    return (
        <form>
            <h2>Get In Touch</h2>
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
    )
}
