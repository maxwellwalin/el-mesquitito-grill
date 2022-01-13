import { faInstagram, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router"
import Link from 'next/link'
import { useState } from 'react';
import * as ga from '../lib/ga'

export default function Header() {
    const route = useRouter().pathname;

    const [responsiveClass, setResponsiveClass] = useState(null)

    function openResponsiveNav() {
        if (responsiveClass === null) {
            setResponsiveClass('responsive')
        } else {
            setResponsiveClass(null)
        }
    }

    

    return (
        <header>
            <div className="headerLogo">
                <a href="/">
                    <img src='./images/logo-rectangle-bq.jpg' alt='el mesquitito grill logo with authentic mexican grill phrase and black tree imagery' />
                </a>
            </div>
            <nav className={responsiveClass}>
                <FontAwesomeIcon icon={faBars} className='hamburgerStack' onClick={openResponsiveNav}></FontAwesomeIcon>
                <a href="/order" id="orderNowLink">
                    ORDER ONLINE
                </a>
                <a href="tel:9496452226" id="callLink">
                    CALL
                </a>
                <a href="http://maps.apple.com/?q=el+mesquitito+grill+costa+mesa" target="_blank" rel="noreferrer" id="directionsLink">
                    DIRECTIONS
                </a>
                <a href="/images/menu.pdf" style={{
                    textDecoration: route === '/menu' ? 'underline' : "",
                    textDecorationColor: route === '/menu' ? '#d80000' : "",
                }} target="_blank" rel='noreferrer' id="menuLink">MENU</a>
                <Link href="/contact" passHref shallow>
                    <a style={{
                        textDecoration: route === '/contact' ? 'underline' : "",
                        textDecorationColor: route === '/contact' ? '#d80000' : "",
                    }} id='contactLink'>CONTACT</a>
                </Link>
                <Link href="/faq" passHref shallow>
                    <a style={{
                        textDecoration: route === '/faq' ? 'underline' : "",
                        textDecorationColor: route === '/faq' ? '#d80000' : "",
                    }} id="faqLink">FAQ</a>
                </Link>
            </nav>
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
        </header >
    )
}