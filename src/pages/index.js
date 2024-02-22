import Head from 'next/head';
import styles from '../styles/Main.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/next.svg';
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
        <div>
          <button onClick={() => router.push('/projects')}>My Projects</button>
        </div>
      </main>
      <Footer/>
    </>
  );
}
