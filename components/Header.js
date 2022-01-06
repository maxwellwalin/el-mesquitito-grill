import { faInstagram, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router"

export default function Header() {
    const route = useRouter().pathname;
    return (
        <header>
            <div>
                <a href="/">
                    <img src='./images/logo-rectangle-bq.jpg' className="headerLogo" alt='el mesquitito grill logo with authentic mexican grill phrase and black tree imagery' />
                </a>
            </div>
            <nav>
                <a href="/order" id="orderNowLink">
                    ORDER ONLINE
                </a>
                <a href="tel:9496452226">
                    CALL
                </a>
                <a href="http://maps.apple.com/?q=el+mesquitito+grill+costa+mesa" target="_blank" rel="noreferrer">
                    DIRECTIONS
                </a>
                <a href="/menu" style={{
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
            </nav>
            <div className='headerIconContainer'>
                <a href="https://www.instagram.com/elmesquititogrill/?hl=en" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='headerSocialIcon headerInstagram'></FontAwesomeIcon>
                </a>
                <a href="https://www.facebook.com/El-Mesquitito-Grill-114394127084816/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='headerSocialIcon headerFacebook'></FontAwesomeIcon>
                </a>
                <a href="https://www.yelp.com/biz/el-mesquitito-grill-costa-mesa" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYelp} className='headerSocialIcon headerYelp'></FontAwesomeIcon>
                </a>
            </div>
        </header>
    )
}