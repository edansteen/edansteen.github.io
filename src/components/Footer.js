import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';
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
              <a>
                <Image src={GitHubIcon} height={24} width={24} />
                GitHub
              </a>
              <a>
                <Image src={LinkedInIcon} height={24} width={24}/>
                LinkedIn
              </a>
              <a>
                <Image src={EmailIcon} height={24} width={24}/>
                Email
              </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
