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
import portrait from "../images/shaq.jpeg";
import ExperienceCard from '@/components/ExperienceCard';

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
              Hi! My name is Edan, and I am currently studying Electrical Engineering at UBC. This portfolio showcases some of the projects I've worked on over the years. Feel free to contact me if you have questions!
            </p>
            <button onClick={() => router.push("#contact")} className={styles.sectionButton}>
              Contact
            </button>
          </div>
          <div className={styles.infoIMG}>
            <Image src={portrait} alt='Picture of the prince'/>
            <span>Picture of the prince</span>
          </div>
        </section>

        <section className={styles.experience} id='experience'>
          <h1>Experience</h1>

          <ExperienceCard
            title="Captain"
            company="UBC Biological Internet of Things"
            dates="Aug 2025 - Present"
            point1="Did this"
            point2="Lead the team to success"
            point3=""
          />

          <ExperienceCard
            title="Instrumentation Lead"
            company="UBC Biological Internet of Things"
            dates="Jan 2025 - Present"
            point1="Did this"
            point2="Lead the team to success"
            point3=""
          />

          <ExperienceCard
            title="Automation Member & Web Developer"
            company="UBC Agroponics"
            dates="Sep 2023 - Present"
            point1="Did this"
            point2="Lead the team to success"
            point3=""
          />

          <ExperienceCard
            title="Instrumentation Engineering Volunteer"
            company="Tydra Laboratories"
            dates="May 2025 - Aug 2025"
            point1="Did this"
            point2="Did that"
            point3=""
          />
        </section>

        <section className={styles.currentProjects} id='projects'>
          <h1>Highlighted Projects</h1>

          <div className={styles.projectGroup}>
            <h2>Electronics & Firmware</h2>
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