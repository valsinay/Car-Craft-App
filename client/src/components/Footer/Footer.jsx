import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss'

function Footer() {
    return (
     
            <footer className={styles.footer} >
                <div className={styles.icons}>
                    <li><a className={styles.facebook} href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a  className={styles.instagram} href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a className={styles.twitter} href="https://www.twitter.com/"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                </div>
                <div className={styles.copyright}>
                    ©2021 Car Craft
                  </div>
            </footer>
       
    )
}

export default Footer;
