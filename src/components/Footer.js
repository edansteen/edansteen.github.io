import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';
import animatedStyles from '../styles/Animations.module.css';
import Image from 'next/image';

//Social Media Icons
import GitHubIcon from "../images/socialmedia-icons/github-mark-white.svg";
import LinkedInIcon from "../images/socialmedia-icons/linkedin_icon.png";
import EmailIcon from "../images/socialmedia-icons/email.png"; 


function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer} id="contact">
      <div>
            <h2>Get in Touch!</h2>
            <div>
              <a href='https://github.com/edansteen' target='_blank' className={animatedStyles.gradientText}>
                <Image src={GitHubIcon} height={24} width={24} />
                GitHub
              </a>
              <a href='https://ca.linkedin.com/in/edan-steen-9b675b2aa' target='_blank' className={animatedStyles.gradientText}>
                <Image src={LinkedInIcon} height={24} width={24}/>
                LinkedIn
              </a>
              <a href='mailto:me@edansteen.com' className={animatedStyles.gradientText}>
                <Image src={EmailIcon} height={24} width={24}/>
                Email
              </a>
            </div>
        </div>
        <span>Last updated: February 5, 2026</span>
    </footer>
  );
}

export default Footer;
