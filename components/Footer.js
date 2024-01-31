import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

function Footer() {
  const router = useRouter();

  return (
    <>
        <footer className={styles.footer} id="footer">
            University of British Columbia 2360 E Mall, Vancouver, BC V6T 1Z3
        </footer>
    </>
  );
}

export default Footer;