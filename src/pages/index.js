import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

//Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Get data for the posts
import { getSortedPostsData } from '../utils/posts.js';

// Images
import OurTeam from "../images/shaq.jpeg";

export default function Home({allPostsData}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio - Edan Steen</title>
        <meta name='title' content='Edan Steen Portfolio' />
        <meta name="description" content="My name is Edan. I'm currently studying Electrical Engineering at UBC. This site is a compilation of the various projects I've worked on throughout the years."
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="https://edansteen.github.io/favicon.ico"/>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.landing}>
          <div>
            <span className={styles.landingTitle}>Project Portfolio</span>
            <div>
              <h1>Edan Steen</h1>
              <a onClick={() => router.push('/#projects')}>
                <button className={styles.sectionButton}>Check out my projects</button>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.info} id='about'>
          <div className={styles.infoText}>
            <h1>ABOUT ME</h1>
            <p>
              Hi! My name is Edan, and I am currently studying Electrical Engineering at UBC. The fact that you found this website is pretty wild on its own, but feel free to contact me if you have questions!
            </p>
            <button onClick={() => router.push("#contact")} className={styles.sectionButton}>
              Speak to the prince
            </button>
          </div>
          <div className={styles.infoIMG}>
            <Image src={OurTeam} alt='Some of our teammates'/>
            <span>Some of our teammates</span>
          </div>
        </section>

        <section className={styles.currentProjects} id='projects'>
          <h1>Highlighted Projects</h1>

          <div className={styles.projectGroup}>
            <h2>Embedded Systems & Firmware</h2>
            <ul className={styles.subteamArticles}>
                {allPostsData.map(({ id, cover_image, title, topic }) => (
                (topic === "embedded") ?
                <li className={styles.suggestedArticle} key={id}>
                    <Link href={`/projects/${id}`}>
                        <img src={`/projectIMGs/${cover_image}`}/>
                        <br/>
                        {title}
                    </Link>
                </li> : null
                ))}
            </ul>                        
          </div>

          <div className={styles.projectGroup}>
            <h2>Software</h2>
            <ul className={styles.subteamArticles}>
                {allPostsData.map(({ id, cover_image, title, topic }) => (
                (topic === "software") ?
                <li className={styles.suggestedArticle} key={id}>
                    <Link href={`/projects/${id}`}>
                        <img src={`/projectIMGs/${cover_image}`}/>
                        <br/>
                        {title}
                    </Link>
                </li> : null
                ))}
            </ul>                        
          </div>

          <div className={styles.projectGroup}>
            <h2>Miscellaneous</h2>
            <ul className={styles.subteamArticles}>
                {allPostsData.map(({ id, cover_image, title, topic }) => (
                (topic === "misc") ?
                <li className={styles.suggestedArticle} key={id}>
                    <Link href={`/projects/${id}`}>
                        <img src={`/projectIMGs/${cover_image}`}/>
                        <br/>
                        {title}
                    </Link>
                </li> : null
                ))}
            </ul>                        
          </div>

        </section>

        <section className={styles.agrobot}>
          <h1>See more on my GitHub</h1>
          <Link href='https://github.com/edansteen' target='_blank' className={[styles.sectionButton, styles.opensLink].join(" ")}>
            Check it out
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f5f5f5"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
      props: {
          allPostsData,
      },
  };
}