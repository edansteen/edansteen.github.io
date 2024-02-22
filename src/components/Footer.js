import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className={styles.footer} id="footer">
        <div>
            <h4>Quick Links</h4>
            <span onClick={() => router.push('/projects')}>
              <a>Projects</a>
            </span>
        </div>
        <div className={styles.contact} id="contact">
            <h4 id='contactTitle'>Contact Me</h4>
            <span>
                778-895-1717
            </span>
            <span>
              <a href="mailto:edansteen@gmail.com" rel="noreferrer">edansteen@gmail.com</a>
            </span>
        </div>
      </footer>
      <span className={styles.copyright}>©2024 Edan Steen</span>
    </>
  );
}

export default Footer;
