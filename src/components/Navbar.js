import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const router = useRouter();
  const [navbar,setNavbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

    useEffect(()=>{
      window.addEventListener('scroll',changeNavBackground);

      return () => {
        window.removeEventListener('scroll', changeNavBackground)
      };
    }, []);    

  return (
    <>
      <nav className={navbar ? (styles.active) : styles.nav}>
        <a className={styles.navIcon} onClick={() => router.push('/')}>
          <div className={styles.navlogo}></div>
          <h2>Edan Steen</h2>
        </a>
        <div className={styles.linksContainer}>
            <span onClick={() => router.push('/')}>
              Projects
            </span>
            <span onClick={() => router.push('/')}>
              About
            </span>
            <span onClick={() => router.push('/')}>
              Contact
            </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
