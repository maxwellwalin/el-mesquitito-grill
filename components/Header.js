import { faInstagram, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <header>
            <div className='headerSocialIconContainer'>
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
            <div>
                <a href="/">
                    <img src='./images/logo-rectangle-bq.jpg' className="headerLogo" alt='el mesquitito grill logo with authentic mexican grill phrase and black tree imagery' />
                </a>
            </div>
            <nav className='headerNav'>
                <a href="/order" className='headerNavLink' id='orderNowLink'>
                    ORDER ONLINE
                </a>
                <a href="tel:9496452226" className='headerNavLink'>
                    CALL
                </a>
                <a href="http://maps.apple.com/?q=el+mesquitito+grill+costa+mesa" target="_blank" rel="noreferrer" className='headerNavLink'>
                    DIRECTIONS
                </a>
            </nav>
        </header>
    )
}