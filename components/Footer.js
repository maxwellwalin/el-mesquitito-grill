import { faFacebook, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer>
            <div className="footerCol">
                <p className="footerColTitle">LOCATION</p>
                <a href="https://www.google.com/maps/dir//el+mesquitito/@33.6624331,-117.9321591,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dcdf2e242ab239:0xf8ace2aa554bf426!2m2!1d-117.8971397!2d33.6623666" target="_blank" rel="noreferrer">
                    <p>2590 NEWPORT BLVD</p>
                    <p>SUITE D</p>
                    <p>COSTA MESA, CA 92627</p>
                </a>
            </div>
            <div className="footerCol">
                <p className="footerColTitle">GET IN TOUCH</p>
                <a href="tel:9496452226">
                    <p>PHONE - (949) 645-2226</p>
                </a>
                <a href="mailto:elmesquititogrill@gmail.com">
                    <p>EMAIL - elmesquititogrill@gmail.com</p>
                </a>
                <div className='socialIconContainer'>
                    <a href="https://www.instagram.com/elmesquititogrill/?hl=en" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='footerSocialIcon footerInstagram'></FontAwesomeIcon>
                    </a>
                    <a href="https://www.facebook.com/El-Mesquitito-Grill-114394127084816/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className='footerSocialIcon footerFacebook'></FontAwesomeIcon>
                    </a>
                    <a href="https://www.yelp.com/biz/el-mesquitito-grill-costa-mesa" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYelp} className='footerSocialIcon footerYelp'></FontAwesomeIcon>
                    </a>
                </div>
            </div>
            <div className="footerCol">
                <p className="footerColTitle">HOURS</p>
                <p>MON-SAT: 9 AM - 8 PM</p>
                <p>SUN: 9 AM - 5 PM</p>
            </div>
        </footer>
    )
}
