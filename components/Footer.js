import { faFacebook, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

export default function Footer() {
    const year = new Date().getFullYear();

    const router = useRouter();
    let disappearingStyle
    let getInTouchSolo

    if (router.pathname === "/") {
        disappearingStyle = {
            display: router.pathname === "/" ? 'none' : 'block',
        }
        getInTouchSolo = {
            gridColumnStart: '2'
        }
    }

    return (
        <>
            <footer>
                <div className="footerCol" style={disappearingStyle}>
                    <p className="footerColTitle">LOCATION</p>
                    <a href="http://maps.apple.com/?q=el+mesquitito+grill+costa+mesa" target="_blank" rel="noreferrer">
                        <p>2590 NEWPORT BLVD</p>
                        <p>SUITE D</p>
                        <p>COSTA MESA, CA 92627</p>
                    </a>
                </div>
                <div className="footerCol" style={getInTouchSolo}>
                    <p className="footerColTitle">GET IN TOUCH</p>
                    <a href="tel:9496452226">
                        <p>(949) 645-2226</p>
                    </a>
                    <a href="mailto:elmesquititogrill@gmail.com">
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
                <div className="footerCol" style={disappearingStyle}>
                    <p className="footerColTitle">HOURS</p>
                    <p>MON-SAT: 9 AM - 8 PM</p>
                    <p>SUN: 9 AM - 5 PM</p>
                </div>
            </footer>
            <div className="copyright">
                &copy; Copyright {year} El Mesquitito Grill
            </div>
        </>
    )
}
