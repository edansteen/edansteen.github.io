import Head from 'next/head';
import styles from '../styles/Main.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Main() {
    const router = useRouter();

    return(
        <>
            <Head>
                <title>Edan Steen</title>
                <meta name="description" content="Portfolio of various projects."/>
                <link rel="icon" href="logo.png"/>
            </Head>

            <Navbar/>
            
            <main className={styles.main}>
                <div className='indexSection'> join now!

                    <button onClick={() => router.push("/join")} className={styles.sectionButton}>
                        Apply
                    </button>
                </div>

                <div>project info here</div>
                
                <div>team info here</div>

                <Footer/>
            </main>
        </>
    );
}
