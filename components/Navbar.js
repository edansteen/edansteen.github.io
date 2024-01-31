import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const router = useRouter();
  const [navbar,setNavbar] = useState(false);
  //const [contact,flashContact] = useState(false);

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

    const flashTitle = () => {
      let delay = 400;    
      router.push('#contactTitle');
      setTimeout(() => {
        let x = document.getElementById("contact");
        let ogColor = x.style.backgroundColor;
        x.style.backgroundColor = "yellow";
        setTimeout(() => {
          x.style.backgroundColor = ogColor;
        }, delay);
      }, delay);  
    }     

  return (
    <>
      <nav className={navbar ? (styles.active) : styles.nav}>
        <a className={styles.navIcon} onClick={() => router.push('/')}>
          <h2>InvasivePlantsPW</h2>
        </a>
        <div className={styles.linksContainer}>
            <span onClick={() => router.push('/')}>
              Home
            </span>
            <span onClick={() => router.push('/invasivePlants')}>
              Invasive Species
            </span>
            <span onClick={() => router.push('/about')}>
              About Us
            </span>
            <span onClick={flashTitle}>
              Contact
            </span>
            <span className={styles.volunteerButton} onClick={() => router.push('/volunteer')}>
              Volunteer
            </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
