import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className={styles.footer} id="contact">
        <div className={styles.footerCols}>
          <div className={styles.contact}>
                <h4 id='contactTitle'>Contact</h4> 
                <span>
                  <a href="mailto:edansteen@outlook.com" rel="noreferrer">edansteen@outlook.com </a>
                </span>
          </div>
          <div>
              <h4>Follow</h4>
                <span>
                  <a href="https://github.com/Agroponics" target="_blank" rel="noreferrer">GitHub</a>
                </span>
                <span>
                  <a href="https://www.instagram.com/ubcagroponics/" target="_blank" rel="noreferrer">Instagram</a>
                </span>
                <span>
                  <a href='https://ca.linkedin.com/company/ubcagrobot' target='_blank' rel='noreferrer'>LinkedIn</a>
                </span>
          </div>
          <div>
                <h4>Quick Links</h4>
                <span onClick={() => router.push('/#about')}>
                  <a>About</a>
                </span>
                <span onClick={() => router.push('/#projects')}>
                  <a>Projects</a>
                </span>
          </div>
        </div>
      </footer>
      
    </>
  );
}

export default Footer;
