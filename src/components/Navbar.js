import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

import Logo from '../images/shaq.jpeg';

function Navbar(props) {
  const router = useRouter();
  const [userScrolled,setNavbar] = useState(false);
  const [menuActive,toggleNavMenu] = useState(false);

  // This will look at the distance the user has scrolled to determing the 
  const changeNavBackground = () => {    
    if (window.scrollY >= 1) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  const openLinks = () => toggleNavMenu(true);
  const closeLinks = () => toggleNavMenu(false);

  
    /*
    * This is used to trigger the add a shadow under the navbar after it scrolls down a certain distance
    */
    useEffect(()=>{
      window.addEventListener('scroll',changeNavBackground);
      
      return () => {
        window.removeEventListener('scroll', changeNavBackground);
      };
    }, []);

  return (
    <>
      <nav className={(userScrolled || props.setActive) ? (styles.active) : styles.nav}>
        <a className={styles.navIcon} onClick={() => router.push('/#')}>
          Edan Steen - Portfolio
        </a>
        <div className={menuActive ? (styles.mobileMenu) : styles.linksContainer} onClick={menuActive ? (closeLinks) : null}>
            <span onClick={() => router.push('/')}>
              Home
            </span>
            <span onClick={() => router.push('/#experience')}>
              Experience
            </span>
            <span onClick={() => router.push('/#about')}>
              About
            </span>
            <span onClick={() => router.push('/#projects')}>
              Projects
            </span>
            <span onClick={() => router.push('#contact')}>
              Contact
            </span>
        </div>
        <div className={styles.navButton} onClick={menuActive ? (closeLinks) : openLinks}>
          <svg id='menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#9e0000">
            {
              menuActive ? (<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>) :
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            }
          </svg>
        </div>
      </nav>
      {menuActive ? (<div className={styles.coverBackground} onClick={closeLinks}/>) : null}
    </> 
  );
}

export default Navbar;