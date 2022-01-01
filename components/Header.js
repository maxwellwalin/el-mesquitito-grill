import { faInstagram, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <header>
            <div className='socialIconContainer'>
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
                    <img src='./images/logo-square.jpg' className="headerLogo" alt='el mesquitito grill logo with authentic mexican grill phrase and black tree imagery' />
                </a>
            </div>
            <nav className='headerNav'>
                <a href="/order" className='headerNavLink' id='orderNowLink'>
                    ORDER ONLINE
                </a>
                <a href="tel:9496452226" className='headerNavLink'>
                    CALL
                </a>
                <a href="https://www.google.com/maps/dir//el+mesquitito/@33.6624331,-117.9321591,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dcdf2e242ab239:0xf8ace2aa554bf426!2m2!1d-117.8971397!2d33.6623666" target="_blank" rel="noreferrer" className='headerNavLink'>
                    DIRECTIONS
                </a>
            </nav>
        </header>
    )
}