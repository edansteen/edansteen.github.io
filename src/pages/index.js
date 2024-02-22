import Head from 'next/head';
import styles from '../styles/Main.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/next.svg';
import Image from 'next/image';
import Droidpocalypse from '../images/droidpocalypse_demo.png';
import JavaSnake from '../images/shaq.jpeg';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Edan Steen</title>
        <meta name="description" content="Edan Steen"/>
        <link rel="icon" href={logo}/>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className='landing'>
          <h1>Hi! My name is Edan Steen and I like to make things.</h1>
          <p>Take a look!</p>
        </section>
        <section className={styles.projects}>
          <h1>My Work</h1>
          <div className={styles.projectCards}>
              <div onClick={() => router.push('/')}>
                <Image 
                  src={Droidpocalypse}
                  alt='Droidpocalypse gameplay'
                />
                <div>
                  <h4>Droidpocalypse</h4>
                  <p>Heavily based off of Vampire Survivors by poncle, this game was made in Godot and is free to play online.</p>
                  <a href='https://udonoodles.itch.io/droidpocalypse' target='_blank'>Play it here</a>
                </div>
              </div>
              
              <div onClick={() => router.push('/')}>
                <div>
                  <h4>Snake in Java</h4>
                  <p>The classic computer game "snake" made entirely in Java.</p>
                  <a href='https://github.com/EdanSteen/snake' target='_blank'>View it on Github</a>
                </div>
                <Image 
                  src={JavaSnake}
                  width={320}
                  height={280}
                  alt='Photo of gameplay'
                />
              </div>
          </div>
        </section>

        <section className={styles.about}>
          <h1>About Me</h1>

          <div className={styles.education}>
            <h2>Bachelor's of Applied Science</h2>
            <span>University of British Columbia - Vancouver, BC</span>
            <span>September 2023 - Present</span>
          </div>

        </section>

        <section className={styles.contact}>
          <h1>Get in touch</h1>

        </section>
      </main>
      <Footer/>
    </>
  );
}
