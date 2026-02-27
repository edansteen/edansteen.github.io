import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

//CSS styles
import styles from '../styles/Main.module.css';
import animatedStyles from '../styles/Animations.module.css';

//Custom components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Get data for the posts
import { getSortedPostsData } from '../utils/posts.js';

// Images
import portrait from "../images/me.jpg";
import ExperienceCard from '@/components/ExperienceCard';
import biot from "../images/company-logos/biotlogo.png";
import agroponics from "../images/company-logos/agroponics.png";
import tydralabs from "../images/company-logos/tydralabs.png";
import GitHubIcon from "../images/socialmedia-icons/github-mark-white.svg";
import LinkedInIcon from "../images/socialmedia-icons/linkedin_icon.png";


export default function Home({allPostsData}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio - Edan Steen</title>
        <meta name="description" content="Project portfolio and personal website of Edan Steen"/>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.landing}>
          <div>
            <span className={styles.landingTitle}>Project Portfolio</span>
            <div>
              <h1>Edan Steen</h1>
            </div>
          </div>
        </section>

        <section className={styles.info} id='about'>
          <div className={styles.infoText}>
            <h1>ABOUT ME</h1>
            <p>
              Hi! My name is Edan (pronounced "ee-dun"), and I am currently studying electrical engineering at the University of British Columbia (UBC). This portfolio showcases my experience and some the projects I've worked on over the years. Feel free to reach out through the links below!
            </p>
            <div>
              <a href='https://github.com/edansteen' target='_blank' className={animatedStyles.gradientText}>
                <Image src={GitHubIcon} height={24} width={24} />
                <span>GitHub</span>
              </a>
              <a href='https://ca.linkedin.com/in/edan-steen-9b675b2aa' target='_blank' className={animatedStyles.gradientText}>
                <Image src={LinkedInIcon} height={24} width={24}/>
                <span>LinkedIn</span>
              </a>
          </div>
          </div>
          <div className={styles.infoIMG}>
            <Image src={portrait} alt='Me in the wild'/>
          </div>
        </section>

        <section className={styles.experience} id='experience'>
          <h1>Experience</h1>

          <div> 
            <ExperienceCard
              title="Captain"
              company="UBC Biological Internet of Things"
              companylogo={biot}
              companyurl="https://ubcbiot.com"
              dates="Aug 2025 - Present"
              point1="Managing and leading a team of 39 people, coordinating meetings whilst ensuring all sub-teams have sufficient finances, resources and support needed to meet project goals and competition deadlines."
              point2="Reached 6,000+ people through presentations, booths, and social media efforts, significantly increasing visibility."
              point3="Prepared budgets and administrative technical documents with Microsoft Excel and Google Suite."
              point4="Spearheaded ChemE Cube project to build a miniature direct air capture plant within a cubic foot for 2026 competition, positioning the team to receive international recognition and industry networking opportunities."
            />

            <ExperienceCard
              title="Instrumentation Lead"
              company="UBC Biological Internet of Things"
              companylogo={biot}
              companyurl="https://ubcbiot.com"
              dates="Jan 2025 - Jan 2026"
              point1="Led a team of 8 people in the development of IoT devices for monitoring and automating brewing processes."
              point2="Organized and led a $5,000 IoT fermenter project featuring I2C pH, DO2, temperature, and pressure sensors, ESP32 MCUs, PCB with Altium Designer, MQTT protocol for IoT, Python scripting, and a Linux server."
              point3="Used Microsoft Office Suite (Excel, PowerPoint, etc.) and GitHub for project planning and budgeting."
              point4="Programmed ESP32 microcontrollers in C++ to collect data from pH, temperature, and dissolved oxygen sensors, and to wirelessly transmit the data over Wi-Fi via MQTT to an external Linux server for data collection."
            />

            <ExperienceCard
              title="Automation Member & Web Developer"
              company="UBC Agroponics"
              companylogo={agroponics}
              companyurl="https://ubcagroponics.com"
              dates="Sep 2023 - Jan 2026"
              point1="Programmed ESP32 microcontrollers in C to collect data from pH, temperature, turbidity, electrical conductivity, water flow, and other I2C, SPI, and UART based sensors for monitoring plants in a hydroponic farm."
              point2="Compiled budget using Microsoft Excel to optimize financial funding for sensor purchases."
              point3="Designed and built the team’s website (https://ubcagroponics.com) from scratch using the Next.js JavaScript framework, communicating with other members to ensure the site met the team's needs."
            />

            <ExperienceCard
              title="Instrumentation Engineering Volunteer"
              company="Tydra Laboratories"
              companylogo={tydralabs}
              companyurl="https://tydralabs.com"
              dates="May 2025 - Aug 2025"
              point1="Worked with a team of 6 to build a 60L yeast bioreactor for chitin production."
              point2="Designed schematic and computer architecture for a 60L yeast bioreactor, which includes I2C sensors, peristaltic pumps using stepper motors, and a mini PC running a custom Python script."
              point3="Designed and implemented automated pH regulation system using peristaltic pumps and stepper motor drivers."
            />
          </div>
        </section>

        <section className={styles.currentProjects} id='projects'>
          <h1>Highlighted Projects</h1>

          <div className={styles.projectGroup}>
            <h2>Electronics & Firmware</h2>
            <ul className={styles.projectArticles}>
                {allPostsData.map(({ id, cover_image, title, topic }) => (
                (topic === "embedded") ?
                <li className={styles.suggestedArticle} key={id}>
                    <Link href={`/projects/${id}`} className={animatedStyles.gradientText}>
                        <Image height={128} width={128} src={`/projectIMGs/${cover_image}`}/>
                        <br/>
                        {title}
                    </Link>
                </li> : null
                ))}
            </ul>                        
          </div>

          <div className={styles.projectGroup}>
            <h2>Software</h2>
            <ul className={styles.projectArticles}>
                {allPostsData.map(({ id, cover_image, title, topic }) => (
                (topic === "software") ?
                <li className={styles.suggestedArticle} key={id}>
                    <Link href={`/projects/${id}`}  className={animatedStyles.gradientText}>
                        <Image height={128} width={128} src={`/projectIMGs/${cover_image}`}/>
                        <br/>
                        {title}
                    </Link>
                </li> : null
                ))}
            </ul>                        
          </div>

          <div className={styles.projectGroup}>
            <h2>Current Projects (In Progress)</h2>
            <ul className={styles.projectArticles}>
                {allPostsData.map(({ id, cover_image, title, topic }) => (
                (topic === "current") ?
                <li className={styles.suggestedArticle} key={id}>
                    <Link href={`/projects/${id}`} className={animatedStyles.gradientText}>
                        <Image height={128} width={128} src={`/projectIMGs/${cover_image}`}/>
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