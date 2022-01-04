export default function Contact() {
    return (
        <form>
            <input name="name" type="text" class="feedback-input" placeholder="Name" required />
            <input name="email" type="email" class="feedback-input" placeholder="Email" required />
            <select name="category" type="text" class="feedback-input" required>
                <option value="" default>Choose a category...</option>
                <option>Catering</option>
                <option>Reservation</option>
                <option>Other</option>
            </select>
            <textarea name="text" class="feedback-input" placeholder="Message" required></textarea>
            <input type="submit" value="SUBMIT" />
        </form>
    )
}
