import { faFacebook, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomepageInfo() {
    return (
        <div className='homepageInfo'>
            <div className="infoCol">
                <p className="infoColTitle">LOCATION</p>
                <a href="http://maps.apple.com/?q=el+mesquitito+grill+costa+mesa" target="_blank" rel="noreferrer">
                    <p>2590 NEWPORT BLVD</p>
                    <p>SUITE D</p>
                    <p>COSTA MESA, CA 92627</p>
                </a>
            </div>
            <div className="infoCol">
                <p className="infoColTitle">GET IN TOUCH</p>
                <a href="tel:9496452226" className="infoContact">
                    <p>(949) 645-2226</p>
                </a>
                <a href="mailto:elmesquititogrill@gmail.com" className="infoContact">
                    <p>elmesquititogrill@gmail.com</p>
                </a>
                <div className='footerSocialIconContainer'>
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
            <div className="infoCol">
                <p className="infoColTitle">HOURS</p>
                <div className="infoHours">
                    <p>MON-SAT: 9 AM - 8 PM</p>
                    <p>SUN: 9 AM - 5 PM</p>
                </div>
            </div>
        </div>
    )
}
