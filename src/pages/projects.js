import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Main.module.css";
import logo from '../images/next.svg';

export function Projects() {
    const openWindow = () => {

    };

    return (
        <>
            <Head>
                <title>Projects || Edan Steen</title>
                <meta name="description" content="A collection of my personal projects"/>
                <link rel="icon" href={logo}/>
            </Head>
            <Navbar/>
            <main className={styles.projects}>
                <h2>Projects</h2>
                <section>
                    <h3>Software Projects</h3>
                    <div className={styles.projectCards}>
                        <div onClick={openWindow()}>
                            <img src=""/>
                            <span>Droidpocalypse</span>
                        </div>
                        <div onClick={openWindow()}>
                            <img src="" />
                            <span>Snake in Java</span>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
                <section>
                    <h3>Physical Projects</h3>
                    <div>
                        <img src="" />
                        <span>Self-Sustaining Arugula</span>
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    );
}

export default Projects;