import { useRouter } from "next/router"

export default function Nav() {
    const route = useRouter().pathname;

    return (
        <div className="navContainer">
            <a href="/images/menu.pdf" style={{
                textDecoration: route === '/menu' ? 'underline' : "",
                textDecorationColor: route === '/menu' ? '#d80000' : "",
            }}>MENU</a>
            <a href="/contact" style={{
                textDecoration: route === '/contact' ? 'underline' : "",
                textDecorationColor: route === '/contact' ? '#d80000' : "",
            }}>CONTACT</a>
            <a href="/faq" style={{
                textDecoration: route === '/faq' ? 'underline' : "",
                textDecorationColor: route === '/faq' ? '#d80000' : "",
            }}>FAQ</a>
        </div>
    )
}
